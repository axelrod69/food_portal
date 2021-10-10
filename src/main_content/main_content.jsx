import "./main_content.css";

const MainContent = () => {
    return(
        <div className="mainContent">
            <div className="description" style={{flexGrow : 2}}>
                <div style={{fontSize : "20px"}}>Terry's Taco Joint</div>
                <div>Pretty Good Tacos!</div>
            </div>
            <div className="price" style={{flexGrow : 1}}>
                <div className="caption" style={{marginBottom : "10px"}}>
                    <div>$1.99</div>
                    <div style={{fontSize : "15px"}}>Tacos</div>
                </div>
                <div className="caption">
                    <div>$3.99</div>
                    <div style={{fontSize : "15px"}}>Kombucha</div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;