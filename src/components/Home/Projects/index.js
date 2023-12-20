import React from 'react';
import { Data } from './data';
import HorizontalScroll from "./horizontal-scroll";
import styled from "styled-components";

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-top: 700px;
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
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: visible; /* Ensure that overflow is visible for the Timeline to be displayed */
  border-radius: 15px; /* Added rounded corners */
`;

const ExperienceDetails = styled.div`
  color: #fff;
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
`;

// New styled component for the timeline
const Timeline = styled.div`
  position: absolute;
  top: 50%;
  right: 100%; /* Position to the left of the SampleCard */
  height: 2px;
  width: 60px; /* Adjust the width for a longer line */
  background-color: #FF5733; /* Line color */
  transform: translateY(-50%);
`;

const Work = () => {
  return (
    <div className="work">
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            {/* Replace SampleCards with your work experiences */}
            <SampleCard>
              <CompanyLogo src="path-to-your-logo1.png" alt="Company Logo 1" />
              <ExperienceDetails>
                <h3>Your Position Title</h3>
                <p>Your Company</p>
                <p>Start Date - End Date</p>
                <p>
                  Your job description and details about your experience go
                  here.
                </p>
              </ExperienceDetails>
              <Timeline /> {/* Add the timeline within the SampleCard */}
            </SampleCard>

            {/* Repeat the above block for each work experience */}
            {/* SampleCard for Experience 2 */}
            <SampleCard>
              <CompanyLogo src="path-to-your-logo2.png" alt="Company Logo 2" />
              <ExperienceDetails>
                <h3>Position Title 2</h3>
                <p>Company 2</p>
                <p>Start Date 2 - End Date 2</p>
                <p>Description for Experience 2</p>
              </ExperienceDetails>
              <Timeline /> {/* Add the timeline within the SampleCard */}
            </SampleCard>

            <SampleCard>
              <CompanyLogo src="path-to-your-logo2.png" alt="Company Logo 2" />
              <ExperienceDetails>
                <h3>Position Title 2</h3>
                <p>Company 2</p>
                <p>Start Date 2 - End Date 2</p>
                <p>Description for Experience 2</p>
              </ExperienceDetails>
              <Timeline /> {/* Add the timeline within the SampleCard */}
            </SampleCard>

            

            {/* Repeat for the remaining experiences */}
            {/* ... */}

          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </div>
  );
};

export default Work;
