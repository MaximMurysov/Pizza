interface Pizza {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const pizzas: Pizza[] = [
  { id: 1, name: "Маргарита", price: 450, quantity: 0 },
  { id: 2, name: "4 сыра", price: 550, quantity: 0 },
  { id: 3, name: "Мясная", price: 650, quantity: 0 },
];
