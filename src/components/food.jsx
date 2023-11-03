import '../css/food.css';

export default function Food() {
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
