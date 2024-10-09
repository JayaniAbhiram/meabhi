import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          {/* <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          /> */}
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            <p>
            I am a dedicated B.Tech student majoring in Computer Science and Engineering at JK Lakshmipat University. My academic journey has provided me with a strong foundation in programming, algorithms, and software development. I have excelled in courses such as Data Structures, Algorithms, and Web Development, and I am particularly passionate about artificial intelligence and machine learning.
          </p>
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            <p>
            Beyond academics, I actively participate in the university’s coding club and have developed leadership and teamwork skills through various projects and hackathons. My practical experience includes internships where I contributed to developing and optimizing software applications, showcasing my ability to apply classroom knowledge to real-world problems.
          </p>
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            <p style={{marginBottom:'20px'}}>
  My professional philosophy centers around continuous learning and innovation. I am eager to connect with industry professionals and peers to explore opportunities for growth and collaboration. Feel free to reach out to me at
  <a
    href="mailto:jayaniabhiram@gmail.com"
    
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      color: 'white',
      backgroundColor: 'hsl(0, 0%, 22%)',
      fontWeight: 'bold',
      fontFamily: 'Georgia, serif',
      fontSize: '14px',
      padding: '4px 8px',
      borderRadius: '4px',
      marginRight: '10px',
    }}
  >
    jayaniabhiram@gmail.com
  </a>
  or connect with me on
  <a
    href="https://www.linkedin.com/in/jayani-abhiram1/"
    
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      color: 'white',
      backgroundColor: '#0077b5',
      fontWeight: 'bold',
      fontFamily: 'Georgia, serif',
      fontSize: '14px',
      padding: '4px 8px',
      borderRadius: '4px',
    }}
  >
    LinkedIn
  </a>
  .
</p>

            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
