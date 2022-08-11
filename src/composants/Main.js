import { MdEmail } from "react-icons/md";
import mail from '../assets/gmail.svg'
import image from '../assets/image.png'
import '../styles/MainStyle.css'
const Main = () => {
    return (
        <div className="main">
            <div className='myPicture'>
                <img src={image} alt="" />
            </div>
            <div className="containerbtn">
                <span className="nameAutor">Laura Smith</span>
                <span className="posteAutor">Frotend Developpement</span>
                <span className="website">laurasmith.website</span>
                <button>
                    <img src={mail} alt="mail" />
                    <span>Email</span>
                </button>
            </div>
            <p className="paragraph">
                <h4>About</h4>
                <p >
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h4>Interests</h4>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </p>
        </div>
    );
}

export default Main;