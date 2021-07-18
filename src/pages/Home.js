import React from 'react'
import MainBanner from '../components/Web/MainBanner';
import HomeProjects from '../components/Web/HomeProjects';
import ProjectsInfo from '../components/Web/ProjectsInfo';
import ReviewCourses from '../components/Web/ReviewCourses';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
      <>
      <Helmet> 
        <title> mabvmex | Geeks </title>
        <meta name='description' content='Home | Web de Tecnología e Internet' data-react-helmet='true' /> 
      </Helmet>
        <MainBanner />
        <HomeProjects />
        <ProjectsInfo />
        <ReviewCourses />
      </>
    );
}