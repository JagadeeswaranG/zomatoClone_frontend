import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listRestarunt } from "./api/restarunts";

function ListRestarunts() {
  const [restarunt, setRestarunt] = useState([]);

  useEffect(() => {
    getRestarunts();
  }, []);

  async function getRestarunts() {
    try {
      let res = await listRestarunt();
      setRestarunt(res.data);
    } catch (error) {
      alert("something went wrong");
    }
  }

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Restarunts</h1>
      <Link to={"/portal/create-restarunts"} className="btn btn-primary m-2">
        Add Restarunt
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
                  <th>Name</th>
                  <th>Image</th>
                  <th>ownerName</th>
                  <th>ownerEmail</th>
                  <th>ownerPhone</th>
                  <th>openTime</th>
                  <th>closeTime</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {restarunt.map((res,index) => {
                  return (
                    <tr key={index}>
                      <td>{res.name}</td>
                      <td>
                        <img src={res.url} width="100" height={"50"} />
                      </td>
                      <td>{res.ownerName}</td>
                      <td>{res.ownerEmail}</td>
                      <td>{res.ownerphone}</td>
                      <td>{res.openTime}</td>
                      <td>{res.closeTime}</td>
                      <td>
                        <Link
                          to={`/portal/list-dishes/${res._id}`}
                          className="btn btn-sm btn-success ml-1"
                        >
                          View Dish
                        </Link>
                      </td>
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

export default ListRestarunts;
