import "./Navbar.css"; //Navbar.css is being used here

//Navbar Function
function Navbar() {
  return (
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">Attractions</a>
      <a href="#contact">Food & Drink</a>
      <a href="#about">Contact Us</a>
</div>
  );
}

//returning the function Navbar
export default Navbar;
