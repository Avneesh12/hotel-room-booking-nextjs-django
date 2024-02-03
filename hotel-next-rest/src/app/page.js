import Link from "next/link";
import "./customcss/style.css"
import img from "./images/hotel.jpg"

export default function Home() {
  return (
    <main style={{ backgroundImage: `url(${img.src})`,width:"100%",height:"100vh",backgroundSize:"cover"}}>
      <div className="container-fluid av" >
        <div className="row">
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item pt-4">
                <Link
                  className="nav-link navfont"
                  aria-current="page"
                  href="/addroom"
                >
                  Add Rooms
                </Link>
              </li>
              <li className="nav-item pt-4">
                <Link
                  className="nav-link navfont"
                  aria-current="page"
                  href="/rooms"
                >
                  See All Rooms
                </Link>
              </li>
              <li className="nav-item pt-4">
                <Link
                  className="nav-link navfont"
                  aria-current="page"
                  href="/roombooking"
                >
                  Room Booking
                </Link>
              </li>
              <li className="nav-item pt-4">
                <Link
                  className="nav-link navfont"
                  aria-current="page"
                  href="/allbookings"
                >
                  See All Bookings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </main>
  );
}
