import { Link } from "react-router-dom";
import zeldaPrev from "../images/zelda-logo.png";
import pokemonPrev from "../images/pokemon-logo.png";
import ghibliPrev from "../images/ghibli-logo.png";
import Header from "./Header";
import start from "../images/start-button.png";

const Home = () => {
  return (
    <div>
      <Header style={{ width: "100vw" }} />
      <div id="homePage">
        <div className="flex">
          <div className="previewDiv">
            <Link to="/ghibli" reloadDocument>
              <img src={ghibliPrev} className="previewImg"></img>
              <div className="hide">
                <img src={start} className="start"></img>
              </div>
            </Link>
          </div>
          <div className="previewDiv">
            <Link to="/pokemon" reloadDocument>
              <img src={pokemonPrev} className="previewImg"></img>
              <div className="hide">
                <img src={start} className="start"></img>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="previewDiv">
            <Link to="/zelda" reloadDocument>
              <img src={zeldaPrev} className="previewImg"></img>
              <div className="hide">
                <img src={start} className="start"></img>
              </div>
            </Link>
          </div>
          <div className="previewDiv">
            <Link to="/horror" reloadDocument>
              <div id="horrorPreview">HORROR</div>
              <div className="hide">
                <img src={start} className="start"></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
