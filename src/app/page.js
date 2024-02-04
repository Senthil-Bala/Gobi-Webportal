"use client" 

import React from "react";
import Slicks from "./components/Slicks/Slicks";
import MainForm from "./components/Forms/MainForm";
import Footer from "./footers/Footer";
import MainHeader from "./components/headers/MainHeader";
import Main from "./components/Products/Main";
import MainJob from "./components/Jobs/MainJob";
import MainBusiness from "./components/Business/MainBusiness";
import MainFooter from "./footers/FooterMain";
import HeroDesktop from "./components/heroSection/HeroDesktop";
import MainHero from "./components/heroSection/HeroMain";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <div>
      <MainHeader data-aos="fade-up" />
      <MainHero data-aos="fade-up" />
      <Main data-aos="fade-up" />
      <MainJob data-aos="fade-up" />
      <MainBusiness data-aos="fade-up" />
      <Slicks data-aos="fade-up" />
      <MainForm data-aos="fade-up" />
      <MainFooter data-aos="fade-up" />
    </div>
  );
}
