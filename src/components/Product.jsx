import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

const Product = ({ id, nom, description, catégorie, prix, deleteItem , editItem}) => {

  return (
    <div className="col">
      <div
        className="card mb-4 rounded-3 shadow-sm border-primary product-card"
        id={id}
      >
        <div className="card-header py-3 text-bg-primary border-primary">
          <Link to={"/products-detaile/"+id}>
            <h4 className="my-0 fw-normal text-white">
              {nom? nom.split(" ").slice(0, 5).join(" "):""}
            </h4>
          </Link>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${prix}
          </h1>
          <p>{ description? description.split(" ").slice(0, 20).join(" "):""}</p>
          <h4>{catégorie}</h4>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className=" btn btn-danger text-white rounded rounded-circle action-icon"
            onClick={() => deleteItem(id)}
          >
            <MdDelete />
          </button>

          <Link
            to={`/add-product/${id}`}
            type="button"
            className=" btn btn-warning text-white rounded rounded-circle ms-3 action-icon"
          >
            <MdEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product


/////////////////////////////////
// const AddTask = ({ onAdd }) => {
//   const [text, setText] = useState("");
//   const [day, setDay] = useState("");
//   const [reminder, setReminder] = useState(false);
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!text) {
//       alert("please add atask");
//       return;
//     }
//     onAdd({ text, day, reminder });
//     // console.log(onAdd);
//     setText("");
//     setDay("");
//     setReminder("");
//   };