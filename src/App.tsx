import { Routes, Route, Outlet, Link, Form } from "react-router-dom";
import '../src/css/contact.css';
import '../src/css/attractions.css';
import '../src/css/food.css';
import '../src/css/home.css';
import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="food" element={<Food />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    
    <div>
      <nav>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
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
    <div id="Home">
      <div className="main-content">
        <h1>Welcome to our Amusement Park</h1>
        <p>Experience the thrill and excitement of a lifetime!</p>

        <p>Explore our wide range of attractions and delicious food and drinks. Whether you're seeking adrenaline-pumping rides or a relaxing time with family and friends, we have something for everyone.</p>
      </div>
    </div>
  );
}

function Attractions() {
  return (
    <div id="attractions">
      <div className="attractions-content">
        <h1>Attractions</h1>
        <ul>
          <li>Roller Coaster</li>
          <li>Ferris Wheel</li>
          <li>Carousel</li>
          <li>Water Park</li>
          <li>Haunted House</li>
        </ul>
      </div>
    </div>
  );
}

function Tickets() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3002/tickets`
            );
            console.log(response);
            setData(response.data[0].reserved);
            setError(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);

    const handleUpdate = async() => {
        const response = await axios.put(`http://localhost:3002/`);
        window.location.reload()
      }

  return (
    <div id="tickets">
      <div className="main-content">
        <h1>Reserve Tickets Here!</h1>
        {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        Current number of tickets reserved: {data}
      </ul>
        <input type="button" name="reserve" value="Reserve" onClick={handleUpdate}/>
      </div>
    </div>
  );
}

function Food() {
  return (
    <div id="food">
      <div className="food-content">
        <h1>MENU</h1>
        <div className="menu-item">
          <h2>Appetizers</h2>
          <ul>
            <li>Chicken Wings 11.99</li>
            <li>Mozzarella Sticks 5.99</li>
            <li>Bruschetta 12.99</li>
          </ul>
        </div>

        <div className="menu-item">
          <h2>Main Courses</h2>
          <ul>
            <li>Steak 24.99</li>
            <li>Pasta Alfredo 19.99</li>
            <li>Burger 19.99</li>
          </ul>
        </div>

        <div className="menu-item">
          <h2>Desserts</h2>
          <ul>
            <li>Chocolate Cake 9.99</li>
            <li>Ice Cream Sundae 7.99</li>
            <li>Cheesecake 9.99</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please don't hesitate to contact us. We're here to help!</p>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>Email: iseage@amusementpark.com</p>
          <p>Phone: +1 (561) 935-1617 </p>
          <p>Address: Ames, IA 50011</p>
        </div>
      </div>
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
