import { React } from "react";
import jasonImg from '../../assets/jason-photo.jpg';

function Header() {
    return (
        <header>
            <img class="header-img" src={jasonImg} alt="photo of Jason Poage"/>
            <div class="header-content">
                <h1 class="poppins-semibold">Jason Poage</h1>
                <h2>Frontend Developer</h2>
                <a class="link-site" href="" target="_blank">jpoage.website</a>
                <nav className="buttons-div">
                    <button id="email-button">Email</button>
                    <button id="linkedin-button">LinkedIn</button>
                </nav>
            </div>
        </header>
      )
}

export default Header