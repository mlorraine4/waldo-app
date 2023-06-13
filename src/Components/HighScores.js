import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import backArrow from "../images/arrow-left.png";

const images = require.context("../images/playerIcons", true);
const imageList = images.keys().map((image) => images(image));

const HighScores = () => {
  const [scores, setScores] = useState([]);
  let initialized = false;

  // Gets player high scores from firestore database.
  async function getScores() {
    let scores = [];
    const querySnapshot = await getDocs(collection(db, "PlayerScore"));
    querySnapshot.forEach((doc) => {
      scores.push({ ...doc.data(), id: doc.id });
    });
    sortScores(scores);
  }

  // Sorts player scores by shortest to longest time.
  function sortScores(scores) {
    scores.sort((a, b) => parseFloat(a.score.ms) - parseFloat(b.score.ms));
    setScores(scores);
  }

  useEffect(() => {
    if (!initialized) {
      initialized = true;
      getScores();
    }
    console.log(initialized);
  }, []);

  return (
    <div id="highScoresMain">
      <div id="highScoresHeader">
        <div id="highScoresTitle">HIGH SCORES</div>
        <Link to="/waldo-app">
          <img id="back" src={backArrow}></img>
        </Link>
      </div>
      <div className="boardScores">
        <div className="subHeader">GHIBLI</div>
        <>
          {scores.map((score) => {
            if (score.page === "ghibli") {
              return (
                <div className="playerScoreCard" key={score.id}>
                  <img src={imageList[score.icon]} className="playerIcon"></img>
                  <div className="playerName">{score.name}</div>
                  <div className="highScore">
                    {score.score.hour}:{score.score.minute}:{score.score.second}
                  </div>
                </div>
              );
            }
          })}
        </>
      </div>
      <div className="boardScores">
        <div className="subHeader">LEGEND OF ZELDA</div>
        <div>
          {scores.map((score) => {
            if (score.page === "zelda") {
              return (
                <div className="playerScoreCard" key={score.id}>
                  <img src={imageList[score.icon]} className="playerIcon"></img>
                  <div className="playerName">{score.name}</div>
                  <div className="highScore">
                    {score.score.hour}:{score.score.minute}:{score.score.second}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="boardScores">
        <div className="subHeader">POKEMON</div>
        <div>
          {scores.map((score) => {
            if (score.page === "pokemon") {
              return (
                <div className="playerScoreCard" key={score.id}>
                  <img src={imageList[score.icon]} className="playerIcon"></img>
                  <div className="playerName">{score.name}</div>
                  <div className="highScore">
                    {score.score.hour}:{score.score.minute}:{score.score.second}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="boardScores">
        <div className="subHeader">MASH UP</div>
        <div>
          {scores.map((score) => {
            if (score.page === "horror") {
              return (
                <div className="playerScoreCard" key={score.id}>
                  <img src={imageList[score.icon]} className="playerIcon"></img>
                  <div className="playerName">{score.name}</div>
                  <div className="highScore">
                    {score.score.hour}:{score.score.minute}:{score.score.second}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HighScores;
