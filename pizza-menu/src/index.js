import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian Oil",
    photoName: "./aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg",
    price: 200,
    soldOut: false,
  },

  {
    name: "Pizzarico",
    ingredients: "Bread with Italian mainzed meat",
    photoName: "./chad-montano-MqT0asuoIcU-unsplash.jpg",
    price: 200,
    soldOut: false,
  },

  {
    name: "Quattro Stagioni",
    ingredients: "Whet with sour milk and gem",
    photoName: "./crispy-mixed-pizza-with-olives-sausage.jpg",
    price: 200,
    soldOut: false,
  },

  {
    name: "Margherita",
    ingredients: "Bread with Italian Oil",
    photoName: "./david-nuescheler-gUBJ9vSlky0-unsplash.jpg",
    price: 200,
    soldOut: false,
  },

  {
    name: "Capricciosa",
    ingredients: "Bread with Italian Oil",
    photoName: "./eiliv-aceron-M-pEl_nv1Q0-unsplash.jpg",
    price: 200,
    soldOut: false,
  },

  {
    name: "Vegetariana",
    ingredients: "Bread with Italian Oil",
    photoName: "./ivan-torres-MQUqbmszGGM-unsplash.jpg",
    price: 200,
    soldOut: false,
  },
  {
    name: "Calzone",
    ingredients: "Bread with Italian Oil",
    photoName: "./nicolas-perondi-UxRhrU8fPHQ-unsplash.jpg",
    price: 200,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div className="images">
      <img src="pizzas/image7.jpg" />
      <h2>Pizza Spinaci</h2>
      <p>Bread with Italian Oil</p>
    </div>
  );
}

function Header() {
  return <h1 className="header">Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div className="Menu">
      <h2>Our Menu</h2>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closingHour = 11;
  const isOpen = hour >= hour <= closingHour;
  console.log(isOpen);
  //if (hour >= openHour) alert("We are currently open!!");
  //else {
  //alert("The store is currently closed");

  return (
    <footer>{new Date().toLocaleTimeString()}. We are currently open </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
