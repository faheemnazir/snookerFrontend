
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
API.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


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
    const response = await API.get(
      `/api/tables?type=${type.toUpperCase()}`,{
        headers:{
          "ngrok-skip-browser-warning":"true"
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Fetch Tables Error:",
      error.response?.data || error.message
    );

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


//TIER

// create Tier
export const createTier = async (tierData) => {
  try {
    const response = await API.post(
      "/api/admin/tiers",
      tierData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Create Tier Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// UPDATE TIER
export const updateTier = async (id, tierData) => {
  try {
    const response = await API.put(`/api/admin/tiers/${id}`, {
      id: id, // backend expects it in body too (as per swagger)
      hours: tierData.hours,
      basePrice: tierData.basePrice,
      discountPercentage: tierData.discountPercentage,
    });

    return response.data;
  } catch (error) {
    console.error("Update Tier Error:", error.response?.data || error.message);
    throw error;
  }
};


// DELETE TIER
export const deleteTier = async (id) => {
  try {
    const response = await API.delete(`/api/admin/tiers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Tier Error:", error.response?.data || error.message);
    throw error;
  }
};



// GET ALL TIERS
export const getAllTiers = async () => {
  try {
    const response = await API.get("/api/admin/tiers");
    return response.data;
  } catch (error) {
    console.error("Get All Tiers Error:", error.response?.data || error.message);
    throw error;
  }
};






// GET TIERS UNDER PRICE
export const getTiersUnderPrice = async (maxPrice) => {
  try {
    const response = await API.get(
      `/api/admin/tiers/underPrice/${maxPrice}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Tiers Under Price Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};



// GET TIERS BY EXACT PRICE
export const getTiersByPrice = async (price) => {
  try {
    const response = await API.get(
      `/api/admin/tiers/byPrice/${price}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Tiers By Price Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// GET TIERS BY HOURS
export const getTiersByHours = async (hours) => {
  try {
    const response = await API.get(
      `/api/admin/tiers/byHours/${hours}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Tiers By Hours Error:",
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



//! Courses 
// CREATE COURSE
export const createCourse = async (courseData) => {
  try {
    const response = await API.post(
      "/api/admin/courses",
      courseData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "Create Course Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// GET ALL ENROLLMENTS
export const getAllEnrollments = async () => {
  try {
    const response = await API.get(
      "/api/admin/enrollments",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get All Enrollments Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};



// DELETE COURSE
export const deleteCourse = async (id) => {
  try {
    const response = await API.delete(
      `/api/admin/courses/${id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "Delete Course Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};


// GET AVAILABLE BOOKING TABLES BY DATE
export const getBookingTables = async (date) => {
  try {
    const response = await API.get(
      `/api/bookings/tables?date=${date}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "Get Booking Tables Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};



// GET ACTIVE BOOKINGS
export const getActiveBookings = async () => {
  try {
    const response = await API.get(
      "/api/bookings/active",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "Get Active Bookings Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};







export default API;