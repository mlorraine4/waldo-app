import pokemon from "../images/pokemon.jpg";
import { PokemonCharacters } from "./CharacterList";
import Header from "./Header";
import WinDisplay from "./WinDisplay";

const FindPokemon = ({ Game, score, sizeHeader, handleScore, handleWin }) => {
  const NewGame = Game;
  NewGame.changePage("pokemon");
  let headerWidth = sizeHeader(800);
  return (
    <>
      <Header style={{ width: headerWidth }} />
      <div id="pokemonMain">
        <PokemonCharacters
          getCharacterPosition={NewGame.getCharacterPosition}
        />
        <WinDisplay
          score={score}
          page={"pokemon"}
          handleScore={handleScore}
          handleWin={handleWin}
        />
        <div id="pokemonBoard">
          <img
            id="pokemonImg"
            src={pokemon}
            onClick={(e) => {
              NewGame.getPixel(e);
              NewGame.getOffset("#pokemonImg");
            }}
          ></img>
          <div id="viewBox"></div>
        </div>
      </div>
    </>
  );
};

export default FindPokemon;
