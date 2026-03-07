import styles from "./styles.module.css";

interface Pizza {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface SortButtonsProps {
  setSortType: (value: string) => void;
  setCart: (value: Pizza[]) => void;
  sortType: string;
}

function SortButtons({ setSortType, setCart, sortType }: SortButtonsProps) {
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
              style={{
                outline:
                  sortType === elem.value ? "1px green solid" : undefined,
              }}
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
