import zelda from "../images/zelda.png";
import { ZeldaCharacters } from "./CharacterList";
import Header from "./Header";
import WinDisplay from "./WinDisplay";

const FindZelda = ({ Game, score, sizeHeader }) => {
  const NewGame = Game;
  NewGame.changePage("zelda");
  let headerWidth = sizeHeader(1500);
  return (
    <>
      <Header style={{ width: headerWidth }} />
      <div id="zeldaMain">
        <ZeldaCharacters getCharacterPosition={NewGame.getCharacterPosition} />
        <WinDisplay score={score} page={"zelda"} />
        <div id="zeldaBoard">
          <img
            id="zeldaImg"
            src={zelda}
            onClick={(e) => {
              NewGame.getPixel(e);
              NewGame.getOffset("#zeldaImg");
            }}
          ></img>
          <div id="viewBox"></div>
        </div>
      </div>
    </>
  );
};

export default FindZelda;
