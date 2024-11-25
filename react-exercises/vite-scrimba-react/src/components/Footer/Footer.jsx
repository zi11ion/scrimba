import { React } from "react";
import twitterIcon from '../../assets/twitter-icon.png';
import facebookIcon from '../../assets/fb-icon.png';
import instagramIcon from '../../assets/insta-icon.png';
import githubIcon from '../../assets/github-icon.png';

function Footer() {
    return (
        <footer>
            <nav>
                <img src={twitterIcon} alt="twitter link" />
                <img src={facebookIcon} alt="facebook link" />
                <img src={instagramIcon} alt="instagram link" />
                <img src={githubIcon} alt="github link" />
            </nav>
        </footer>
      )
}

export default Footer