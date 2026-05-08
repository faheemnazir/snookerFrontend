import React, { useEffect, useState } from "react";
import { getActiveBookings } from "../../Services/api";
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

      const response = await getActiveBookings();

      setBookings(Array.isArray(response) ? response : []);
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Failed to fetch booking records"
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const s = status?.toUpperCase();

    if (s === "COMPLETED" || s === "BOOKED_COMPLETED") {
      return (
        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-[10px] font-semibold border border-green-500/20">
          Completed
        </span>
      );
    }

    if (s === "BOOKED" || s === "BOOKING_PENDING") {
      return (
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-semibold border border-blue-500/20">
          Booked
        </span>
      );
    }

    if (s === "REFUNDED" || s === "CANCELLED") {
      return (
        <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-[10px] font-semibold border border-red-500/20">
          Cancelled
        </span>
      );
    }

    return (
      <span className="px-3 py-1 bg-gray-500/10 text-gray-400 rounded-full text-[10px] font-semibold border border-gray-500/20">
        {status || "Unknown"}
      </span>
    );
  };

  return (
    <SectionCard
      title="Arena Bookings"
      description="Monitor all active reservations and payment activity"
    >
      <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Table
                </th>

                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Guest
                </th>

                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Session
                </th>

                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Amount
                </th>

                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Payment
                </th>

                <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-20 text-center text-gray-500"
                  >
                    Loading booking records...
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-20 text-center text-gray-500"
                  >
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => {
                  const tableName =
                    booking?.table?.tableName || "Snooker Table";

                  const startTime = booking?.startTime
                    ? new Date(booking.startTime)
                    : null;

                  const endTime = booking?.endTime
                    ? new Date(booking.endTime)
                    : null;

                  const duration =
                    startTime && endTime
                      ? Math.round(
                          (endTime - startTime) /
                            (1000 * 60 * 60)
                        )
                      : 0;

                  return (
                    <tr
                      key={booking.id}
                      className="border-b border-gray-900 hover:bg-[#181818] transition"
                    >
                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {tableName}
                          </p>

                          <p className="text-gray-500 text-sm mt-1">
                            {booking?.table?.tableType}
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white font-medium">
                            {booking.guestName}
                          </p>

                          <p className="text-gray-500 text-sm">
                            {booking.guestPhone}
                          </p>

                          <p className="text-gray-600 text-xs">
                            {booking.guestEmail}
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <div>
                          <p className="text-white text-sm font-medium">
                            {startTime?.toLocaleDateString()}
                          </p>

                          <p className="text-green-500 text-sm">
                            {startTime?.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}{" "}
                            -{" "}
                            {endTime?.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>

                          <p className="text-gray-500 text-xs mt-1">
                            {duration} Hour(s)
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4">
                        <p className="text-green-500 font-semibold text-lg">
                          ₹{booking.finalPrice || 0}
                        </p>
                      </td>

                      <td className="py-5 px-4">
                        <div className="space-y-1">
                          <p className="text-gray-300 text-xs">
                            TXN:
                          </p>

                          <p className="text-gray-500 text-xs break-all">
                            {booking.razorpayPaymentId || "N/A"}
                          </p>

                          <p className="text-gray-300 text-xs mt-2">
                            ORDER:
                          </p>

                          <p className="text-gray-500 text-xs break-all">
                            {booking.razorpayOrderId || "N/A"}
                          </p>
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
          <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm text-center">
            {error}
          </div>
        )}
      </div>
    </SectionCard>
  );
};

export default AllBookings;