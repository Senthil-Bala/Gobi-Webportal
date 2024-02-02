import Image from "next/image";
import "../Products/Products.css"; // Import your CSS file

function Jobs() {
  return (
    <div className="products-section">
      <Image src="/ship.png" width={80} height={80} />

      <p className="header">Find Your Next Career Move Locally</p>
      <Image src="/jobbanner.png" width={300} height={450} />
      <p className="text-center sub-header">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <button className="shop-now">View Jobs</button>
    </div>
  );
}

export default Jobs;
