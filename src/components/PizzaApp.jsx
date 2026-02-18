import { useState } from "react";
import styles from "./styles.module.css";
import { pizzas } from "./main";
function PizzaApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const newPizza = {
      id: crypto.randomUUID(),
      name: pizza.name,
      price: Number(pizza.price),
      inCart: false,
      quantity: 1,
    };
    setCart([...cart, newPizza]);
  };
  const incrementPizza = (id) => {
    setCart(
      cart.map((elem) =>
        elem.id === id ? { ...elem, quanity: elem.quanity + 1 } : elem,
      ),
    );
  };
  const decrementPizza = (id) => {
    setCart(
      cart.map((elem) =>
        elem.id === id ? { ...elem, quanity: elem.quanity - 1 } : elem,
      ),
    );
  };
  return (
    <div className={styles.pizza}>
      <div className={styles.pizzaContainer}>
        <div className={styles.pizzaList}>
          {pizzas.map((elem) => (
            <div key={elem.name} className={styles.pizzaItem}>
              <p className={styles.pizzaName}>{elem.name}</p>
              <p className={styles.pizzaPrice}>{elem.price}</p>
              <button onClick={() => addToCart(elem)}>Добавить</button>
            </div>
          ))}
        </div>
        <div className={styles.cartContainer}>
          {cart.map((elem) => (
            <div key={elem.id} className={styles.cartItem}>
              <p>{elem.name}</p>
              <button onClick={() => incrementPizza(elem.id)}>+</button>
              <p>{elem.quantity}</p>
              <button
                disabled={elem.quanity <= 1}
                onClick={() => decrementPizza(elem.id)}
              >
                -
              </button>
              <p>{elem.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PizzaApp;
