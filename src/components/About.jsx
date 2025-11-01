import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

const About = () => {
    const sectionRef = useAnimateOnScroll({ threshold: 0.2 });
    const textRef = useAnimateOnScroll({ threshold: 0.2 });
    const statsRef = useAnimateOnScroll({ threshold: 0.2 });

    return (
        <section id="about" className="section">
            <h2 ref={sectionRef} className="section-title animated-element">About Me</h2>
            <div className="about-content">
                <div ref={textRef} className="about-text animated-element">
                    <p>I'm a passionate Computer Science student at Vellore Institute of Technology with a strong foundation in app development and AI/ML technologies. Currently maintaining a CGPA of 8.74/10, I've been actively involved in hackathons and internships.</p>
                    <p>My expertise spans across Flutter development, React applications, machine learning, computer vision, and cloud technologies. I enjoy solving complex problems and building innovative solutions that make a real impact.</p>
                </div>
                <div ref={statsRef} className="about-stats animated-element">
                    <div className="stat-card">
                        <div className="stat-number">8.74</div>
                        <div>CGPA</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">3+</div>
                        <div>Major Projects</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">20+</div>
                        <div>Team Members Led</div>
                    </div>
                     <div className="stat-card">
                        <div className="stat-number">2L+</div>
                        <div>Hackathon Participants</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;