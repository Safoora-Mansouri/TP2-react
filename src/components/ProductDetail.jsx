import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = ({fetchProduct}) => {


    const [product, setProduct] = useState({})
    const {nom, description, catégorie, prix, image}=product

     const { id } = useParams();
     useEffect(()=>{
        const getProduct = async ()=>{
            const data = await fetchProduct(id);
            setProduct(data);

        }
        getProduct();
     },[]);

     
  return  (
  <div className="col">
    <img src={image} alt="" />
    <div className="card-header py-3 text-bg-primary border-primary">
      <h4 className="my-0 fw-normal">
        {nom ? nom.split(" ").slice(0, 5).join(" "): ""}
      </h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        ${prix}
        <small className="text-body-secondary fw-light">/mo</small>
      </h1>
      <p>{description ? description.split(" ").slice(0, 20).join(" "): ""}</p>
      <h4>{catégorie}</h4>
    </div>
    <div className="card-footer">
      
    </div>
  </div>
);

}

export default ProductDetail
