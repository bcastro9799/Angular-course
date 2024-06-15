export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};
const tablet: Product = {
  description: "iPad Air",
  price: 250,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  let total = 0;
  const { tax, products } = options;
  products.forEach(({ price }) => {
    // let { price } = product;
    total += price;
  });
  return [total, total * tax];
}
const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: tax });
console.log("Total", total);
console.log("Tax", taxTotal);
export {};
