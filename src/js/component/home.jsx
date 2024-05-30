import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([
	  "Hacer la cama",
	  "Lavarme las manos",
	  "Comer",
	  "Pasear al perro"
	]);
  
	
	const manejarCambioTarea = (event) => {
	  setTarea(event.target.value);
	};
  
	
	const manejarEnvioTarea = (event) => {
	  event.preventDefault();
	  if (tarea.trim() === "") return;
	  setTareas([...tareas, tarea]);
	  setTarea("");
	};
  
	
	const manejarEliminarTarea = (index) => {
	  const nuevasTareas = tareas.filter((_, tareaIndex) => tareaIndex !== index);
	  setTareas(nuevasTareas);
	};
  
	
	const manejarTeclaEnter = (event) => {
	  if (event.key === "Enter") {
		manejarEnvioTarea(event);
	  }
	};
  
	
	const contarTareas = () => {
	  return tareas.length === 1 ? "1 tarea pendiente" : `${tareas.length} Tareas pendientes`;
	};
  
	return (
	  <div className="container">
		<h1 className="text-center mt-5 text-primary">LISTA DE TAREAS</h1>
		<form onSubmit={manejarEnvioTarea}>
		  <div className="mb-3">
			<input
			  type="text"
			  className="form-control"
			  id="tareaInput"
			  value={tarea}
			  onChange={manejarCambioTarea}
			  onKeyDown={manejarTeclaEnter}
			  placeholder="Escribe tu tarea"
			/>
		  </div>
		</form>
		<ul className="list-group mt-3">
		  {tareas.length === 0 && (
			<li className="list-group-item text-center">No hay tareas, añadir tareas</li>
		  )}
		  {tareas.map((tarea, index) => (
			<li
			  key={index}
			  className="list-group-item d-flex justify-content-between align-items-center"
			>
			  <span>{tarea}</span>
			  <span className="delete-icon" onClick={() => manejarEliminarTarea(index)}>x</span>
			</li>
		  ))}
		</ul>
		<div className="mt-3">
		  <p className="text-start text-black-50">{contarTareas()}</p>
		</div>
	  </div>
	);
  };
  
  export default Home;