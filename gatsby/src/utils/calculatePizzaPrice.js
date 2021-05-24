const sizes = {
  // S: 0.75,
  // M: 1,
  // L: 1.25,
  S: 0.40,
  M: 0.60,
  L: 0.90,
};

export function calculatePizzaPrice(cents, size) {
  return (cents * sizes[size]) / 10;
}
