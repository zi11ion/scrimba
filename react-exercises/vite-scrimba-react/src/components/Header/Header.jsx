import { React } from "react";
import jasonImg from '../../assets/jason-photo.jpg';

function Header() {
    return (
        <header>
            <img class="header-img" src={jasonImg} alt="photo of Jason Poage"/>
            <div class="header-content">
                <h1>Jason Poage</h1>
                <h3>Frontend Developer</h3>
                <h5>jasonpoage.website</h5>
                <nav className="buttons-div">
                    <button id="email-button">Email</button>
                    <button id="linkedin-button">LinkedIn</button>
                </nav>
            </div>
        </header>
      )
}

export default Header