import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TableForm from "./TableForm";
import { updateTable, getTableById } from "../../Services/api";
import SectionCard from "../common/SectionCard";

const UpdateTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [table, setTable] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const res = await getTableById(id);
        setTable(res);
      } catch (err) {
        console.error(err);
        alert("Failed to load table");
      } finally {
        setLoading(false);
      }
    };

    fetchTable();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      await updateTable(id, data);
      navigate("/admin/tables");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-10">
        Loading table...
      </div>
    );
  }

  if (!table) {
    return (
      <div className="text-center text-red-400 py-10">
        Table not found
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Update Table
        </h2>
        <p className="text-gray-500 mt-1">
          Modify table details, slots and pricing
        </p>
      </div>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT - FORM */}
        <SectionCard
          title="Edit Table"
          description="Update configuration and pricing"
        >
          <TableForm
            mode="update"
            initialData={table}
            onSubmit={handleUpdate}
          />
        </SectionCard>

        {/* RIGHT - INFO PANEL */}
        <div className="hidden md:flex flex-col gap-6">

          {/* TABLE INFO */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-3">Current Details</h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-white">Name:</span>{" "}
                {table.tableName}
              </p>

              <p>
                <span className="text-white">Type:</span>{" "}
                {table.tableType}
              </p>

              <p>
                <span className="text-white">Slots:</span>{" "}
                {table.availableSlots?.length || 0}
              </p>

              <p>
                <span className="text-white">Tiers:</span>{" "}
                {table.availableTiers?.length || 0}
              </p>
            </div>
          </div>

          {/* TIPS */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-2">Tips</h3>
            <p className="text-gray-400 text-sm">
              • Keep table names consistent <br />
              • Verify slot availability <br />
              • Adjust pricing carefully
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UpdateTable;