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
            <Link to="/waldo-app/ghibli" reloadDocument>
              <img src={ghibliPrev} className="previewImg" alt=""></img>
              <div className="hideStart">
                <img src={start} className="start" alt=""></img>
              </div>
            </Link>
          </div>
          <div className="previewDiv">
            <Link to="/waldo-app/pokemon" reloadDocument>
              <img src={pokemonPrev} className="previewImg" alt=""></img>
              <div className="hideStart">
                <img src={start} className="start" alt=""></img>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="previewDiv">
            <Link to="/waldo-app/zelda" reloadDocument>
              <img src={zeldaPrev} className="previewImg" alt=""></img>
              <div className="hideStart">
                <img src={start} className="start" alt=""></img>
              </div>
            </Link>
          </div>
          <div className="previewDiv">
            <Link to="/waldo-app/horror" reloadDocument>
              <div id="horrorPreview">HORROR</div>
              <div className="hideStart">
                <img src={start} className="start" alt=""></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
