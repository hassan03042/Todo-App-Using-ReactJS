function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-around items-center">
      <button
        onClick={() => setFilter("All")}
        className={`${
          filter == "All"
            ? "bg-teal-700 text-white font-semibold"
            : "bg-teal-100"
        } p-2 px-4 rounded-md`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={`${
          filter == "Completed"
            ? "bg-teal-700 text-white font-semibold"
            : "bg-teal-100"
        } p-2 px-4 rounded-md`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("Uncompleted")}
        className={`${
          filter == "Uncompleted"
            ? "bg-teal-700 text-white font-semibold"
            : "bg-teal-100"
        } p-2 px-4 rounded-md`}
      >
        Uncompleted
      </button>
    </div>
  );
}

export default FilterButtons;
