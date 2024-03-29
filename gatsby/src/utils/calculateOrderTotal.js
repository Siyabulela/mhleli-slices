import { calculatePizzaPrice } from './calculatePizzaPrice';
import formatMoney from './formatMonet';

export default function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  return formatMoney(total);
}
