import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from "../data";

function CreateEditProduct({createItem, editItem}) {
const [productInfo, setProductInfo] = useState({
  nom: "",
  description: "",
  prix: "",
  catégorie:""
});
 const navigator= useNavigate();
const {id}= useParams();

useEffect(() => {

 //edit mode
 if (id) {
    const item=products.find(item => item.id == id)
    setProductInfo(item);
 }
},[])



const onSubmit= (e)=>{
    e.preventDefault();
 
    if (id) {
       editItem(productInfo);
    }else{
       const id = Math.floor(Math.random() * 1000);
       createItem(productInfo);
      
    }
     navigator("/produits");
    
}

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Nom</label>
          <input
            type="text"
            placeholder="Add Task"
            value={productInfo.nom}
            onChange={(e) =>
              setProductInfo({ ...productInfo, nom: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={productInfo.description}
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
          />
        </div>
        <div className="form-control form-control-check">
          <label>Prix</label>
          <input
            type="text"
            value={productInfo.prix}
            onChange={(e) =>
              setProductInfo({ ...productInfo, prix: e.target.value })
            }
          />
        </div>
        <div className="form-control form-control-check">
          <label>Catégorie</label>
          <input
            type="text"
            value={productInfo.catégorie}
            onChange={(e) =>
              setProductInfo({ ...productInfo, catégorie: e.target.value })
            }
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Save Task" />
      </form>
      <Link to="/produits">Go back</Link>
    </div>
  );
}

export default CreateEditProduct