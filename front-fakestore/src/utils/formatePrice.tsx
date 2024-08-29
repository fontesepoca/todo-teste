export default function formatePrice(price: number): string {
  const formattedAmount = price.toFixed(2);
  return `$${formattedAmount}`;
}
