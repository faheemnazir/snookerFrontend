
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");

  console.log("➡️ API CALL:", config.url);
  console.log("➡️ TOKEN:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("➡️ HEADERS:", config.headers);

  return config;
});


//login
export const loginAdmin = async (loginData) => {
  try {
    const response = await API.post("/api/auth/login", {
      usernameOrEmail: loginData.usernameOrEmail,
      password: loginData.password,
    },{
        headers:{
          "ngrok-skip-browser-warning":"true"
        },
    }
  );

    return response.data;
  } catch (error) {
    console.error(
      "Login Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};



// registration 
export const registerAdmin = async (registerData) => {
  try {
    const response = await API.post(
      "/api/auth/register",
      registerData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Register Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};




//bookings 
export const initiateBooking = async (bookingData) => {
  try {
    const response = await API.post(
      "/api/bookings/initiate",
      bookingData ,{
        headers:{
          "ngrok-skip-browser-warning":"true"
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Booking Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};


//? TABLES
// create tables
export const createTable = async (formData) => {
  try {
    const response = await API.post(
      "/api/admin/tables",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Create Table Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update Tables
export const updateTable = async (id, tableData) => {
  try {
    const response = await API.put(
      `/api/admin/updateTableById/${id}`,
      tableData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Update Table Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};








//  fetch all tables
export const getAllTables = async (type) => {
  try {
    const response = await API.get(`/api/tables?type=${type.toUpperCase()}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    return response.data;
  } catch (error) {
    console.log("❌ FULL ERROR:", error);
    console.log("❌ RESPONSE DATA:", error.response?.data);
    console.log("❌ STATUS:", error.response?.status);

    throw error;
  }
};


// DELETE TABLE
export const deleteTable = async (id) => {
  try {
    const response = await API.delete(
      `/api/admin/deleteTableById/${id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Delete Table Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};





// slots 

export const getAllSlots = async () => {
  try {
    const response = await API.get(
      "/api/admin/getAllTimeSlots",{
        headers:{
          "ngrok-skip-browser-warning":"true"
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Fetch Slots Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};



// CREATE TIME SLOT
export const createTimeSlot = async (slotData) => {
  try {
    const response = await API.post(
      "/api/admin/createTimeSLot",
      slotData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Create Slot Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// REMOVE SLOT FROM TABLE
export const removeSlotFromTable = async (tableId, slotId) => {
  try {
    const response = await API.delete(
      `/api/admin/${tableId}/remove-slot/${slotId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Remove Slot Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};



// DELETE SLOT (GLOBAL)
export const deleteTimeSlot = async (id) => {
  try {
    const response = await API.delete(
      `/api/admin/deletTimeSlotById/${id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Delete Slot Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};



// payment api
export const verifyPayment = async (paymentData) => {
  try {
    const response = await API.post(
      "/api/bookings/verify-payment",
      paymentData ,{
        headers:{
          "ngrok-skip-browser-warning":"true"
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Verify Payment Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};


export default API;