import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
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

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openTime = 10;
  const closeTime = 20;
  const isOpen = hour >= openTime && hour <= closeTime;
  console.log(isOpen);

  hour <= openTime && hour >= closeTime
    ? alert("We are currently closed")
    : alert("We are Opened");
  return (
    <footer>{new Date().toLocaleTimeString()}.We are currently Open</footer>
  );
};
function Pizza() {
  return (
    <dev>
      <img src="pizzas/Salamino.jpg" alt="salamino" />
      <h2>Pizza Salamino</h2>
      <p>Tomato, mozarella, and pepperoni</p>
    </dev>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>
);
