import styles from "./styles.module.css";
interface Pizza {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  elem: Pizza;
  incrementPizza: (value: number) => void;
  decrementPizza: (value: number) => void;
}
function CartItem({ elem, incrementPizza, decrementPizza }: CartItemProps) {
  return (
    <div className={styles.cartItem}>
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
      <p>{elem.price} ₽</p>
      <p>= {elem.price * elem.quantity} ₽</p>
    </div>
  );
}
export default CartItem;
