import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

// A small sub-component to handle its own animation
const SkillItem = ({ iconClass, name }) => {
    const itemRef = useAnimateOnScroll({ threshold: 0.2 });
    return (
        <div ref={itemRef} className="skill-item animated-element">
            <div className="skill-icon"><i className={iconClass}></i></div>
            <h4>{name}</h4>
        </div>
    );
};

// Array of your skills based on your resume
const skillsData = [
    { name: 'Flutter', iconClass: 'fab fa-flutter' },
    { name: 'React', iconClass: 'fab fa-react' },
    { name: 'Python', iconClass: 'fab fa-python' },
    { name: 'Java', iconClass: 'fab fa-java' },
    { name: 'AI/ML', iconClass: 'fas fa-brain' },
    { name: 'Computer Vision', iconClass: 'fas fa-eye' },
    { name: 'GCP', iconClass: 'fab fa-google' },
    { name: 'Git/GitHub', iconClass: 'fab fa-git-alt' },
    { name: 'Firebase', iconClass: 'fas fa-database' },
    { name: 'C/C++', iconClass: 'fas fa-code' },
    { name: 'HTML/CSS', iconClass: 'fab fa-html5' },
    { name: 'LLMs', iconClass: 'fas fa-robot' },
    { name: 'Docker', iconClass: 'fab fa-docker' },
    { name: 'TensorFlow', iconClass: 'fas fa-cogs' },
    { name: 'Scikit-Learn', iconClass: 'fas fa-chart-line' }
];

const Skills = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.2 });

    return (
        <section id="skills" className="section">
            <h2 ref={titleRef} className="section-title animated-element">
                Technical Skills
            </h2>
            <div className="skills-container">
                {/* We now map over the array to create each skill item dynamically */}
                {skillsData.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} iconClass={skill.iconClass} />
                ))}
            </div>
        </section>
    );
};

export default Skills;