import Image from "next/image";
import "../Products/desk.css"; // Import your CSS file

function BusinessDesktop() {
  return (
    <div className="productsDesktop-section container">
        <div className="col1">
      <Image src="/businnessbanner.png" width={300} height={400} />

      </div>
      
      
      <div className="col2">
      <Image src="/ship.png" width={80} height={80} />
      <p className="header">Grow your Business and Team</p>

      <p className="text-center sub-header">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <button className="shop-now">Get Started</button>
      </div>
    </div>
  );
}

export default BusinessDesktop;
