"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [roomdata, setRoomdata] = useState([]);
  const [cus_name,setcusname] = useState("");
  const [room_no,setroomno] = useState("");
  const [amount,setamount] = useState("");
  const [check_in_date,setcheckindate] = useState("");
  const [check_out_date,setcheckoutdate] = useState("");
  
  useEffect(() => {
    const getRoomNo = async () => {
      const room = await axios.get("http://127.0.0.1:8000/roomsapi/");
      setRoomdata(room.data['res']);
      console.log(amount)
    };
    getRoomNo();
  },[]);


  const setRoomAmount = async (e) =>{
    try{
    const r_no = parseInt(e.target.value)
    setroomno(r_no)
    let res = await axios.get(`http://127.0.0.1:8000/roomamount/${r_no}/`)
    res = res.data
    setamount(res['res'])
    }catch(err){}
  }


  const submitBooking = async (e) =>{
    e.preventDefault();
    console.log(cus_name,room_no,amount,check_in_date,check_out_date);
    console.log(typeof(check_in_date))
    await axios.post("http://127.0.0.1:8000/booking/",
    {cus_name:cus_name,room_no:parseInt(room_no),amount:parseInt(amount),check_in_date:check_in_date,check_out_date:check_out_date})
    const res =await axios.patch("http://127.0.0.1:8000/roomsapi/",{room_no})
    console.log(res.data)
    window.location.reload()
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 border border-2 mt-4 pb-4">
            <h3 className="text-center mt-4">Book a Room</h3>
            <form action="" onSubmit={submitBooking}>
              <div className="form-group mt-2">
                <label>Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  onChange={(e)=>setcusname(e.target.value)}
                />

              </div>
              <div className="form-group mt-2">
              <label>Room No.</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e)=>setRoomAmount(e)}
                >
                        <option value="">Select Rooms</option>


                    {roomdata.map((item)=>(
                        <>
                        {item.is_available ? 
                  <option  key={item.id} value={item.room_no}  >{item.room_no}</option>
                        
                    :
                    null}
                        </>

                    ))}
                </select>
              </div>
              <div className="form-group mt-2">
                <label>Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  value={amount}
                  disabled
                />
              </div>
              <div className="form-group mt-2">
                <label>Check In Date</label>
                <input
                  type="date"
                  className="form-control input-group date"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setcheckindate(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label>Check Out Date</label>
                <input
                  type="date"
                  className="form-control input-group date"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setcheckoutdate(e.target.value)}
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
