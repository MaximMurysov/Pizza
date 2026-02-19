import styles from "./styles.module.css";
function CartItem({ elem, incrementPizza, decrementPizza }) {
  return (
    <div key={elem.id} className={styles.cartItem}>
      <p>{elem.name}</p>
      <button
        className={styles.buttonActive}
        onClick={() => incrementPizza(elem.id)}
      >
        +
      </button>
      <p>{elem.quantity}</p>
      <button
        className={styles.buttonActive}
        onClick={() => decrementPizza(elem.id)}
      >
        -
      </button>
      <p>{elem.price}</p>
      <p>= {elem.price * elem.quantity}</p>
    </div>
  );
}
export default CartItem;
