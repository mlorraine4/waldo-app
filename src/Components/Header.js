import { Link } from "react-router-dom";

const Header = ({ style }) => {
  return (
    <div id="header" style={style}>
      <Link to="/">
        <div id="logo">Where's Waldo?</div>
      </Link>
      <Link to="/high-scores">
        <button id="highScoreBtn">Leader Board</button>
      </Link>
    </div>
  );
};

export default Header;
