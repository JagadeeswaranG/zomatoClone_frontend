import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createDish } from "./api/dish";

function CreateDishes() {
  const params = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      dishName: "",
      type: "",
      price: "",
      ingredients: [
        
      ],
      url: ""
    },
    onSubmit: async (values) => {
      try {
        let dish = await createDish(params.rId, values);

        navigate(`/portal/list-dishes/${params.rId}`);
      } catch (error) {
        alert("something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label>Name</label>
            <input
              name="dishName"
              onChange={formik.handleChange}
              value={formik.values.dishName}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Type</label>
            <select
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
              className="form-control"
            >
              <option value="Veg">Veg</option>
              <option value="Non-veg">Non-veg</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>Price</label>
            <input
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <label>Image</label>
            <input
              name="url"
              onChange={formik.handleChange}
              value={formik.values.url}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <label>Ingredients</label>
            <input
              name="ingredients"
              onChange={formik.handleChange}
              value={formik.values.ingredients}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary m-1"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateDishes;
