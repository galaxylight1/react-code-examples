export default function SearchBar({ products, filterText, inStockOnly }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input type="text" placeholder="Search..." style={{ width: "200px" }} value={filterText} />
        <label>
          <input type="checkbox" checked={inStockOnly} /> Only show products in stock
        </label>
      </div>
    </>
  );
}