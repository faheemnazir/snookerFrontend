import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../Services/api";
import SectionCard from "../common/SectionCard";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await getAllBookings();
      setBookings(Array.isArray(response) ? response : []);
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.message || "Failed to fetch booking records");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const s = status?.toUpperCase();

    if (s === "COMPLETED" || s === "BOOKED_COMPLETED") {
      return (
        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-[10px] font-semibold border border-green-500/20 uppercase tracking-widest">
          Completed
        </span>
      );
    }

    if (s === "BOOKED" || s === "BOOKING_PENDING") {
      return (
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-semibold border border-blue-500/20 uppercase tracking-widest">
          Booked
        </span>
      );
    }

    if (s === "REFUNDED" || s === "CANCELLED") {
      return (
        <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-[10px] font-semibold border border-red-500/20 uppercase tracking-widest">
          Cancelled
        </span>
      );
    }

    return (
      <span className="px-3 py-1 bg-gray-500/10 text-gray-400 rounded-full text-[10px] font-semibold border border-gray-500/20 uppercase tracking-widest">
        {status || "Unknown"}
      </span>
    );
  };

  return (
    <SectionCard
      title="Arena Bookings"
      description="Monitor all active reservations and payment activity"
    >
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                <th className="text-left py-4 px-4">
                  Table
                </th>
                <th className="text-left py-4 px-4">
                  Guest
                </th>
                <th className="text-left py-4 px-4">
                  Session
                </th>
                <th className="text-left py-4 px-4">
                  Amount
                </th>
                <th className="text-left py-4 px-4">
                  Payment
                </th>
                <th className="text-left py-4 px-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="py-20 text-center text-muted-foreground font-light text-sm">
                    Loading booking records...
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-20 text-center text-muted-foreground font-light text-sm">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => {
                  const tableName = booking?.table?.tableName || "Snooker Table";
                  const startTime = booking?.startTime ? new Date(booking.startTime) : null;
                  const endTime = booking?.endTime ? new Date(booking.endTime) : null;
                  const duration = startTime && endTime ? Math.round((endTime - startTime) / (1000 * 60 * 60)) : 0;

                  return (
                    <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white font-heading text-lg font-bold">
                            {tableName}
                          </p>
                          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
                            {booking?.table?.tableType}
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white font-bold text-sm">
                            {booking.guestName}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {booking.guestPhone}
                          </p>
                          <p className="text-muted-foreground text-xs font-light">
                            {booking.guestEmail}
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white font-bold text-sm">
                            {startTime?.toLocaleDateString()}
                          </p>
                          <p className="text-accent text-sm">
                            {startTime?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - {endTime?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
                            {duration} Hour(s)
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <p className="text-accent font-heading text-lg font-bold">
                          ₹{booking.finalPrice || 0}
                        </p>
                      </td>

                      <td className="py-5 px-4">
                        <div className="space-y-1">
                          <p className="text-muted-foreground text-[8px] font-bold uppercase tracking-widest">TXN:</p>
                          <p className="text-white font-mono text-xs break-all">{booking.razorpayPaymentId || "N/A"}</p>
                          <p className="text-muted-foreground text-[8px] font-bold uppercase tracking-widest mt-2">ORDER:</p>
                          <p className="text-white font-mono text-xs break-all">{booking.razorpayOrderId || "N/A"}</p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        {getStatusBadge(booking.status)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {error && (
          <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-xs text-center font-bold uppercase tracking-widest">
            {error}
          </div>
        )}
      </div>
    </SectionCard>
  );
};

export default AllBookings;