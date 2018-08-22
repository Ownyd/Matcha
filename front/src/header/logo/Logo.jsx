import React from 'react';
import { Link } from 'react-router-dom'

class Logo extends React.Component {
    render() {
        return (
            <div className="header_container">
                <Link to="/">
                <img
                    className="header_logo" 
                    url="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="Matcha"
                />
                </Link>
            </div>
        )
    }

}

export default Logo;