import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { typography } from "../Styles";
import GetHomeImage from "../assets/Projects/GetHome.svg";
import EatableImage from "../assets/Projects/Eatable.svg";
import TweeteableImage from "../assets/Projects/Tweeteable.svg";
import CliviaImage from "../assets/Projects/Clivia.svg";
import { Button3 } from "./Button";
import { GrProjects } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  background-color: #364153;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 3rem 2rem;
  color: #ededed;
  @media (max-width: 900px) {
    height: auto;
  }
  @media (max-width: 500px) {
    padding: 4rem 1rem;
  }

  span {
    color: #af5ea3;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const Photo = styled.div`
  border-radius: 8px;
  cursor: pointer;
  ${({ index, activeSlide }) =>
    index !== activeSlide &&
    `
    opacity: 0.4;
    transform: scale(0.6);
`}
  @media (max-width: 900px) {
    ${({ index, activeSlide }) =>
      index !== activeSlide &&
      `
    z-index: 1;
    opacity: 0.1;
    transform: scale(0.3);
`}
    @media (max-width: 500px) {
      ${({ index, activeSlide }) =>
        index !== activeSlide &&
        `
    opacity: 0.0;
`}
    }
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 1rem;
  padding-bottom: 1rem;
  p {
    ${typography.head.head4}
    font-weight: 500;
    letter-spacing: 0.98px;
    color: #ffffff;
    @media (max-width: 1100px) {
      ${typography.head.head5}
    }
    @media (max-width: 500px) {
      gap: 2rem;
      ${typography.text.body2}
    }
  }
`;

const ProjectImage = styled.img`
  max-width: 850px;
  max-height: 550px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 1100px) {
    max-width: 650px;
    max-height: 550px;
  }
  @media (max-width: 500px) {
    max-width: 400px;
    max-height: 380px;
  }
  @media (max-width: 380px) {
    max-width: 340px;
    max-height: 350px;
  }
  @media (max-width: 355px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Title = styled.p`
  ${typography.head.head3}
  font-weight: 600;
  @media (max-width: 500px) {
    ${typography.head.head5}
  }
`;

const SummaryMe = styled.p`
  ${typography.head.head5}
  padding: 0 12rem;
  @media (max-width: 1100px) {
    ${typography.head.head5}
    padding: 0 3rem;
  }
  @media (max-width: 500px) {
    ${typography.text.body1}
    padding: 0 1rem;
  }
`;

const ProjectInfo = ({ title }) => (
  <PhotoContainer>
    <Title>{title}</Title>
  </PhotoContainer>
);

const InfoImage = ({ src, alt, title }) => (
  <PhotoContainer>
    <ProjectImage src={src} alt={alt} />
    <ProjectInfo title={title} />
  </PhotoContainer>
);

function ProjectPresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paginationClickable, setPaginationClickable] = useState(true);
  const swiperRef = useRef(null);

  const handleImageClick = useCallback((index) => {
    swiperRef.current.swiper.slideTo(index);
  }, []);

  const projects = useMemo(
    () => [
      { src: CliviaImage, alt: "Clivia Project", title: "CLIbia" },
      { src: GetHomeImage, alt: "Get Home Project", title: "Get Home" },
      { src: EatableImage, alt: "Eatable Project", title: "Eatable" },
      { src: TweeteableImage, alt: "Tweeteable Project", title: "Tweetable" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setPaginationClickable(window.innerWidth > 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Title>Explore my projects</Title>
      <SummaryMe>
        My versatility is reflected in the variety of technologies I have worked
        with, from <span>Ruby + Rails</span> to <span>Javascript + React.</span>{" "}
        The ability to adapt and excel in diverse environments has been a core
        element of my career, and these projects are testament to my ability to
        embrace technological challenges effectively.
      </SummaryMe>
      <CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          pagination={{ clickable: paginationClickable }}
          navigation
          autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          ref={swiperRef}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Photo
                index={index}
                activeSlide={activeSlide}
                onClick={() => handleImageClick(index)}
              >
                <InfoImage {...project} />
              </Photo>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
      <NavigationLink to={"/portafolio"}>
        <Button3>
          <GrProjects style={{ fontSize: "22px", color: "#863179" }} />
          More information about my projects...
        </Button3>
      </NavigationLink>
    </Container>
  );
}

export default ProjectPresentation;
