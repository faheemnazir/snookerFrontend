
import React, { useState } from "react";
import { X } from "lucide-react";

const AddTableModal = ({ onClose, onAdd }) => {
  const [tableName, setTableName] = useState("");

  const handleSubmit = () => {
    if (!tableName.trim()) return;
    onAdd(tableName);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl w-full max-w-md p-7 relative shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-heading font-semibold mb-6 tracking-wide">
          Add New Table
        </h2>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">
            Table Name
          </label>
          <input
            type="text"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            placeholder="e.g. Table 5"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white
            focus:outline-none focus:border-green-500 transition-all duration-300"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.04] shadow-lg hover:shadow-green-500/30"
        >
          Add Table
        </button>
      </div>
    </div>
  );
};

export default AddTableModal;