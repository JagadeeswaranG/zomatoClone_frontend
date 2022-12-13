import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createRestarunt } from "./api/restarunts";

function CreateRestarunts() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        country: "",
        pin: "",
      },
      ownerName: "",
      ownerEmail: "",
      ownerphone: "",
      url: "",
      openTime: "",
      closeTime: "",
    },
    onSubmit:async (values) => {
      // console.log(values);
      try {
        let restarunt = await createRestarunt(values)
        // console.log(restarunt);
        alert(restarunt.data.message)
        navigate("/portal/list-restarunts")
      } catch (error) {
        alert("Something went wrong")
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Restarunt Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
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
            <label for="appt">Open Time</label>
            <input
              name="openTime"
              onChange={formik.handleChange}
              value={formik.values.openTime}
              className="form-control"
              type="time"
              id="appt"
            />
          </div>
          <div className="col-lg-4">
            <label for="appt">Close Time</label>
            <input
              name="closeTime"
              onChange={formik.handleChange}
              value={formik.values.closeTime}
              className="form-control"
              type="time"
              id="appt"
            />
          </div>
          <div className="col-lg-4">
            <label>OwnerName</label>
            <input
              name="ownerName"
              onChange={formik.handleChange}
              value={formik.values.ownerName}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Phone Number</label>
            <input
              name="ownerphone"
              onChange={formik.handleChange}
              value={formik.values.ownerphone}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Email</label>
            <input
              name="ownerEmail"
              onChange={formik.handleChange}
              value={formik.values.ownerEmail}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label>Image URL</label>
            <input
              name="url"
              onChange={formik.handleChange}
              value={formik.values.url}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <h3>Address:</h3>
        <div className="row">
          <div className="col-lg-4">
            <label>Line 1</label>
            <input
              name="address.line1"
              onChange={formik.handleChange}
              value={formik.values.address.line1}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Line 2</label>
            <input
              name="address.line2"
              onChange={formik.handleChange}
              value={formik.values.address.line2}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>State</label>
            <input
              name="address.state"
              onChange={formik.handleChange}
              value={formik.values.address.state}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>City</label>
            <input
              name="address.city"
              onChange={formik.handleChange}
              value={formik.values.address.city}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Country</label>
            <input
              name="address.country"
              onChange={formik.handleChange}
              value={formik.values.address.country}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Pincode</label>
            <input
              name="address.pin"
              onChange={formik.handleChange}
              value={formik.values.address.pin}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary mt-2" value="Submit" />
      </form>
    </div>
  );
}

export default CreateRestarunts;
