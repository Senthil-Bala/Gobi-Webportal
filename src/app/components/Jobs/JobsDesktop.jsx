import Image from "next/image";
import "../Products/desk.css"; // Import your CSS file

function JobsDesktop() {
  return (
    <div className="productsDesktop-section container">
        
      
      
      <div className="col2" data-aos="flip-right">
      <Image src="/ship.png" width={80} height={80} />
      <p className="header">Find Your Next Career Move Locally</p>

      <p className="text-center sub-header">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <button className="shop-now">View Jobs</button>
      </div>
      <div className="col1" data-aos="fade-left">
      <Image src="/jobbanner.png" width={408} height={400} />

      </div>
    </div>
  );
}

export default JobsDesktop;
