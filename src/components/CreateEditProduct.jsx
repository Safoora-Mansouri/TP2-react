import React, { useState } from 'react'

function CreateEditProduct({createItem}) {
const [productInfo, setProductInfo] = useState({
  nom: "",
  description: "",
  prix: "",
  catégorie:""
});

const onSubmit= (e)=>{
    e.preventDefault();
    console.log(productInfo);
     const id= Math.floor(Math.random() * 1000);
     createItem();
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
    </div>
  );
}

export default CreateEditProduct