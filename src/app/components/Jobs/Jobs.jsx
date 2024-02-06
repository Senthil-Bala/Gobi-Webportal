import Image from "next/image";
import "../Products/Products.css"; 
import Link from "next/link";
// Import your CSS file

function Jobs() {
  return (
    <div className="products-section" data-aos="zoom-in">
      <Image src="/ship.png" width={80} height={80}  data-aos="zoom-in"/>

      <p className="header"  data-aos="zoom-in">Find Your Next Career Move Locally</p>
      <Image src="/jobbanner.png" width={250} height={296} />
      <p className="text-center sub-header"  data-aos="zoom-in">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <Link href="/jobs"><button className="shop-now"  data-aos="zoom-in">View Jobs</button></Link>
      
    </div>
  );
}

export default Jobs;
