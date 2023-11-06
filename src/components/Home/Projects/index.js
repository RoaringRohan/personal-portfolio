import './index.scss';
import React from 'react';
import SchoolProject from '../../../assets/images/SchoolProject.png';
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
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

const Projects = () => {

    return (
        <div className="projects">
            <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <SampleCards />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
        </div>
    );
}

export default Projects;