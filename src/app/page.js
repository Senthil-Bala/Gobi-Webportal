"use client";
import Header from "./components/headers/Header";
import Hero from "./components/heroSection/Hero";
import Slicks from "./components/Slicks/Slicks";
import Products from "./components/Products/Products";
import Jobs from "./components/Jobs/Jobs";
import Business from "./components/Business/Business";
import MainForm from "./components/Forms/MainForm";
import Footer from "./footers/Footer";
import MainHeader from "./components/headers/MainHeader";
import Main from "./components/Products/Main";
import MainJob from "./components/Jobs/MainJob";
import MainBusiness from "./components/Business/MainBusiness";
import MainFooter from "./footers/FooterMain";
import HeroDesktop from "./components/heroSection/HeroDesktop";
import MainHero from "./components/heroSection/HeroMain";
export default function Home() {
  return (
    <div>
      {/* <HeroDesktop/> */}
     <MainHeader/>
      <MainHero />
      <Main/>
      <MainJob/>
      <MainBusiness/>
      <Slicks/>
      <MainForm/>
      <MainFooter/>
    </div>
  );
}
// export  default Home