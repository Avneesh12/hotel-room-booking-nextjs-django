"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBookings = () => {
    const [booking,setBooking] = useState([]);
    useEffect(()=>{
        const getBookings = async () =>{
            let res = await axios.get("http://127.0.0.1:8000/booking/")
            res = res.data
            console.log(res['res'])
            setBooking(res['res'])
        }
        getBookings()
    },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
          <h4 className="text-center">Booking List</h4>
            <div class="list-group">
                {booking.map((item)=>(
                    <Link
                href={`/allbookings/${item.id}`}
                className="list-group-item list-group-item-action"
                aria-current="true"
                key={item.id}
              >
                 {item.cus_name}
              </Link>
                ))}
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBookings;
