import ProductRowTable from "./ProductRowTable.jsx";

export default function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRowTable products={products} />
      </tbody>
    </table>
  );
}
