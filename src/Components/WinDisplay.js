import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";
const images = require.context("../images/playerIcons", true);
const imageList = images.keys().map((image) => images(image));

const WinDisplay = ({ score, page }) => {
  const [sent, setSent] = useState(false);

  // Gets player's name to save with their score.
  const formSubmit = (e) => {
    e.preventDefault();
    let icon = Number(document.querySelector('input[name="icon"]:checked').id);
    saveScore(e.target["name"].value, icon, score);
  };

  // Saves player score after win to firebase and resets score/win prop.
  const saveScore = async (name, icon, score) => {
    const docRef = doc(collection(db, "PlayerScore"));
    await setDoc(docRef, {
      name: name,
      icon: icon,
      score: score,
      page: page,
    });
    setSent(true);
  };

  // Clears state of score, win on reload to play new game.
  const restart = () => {
    window.location.reload();
  };

  if (!sent && Object.keys(score).length !== 0) {
    return (
      <div id="winDisplay">
        <form onSubmit={formSubmit}>
          <div id="winTitle">Your Score</div>
          <div id="score">
            {score.hour}:{score.minute}:{score.second} s
          </div>
          <input
            id="name"
            required
            maxLength="12"
            placeholder="enter your name"
          ></input>
          <div className="iconsList">
            {imageList.map((image, index) => (
              <label>
                <input type="radio" name="icon" id={index}></input>
                <img key={index} src={image} className="playerIcon"></img>
              </label>
            ))}
          </div>
          <button type="submit" id="submit">
            save score
          </button>
          <button type="button" id="cancel" onClick={restart}>
            try again
          </button>
        </form>
      </div>
    );
  } else if (Object.keys(score).length === 0 && !sent) {
    return <></>;
  } else {
    return (
      <>
        <div id="winDisplay">
          <div>Your score has been submitted!</div>
        </div>
      </>
    );
  }
};

export default WinDisplay;
