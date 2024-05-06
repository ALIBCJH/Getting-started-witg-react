import React from "react";
import ReactDOM from "react-dom/client";
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
    soldOut: true,
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
  },
  {
    name: "Calzone",
    ingredients: "Bread with Italian Oil",
    photoName: "./nicolas-perondi-UxRhrU8fPHQ-unsplash.jpg",
    price: 200,
    soldOut: false,
  },
  {
    name: "Pizzarina",
    ingridients: "Wheat , Barley and oil",
    PhotoName: "/pizzas/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We are currently open </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img
        src="./aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg"
        alt="Pizza spinaci"
      />
      <h2>Pizza Spinaci</h2>
      <p>Bread with italian Oil</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
