import "./flex_images.css";
import Bolognese from "./bolognese.jpg";
import Burger from "./burger.jpg";
import Meatball from "./meatball.jpg";
import Pizza from "./pizza.jpg";
import Spaghetti from "./spaghetti.jpg";
import Tacos from "./tacos.jpg";
import Thumb from "./tacos.jpg";

const FlexImages = () => {
    return(
        <div className="flexImages">
            <div style={{backgroundImage : `url(${Bolognese})`}}></div>
            <div style={{backgroundImage : `url(${Burger})`}}></div>
            <div style={{backgroundImage : `url(${Meatball})`}}></div>
            <div style={{backgroundImage : `url(${Pizza})`}}></div>
            <div style={{backgroundImage : `url(${Spaghetti})`}}></div>
            <div style={{backgroundImage : `url(${Tacos})`}}></div>
            <div style={{backgroundImage : `url(${Thumb})`}}></div>
            <div style={{backgroundImage : `url(${Meatball})`}}></div>
            <div style={{backgroundImage : `url(${Pizza})`}}></div>
        </div>
    );
}

export default FlexImages;