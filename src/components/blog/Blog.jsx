import React from "react";
import Title from "../home/Title";
import { blogImgOne, 
  blogImgTwo, 
  blogImgThree,
  blogImg4,
  blogImg5,
  blogImg6,
  blogImg7,
  blogImg8,
  blogImg9,
  blogImg10
 } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="My" subTitle="Feats" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <BlogCard
            image={blogImgTwo}
            title="Present"
            subTitle="Looking for a MERN Stack Developer Role"
            category="Job Seeking"
          />
          <BlogCard
            image={blogImgThree}
            title="08/2024"
            subTitle="MERN Stack Development Internship"
            category="Internship"
          />
          <BlogCard
            image={blogImg4}
            title="Present"
            subTitle="50+ Problem solved in codekata platform"
            category="Problem Solving"
          />
          <BlogCard
            image={blogImg8}
            title="10/2023"
            subTitle="Completed web Development basics in IBM-SkillsBuild"
            category="Course"
          />
          <BlogCard
            image={blogImg9}
            title="10/2023"
            subTitle="Completed web Development Testing & Deployement in IBM-SkillsBuild"
            category="Course"
          />
          
        </div>
        <div className="px-6">
        <BlogCard
            image={blogImgOne}
            title="Present"
            subTitle="Currently working on New Project"
            category="Project"
          />
          <BlogCard
            image={blogImg5}
            title="07/2022"
            subTitle="Completed Junior Grade Typewriting in English"
            category="Project"
          />
        <BlogCard
            image={blogImg7}
            title="04/2023"
            subTitle="Completed Microsoft 365 Productivity course"
            category="Course"
          />
        <BlogCard
            image={blogImg6}
            title="05/2023"
            subTitle="Completed Cyber Security Basics"
            category="Course"
          />
        <BlogCard
            image={blogImg10}
            title="10/2023"
            subTitle="Completed Your future in Web Development at IBM-SkillsBuild"
            category="Course"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
