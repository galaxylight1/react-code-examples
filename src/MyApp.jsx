import { useState } from 'react';
import MyButton from './MyButton';
import ProductFilterableTable from './ProductFilterableTable';

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>My App</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}