// src/components/Projects.jsx
import React from 'react';
import { useAnimateOnScroll } from './useAnimateOnScroll.js';

// We'll store project data in an array for cleaner code
const projectsData = [
    {
        title: "AI Powered Chronic Disease Deterioration Prediction",
        period: "Aug 2025 — Sept 2025",
        description: "Deployed 4 hybrid models for prediction of deterioration of chronic patient's health, heart, kidney, diabetes, obesity.",
        details: [
            "The models are a hybrid of ML (XGBoost) and DL (Transformers, LSTM). Based on the disease they take a csv of 30-180 days data of patient's vitals as input (10000+ patients data).",
            "Integrated LLM to further summarize the prediction by taking real-time data like env factors, step counts, etc. Able to achieve a peak accuracy of 91%.",
        ],
        tech: "Python • XGBoost • Transformers • LSTM • LLM"
    },
    {
        title: "Persona-Driven Document Summarizer",
        period: "Jun 2025 — July 2025",
        description: "Engineered an AI-powered document analysis pipeline that extracts, ranks, and summarizes PDF sections based on user persona and task within 15 seconds.",
        details: [
            "Built a 3-stage offline pipeline using Python, PyMuPDF, SentenceTransformers, and TextRank, containerized with Docker, to extract text, get semantic summaries and output JSON with relevance scores.",
        ],
        tech: "Python • PyMuPDF • SentenceTransformers • TextRank • Docker"
    },
    {
        title: "Kaksha - Smart Classroom Assistant",
        period: "Feb 2024 — Apr 2024",
        description: "Google Solutions Challenge – Finalist in Inter-college Hackathon among 1000+ projects. Built smart classroom app in Flutter integrating BLE and Face Auth, cutting proxy attendance by 95%.",
        details: [
            "Automated assignment grading via Google Vision and Gemini API, saving 40% grading time.",
            "Backed by Firebase for instant performance reports and live alerts.",
        ],
        tech: "Flutter • Firebase • Google Vision API • Gemini API • BLE"
    }
];

const Projects = () => {
    const titleRef = useAnimateOnScroll({ threshold: 0.1 });

    return (
        <section id="projects" className="section">
            <h2 ref={titleRef} className="section-title animated-element">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-period">{project.period}</p>
                        </div>
                        <div className="project-content">
                            <p className="project-description">{project.description}</p>
                            <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem', color: '#9ca3af', listStyle: 'none' }}>
                                {project.details.map((detail, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}><strong>Technologies Used:</strong> {project.tech}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
