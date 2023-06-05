import horror from "../images/horror.webp";
import CharacterList, { HorrorCharacters } from "./CharacterList";
import Header from "./Header";
import WinDisplay from "./WinDisplay";

const FindHorror = ({ Game, score, sizeHeader }) => {
  const NewGame = Game;
  NewGame.changePage("horror");
  let headerWidth = sizeHeader(1060);
  return (
    <>
      <Header style={{ width: headerWidth }} />
      <div id="horrorMain">
        <HorrorCharacters getCharacterPosition={NewGame.getCharacterPosition} />
        <WinDisplay score={score} page={"horror"} />
        <div id="horrorBoard">
          <img
            id="horrorImg"
            src={horror}
            onClick={(e) => {
              NewGame.getPixel(e);
              NewGame.getOffset("#horrorImg");
            }}
          ></img>
          <div id="viewBox"></div>
        </div>
      </div>
    </>
  );
};

export default FindHorror;
