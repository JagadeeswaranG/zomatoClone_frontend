import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDish } from "./api/dish";

function ListDishes() {
  const params = useParams();
  const [dish, setDish] = useState([]);

  useEffect(() => {
    dishData();
  }, []);

  async function dishData() {
    try {
      const dishes = await getDish(params.rId);
      setDish(dishes.data);
    } catch (error) {
      alert("Something went wrong");
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Dishes</h1>
      <Link
        to={`/portal/create-dishes/${params.rId}`}
        className="btn btn-primary m-2"
      >
        Add Dish
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>DishName</th>
                  <th>Image</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {dish.map((res,index) => {
                  return (
                    <tr key={index}>
                      <td>{res.dishName}</td>
                      <td>
                        <img src={res.url} width="100" height={"50"} />
                      </td>
                      <td>{res.type}</td>
                      <td>{res.price}</td>
                      <td>{res.ingredients}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDishes;
