import "./App.css";
import DropDown from "./components/DropDown";
import FoodList from "./components/FoodList";
import useFood from "./hook/useFood";

function App() {
  const { food, setFood, handleFilterFood } = useFood();

  return (
    <div className="min-h-screen">
      <DropDown handleFilterFood={handleFilterFood} />

      <div className="flex flex-row justify-start items-center flex-wrap m-10 gap-5">
        {food.map((item, index) => {
          return <FoodList item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
