import React from "react";

import "./RequestModal.css";

const RequestModal = ({isModalActive, setIsModalActive}) => {

    return (
        isModalActive && <div className="wrap">
            <div className="info">
                <div className="info_image">
                    <img src={require("./calendar.png")} width="25" alt="calendar-picture"/>
                </div>
                <div className="info_text">
                    <h4>Request for the lesson</h4>
                    <p>Daniel Hamilton wants to start a lesson, please confirm or deny the request</p>
                    <p className="date_info">18 Dec, 14.50pm, 2022</p>
                </div>
                <div className="info_close" onClick={() => setIsModalActive(false)}>
                    <img src={require("./close.png")} height="10" alt="exit"/>
                </div>
            </div>
            <div className="bot_buttons">
                <button className="details">View details</button>
                <button className="submit" onClick={() => setIsModalActive(false)}>Submit</button>
            </div>
        </div>
    );
};

export {RequestModal};