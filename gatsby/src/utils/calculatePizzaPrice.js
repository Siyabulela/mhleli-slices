const sizes = {
  // S: 0.75,
  // M: 1,
  // L: 1.25,
  S: 0.4,
  M: 0.6,
  L: 0.9,
  R: 130,
};

export function calculatePizzaPrice(cents, size) {
  return (cents * sizes[size]) / 10;
}
