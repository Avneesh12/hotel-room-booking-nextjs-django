"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Rooms = () => {
    const [rooms,setRooms] = useState([])
    useEffect(()=>{
        const getallrooms = async () =>{
            let res = await axios.get("http://127.0.0.1:8000/roomsapi/");
            res = res.data;
            setRooms(res['res'])
        }
        getallrooms()
    },[])

  return (
    <>
      <div
        className="container-fluid bg-light"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="row justify-content-center pt-4">
          <div className="col-md-6">
            <h4 className="text-center">Room Details </h4>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Room No.</th>
                  <th scope="col">Is Available</th>
                  <th scope="col">More About Room</th>
                </tr>
              </thead>
              <tbody>
              {rooms.map((item)=>(
                <tr className="table-success">
                    <th scope="row">{item.room_no}</th>
                    <td>{item.is_available ? "Yes" : "No"}</td>
                    <td>
                    <Link href={`rooms/${item.id}`}>View Details</Link>
                    </td>
                </tr>
                    ))}
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
