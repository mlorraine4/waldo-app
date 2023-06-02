import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import FindGhibli from "./Components/FindGhibli";
import Home from "./Components/Home";
import FindZelda from "./Components/FindZelda";
import FindPokemon from "./Components/FindPokemon";
import FindHorror from "./Components/FindHorror";
import pinImg from "./images/location-pin.png";

// TODO: check timer!
// TODO: was able to fade character out even though I didn't correctly find it?

function App() {
  const [score, setScore] = useState({});
  const [win, setWin] = useState(false);

  // Where's waldo game controller.
  const Game = (() => {
    let start = Date.now();
    let end;
    let X;
    let Y;
    let page;
    let characters = [];

    // Sets current where's waldo page.
    const changePage = (newPage) => {
      page = newPage;
      getCharacters(page);
    };

    // Retrieves and saves board characters from firebase.
    const getCharacters = async (page) => {
      const querySnapshot = await getDocs(collection(db, page));
      querySnapshot.forEach((doc) => {
        if (
          characters.find((character) => character.name === doc.id) ===
          undefined
        ) {
          characters.push({ name: doc.id, found: false });
        }
      });
    };

    // Saves pixel coordinates of image click by user.
    const getPixel = (e) => {
      X = e.pageX;
      Y = e.pageY;
    };

    // Determines if image is offset on page and if so corrects clicked coordinates.
    const getOffset = (id) => {
      if (win === false) {
        let img = document.querySelector(id);
        let left = 0;
        let top = 0;
        if (img && img.offsetParent) {
          do {
            left += img.offsetLeft;
            top += img.offsetTop;
          } while ((img = img.offsetParent));
          X -= left;
          Y -= top;
          popUpViewBox(X, Y);
        }
      }
    };

    // Retrieves firebase document object of clicked character.
    const getCharacterPosition = async (e) => {
      if (win === false) {
        let character = e.target.id;
        const docRef = doc(db, page, character);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          isCharacterFound(docSnap.data(), docSnap.id);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    };

    // Compares clicked coordinates to character's position.
    const isCharacterFound = (data, id) => {
      let foundX;
      let foundY;

      if (data.leftX <= X && X <= data.rightX) {
        foundX = true;
      }
      if (data.leftY <= Y && Y <= data.rightY) {
        foundY = true;
      }
      if (foundX === true && foundY === true) {
        saveFind(id);
        updateDisplay(id);
        placeMarker();
        removeViewBox();
      }
    };

    // Saves correct click for character find.
    const saveFind = (name) => {
      const currentChar = characters.find(
        (character) => character.name === name
      );
      currentChar.found = true;
      checkForWin();
    };

    // Fades character image and adds strikethrough to name to show correct find.
    const updateDisplay = (id) => {
      document.getElementById(id).style.opacity = 0.5;
      document.getElementById(id).style.pointerEvents = "none";
      let charNames = document.querySelectorAll(".charName");
      charNames.forEach(
        function(node) {
          if (node.innerHTML === id) {
            node.classList.add("found");
          }
        }
      )
    };

    // Places a location pin on board after player correctly finds a character.
    const placeMarker = () => {
      let pin = document.createElement("img");
      pin.src = pinImg;
      pin.className = "locationPin";
      pin.style.position = "absolute";
      pin.style.left = (X-10).toString() + "px";
      pin.style.top = (Y).toString() + "px";
      let header = document.querySelector("#header");
      header.appendChild(pin);
    }

    // Checks character array to see if all have been found.
    const checkForWin = () => {
      let found = 0;
      for (let character of characters) {
        if (character.found === true) found++;
      }
      if (found === 6) {
        end = Date.now();
        let scoreMs = end - start;
        convertTime(scoreMs);
        setWin(true);
      }
    };

    return {
      getPixel,
      changePage,
      getCharacterPosition,
      getOffset,
    };
  })();

  // Converts player score to readable time.
  function convertTime(ms) {
    let hrs = ms / (60 * 60 * 1000);
    let mins = ms / (60 * 1000);
    let secs = ms / 1000;

    if (hrs < 1) {
      hrs = 0;
    } else {
      mins = (hrs - Math.floor(hrs)) * 60;
      hrs = Math.floor(hrs);
    }
    if (mins < 1) {
      mins = 0;
    } else {
      secs = (mins - Math.floor(mins)) * 60;
      mins = Math.floor(mins);
    }
    if (secs < 1) {
      secs = 0;
    } else {
      secs = Math.floor(secs);
    }

    hrs = hrs.toString();
    mins = mins.toString();
    secs = secs.toString();

    if (hrs.length === 1) {
      hrs = "0" + hrs;
    }
    if (mins.length === 1) {
      mins = "0" + mins;
    }
    if (secs.length === 1) {
      secs = "0" + secs;
    }

    let score = { hour: hrs, minute: mins, second: secs };
    setScore(score);
  }

  // Displays a view box where user clicks image.
  function popUpViewBox(X, Y) {
    X = X - 15;
    Y = Y - 15;
    let viewBox = document.querySelector("#viewBox");
    viewBox.style.top = Y.toString() + "px";
    viewBox.style.left = X.toString() + "px";
    viewBox.style.display = "block";
  }

  // Removes view box after finding correct character.
  function removeViewBox() {
    document.querySelector("#viewBox").style.display = "none";
  }

  // Resizes page header based on board image width.
  function sizeHeader(imgSize) {
    if (imgSize > window.innerWidth) {
      return imgSize + "px";
    } else return "100vw";
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Home />} />
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/ghibli"}
            element={
              <FindGhibli
                Game={Game}
                score={score}
                sizeHeader={sizeHeader}
                handleScore={setScore}
                handleWin={setWin}
              />
            }
          />
          <Route
            path={"/zelda"}
            element={
              <FindZelda
                Game={Game}
                score={score}
                sizeHeader={sizeHeader}
                handleScore={setScore}
                handleWin={setWin}
              />
            }
          />
          <Route
            path={"/pokemon"}
            element={
              <FindPokemon
                Game={Game}
                score={score}
                sizeHeader={sizeHeader}
                handleScore={setScore}
                handleWin={setWin}
              />
            }
          />
          <Route
            path={"/horror"}
            element={
              <FindHorror
                Game={Game}
                score={score}
                sizeHeader={sizeHeader}
                handleScore={setScore}
                handleWin={setWin}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
