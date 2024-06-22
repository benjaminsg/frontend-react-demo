import React from 'react';

export function Header() {

    const stacklineLogo = require("../../images/stackline_logo.svg") as string;

    return (
        <header className="header">
        <img src={stacklineLogo} className="logo" alt="logo" />
        </header>
    );
}