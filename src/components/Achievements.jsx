import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';
const Achievements = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.1 });
    const card1Ref = useAnimateOnScroll({ threshold: 0.1 });
    const card2Ref = useAnimateOnScroll({ threshold: 0.1 });
    const card3Ref = useAnimateOnScroll({ threshold: 0.1 });
    const card4Ref = useAnimateOnScroll({ threshold: 0.1 });

    return (
        <section id="achievements" className="section">
            <h2 ref={titleRef} className="section-title animated-element">Achievements & Activities</h2>
            <div className="achievements-grid">
                <div ref={card1Ref} className="achievement-card animated-element">
                     <h3>Adobe PPI Opportunity Shortlist </h3>
                    <p>Shortlisted to the semi final round, among the 2L + participants.</p>
                </div>
                <div ref={card2Ref} className="achievement-card animated-element">
                     <h3>Sponsorship and Outreach Lead </h3>
                     <p>Managed a team of over 20 students and connected with 1000+ companies for sponsorships and outreach from March 2025 to the present.</p>
                </div>
                <div ref={card3Ref} className="achievement-card animated-element">
                    <h3>Machine Learning Specialization</h3>
                     <p>Completed the Machine Learning Specialization offered by DeepLearning.AI and Stanford University, gaining certified skills in advanced ML.</p>
                </div>
                <div ref={card4Ref} className="achievement-card animated-element">
                    <h3>Runner at Terry Fox Run</h3>
                     <p>Participated in the 15th edition of the 3KM Terry Fox Run organized by the Rotary Club in October 2023, supporting cancer research.</p>
                </div>
            </div>
        </section>
    );
};

export default Achievements;