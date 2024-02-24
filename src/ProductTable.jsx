import ProductRowTable from "./ProductRowTable.jsx";

export default function ProductTable({ products, filterText, inStockOnly }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRowTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </tbody>
    </table>
  );
}
