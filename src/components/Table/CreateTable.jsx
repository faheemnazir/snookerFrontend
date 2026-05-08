import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTable } from "../../Services/api";

import TableForm from "./TableForm";

const CreateTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    tableName: "",
    tableType: "premium",
    availableTierIds: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, images) => {
    e.preventDefault();

    try {
      setLoading(true);

      const form = new FormData();

      form.append("tableData", JSON.stringify(formData));

      images.forEach((img) => {
        form.append("images", img);
      });

      await createTable(form);

      navigate("/admin/tables");
    } catch (err) {
      console.error(err);
      alert("Failed to create table");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TableForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      buttonText="Create Table"
    />
  );
};

export default CreateTable;