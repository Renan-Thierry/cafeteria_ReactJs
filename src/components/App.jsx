import { useRef, useState } from 'react';
import data from '../models/foods';
import Food from './Food';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [foods, setFoods] = useState(data);
  const buttonAdd = useRef(null);

  const handleClick = () => {
    const food = {
      id: 3,
      name: "Batata",
      image: "img/Milk_shake.jpeg",
    };

    setFoods([...foods, food]);

    buttonAdd.current.disabled = true;

  };
  return (
    <div className="Container">
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
          data-toggle="modal"
          data-target="#formFoodModal"
          onClick={handleClick}
          ref={buttonAdd}
        >
          +
        </button>
      </div>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
