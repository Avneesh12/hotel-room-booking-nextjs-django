"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const Room = ({params}) =>{
    const [roomdata,setRoomdata] = useState([])
    useEffect(()=>{
        const getroom = async () =>{
            let res = await axios.get(`http://127.0.0.1:8000/roomsapi/${params.room}`)
            res = res.data
            setRoomdata(res['res'])
            console.log(res['res'])

        }
        getroom()
    },[])
    return(
        <>
            <div className="container-fluid bg-light" style={{width:"100%",height:"100vh"}}>
        <div className="row justify-content-center pt-4">
          <div className="col-md-6">
            <h4 className="text-center">Booking Details </h4>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Room No.</th>
                  <th scope="col"></th>
                  <th scope="col">{roomdata.room_no}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-success">
                  <th scope="row">Room Type</th>
                  <td></td>
                  <td>{roomdata.room_type}</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">Price/Rent</th>
                  <td></td>
                  <td>Rs. {roomdata.amount}</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Is Available</th>
                  <td></td>
                  <td>{roomdata.is_available ? "Yes" : "No"}</td>
                </tr>
                
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </>
    )
}

export default Room