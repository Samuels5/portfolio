import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogs from "../../Assets/Projects/blogs.png";
import bot from "../../Assets/Projects/bot.png";
import task from "../../Assets/Projects/task.png";
import smartface from "../../Assets/Projects/smartface.png";
import robot from "../../Assets/Projects/robot.png";
import job from "../../Assets/Projects/job.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartface}
              isBlog={false}
              title="Smart Face"
              description="Smart Face is a secure platform for face detection and user management.
🔹 Features:
✅ Face detection with location tracking
✅ User account management (register, signin, signout, update, delete)
✅ Encrypted passwords & secure access
✅ Data stored in PostgreSQL or MongoDB
Built with React.js, Node.js, and Express.js, deployed on Render and Vercel. 🚀"
              ghLink="https://github.com/Samuels5/smartface"
              demoLink="https://smartface.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Listing"
              description="a platform for finding and managing job opportunities. Users can sign in or register using Google or email, with email verification for security.
🔹 Key Features:
✅ User Authentication – Secure login with NextAuth and session management.
✅ Job Booking – Easily book or unbook jobs.
✅ Email Verification – for account security.
✅ API Integration – job data fetching.
Built with Next.js and api integration 🚀"
              ghLink="https://github.com/Samuels5/task9start"
              demoLink="https://task9start.vercel.app/app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Division Management System"
              description="A simple web tool for companies to manage employee tasks efficiently.
Tasks move through:
🔹 Future Work → Ongoing → Cost Saving / Completed
🔹 Add, edit, delete tasks (deleted tasks are archived)
🔹 Local Storage ensures data persists after closing the browser
🔹 Built with HTML, CSS, and JavaScript, it allows task assignment, tracking, and editing. 
Stay organized and boost productivity! 🚀"
              ghLink="https://github.com/Samuels5/Samuels5.github.io"
              demoLink="https://samuels5.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogs}
              isBlog={false}
              title="Blogs"
              description="Blogs is a modern platform for exploring and reading blogs. Users can search through all blogs and click to view specific ones easily.
🔹 Key Features:
Blog Search – Quickly find blogs by keywords.
Easy Navigation – Click to view full blog content.
Responsive Design – Converted from Figma to clean, functional code.
Built with Next.js, Blogs offers a smooth and engaging reading experience. 🚀"
              ghLink="https://github.com/Samuels5/g55app"
              demoLink="https://g55app-samuel-mulugetas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Robofriends"
              description="Robofriends is a fun platform for exploring unique robot profiles. Users can search robots by name, with each robot generated using a third-party API for new images.
🔹 Key Features:
Robot Search – Find robots by name instantly.
Dynamic Images – API-generated unique robot avatars.
Responsive Design – Smooth user experience.
Built with React.js 🚀"
              ghLink="https://github.com/Samuels5/robofriends"
              demoLink="https://samuels5.github.io/robofriends/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="S5_bot1"
              description="S5_bot1 is a Telegram bot that lets users chat with Gemini AI directly in Telegram.
🔹 Key Features:
Real-Time Chat – Talk with Gemini AI seamlessly.
User-Friendly – Simple and intuitive Telegram interface.
Fast & Secure – Powered by Python for reliable performance.
Stay connected and enjoy smart conversations with S5_bot1! 🤖💬"
              ghLink="https://github.com/Samuels5/S5_bot1"
              demoLink="https://t.me/Samis5_bot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
