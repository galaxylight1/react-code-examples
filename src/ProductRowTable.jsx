import ProductRow from "./ProductRow";

export default function ProductRowTable({ products }) {
  const fruits = [];
  const vegetables = [];

  products.forEach((product) => {
    if (product.category == "Fruits") {
      fruits.push(product);
    } else {
      vegetables.push(product);
    }
  });

  return (
    <>
      <table>
        <thead>
          <tr>Fruits</tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <ProductRow
              name={fruit.name}
              stocked={fruit.stocked}
              price={fruit.price}
            />
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>Vegetables</tr>
        </thead>
        <tbody>
          {vegetables.map((vegetable) => (
            <tr>
              <th
                style={{
                  color: vegetable.stocked ? "black" : "red",
                }}
              >
                {vegetable.name}
              </th>
              <th>{vegetable.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
