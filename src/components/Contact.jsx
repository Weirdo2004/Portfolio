import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

const Contact = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.1 });
    const item1Ref = useAnimateOnScroll({ threshold: 0.1 });
    const item2Ref = useAnimateOnScroll({ threshold: 0.1 });
    const item3Ref = useAnimateOnScroll({ threshold: 0.1 });
    const item4Ref = useAnimateOnScroll({ threshold: 0.1 });

    return (
        <section id="contact" className="section">
            <h2 ref={titleRef} className="section-title animated-element">Get In Touch</h2>
            <div className="contact-content">
                <div ref={item1Ref} className="contact-item animated-element">
                    <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                    <h4>Email</h4>
                    <a href="mailto:atmanp.2004@gmail.com">atmanp.2004@gmail.com </a>
                </div>
                <div ref={item2Ref} className="contact-item animated-element">
                    <div className="contact-icon"><i className="fas fa-phone"></i></div>
                    <h4>Phone</h4>
                    <a href="tel:+918917344169">+91 8917344169 </a>
                </div>
                <div ref={item3Ref} className="contact-item animated-element">
                    <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/atman-pattanaik" target="_blank" rel="noopener noreferrer">linkedin.com/in/atman-pattanaik </a>
                </div>
                <div ref={item4Ref} className="contact-item animated-element">
                    <div className="contact-icon"><i className="fab fa-github"></i></div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/Weirdo2004" target="_blank" rel="noopener noreferrer">github.com/Weirdo2004 </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;