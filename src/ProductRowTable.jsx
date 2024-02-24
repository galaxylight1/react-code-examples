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
    <table>
      <thead>
        <tr>Fruits</tr>
      </thead>
      <tbody>
        {fruits.map(fruit => 
          <tr>
            <th style={{
                color: fruit.stocked ? 'black' : 'red'
            }}>{fruit.name}</th>
            <th>{fruit.price}</th>
          </tr>
        )}
      </tbody>
    </table>
  );
}
