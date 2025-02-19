import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import task from "../../Assets/Projects/task.png";
import smartface from "../../Assets/Projects/smartface.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
