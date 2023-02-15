import axios from "axios";
import { format } from "date-fns";
import { differenceInCalendarDays } from "date-fns/fp";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlaceImg from "../PlaceImg";
import AccountNav from "./AccountNav";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mb-3 idi2">
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className=" grow flex gap-2 flex-col">
                <h2 className="text-xl font-bold">{booking.place.title}</h2>
                <div className=" -mt-2">
                  Date: {format(new Date(booking.checkIn), "dd-MM-yyyy")} until{" "}
                  {format(new Date(booking.checkOut), "dd-MM-yyyy")}
                </div>
                <div className="text-xl">
                  {differenceInCalendarDays(
                    new Date(booking.checkIn),
                    new Date(booking.checkOut)
                  )}{" "}
                  nights | Price: {booking.price} €
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
