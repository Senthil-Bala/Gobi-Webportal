import React from "react";
import "./HeaderDesktop.css";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Link from "next/link";

function HeaderDesktop() {
  return (
    <div className="header-nav" data-aos="slide-up">
      <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>
        <Image src="/logo.png" width={200} height={60} />
      </Link>
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <p>Home</p>
      </Link>
      <Link
        href="/shopping"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <p>Shopping</p>
      </Link>
      <Link href="/jobs" style={{ textDecoration: "none", color: "inherit" }}>
        <p>Jobs</p>
      </Link>
      <Link
        href="/business"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <p>Business</p>
      </Link>
      <button>Login</button>
      <Form.Check type="switch" id="custom-switch" />
    </div>
  );
}

export default HeaderDesktop;
