import React from "react";
import { useNavigate } from "react-router-dom";
import { createTable } from "../../Services/api";
import TableForm from "./TableForm";
import SectionCard from "../common/SectionCard";

const CreateTable = () => {
  const navigate = useNavigate();

 const handleCreate = async (data, images) => {
  try {
    const formData = new FormData();


    const payload = {
      ...data,
      availableSlots: data.availableSlots.map((s) => s.id),
    };


    formData.append("tableData", JSON.stringify(payload));

    images.forEach((file) => {
      formData.append("images", file);
    });

    
    const res = await createTable(formData);

    console.log("TABLE CREATED:", res);

    navigate("/admin/tables");

  } catch (err) {
    console.error("CREATE ERROR:", err);

    alert(
      err.response?.data ||
      err.message ||
      "Failed to create table"
    );
  }
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