import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImg9,
  workImg10
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://github.com/Mari130803/online-assessment">
          <ProjectsCard
            title="Online Assesment Portal"
            category="Website"
            image={workImgThree}
          />
          </a>

          <a href="https://github.com/Mari130803/job-listing-portal-app">
          <ProjectsCard
            title="Job Listing Portal"
            category="website"
            image={workImgOne}
          />
          </a>

          <ProjectsCard
            title="Employee Management System"
            category="website"
            image={workImg9}
          />
          
          <a href="https://github.com/Mari130803/Lernen">
          <ProjectsCard
            title="Learning Platform"
            category="website"
            image={workImgTwo}
          />
          </a>
          <ProjectsCard
            title="My Portfolio"
            category="Portfolio website"
            image={workImg10}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <a href="https://github.com/Mari130803/Ecommerce">
          <ProjectsCard
            title="Shopping Website"
            category="website"
            image={workImgSix}
          />
          </a>
          <a href="https://github.com/Mari130803/favi-pizza">
          <ProjectsCard
            title="Favi Pizza shop"
            category="Website"
            image={workImgEight}
          />
          </a>
          <a href="https://github.com/Mari130803/Dog-web">
          <ProjectsCard
            title="DogWeb"
            category="website"
            image={workImgSeven}
          />
          </a>
          <ProjectsCard
            title="Responsive"
            category="website"
            image={workImgFive}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
