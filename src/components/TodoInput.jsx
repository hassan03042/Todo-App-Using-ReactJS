function TodoInput({ onChange, onClick, value }) {
  // console.log("Value In Todo Component", value)
  return (
    <div className="my-6">
      <input
        onChange={onChange}
        className="border rounded-md p-3"
        placeholder="Add Todo"
        value={value}
      />
      <button
        onClick={onClick}
        disabled={value === ""}
        style={{ backgroundColor: value === "" && "lightgray" }}
        className="p-3 ml-2 rounded-md bg-teal-200"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
