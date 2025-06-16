import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to Home.js */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About.js */}
        </li>
        <li>
          <Link to="/Contact">Contact</Link> {/* Link to About.js */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
