import { Component } from "react";
import "./NavBarSyles.css";
import MerkabaLogo from "../images/Cannabis_News_small.png";
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="navbarDiv">
        <nav>
          <Link to="/">
            <img className="navTopic" src={MerkabaLogo} alt="Merkaba Logo" />
          </Link>

          <div className="navbar1_div">
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar deactive"}>
              <li className="li_developer_docs">
                <a href="index.html">Developer Docs</a>
              </li>
              <Link to="/signup">

              <li className="li_signUp_btn">
                <a href="index.html"><button className="signUp_btn">Signup</button></a>
              </li>
              </Link>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
