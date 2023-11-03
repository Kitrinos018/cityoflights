import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="food" element={<Food />} />
          <Route path="contact" element={<Contact />} />

          {/* Error page babyyyyy*/}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* Navbar (User Link instead of href!) */}
      <nav>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/food">Food & Drink</Link>
        <Link to="/contact">Contact Us</Link>
  </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Attractions() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Food() {
  return (
    <div>
      <h2>Food</h2>
    </div>
  );
}

function Contact() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

function Error() {
  return (
    <div>
      <h2>This page is empty!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
