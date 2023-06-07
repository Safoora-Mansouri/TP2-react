import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

////////////////////////////////////////////////////////////

const ProductDetail = ({ productsList }) => {
  const [product, setProduct] = useState({});
  const { nom, description, catégorie, prix, image } = product;

  const { id } = useParams();

  useEffect(() => {
    //edit mode
    if (id) {
      const item = productsList.find((item) => item.id == id);
      setProduct(item);
    }
  }, []);

  return (
    <div className="col text-center">
      {image ? <img src={image} alt="" width="300" /> : null}
      <div className=" py-3  border-primary">
        <h1 className="my-0 fw-normal">
          {nom ? nom.split(" ").slice(0, 5).join(" ") : ""}
        </h1>
      </div>
      <div className="card-body">
        <h3 className="card-title pricing-card-title">
          ${prix}
          <small className="text-body-secondary fw-light">/mo</small>
        </h3>
        <p>
          {description ? description.split(" ").slice(0, 20).join(" ") : ""}
        </p>
        <h4>{catégorie}</h4>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default ProductDetail
