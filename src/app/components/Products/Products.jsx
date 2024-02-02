import Image from "next/image";
import "./Products.css"; // Import your CSS file

function Products() {
  return (
    <div className="products-section">
      <Image src="/ship.png" width={80} height={80} />

      <p className="header">Explore local products & Services</p>
      <Image src="/purchase.png" width={300} height={450} />
      <p className="text-center sub-header">
        "Browse through a diverse range of products and services offered by
        local businesses in your area. Whether you’re looking for handmade
        crafts, home-cooked meals, or professional services, find it all here on
        Gobi Today. Shop local and enrich your community."{" "}
      </p>
      <button className="shop-now">Shop now</button>
    </div>
  );
}

export default Products;
