import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTable } from "../../Services/api";

import TableForm from "./TableForm";

const CreateTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    
    setError(""); // Clear previous errors

    if (!formData.tableName.trim()) {
      setError("Please enter a table name. All fields are mandatory.");
      return;
    }
    
    if (!formData.availableTierIds || formData.availableTierIds.length === 0) {
      setError("Please select at least one pricing tier. All fields are mandatory.");
      return;
    }
    
    if (!images || images.length === 0) {
      setError("Please upload at least one image. All fields are mandatory.");
      return;
    }
    
    try {
      setLoading(true);
      
      const form = new FormData();
      
      form.append("tableName", formData.tableName);
      form.append("tableType", formData.tableType.toUpperCase());
      
      if (formData.availableTierIds) {
        formData.availableTierIds.forEach(id => form.append("tierIds", id));
      }
      
      images.forEach((img) => {
        form.append("images", img);
      });
      
      await createTable(form);
      
      navigate("/admin/tables");
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Failed to create table");
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
      error={error}
    />
  );
};

export default CreateTable;