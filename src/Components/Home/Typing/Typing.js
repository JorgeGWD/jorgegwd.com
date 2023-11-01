import React, { useEffect, useState } from 'react';
import './Typing.css';

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick = () => {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
        delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function () {
        that.tick();
        }, delta);
    };
    this.isDeleting = false;
};

const Typing = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleVisibilityChange = () => {
        setIsActive(document.visibilityState === 'visible');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            if (isActive) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period).tick();
            }
        }
        }
        // INJECT CSS
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
        document.body.appendChild(css);
    }, [isActive]);

    return (
        <div className={`typing ${isActive ? 'activa' : ''}`}>
        <h1>
            We can{' '}
            <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "create", "design", "develop" ]'
            ></span>
            <br />
            great things together.
        </h1>
        </div>
    );
};

export default Typing;