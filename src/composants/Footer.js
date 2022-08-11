import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import '../styles/FooterStyle.css'
const Footer = () => {
    return (
        <div className="listeIcons">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
        </div>

    );
}

export default Footer;