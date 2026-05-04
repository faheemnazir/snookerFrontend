import React, { useEffect, useState } from "react";
import { getAllTables, deleteTable } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const TablesList = () => {
  const [tables, setTables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTables("REGULAR").then(setTables);
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
                  onClick={() => deleteTable(t.id)}
                  className="flex-1 border border-gray-700 py-2 rounded-xl text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>
      </SectionCard>

    </div>
  );
};

export default TablesList;