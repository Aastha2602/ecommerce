import { useState } from "react";

const allItems = [
  {name: "Boult audio BassBuds", price: 8.99, category: 'Earphones'},
  {name: "Zebronics Zeb-Calyx", price: 5.00, category: 'Earphones'},
  {name: "JBL C100SI In-Ear", price: 11.50, category: 'Earphones'},
  {name: "boAt Bassheads 242 In-Ear", price: 9.99, category: 'Earphones'},
  {name: "Infinity Zip 20 wired", price: 3.50, category: 'Earphones'},
  {name: "Noise AirBuds+", price: 19.50, category: 'Earbuds'},
  {name: "Boat Airdopes 121v2", price: 17.99, category: 'Earbuds'},
  {name: "pTron Bassbuds Plus", price: 12.72, category: 'Earbuds'},
  {name: "Sony WF-C500", price: 32.45, category: 'Earbuds'},
  {name: "OnePlus Buds Z2", price: 20.99, category: 'Earbuds'},
  {name: "Boat Rockerz 450 pro", price: 7.99, category: 'Headphones'},
  {name: "Boat Bassheads 900", price: 12.99, category: 'Headphones'},
  {name: "Philips audio SHK", price: 5.29, category: 'Headphones'},
  {name: "Sony MDR-ZX110A wired", price: 7.99, category: 'Headphones'},
  {name: "pTron Studio Lite Stereo", price: 4.99, category: 'Headphones'},
];

const App = () => {

  const[cart,setCart] = useState([])

  const addToCart=(menuItem) =>{
    setCart((oldCart) => {
      return [...oldCart,menuItem]
    })
  }

  return (
    <div className="App">
      <h1>List Items</h1>
      {allItems.map((menuItem) => (
          <li key={menuItem.name}>
            {menuItem.name} - {menuItem.price} -{menuItem.category}
            <button onClick={() => addToCart(menuItem) }>Add to cart</button>
          </li>
        ))}
        <h1>Cart</h1>
        {cart.map(cartItem =>(
          <li key={cartItem.name}>
          {cartItem.name} - {cartItem.price} -{cartItem.category}
        </li>
        ))}
    </div>
  );
}

export default App;
