import React, { useState, useRef } from 'react'
import ProfilePic from "../../assets/images/profile-pic.jpg"
import SampleVideo from "../../assets/videos/demo.mp4"
import './About.css'

const About = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const [lastTime, setLastTime] = useState(0)
    const videoRef = useRef(null)

    const handleOpenVideo = () => {
        setIsOverlayActive(true)
        setIsFadingOut(false)

        setTimeout(() => {
            const video = videoRef.current
            if (video) {
                video.currentTime = lastTime
                video.play()
            }
        }, 100)
    }

    const handleCloseVideo = () => {
        const video = videoRef.current
        if (video) {
            setLastTime(video.currentTime)
            video.pause()
        }

        setIsFadingOut(true)
        setTimeout(() => {
            setIsOverlayActive(false)
            setIsFadingOut(false)
        }, 300)
    }

    const contentHTML = `
        <p>Hi, I'm Jorge Rodríguez, I work as a <span>FrontEnd Developer and Web Designer</span> since 2010. Over the years, I’ve collaborated with various companies, both as a freelancer and within teams.</p>
        <p>I have had to develop some projects from scratch and others already started, as well as redesign some already finished, always looking to <span>implement new tools and technologies</span> that allow me to obtain <span>the best result</span>.</p>
        <p>To make this possible, I also dedicate myself to researching and learning about everything related to <span>new web development technologies</span>. This learning process has been part of my life for quite some time now and I hope it will be for much more.</p>
    `

    return (
        <div className="container" id='about'>
            <div className="about content">
                <section>
                    <h1 className="section__title">About</h1>
                    <div className="section__content">
                        <div className="profile__description">
                            <div className="data__text" dangerouslySetInnerHTML={{ __html: contentHTML }} />
                        </div>
                        <div className="profile__pic">
                            <div className="image-mask" onClick={handleOpenVideo}>
                                <img src={ProfilePic} alt="JorgeGWD" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {isOverlayActive && (
                <div
                    className={`video__overlay ${isFadingOut ? 'fade-out' : 'fade-in'}`}
                    onClick={handleCloseVideo}
                >
                    <div className="video__container" onClick={e => e.stopPropagation()}>
                        <video ref={videoRef} controls>
                            <source src={SampleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="video__close" onClick={handleCloseVideo}>×</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About