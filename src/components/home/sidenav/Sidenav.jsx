import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Online Asssesment Portal</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Job Listing Portal</li>
        <li className="sidenavLi">Book-store App</li>
      </ul>
      <SidenavTitle title="M" subTitle="y Feats" />
      <ul>
      <li className="sidenavLi">
         Currently looking For a MERN Stack Developer Role.
        </li>
        <li className="sidenavLi">Started working on a New project</li>
        <li className="sidenavLi">Completed web Development Testing & Deployement in IBM-SkillsBuild</li>
        <li className="sidenavLi">50+ Problem solved in codekata platform</li>
        <li className="sidenavLi">Completed web Development basics in IBM-SkillsBuild</li>
        <li className="sidenavLi">Completed Your future in Web Development at IBM-SkillsBuild</li>
        <li className="sidenavLi"> Completed Cyber Security Basics</li>
        <li className="sidenavLi"> Completed Microsoft 365 Productivity course</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi"><a href="https://wa.me/919360226510">+91 9360226510</a></li>
        <li className="sidenavLi"><a href="mailto:mariganeshmr@gmail.com"></a>mariganeshmr@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav