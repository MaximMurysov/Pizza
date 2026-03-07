import styles from "./styles.module.css";

interface Pizza {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface PizzaCardProps {
  elem: Pizza;
  inCart: Pizza | null | undefined;
  incrementPizza: (value: number) => void;
  decrementPizza: (value: number) => void;
  addToCart: (value: Pizza) => void;
}

function PizzaCard({
  elem,
  inCart,
  incrementPizza,
  decrementPizza,
  addToCart,
}: PizzaCardProps) {
  return (
    <div className={styles.pizzaItem}>
      <p>{elem.name}</p>
      <p>{elem.price} ₽</p>
      {inCart ? (
        <div className={styles.addPizza}>
          <button
            className={styles.buttonActive}
            onClick={() => incrementPizza(inCart.id)}
          >
            +
          </button>
          <p>{inCart.quantity}</p>
          <button
            className={styles.buttonActive}
            onClick={() => decrementPizza(inCart.id)}
          >
            -
          </button>
        </div>
      ) : (
        <button className={styles.addBtn} onClick={() => addToCart(elem)}>
          Добавить
        </button>
      )}
    </div>
  );
}
export default PizzaCard;
