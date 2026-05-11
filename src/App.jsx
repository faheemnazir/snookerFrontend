import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Booking from "./components/pages/Booking";
import Courses from "./components/pages/Courses";
import Gallery from "./components/pages/Gallery";

import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import ProtectedRoute from "./Routes/ProtectedRoute";

// ADMIN COMPONENTS
import Dashboard from "./components/pages/Dashboard";
import TablesList from "./components/Table/TableList";
import CreateTable from "./components/Table/CreateTable";
import UpdateTable from "./components/Table/UpdateTable";
import UserManagement from "./components/pages/UserManagement";
import AllBookings from "./components/Admin/AllBookings";
import CourseEnrollees from "./components/Admin/CourseEnrollees";
import Tier from "./components/Tier/Tier";
import DashboardOverview from "./components/Admin/DashboardOverview";

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!isAdminPath && token) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
    }
  }, [isAdminPath]);

  return (
    <>
      {/* Hide Navbar on Admin and Login */}
      {!isAdminPath && location.pathname !== "/login" && <Navbar />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* default page */}
          <Route index element={<DashboardOverview />} />

          {/* TABLES */}
          <Route path="tables" element={<TablesList />} />
          <Route path="create" element={<CreateTable />} />
          <Route path="update/:id" element={<UpdateTable />} />
          <Route path="bookings" element={<AllBookings />} />
          <Route path="enrollments" element={<CourseEnrollees />} />

          {/* TIER */}
          <Route path="tier" element={<Tier />} />
        </Route>
      </Routes>

      {/* Hide Footer on Admin */}
      {!isAdminPath && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;