import Image from "next/image";
import "./desk.css"; // Import your CSS file

function ProductsDesktop() {
  return (
    <div className="productsDesktop-section container">
        <div className="col1">
      <Image src="/purchase.png" width={320} height={420} />

      </div>
      
      
      <div className="col2">
      <Image src="/ship.png" width={80} height={80} />
      <p className="header">Explore local products & Services</p>

      <p className="text-center sub-header">
        "Looking for a job close to home? Explore job listings from local
        businesses in your community. Whether you’re starting your career or
        seeking new opportunities, find jobs that align with your skills and
        passions right here in your neighborhood."{" "}
      </p>
      <button className="shop-now">Shop now</button>
      </div>
    </div>
  );
}

export default ProductsDesktop;
