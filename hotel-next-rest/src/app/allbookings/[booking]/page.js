"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Booking = ({ params }) => {
    const [cus,setCus] = useState({});
  // console.log(params.booking)
  useEffect(() => {
    const getbokking = async () => {
      let res = await axios.get(
        `http://127.0.0.1:8000/getbooking/${params.booking}/`
      );
      console.log(res.data);
      setCus(res.data);
    };
    getbokking();
  }, []);
  return (
    <>
      <div className="container-fluid bg-light" style={{width:"100%",height:"100vh"}}>
        <div className="row justify-content-center pt-4">
          <div className="col-md-6">
            <h4 className="text-center">Booking Details </h4>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">ID</th>
                  <th scope="col"></th>
                  <th scope="col">{cus.id}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-success">
                  <th scope="row">Customer Name</th>
                  <td></td>
                  <td>{cus.cus_name}</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">Room No. Alloted</th>
                  <td></td>
                  <td>{cus.room_no}</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Room Amount</th>
                  <td></td>
                  <td>Rs. {cus.amount}</td>
                </tr>
                <tr className="table-info">
                  <th scope="row">Check In Date</th>
                  <td></td>
                  <td>
                  <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  disabled
                  value={cus.check_in_date}
                />
                  </td>
                </tr>
                <tr className="table-primary">
                  <th scope="row">Check In Date</th>
                  <td></td>
                  <td>
                  <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  disabled
                  value={cus.check_out_date}
                />
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
