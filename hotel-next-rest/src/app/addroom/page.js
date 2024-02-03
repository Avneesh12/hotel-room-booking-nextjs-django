"use client"
import axios from "axios";
import { useState } from "react";

const page = () => {
    const [room_no,setRoomno] = useState("");
    const [room_type,setRoomtype] = useState("");
    const [amount,setRoomprice] = useState("");
    

    const saveRoomData = async (e) =>{
        e.preventDefault()
        await axios.post("http://127.0.0.1:8000/roomsapi/",{room_no,room_type,amount});
        setRoomprice("")
        setRoomtype("")
        setRoomno("")
    }
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5 border border-2 mt-4 pb-4">

            <h3 className="text-center mt-4">Add Rooms</h3>
            <form onSubmit={saveRoomData}>
              <div className="form-group mt-2">
                <label >Room Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Room Number"
                  onChange={(e)=>setRoomno(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label >Room Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Room Type Ex - 2BHK"
                  onChange={(e)=>setRoomtype(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label >Price/Rent</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Room Price"
                  onChange={(e)=>setRoomprice(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
