import styles from "./styles.module.css";
function PizzaCard({
  elem,
  inCart,
  incrementPizza,
  decrementPizza,
  addToCart,
}) {
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
