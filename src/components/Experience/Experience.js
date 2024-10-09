import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: center; /* Centers the cards on small screens */
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 48%;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardContent = styled.div`
  text-align: center;
`;

const Timeline = styled.h4`
  font-size: 0.8rem;
  color: #555;
`;

const Place = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const MyExperience = () => {
  const experiences = [
    {
      photo: "",
      timeline: "Feb 2023 - May 2023",
      place: "Atal Incubation Centre JKLU | Intern",
      description: "Developed a web application leveraging astrology and zodiac sign insights to provide personalized recommendations for optimal travel dates and times. Garnered over 500 initial users and maintained a commendable 4.2-star rating on user reviews, reflecting the effectiveness and value of the Travel-Tithi | Advisor Web Application",
    },
    {
      photo: "",
      timeline: "May 2023 - July 2023",
      place: "Intern at Wisdom KIds School",
      description: "Developed a Wisdom Kids School's website for an overview of academics, faculty, and the admission process, and join our journey to nurture creativity, curiosity, and excellence in every child.",
    },
    // Add more experiences here
  ];

  return (
    <>
      <div className="SectionTitle">My Experience</div>
      <ExperienceContainer id="experience">
        {experiences.map((exp, index) => (
          <Card key={index}>
            {/* <CardImage src={exp.photo} alt={exp.place} /> */}
            <CardContent>
              <Timeline>{exp.timeline}</Timeline>
              <Place>{exp.place}</Place>
              <Description>{exp.description}</Description>
            </CardContent>
          </Card>
        ))}
      </ExperienceContainer>
    </>
  );
};

export default MyExperience;
