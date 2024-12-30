const AddButton = () => {
  const handleClick = () => {
    alert("Agregando tarea...");
  };

  return (
    <button className="add-button" onClick={handleClick}>
      +
    </button>
  );
};

export default AddButton;
