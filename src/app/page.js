"use client";
import Header from "./components/headers/Header";
import Hero from "./components/heroSection/Hero";
import Slicks from "./components/Slicks/Slicks";
import Products from "./components/Products/Products";
import Jobs from "./components/Jobs/Jobs";
import Business from "./components/Business/Business";
import Form from "./components/Forms/Form";
import Footer from "./footers/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <br />
      <Products/>
      <Jobs/>
      <Business/>
      <Slicks/>
      <Form/>
      <Footer/>/
    </div>
  );
}
// export  default Home