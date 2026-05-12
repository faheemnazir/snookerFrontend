import React, { useEffect, useState } from "react";
import { getAllTables, deleteTable } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const TablesList = () => {
  const [tables, setTables] = useState([]);
  const navigate = useNavigate();

<<<<<<< HEAD
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const [regularTables, premiumTables] = await Promise.all([
          getAllTables("REGULAR"),
          getAllTables("PREMIUM"),
        ]);
        setTables([...regularTables, ...premiumTables]);
      } catch (err) {
        console.error("FETCH ERROR:", err);
        alert(err.response?.data || err.message || "Failed to load tables");
      }
    };

    fetchTables();
  }, []);

  return (
    <div className="space-y-8 font-body">

      <SectionCard
        title="Premium Tables"
        description="View and manage premium snooker tables"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {tables.filter(t => t.tableType === "PREMIUM").length === 0 ? (
            <p className="text-muted-foreground font-light text-sm">No premium tables found</p>
          ) : (
            tables.filter(t => t.tableType === "PREMIUM").map((t) => (
              <div
                key={t.id}
                className="bg-card/50 backdrop-blur-md border border-white/5 p-6 hover:border-accent/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-bold text-white">{t.tableName}</h3>
                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{t.tableType}</p>
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => navigate(`/admin/update/${t.id}`)}
                    className="flex-1 bg-accent text-background py-2 text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      if (!window.confirm("Are you sure you want to delete this table?")) return;
                      try {
                        await deleteTable(t.id);
                        setTables((prev) => prev.filter((table) => table.id !== t.id));
                      } catch (err) {
                        console.error("DELETE ERROR:", err);
                        alert(err.response?.data || err.message || "Failed to delete table");
                      }
                    }}
                    className="flex-1 border border-red-500/50 text-red-500 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </SectionCard>

      <SectionCard
        title="Regular Tables"
        description="View and manage regular snooker tables"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {tables.filter(t => t.tableType === "REGULAR" || !t.tableType).length === 0 ? (
            <p className="text-muted-foreground font-light text-sm">No regular tables found</p>
          ) : (
            tables.filter(t => t.tableType === "REGULAR" || !t.tableType).map((t) => (
              <div
                key={t.id}
                className="bg-card/50 backdrop-blur-md border border-white/5 p-6 hover:border-accent/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-bold text-white">{t.tableName}</h3>
                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{t.tableType || "REGULAR"}</p>
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => navigate(`/admin/update/${t.id}`)}
                    className="flex-1 bg-accent text-background py-2 text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      if (!window.confirm("Are you sure you want to delete this table?")) return;
                      try {
                        await deleteTable(t.id);
                        setTables((prev) => prev.filter((table) => table.id !== t.id));
                      } catch (err) {
                        console.error("DELETE ERROR:", err);
                        alert(err.response?.data || err.message || "Failed to delete table");
                      }
                    }}
                    className="flex-1 border border-red-500/50 text-red-500 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
=======
useEffect(() => {
  const fetchTables = async () => {
    try {
      const res = await getAllTables("REGULAR");
      setTables(res);
    } catch (err) {
      console.error("FETCH ERROR:", err);

      alert(
        err.response?.data ||
        err.message ||
        "Failed to load tables"
      );
    }
  };

  fetchTables();
}, []);

  return (
    <div className="space-y-6">

      <SectionCard
        title="Tables Overview"
        description="View and manage all snooker tables"
      >
        <div className="grid md:grid-cols-3 gap-6">

          {tables.map((t) => (
            <div
              key={t.id}
              className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 space-y-3"
            >
              <h3 className="text-lg">{t.tableName}</h3>

              <p className="text-gray-400 text-sm">
                {t.tableType}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/admin/update/${t.id}`)}
                  className="flex-1 bg-green-500 text-black py-2 rounded-xl text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={async () => {
                    try {
                      await deleteTable(t.id);

                      // ✅ remove from UI instantly
                      setTables((prev) => prev.filter((table) => table.id !== t.id));

                    } catch (err) {
                      console.error("DELETE ERROR:", err);

                      alert(
                        err.response?.data ||
                        err.message ||
                        "Failed to delete table"
                      );
                    }
                  }}
                  className="flex-1 border border-gray-700 py-2 rounded-xl text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        </div>
      </SectionCard>

    </div>
  );
};

export default TablesList;