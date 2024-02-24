export default function SearchBar({
  products,
  onFilterTextChange,
  onInStockOnlyChange,
  filterText,
  inStockOnly
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{ width: "200px" }}
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </div>
    </>
  );
}
