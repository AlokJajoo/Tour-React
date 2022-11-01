import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
   
<header>
<a href="#" class="logo">Alok</a>
<div class="bx bx-menu" id="menu-icon"></div>

<ul class="navbar">
  <li> <Link to="/" className="site-title">
        Home
      </Link></li>
  <li><CustomLink to="/about">About</CustomLink></li>
  <li><CustomLink to="/gallery">Gallery</CustomLink></li>
  <li><CustomLink to="/slider">Slider</CustomLink></li>
  <li><CustomLink to="/contact">Contact</CustomLink></li>
</ul>
</header>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}