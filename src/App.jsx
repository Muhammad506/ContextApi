import { useContext } from "react";
import { CounterContext } from "./Context/counter";
import Counter from "./components/Counter";
const App = () => {
  const counterState = useContext(CounterContext);
  console.log("Context", counterState);
  return (
    <div className="App text-white font-bold  p-4  space-y-6 bg-black h-screen">
      <h1 className=" flex justify-center  text-6xl "> Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
