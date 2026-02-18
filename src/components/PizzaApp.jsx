import { useState } from "react";
import styles from "./styles.module.css";
import { pizzas } from "./main";
function PizzaApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    console.log(pizza);

    console.log("Ищем:", pizza.name);
    console.log(
      "В корзине:",
      cart.map((c) => c.name),
    );
    console.log(pizza);
    const newPizza = {
      id: crypto.randomUUID(),
      name: pizza.name,
      price: Number(pizza.price),
      quantity: 1,
    };
    const existing = cart.some((elem) => elem.name === pizza.name);
    console.log(existing);
    if (existing) {
      setCart(
        cart.map((elem) =>
          elem.name === pizza.name
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem,
        ),
      );
    } else {
      setCart([...cart, newPizza]);
    }
  };
  const incrementPizza = (name) => {
    setCart(
      cart.map((elem) =>
        elem.name === name ? { ...elem, quantity: elem.quantity + 1 } : elem,
      ),
    );
  };
  const decrementPizza = (name) => {
    setCart(
      cart
        .map((elem) =>
          elem.name === name ? { ...elem, quantity: elem.quantity - 1 } : elem,
        )
        .filter((elem) => elem.quantity > 0),
    );
  };
  const sumTotalPizza = (name) =>
    cart
      .filter((elem) => elem.name === name)
      .reduce((acc, num) => acc + num.price * num.quantity, 0);
  const totalSum = cart.reduce((acc, num) => acc + num.price * num.quantity, 0);
  return (
    <div className={styles.pizza}>
      <div className={styles.pizzaContainer}>
        <div className={styles.pizzaList}>
          {pizzas.map((elem) => {
            const inCart = cart.find((pizza) => elem.name === pizza.name);
            return (
              <div key={elem.name} className={styles.pizzaItem}>
                <p className={styles.pizzaName}>{elem.name}</p>
                <p className={styles.pizzaPrice}>{elem.price}</p>
                {inCart ? (
                  <div className={styles.addPizza}>
                    <button onClick={() => incrementPizza(elem.name)}>+</button>
                    <button onClick={() => decrementPizza(elem.name)}>-</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(elem)}>Добавить</button>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.cartContainer}>
          {cart.map((elem) => (
            <div key={elem.id} className={styles.cartItem}>
              <p>{elem.name}</p>
              <button
                className={styles.addPizza}
                onClick={() => incrementPizza(elem.name)}
              >
                +
              </button>
              <p>{elem.quantity}</p>
              <button
                className={styles.addPizza}
                onClick={() => decrementPizza(elem.name)}
              >
                -
              </button>
              <p>{elem.price}</p>
              <p>= {sumTotalPizza(elem.name)} р</p>
            </div>
          ))}
        </div>
        <h3>total:{totalSum}</h3>
      </div>
    </div>
  );
}
export default PizzaApp;
