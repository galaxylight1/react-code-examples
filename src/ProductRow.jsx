export default function ProductRow({ name, stocked, price }) {
  return (
    <tr>
      <th
        style={{
          color: stocked ? "black" : "red",
        }}
      >
        {name}
      </th>
      <th>{price}</th>
    </tr>
  );
}
