import React from 'react';
import HorizontalScroll from "./horizontal-scroll";
import styled from "styled-components";
import Pepsico from "../../../assets/images/pepsico.jpg";
import CityOfOrillia from "../../../assets/images/cityoforillia.jpg";
import Septodont from "../../../assets/images/septodont.jpg";

const HorizontalSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin-top: 0px;
`;

const CardsContainer = styled.div`
    position: relative;
    height: 100%;
    padding: 0 0 0 150px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const SampleCard = styled.div`
    position: relative;
    height: 500px;
    width: 500px;
    background-color: rgba(170, 165, 225);
    margin-right: 75px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    overflow: visible; /* Ensure that overflow is visible for the Timeline to be displayed */
    border-radius: 15px; /* Added rounded corners */
    position: relative; /* Make sure to include this line to position the logo */s
`;

const ExperienceDetails = styled.div`
    color: #fff;
`;

const CompanyLogo = styled.img`
    position: absolute;
    top: 20px; /* Adjust the top position as needed */
    right: 20px; /* Adjust the right position as needed */
    width: 100px;
    height: 80px;
    object-fit: contain;
`;

// New styled component for the timeline
const Line = styled.div`
    position: absolute;
    top: 50%;
    right: 100%; /* Position to the left of the SampleCard */
    height: 2px;
    width: 75px; /* Adjust the width for a longer line */
    background-color: black; /* Line color */
    transform: translateY(-50%);
`;

const Timeline = () => {
  return (
    <div className="container work">
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <SampleCard>
              <CompanyLogo src={Septodont} alt="Company Logo 1" />
              <ExperienceDetails>
                <h3>IT Technician Co-Op</h3>
                <p>Septodont - Novocol Pharma</p>
                <p>Sept. 2023 - Apr. 2024</p>
                <ul>
                  <li>Managed Azure services for efficient identity and access management.</li>
                  <li>Oversaw onboarding of new tech, from unboxing to imaging, ensuring smooth setups.</li>
                  <li>Researched and prepared new hardware/software for integration into the existing infrastructure.</li>
                  <li>Utilized Power BI for creating insightful infographics, exploring API integration.</li>
                  <li>Developed PowerShell skills for IT automation and workflow optimization.</li>
                  <li>Conducted Remote Desktop connections using various tools for remote issue resolution.</li>
                  <li>Troubleshot software issues, including VPN, OneDrive sync, and printer drivers, demonstrating strong problem-solving abilities.</li>
                </ul>
              </ExperienceDetails>
            </SampleCard>

            <SampleCard>
              <CompanyLogo src={CityOfOrillia} alt="Company Logo 2" />
              <ExperienceDetails>
                <h3>IT Modernization Initiatives Co-Op</h3>
                <p>City of Orillia</p>
                <p>Jun. 2022 - Aug. 2022</p>
                <ul>
                  <li>Automated HR onboarding, enhancing new employee integration.</li>
                  <li>Researched and reported on technology upgrades for strategic planning.</li>
                  <li>Maintained intranet server backups for Business Resumption Plan.</li>
                  <li>Managed retention plans and backup schedules for dedicated servers.</li>
                  <li>Engaged directly with stakeholders/clients, presenting new software/hardware products and gathering valuable feedback.</li>
                  <li>Contributed to SCRUM setting with daily meetings for collaborative software engineering projects.</li>
                </ul>
              </ExperienceDetails>
              <Line />
            </SampleCard>

            <SampleCard>
              <CompanyLogo src={Pepsico} alt="Company Logo 3" />
              <ExperienceDetails>
                <h3>Packaging Summer Student</h3>
                <p>PepsiCo - FritoLay</p>
                <p>Jun. 2021 - Aug. 2021</p>
                <ul>
                  <li>Ensured top-tier bag quality through certifications.</li>
                  <li>Maintained plant cleanliness, including Covid-19 protocols, via Sanitation Inspections.</li>
                  <li>Used safe packaging techniques for efficient bag packing.</li>
                  <li>Aided in the Warehouse, contributing to automated palletizing.</li>
                  <li>Navigated forklift zones safely while collaborating with the team.</li>
                  <li>Conducted cleaning on machines and managed waste disposal.</li>
                  <li>Collaborated to meet packaging quotas efficiently.</li>
                </ul>
              </ExperienceDetails>
              <Line />
            </SampleCard>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </div>
  );
};

export default Timeline;