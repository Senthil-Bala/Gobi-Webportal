"use client";
import Header from "./components/headers/Header";
import Hero from "./components/heroSection/Hero";
import Slicks from "./components/Slicks/Slicks";
import Products from "./components/Products/Products";
import Jobs from "./components/Jobs/Jobs";
import Business from "./components/Business/Business";
import Form from "./components/Forms/Form";
import Footer from "./footers/Footer";
import MainHeader from "./components/headers/MainHeader";
import Main from "./components/Products/Main";
import MainJob from "./components/Jobs/MainJob";
import MainBusiness from "./components/Business/MainBusiness";
import MainFooter from "./footers/FooterMain";
export default function Home() {
  return (
    <div>
     <MainHeader/>
      <Hero />
      <Main/>
      <MainJob/>
      <MainBusiness/>
      <Slicks/>
      <Form/>
      <MainFooter/>
    </div>
  );
}
// export  default Home