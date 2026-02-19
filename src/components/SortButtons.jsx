import styles from "./styles.module.css";

function SortButtons({ setSortType, setCart }) {
  const sortPizzaItems = [
    { label: "По умолчанию", value: "none" },
    { label: "По цене", value: "price" },
    { label: "По количеству", value: "quantity" },
  ];
  return (
    <>
      <div className={styles.sortPizza}>
        {sortPizzaItems.map((elem) => (
          <div key={elem.value}>
            <button
              className={styles.sortPizzaElem}
              onClick={() => setSortType(elem.value)}
            >
              {elem.label}
            </button>
          </div>
        ))}
      </div>
      <button className={styles.sortPizzaElemClear} onClick={() => setCart([])}>
        Очисить все
      </button>
    </>
  );
}
export default SortButtons;
