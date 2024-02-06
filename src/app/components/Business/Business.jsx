import Image from "next/image";
import "../Products/Products.css"; // Import your CSS file
import Link from "next/link";
function Business() {
  return (
    <div className="products-section">
      <Image src="/ship.png" width={80} height={80} data-aos="zoom-in" />

      <p className="header" data-aos="zoom-in">
        Grow Your Business & Team
      </p>
      <Image src="/businnessbanner.png" width={300} height={450} />
      <p className="text-center sub-header" data-aos="zoom-in">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <Link href="/business">
        {" "}
        <button className="shop-now" data-aos="zoom-in">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Business;
