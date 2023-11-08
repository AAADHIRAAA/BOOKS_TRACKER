import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
        <nav className="ml-auto">
          <>
          <Link href="/dashboard" className="mr-8">
              Home
            </Link>
          <Link href="/profile" className="mr-8">
              Profile
            </Link>
            <Link href="/login" className="mr-8">
              Log In
            </Link>
          </>
        </nav>
    </header>
  );
};

export default Header;
