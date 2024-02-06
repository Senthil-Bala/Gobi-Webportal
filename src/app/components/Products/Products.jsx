import Image from "next/image";
import "./Products.css"; // Import your CSS file

function Products() {
  
  return (
    
    <div className="products-section" >
      <Image src="/ship.png" width={80} height={80}  data-aos="zoom-in"/>

      <p className="header"  data-aos="zoom-in">Explore Local Products & Services</p>
      <Image src="/purchase.png" width={252} height={398} />
      <p className="text-center sub-header"  data-aos="zoom-in">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <button className="shop-now" data-aos="zoom-in">Shop now</button>
    </div>
  );
}

export default Products;
