import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TableForm from "./TableForm";
import { updateTable, getAllTables } from "../../Services/api";
import SectionCard from "../common/SectionCard";

const UpdateTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [table, setTable] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // ================= FETCH TABLE =================
  useEffect(() => {
    const fetchTable = async () => {
      try {
        setPageLoading(true);

        const [regularTables, premiumTables] = await Promise.all([
          getAllTables("REGULAR"),
          getAllTables("PREMIUM"),
        ]);

        const allTables = [...regularTables, ...premiumTables];

        const found = allTables.find(
          (t) => String(t.id) === String(id)
        );

        if (!found) {
          setTable(null);
          return;
        }

        setTable(found);

        // 🔥 PREFILL FORM DATA
        setFormData({
          tableName: found.tableName || "",
          tableType: found.tableType || "REGULAR",
<<<<<<< HEAD
          availableTierIds: found.availableTiers?.map(t => t.id) || [],
=======
          availableTierIds: found.availableTierIds || [],
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        });

      } catch (err) {
        console.error("FETCH ERROR:", err);
        alert("Failed to load table");
      } finally {
        setPageLoading(false);
      }
    };

    if (id) fetchTable();
  }, [id]);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e, images) => {
    try {
      setLoading(true);

      const payload = {
<<<<<<< HEAD
        tableName: formData.tableName,
        tableType: formData.tableType.toUpperCase(),
        tierIds: formData.availableTierIds,
=======
        ...table, // keep existing fields
        ...formData, // updated fields
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        id: Number(id),
      };

      // 👉 If you later support image upload, handle here

      await updateTable(id, payload);

      navigate("/admin/tables");

    } catch (err) {
      console.error("UPDATE ERROR:", err);
      alert(
        err.response?.data ||
        err.message ||
        "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // ================= LOADING =================
  if (pageLoading) {
    return (
<<<<<<< HEAD
      <div className="text-center text-muted-foreground font-light text-sm py-10">
=======
      <div className="text-center text-gray-400 py-10">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        Loading table...
      </div>
    );
  }

<<<<<<< HEAD
  if (!table) {
    return (
      <div className="text-center text-red-500 font-bold uppercase text-xs py-10 tracking-widest">
=======
  // ================= NOT FOUND =================
  if (!table) {
    return (
      <div className="text-center text-red-400 py-10">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        Table not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">

      {/* HEADER */}
<<<<<<< HEAD
      <div className="border-b border-white/5 pb-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">
          Update Table
        </h2>
        <p className="text-muted-foreground font-light text-sm mt-1">
=======
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Update Table
        </h2>
        <p className="text-gray-500 mt-1">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          Modify table details, tiers and images
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* FORM */}
        <div className="lg:col-span-2">
          <SectionCard
            title="Edit Table"
            description="Update configuration and pricing"
          >
            {formData && (
              <TableForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                buttonText="Update Table"
              />
            )}
          </SectionCard>
        </div>

        {/* SIDE PANEL */}
        <div className="space-y-6">

          {/* CURRENT DETAILS */}
<<<<<<< HEAD
          <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5">
            <h3 className="font-heading text-lg font-bold uppercase text-white mb-3">Current Details</h3>

            <div className="space-y-2 text-sm text-muted-foreground font-light">
              <p>
                <span className="font-bold text-white">Name:</span>{" "}
=======
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-3">Current Details</h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-white">Name:</span>{" "}
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                {table.tableName || "N/A"}
              </p>

              <p>
<<<<<<< HEAD
                <span className="font-bold text-white">Type:</span>{" "}
=======
                <span className="text-white">Type:</span>{" "}
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                {table.tableType || "N/A"}
              </p>

              <p>
<<<<<<< HEAD
                <span className="font-bold text-white">Tiers:</span>{" "}
=======
                <span className="text-white">Tiers:</span>{" "}
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                {table.availableTierIds?.length || 0}
              </p>
            </div>
          </div>

          {/* TIPS */}
<<<<<<< HEAD
          <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5">
            <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">Tips</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
=======
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-2">Tips</h3>
            <p className="text-gray-400 text-sm">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              • Keep table names consistent <br />
              • Verify tier selection <br />
              • Upload clear images
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UpdateTable;