import React from "react";
import { useNavigate } from "react-router-dom";
import { createTable } from "../../Services/api";
import TableForm from "./TableForm";
import SectionCard from "../common/SectionCard";

const CreateTable = () => {
  const navigate = useNavigate();

  const handleCreate = async (data, images) => {
    const formData = new FormData();
    formData.append("tableData", JSON.stringify(data));

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    await createTable(formData);
    navigate("/admin/tables");
  };

  return (
    <div className="space-y-6">

      <SectionCard
        title="Create New Table"
        description="Add a new snooker table with slots and pricing"
      >
        <TableForm mode="create" onSubmit={handleCreate} />
      </SectionCard>

    </div>
  );
};

export default CreateTable;