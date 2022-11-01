import React from "react";

import "./Button.css";

const Button = ({children, click}) => {
    return (
        <button className="btn" onClick={click}>
            {children}
        </button>
    );
};

export {Button};