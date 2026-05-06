import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Booking from "./components/pages/Booking";
import Courses from "./components/pages/Courses";

import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import ProtectedRoute from "./Routes/ProtectedRoute";

// ADMIN COMPONENTS
import Dashboard from "./components/pages/Dashboard";
import TablesList from "./components/Table/TableList";
import CreateTable from "./components/Table/CreateTable";
import UpdateTable from "./components/Table/UpdateTable";

import TimeSlotsList from "./components/TimeSlots/TimeSlotsList";
import CreateTimeSlot from "./components/TimeSlots/CreateTimeSlot";
import Tier from "./components/Tier/Tier";



// {/* ADMIN ROUTES (NESTED) */}

//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           {/* default dashboard */}
//           <Route index element={<TablesList />} />

//           {/* TABLES */}
//           <Route path="tables" element={<TablesList />} />
//           <Route path="create" element={<CreateTable />} />
//           <Route path="update/:id" element={<UpdateTable />} />

//           {/* TIME SLOTS */}
//           <Route path="slots" element={<TimeSlotsList />} />
//           <Route path="create-slot" element={<CreateTimeSlot />} />



// <Route path="create-tier" element={<CreateTier />} />
//         </Route>




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* temp test */}
<Route path="/admin" element={<Dashboard />}>
  <Route index element={<TablesList />} />
  <Route path="tables" element={<TablesList />} />
  <Route path="create" element={<CreateTable />} />
  <Route path="update/:id" element={<UpdateTable />} />
  <Route path="slots" element={<TimeSlotsList />} />
  <Route path="create-slot" element={<CreateTimeSlot />} />
   <Route path="tier" element={<Tier />} />
</Route>



      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;