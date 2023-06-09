import Product from "./Product";
import { Link } from "react-router-dom";
import { MdCreate } from "react-icons/md";


const Products = ({productsList, deleteItem}) => {


  return (
    <div className="container my-5">
      <Link
        to="/add-product"
        type="button"
        className="btn btn-success text-white rounded rounded-circle action-icon"
      >
        <MdCreate />
      </Link>

      <section className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {productsList.map((item) => (
          <Product key={item.id} {...item} deleteItem={deleteItem} />
        ))}
      </section>
    </div>
  );
};

export default Products;
