import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

const Experience = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.1 });
    const itemRef = useAnimateOnScroll({ threshold: 0.1 });

    return (
        <section id="experience" className="section">
            <h2 ref={titleRef} className="section-title animated-element">Experience</h2>
            <div className="experience-item animated-element" ref={itemRef}>
                <h3>Mobile App Developer Intern</h3>
                <p><strong>Cestrum Technologies Pvt. Ltd.</strong></p>
                <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem', color: '#9ca3af', listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
                        Prototyped a cross-platform community app in Flutter with Firebase (Auth, Firestore, Storage, Realtime DB), supporting 50k+ concurrent users.
                    </li>
                    <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
                        Reduced latency via Regex-based email validation, Geofencing, and WebRTC-driven real-time communication.
                    </li>
                    <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
                        Improved UI/UX through user feedback from 20+ testers, increasing session engagement.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
