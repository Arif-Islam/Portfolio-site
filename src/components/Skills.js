import s from "csd";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FrontendSkills from "../utils/FrontendSkills";
import BackendSkills from "../utils/BackendSkills";
import DevOpsSkills from "../utils/DevOpsSkills";

const StyledTabIndicator = styled.div`
    position: absolute;
    width: ${(props) => 100 / props.tabCount}%;
    top: 100%;
    left: 0;

    transform: translate(${(props) => props.offset}, -100%);

    transition: transform ${(props) => props.duration}ms;

    border-top-style: solid;
    border-top-width: 1px;
`;

const StyledTab = styled.li`
    flex: 1;
    height: 100%;

    button {
        cursor: pointer;
        transition: color 0.3s;
        color: ${(props) => (props.isFocused ? "#222" : "#777")};
        border: none;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0);
    }
`;

export const Tab = ({ title, onClick, isFocused }) => {
  return (
    <StyledTab onClick={onClick} isFocused={isFocused}>
      <button
        className={`${
          isFocused ? "text-gray-900" : "text-gray-700"
        } hover:text-gray-900 text-base md:text-lg font-light uppercase lg:text-xl `}
      >
        {title}
      </button>
    </StyledTab>
  );
};

const StyledTabs = styled.div`
    position: relative;
    list-style: none;
    height: 30px;
    ${s.row}
`;

const Tabs = ({ focusedIdx, children, onChange, duration = 500 }) => {
  return (
    <StyledTabs>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          isFocused: focusedIdx === i,
          onClick: (e) => {
            onChange(i);
          },
        })
      )}
      <StyledTabIndicator
        duration={duration}
        tabCount={children.length}
        offset={`${100 * focusedIdx}%`}
      />
    </StyledTabs>
  );
};
const StyledOuterSliders = styled.div`
    overflow: hidden;
`;
const StyledSliders = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 100%;

    transform: translateX(${(props) => `${props.offset}%`});
    transition: transform ${(props) => props.duration}ms;

    div {
        flex-shrink: 0;
        width: 100%;
    }
`;

const Sliders = ({ focusedIdx, children, duration = 500 }) => {
  const offset = -100 * focusedIdx;

  return (
    <StyledOuterSliders>
      <StyledSliders offset={offset} duration={duration}>
        {children}
      </StyledSliders>
    </StyledOuterSliders>
  );
};

const Pane1 = () => {
  return <FrontendSkills />;
};
const Pane2 = () => {
  return <BackendSkills />;
};
const Pane3 = () => {
  return <DevOpsSkills />;
};
const Skills = () => {
  const [focusedIdx, setFocusedIdx] = React.useState(1);
  const [clicked, setClicked] = React.useState(false);
  const idxRef = useRef(focusedIdx);
  idxRef.current = 0;

  useEffect(() => {
    let interval;
    setFocusedIdx(0);
    if (!clicked) {
      interval = setInterval(() => {
        setFocusedIdx((currIdx) => (currIdx + 1) % 3);
      }, 4000);
    } else {
      clearInterval(interval);
    }
    const handleResize = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        document.documentElement.style.setProperty("--frontend", "Frontend");
        document.documentElement.style.setProperty("--backend", "Backend");
        document.documentElement.style.setProperty("--tools", "Tools");
      } else {
        document.documentElement.style.setProperty(
          "--frontend",
          "Frontend Skills"
        );
        document.documentElement.style.setProperty(
          "--backend",
          "Backend Skills"
        );
        document.documentElement.style.setProperty("--tools", "DevOps & Tools");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [clicked]);

  return (
    <div
      id="skills"
      className="bg-white -mt-16 lg:mt-0 mb-24 lg:mb-0 lg:pb-24 "
    >
      <div className="w-11/12 sm:w-3/4 md:w-4/6 lg:w-[950px] mx-auto flex flex-col items-center justify-center ">
        {/* <p className="text-blue-500 text-lg font-bold uppercase mb-8 text-center">
          Skills
        </p> */}
        <div className={`w-full mx-auto `}>
          <Tabs
            className=""
            focusedIdx={focusedIdx}
            onChange={(i) => {
              setFocusedIdx(i);
              setClicked(true);
            }}
          >
            <Tab
              title={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--frontend")}
            />
            <Tab
              title={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--backend")}
            />
            <Tab
              title={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--tools")}
            />
          </Tabs>
        </div>

        <div className={`mt-8 w-full mx-auto`}>
          <Sliders focusedIdx={focusedIdx}>
            <Pane1 />
            <Pane2 />
            <Pane3 />
          </Sliders>
        </div>
      </div>
    </div>
  );
};

export default Skills;
