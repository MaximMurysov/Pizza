import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { pizzas } from "./main";
import PizzaCard from "./PizzaCard";
import CartItem from "./CartItem";
import SortButtons from "./SortButtons";

function PizzaApp() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("pizza");
    return saved ? JSON.parse(saved) : [];
  }, []);
  useEffect(() => {
    localStorage.setItem("pizza", JSON.stringify(cart));
  }, [cart]);

  const [sortType, setSortType] = useState("none");
  const getSortedCart = () => {
    if (sortType === "price") {
      return [...cart].sort(
        (a, b) => a.price * a.quantity - b.price * b.quantity,
      );
    }
    if (sortType === "quantity") {
      return [...cart].sort((a, b) => b.quantity - a.quantity);
    }
    return cart;
  };

  const addToCart = (pizza) => {
    const addPizza = {
      id: crypto.randomUUID(),
      name: pizza.name,
      price: pizza.price,
      quantity: 1,
    };
    const isDuplicate = cart.find((elem) => elem.name === pizza.name);
    console.log(isDuplicate);
    if (isDuplicate) {
      setCart(
        cart.map((elem) =>
          elem.name === pizza.name
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem,
        ),
      );
    } else {
      setCart([...cart, addPizza]);
    }
  };

  const decrementPizza = (id) => {
    setCart(
      cart
        .map((elem) =>
          elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem,
        )
        .filter((elem) => elem.quantity > 0),
    );
  };
  const incrementPizza = (id) => {
    setCart(
      cart.map((elem) =>
        elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem,
      ),
    );
  };
  const sumPizza = cart.reduce(
    (acc, elem) => (acc += elem.price * elem.quantity),
    0,
  );

  return (
    <div className={styles.pizza}>
      <div className={styles.pizzaContainer}>
        <div className={styles.pizzaList}>
          {pizzas.map((elem) => {
            const inCart = cart.find((pizza) => elem.name === pizza.name);
            return (
              <PizzaCard
                key={elem.name}
                elem={elem}
                inCart={inCart}
                incrementPizza={incrementPizza}
                decrementPizza={decrementPizza}
                addToCart={addToCart}
              />
            );
          })}
        </div>
        <div className={styles.cartContainer}>
          {getSortedCart().map((elem) => (
            <CartItem
              key={elem.id}
              elem={elem}
              incrementPizza={incrementPizza}
              decrementPizza={decrementPizza}
            />
          ))}
        </div>
        <div>Общая сумма: {sumPizza} ₽</div>
        <div className={styles.sortPizzaContainer}>
          <SortButtons setSortType={setSortType} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}
export default PizzaApp;
