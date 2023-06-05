import ghibli from "../images/ghibli.jpg";
import { GhibliCharacters } from "./CharacterList";
import Header from "./Header";
import WinDisplay from "./WinDisplay";

const FindGhibli = ({ Game, score, sizeHeader }) => {
  const newGame = Game;
  newGame.changePage("ghibli");
  let headerWidth = sizeHeader(1500);
  return (
    <div>
      <Header style={{ width: headerWidth }} />
      <div id="ghibliMain">
        <GhibliCharacters getCharacterPosition={newGame.getCharacterPosition} />
        <WinDisplay score={score} page={"ghibli"} />
        <div id="ghibliBoard">
          <img
            id="ghibliImg"
            src={ghibli}
            onClick={(e) => {
              newGame.getPixel(e);
              newGame.getOffset("#ghibliImg");
            }}
          ></img>
          <div id="viewBox"></div>
        </div>
      </div>
    </div>
  );
};

export default FindGhibli;
