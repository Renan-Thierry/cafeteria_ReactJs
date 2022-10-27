import Food from "./Food";

function App() {
  const foods = [
    {
    name: "Hamburguer",
    image: "img/hamburguer.jpg"
    },
    {
    id: 2,
    name: 'Sanduíche',
    image: 'img/Sanduiche.jpg',
    },
    {
    id: 3,
    name: 'Milk Shake',
    image: 'img/Milk_shake.jpeg',
    },
    {
    id: 4,
    name: 'Suco',
    image: 'img/suco.jpg',
    },
  ]

  return (
    <>
    <div className="container">
        <h1 className="mt-5 text-center">Menu</h1>
    <div className="text-right">
      <button
      type="button"
      className="btn btn-secondary rounded-cicle mr-4 font-weight-bold"
      data-toggle="modal"
      data-target="#formFoodModal">
      +
      </button>
    </div>
      <section className="card-deck my-3">
      {foods.map((food) =>{
          return <Food food={food} key={food.id} />
      })}
      </section>
      </div>
    </>
  );
}

export default App;