import { useContext } from "react";
import { CounterContext } from "../Context/counter";

const Counter = () => {
  const counterContext = useContext(CounterContext); // Renamed to counterContext
  return (
    <div className="justify-center space-y-2 text-black space-x-2 item-center text-center">
      <button
        onClick={() => counterContext.setCount(counterContext.count + 1)}
        className="border-blue-700 bg-blue-300 text-2xl rounded-lg p-2"
      >
        Increment
      </button>
      <button
        onClick={() => counterContext.setCount(counterContext.count - 1)} // Added onClick handler for Decrement
        className="border-blue-700 text-2xl bg-blue-300 rounded-lg p-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
