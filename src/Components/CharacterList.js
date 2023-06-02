import malon from "../images/malon.webp";
import aryll from "../images/aryll.webp";
import fishman from "../images/fishman.webp";
import beetle from "../images/beetle.webp";
import saria from "../images/saria.webp";
import skullKid from "../images/skullKid.webp";
import dragonite from "../images/dragonite.png";
import ivysaur from "../images/ivysaur.png";
import lapras from "../images/lapras.png";
import scizor from "../images/sczor.png";
import shinx from "../images/shinx.png";
import staryu from "../images/staryu.png";
import yubaba from "../images/yubaba.webp";
import chihiro from "../images/chihiro.webp";
import theBaron from "../images/the-baron.png";
import turnipHead from "../images/turnipHead.png";
import howl from "../images/howl.png";
import totoro from "../images/totoro.webp";
import arnold from "../images/arnold.webp";
import noFace from "../images/no-face.webp";
import paleMan from "../images/PaleMan.webp";
import predator from "../images/predator.webp";
import witcher from "../images/witcher.avif";
import sonic from "../images/sonicwebp.webp";

const HorrorCharacters = ({ getCharacterPosition }) => {
  return (
    <div className="characterList">
      <div className="charName">Arnold</div>
      <img
        src={arnold}
        alt=""
        className="charImg"
        id="Arnold"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">No Face</div>
      <img
        src={noFace}
        alt=""
        className="charImg"
        id="No Face"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">The Pale Man</div>
      <img
        src={paleMan}
        alt=""
        className="charImg"
        id="The Pale Man"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Predator</div>
      <img
        src={predator}
        alt=""
        className="charImg"
        id="Predator"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Witcher</div>
      <img
        src={witcher}
        alt=""
        className="charImg"
        id="Witcher"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Sonic</div>
      <img
        src={sonic}
        alt=""
        className="charImg"
        id="Sonic"
        onClick={getCharacterPosition}
      ></img>
    </div>
  );
};

const GhibliCharacters = ({ getCharacterPosition }) => {
  return (
    <div className="characterList">
      <div className="charName">Yubaba</div>
      <img
        src={yubaba}
        alt=""
        className="charImg"
        id="Yubaba"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Chihiro</div>
      <img
        src={chihiro}
        alt=""
        className="charImg"
        id="Chihiro"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">The Baron</div>
      <img
        src={theBaron}
        alt=""
        className="charImg"
        id="The Baron"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Turnip Head</div>
      <img
        src={turnipHead}
        alt=""
        className="charImg"
        id="Turnip Head"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Howl</div>
      <img
        src={howl}
        alt=""
        className="charImg"
        id="Howl"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Totoro</div>
      <img
        src={totoro}
        alt=""
        className="charImg"
        id="Totoro"
        onClick={getCharacterPosition}
      ></img>
    </div>
  );
};

const PokemonCharacters = ({ getCharacterPosition }) => {
  return (
    <div className="characterList">
      <div className="charName">Dragonite</div>
      <img
        src={dragonite}
        alt=""
        className="charImg"
        id="Dragonite"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Ivysaur</div>
      <img
        src={ivysaur}
        alt=""
        className="charImg"
        id="Ivysaur"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Lapras</div>
      <img
        src={lapras}
        alt=""
        className="charImg"
        id="Lapras"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Scizor</div>
      <img
        src={scizor}
        alt=""
        className="charImg"
        id="Scizor"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Shinx</div>
      <img
        src={shinx}
        alt=""
        className="charImg"
        id="Shinx"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Staryu</div>
      <img
        src={staryu}
        alt=""
        className="charImg"
        id="Staryu"
        onClick={getCharacterPosition}
      ></img>
    </div>
  );
};

const ZeldaCharacters = ({ getCharacterPosition }) => {
  return (
    <div className="characterList">
      <div className="charName">Malon</div>
      <img
        src={malon}
        alt=""
        className="charImg"
        id="Malon"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Aryll</div>
      <img
        src={aryll}
        alt=""
        className="charImg"
        id="Aryll"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Fishman</div>
      <img
        src={fishman}
        alt=""
        className="charImg"
        id="Fishman"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Beetle</div>
      <img
        src={beetle}
        alt=""
        className="charImg"
        id="Beetle"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Saria</div>
      <img
        src={saria}
        alt=""
        className="charImg"
        id="Saria"
        onClick={getCharacterPosition}
      ></img>
      <div className="charName">Skull Kid</div>
      <img
        src={skullKid}
        alt=""
        className="charImg"
        id="Skull Kid"
        onClick={getCharacterPosition}
      ></img>
    </div>
  );
};

export { ZeldaCharacters, PokemonCharacters, GhibliCharacters, HorrorCharacters };
