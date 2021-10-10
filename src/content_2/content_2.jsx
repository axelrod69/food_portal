import "./content_2.css";
import Taco2 from "./tacos.jpg";

const Content2 = () => {
    return(
        <div className="food_details">
            <div>
                <div style={{
                    backgroundImage : `url(${Taco2})`,
                    height : "100%",
                    width : "500px",
                    backgroundSize : "cover",
                    backgroundRepeat : "no-repeat",
                    backgroundPosition : "center"
                }}></div>
            </div>
            <div>
                <div className="taco_details">
                    <div>Featured Taco</div>
                    <div>Easy to hold and loaded with cheese</div>
                    <div>This is the one you have been waiting for</div>
                    <button>Learn More &rarr;</button>
                </div>
            </div>
        </div>
    );
}

export default Content2;