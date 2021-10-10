import "./main_content_2.css";
import Taco from "./taco_1.jpg";
import Beer from "./beer.jpg";
import Wine from "./images.png";
import Music from "./music.jpg";

const MainContent2 = () => {
    return(
        <div className="main_content_2">
            <div>
                <img src={Taco} alt="Taco"></img>
                <div style={{fontWeight : "bold"}}>Tacos</div>
                <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>
            <div>
                <img src={Beer} alt="Beer"></img>
                <div style={{fontWeight : "bold"}}>Beer</div>
                <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>
            <div>
                <img src={Wine} alt="Wine"></img>
                <div style={{fontWeight : "bold"}}>Wine</div>
                <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>
            <div>
                <img src={Music} alt="Music"></img>
                <div style={{fontWeight : "bold"}}>Music</div>
                <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>
        </div>
    );
}

export default MainContent2;