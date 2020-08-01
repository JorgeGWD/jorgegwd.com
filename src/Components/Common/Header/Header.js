import React, { Component } from 'react';
import Logo from './Logo';
import Codes from './Codes';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
    
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 400) {
            if (this.state.status !== "amir") {
              this.setState({ status: "amir" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }
    render() {
        return (
            <header>

                <div className="main-header" style={{
                    backgroundColor: this.state.status === "top" ? "transparent" : "var(--soft-blue)",
                    color: this.state.status === "top" ? "white" : "blue",
                    position: "fixed",
                    width: "calc(100vw - 45px)",
                    transition: "all .3s ease-in-out"
                }}>

                    <Logo />
                    <Codes />

                </div>

            </header>
        )
    }
}
