import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

const Education = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.5 });
    const item1Ref = useAnimateOnScroll({ threshold: 0.5 });
    const item2Ref = useAnimateOnScroll({ threshold: 0.5 });

    return (
        <section id="education" className="section">
            <h2 ref={titleRef} className="section-title animated-element">Education</h2>
            <div className="education-timeline">
                <div ref={item1Ref} className="education-item animated-element">
                   <h3>Bachelor of Technology in Computer Science </h3>
                    <p><strong>Vellore Institute of Technology</strong> |Chennai, India </p>
                    <p>Aug 2023 – Present |CGPA: 8.74/10 </p>
                   <p><strong>Coursework:</strong> Data Structures and Algorithms, Design and Analysis of Algorithms, OOPS, Operating Systems, Computer Networks, Artificial Intelligence (In Progress), DBMS (SQL) (In Progress), Cloud [AWS] </p>
                </div>
                
            </div>
        </section>
    );
};

export default Education;