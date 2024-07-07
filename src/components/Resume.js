import React from 'react';

const Education = () => (
  <div>
    <h3 className="resume-title">EDUCATION</h3>
    <div className="resume-item">
      <h4>Guru Nanak Dev Engineering College, Ludhiana</h4>
      <p>B TECH Electronics and Communication Engineering</p>
      <h5>2021-2025 | <b>8.1 CGPA</b></h5>
    </div>
    
  </div>
);

const Skills = () => (
  <div>
    <h3 className="resume-title">SKILLS</h3>
    <div className="resume-item">
      <h4>PROGRAMMING LANGUAGES</h4>
      <p>Python • C++ • OOPs • JavaScript HTML • CSS • Problem Solving • Data Structure • Algorithm</p>
    </div>
    <div className="resume-item">
      <h4>LIBRARIES & FRAMEWORK</h4>
      <p>React JS • Node JS • Express • Bootstrap • Tailwind • Django • OpenCV • Pandas • Numpy • Matplotlib • PyGame • math</p>
    </div>
    <div className="resume-item">
      <h4>TOOLS & PLATFORM</h4>
      <p>Github • Git • Jupyter Notebook • MySQL • VS Code • Pycharm • IntelliJ IDEA </p>
    </div>
    <div className="resume-item">
      <h4>DATABASE</h4>
      <p>SQL • MongoDB</p>
    </div>
  </div>
);

const Coursework = () => (
    <div>
      <h3 className="resume-title">COURSEWORK</h3>
      <div className="resume-item">
        <p>Data Structure and Algorithms</p>
        <p>OOPs</p>
        <p>Computer Network</p>
        <p>Signal and System</p>
        <p>Electronics Devices</p>
        <p>Digital Electronics</p>
        <p>Digital Signal Processor</p>        
      </div>
    </div>
  );

const Projects = () => (
  <div>
    <h3 className="resume-title">PROJECTS</h3>
    <div className="resume-item">
      <a href="https://github.com/AdarshMishra26/Video-Analyzer.git" target="_blank" rel="noopener noreferrer"><h4>Vidoe Analyzer</h4></a>
      Using: React, Django
      <p>Implemented a chatbot that generates responses to user queries based on video transcripts.</p>
      <ul>
        <li><b>Developed a tool to fetch YouTube video transcripts using the YouTubeTranscriptApi library. Implemented a chatbot that generates responses to user queries based on video transcripts.</b></li>
        <li><b>Designed a user-friendly web interface for seamless interaction with the chatbot.</b></li>
      </ul>
    </div>
    <div className="resume-item">
      <a href="https://github.com/AdarshMishra26/Assign-FS.git" target="_blank" rel="noopener noreferrer"><h4>Assign-FS</h4></a>
      Using: HTML, TailwindCSS, Flask
      <p>This is a web application developed using Flask for managing student assignments, providing feedback, and facilitating communication between students and teachers.</p>
      <ul>
        <li><b>Users can sign up, log in, and reset their passwords. Users can update their contact information and branch details. Students can submit assignments through the system. Assignments are evaluated for plagiarism using a simple placeholder algorithm. Teachers can evaluate assignments and provide feedback to students. A page showcasing the developer's information.</b></li>
      </ul>
    </div>
    <div className="resume-item">
      <a href="https://toolkit-jade.vercel.app/" target="_blank" rel="noopener noreferrer"><h4>ToolKit</h4></a>
      Using: Flask, HTML, Tailwind CSS
      <p>ToolKit is a web application built with Flask that provides various tools and utilities for working with files.</p>
      <ul>
        <li><b>This Project Generate QR codes, Add Password to PDf, Merge PDF and multi more features.</b></li>
      </ul>
    </div>
    <div className="resume-item">
      <a href="https://fittrack-sigma.vercel.app/" target="_blank" rel="noopener noreferrer"><h4>FitTrack</h4></a>
      Using: Flask, HTML, Tailwind CSS
      <p>FitTrack is a web application built with Flask that provides various health tracking facilities.</p>
      <ul>
        <li><b>This project is designed to help users maintain a healthy lifestyle by tracking their daily activities, exercise routines, calorie intake, and providing personalized health recommendations.</b></li>
      </ul>
    </div>
  </div>
);

const Achievements = () => (
  <div>
    <h3 className="resume-title">ACHIEVEMENTS and LEADERSHIP</h3>
    <div className="resume-item">
      <ul>
        <li>200+ Problem Solved on LeetCode</li>
        <li>1st Rank at Paper Presentation Competition at Cognizance 2023, IIT ROORKEE</li>
        <li>Co-Coordinator at Training and Placement Cell, GNDEC Ludhian</li>
        <li>Student Coordinator at Causmic Club, GNDEC Ludhiana</li>        
      </ul>
    </div>
  </div>
);

const Resume = () => (
  <section id="resume" className="resume">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Education />
          <Skills />
          <Coursework />
        </div>
        <div className="col-lg-6">
          <Projects />
          <Achievements />
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
