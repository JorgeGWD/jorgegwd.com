import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <button className="ghost-btn">
                <p>Tell me about your project</p>
            </button>
        );
    }
}

export default Button;