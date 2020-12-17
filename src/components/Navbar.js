import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Example">Examples</Link>
        </li>
        <li>
          <Link to="/ImagesPage">Images pages</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
