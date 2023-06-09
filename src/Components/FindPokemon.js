import pokemon from "../images/pokemon.jpg";
import { PokemonCharacters } from "./CharacterList";
import Header from "./Header";
import WinDisplay from "./WinDisplay";

const FindPokemon = ({ Game, score, sizeHeader }) => {
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
        <WinDisplay score={score} page={"pokemon"} />
        <div id="pokemonBoard">
          <img
            id="pokemonImg"
            src={pokemon}
            alt=""
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
