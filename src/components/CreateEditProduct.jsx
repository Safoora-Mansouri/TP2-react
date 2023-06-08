import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////

function CreateEditProduct({ createItem, editItem, productsList }) {
  const [productInfo, setProductInfo] = useState({
    nom: "",
    description: "",
    prix: "",
    catégorie: "",
  });
  ///////////////////////////////////////////////////////////////////////////

  const navigator = useNavigate();

  ///////////////////////////////////////////////////////////////////////

  let { id } = useParams();

  /////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //edit mode
    if (id) {
      const item = productsList.find((item) => item.id == id);
      setProductInfo(item);
    }
  }, []); 

  ////////////////////////////////////////////////////////////////////////

  const onSubmit = (e) => {
    e.preventDefault();

    if (id) {
       productInfo.id = id;
      editItem(productInfo);
    } else {
      // id=new Date.now();
       id = Math.floor(Math.random() * 1000)+21;
      productInfo.id = id;
      createItem(productInfo);
    }

    /////////////////////////////////////////////////////////////////
    navigator("/produits");
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-center mb-4">Add Product</h2>
      <div className="col-lg-4">
        <form className="add-form shadow p-4 mt-4" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nom" className="text-center">
              Nom
            </label>
            <input
              id="nom"
              type="text"
              className="form-control"
              placeholder="Add Task"
              value={productInfo.nom}
              onChange={(e) =>
                setProductInfo({ ...productInfo, nom: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="text-center">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="form-control"
              placeholder="Add Day & Time"
              value={productInfo.description}
              onChange={(e) =>
                setProductInfo({ ...productInfo, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix" className="text-center">
              Prix
            </label>
            <input
              id="prix"
              type="text"
              className="form-control"
              value={productInfo.prix}
              onChange={(e) =>
                setProductInfo({ ...productInfo, prix: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="categorie" className="text-center">
              Catégorie
            </label>
            <input
              id="categorie"
              type="text"
              className="form-control"
              value={productInfo.catégorie}
              onChange={(e) =>
                setProductInfo({ ...productInfo, catégorie: e.target.value })
              }
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Save Task" />
        </form>
        <div className="text-center mt-3">
          <Link to="/produits">Go back</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateEditProduct;
