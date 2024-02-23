export default function MyButton() {
  function handleClick() {
    alert("clicked me");
  }

  return <button onClick={handleClick}>Click me</button>;
}
