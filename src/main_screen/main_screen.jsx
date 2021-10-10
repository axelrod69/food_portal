import "./main_screen.css";
import React from "react";
import NavBar from "../nav_bar/nav_bar";
import MainContent from "../main_content/main_content";
import MainContent2 from "../main_content_2/main_content_2";
import Content2 from "../content_2/content_2";
import Line from "../line/line";
import FlexImages from "../flex/flex_images";

export default class MainScreen extends React.Component {
    render() {
        return(
            <div className="mainScreen">
                <div>
                    <NavBar></NavBar>
                </div>
                <div>
                    <MainContent></MainContent>
                </div>
                <div>
                    <MainContent2></MainContent2>
                </div>
                <div>
                    <Content2></Content2>
                </div>
                <div>
                    <Line></Line>
                </div>
                <div>
                    <FlexImages></FlexImages>
                </div>
            </div>
        );
    }
}