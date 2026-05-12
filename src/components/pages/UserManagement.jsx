<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { registerAdmin, getAllUsers, updateUser, deleteUser } from "../../Services/api";
=======
import React, { useState } from "react";
import { registerAdmin } from "../../Services/api";
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
import SectionCard from "../common/SectionCard";

const UserManagement = () => {
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [usersList, setUsersList] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
<<<<<<< HEAD
    role: "ADMIN", // Hardcoded as ADMIN
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsersList(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

=======
    role: "PLAYER",
  });

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true);

    try {
      if (editingUser) {
        await updateUser(editingUser.id, {
          username: formData.username,
          email: formData.email,
          role: formData.role
        });
        alert("Account Updated Successfully.");
      } else {
        await registerAdmin(formData);
        alert("Admin Account Registered Successfully.");
      }
=======

    setLoading(true);

    try {
      await registerAdmin(formData);

      alert("Executive Account Registered Successfully.");
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

      setFormData({
        username: "",
        email: "",
        password: "",
<<<<<<< HEAD
        role: "ADMIN",
      });
      setEditingUser(null);
      fetchUsers();

    } catch (error) {
      alert(
        "Error: " +
        (error?.response?.data?.message || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: "", // Don't show password
      role: user.role || "ADMIN",
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      try {
        await deleteUser(id);
        alert("Account Deleted Successfully.");
        fetchUsers();
      } catch (err) {
        alert("Failed to delete account.");
      }
=======
        role: "PLAYER",
      });

    } catch (error) {

      alert(
        "Authorization Registry Error: " +
        (error?.response?.data?.message || "Something went wrong")
      );

    } finally {

      setLoading(false);

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-background min-h-screen text-white relative overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/10 to-[#0A0A0A]"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-2 block">Administration</span>
          <h1 className="font-heading text-4xl font-bold uppercase text-white">Admin Management</h1>
          <p className="text-muted-foreground font-light text-sm mt-1">Create, edit, and delete administrative personnel</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* FORM */}
          <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8 md:p-10 shadow-2xl">
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                {editingUser ? "Edit Admin Account" : "Create Admin Account"}
              </h2>
              <div className="w-14 h-[2px] bg-accent mb-4" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Username
                  </label>
=======
    <div className="bg-black min-h-screen text-white">
      <SectionCard
        title="Member Registry"
        description="Administrative portal for secure player and staff account creation"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10 shadow-[0_0_25px_rgba(0,0,0,0.25)]">
            
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-3">
                Create Account
              </h2>

              <div className="w-14 h-[2px] bg-green-500 mb-4" />

              <p className="text-gray-500 text-lg leading-relaxed">
                Register elite players and administrative personnel into the academy system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-500">
                    Username
                  </label>

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                  <input
                    required
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
<<<<<<< HEAD
                    className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition text-sm"
=======
                    className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                  />
                </div>

                <div className="space-y-2">
<<<<<<< HEAD
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
=======
                  <label className="text-sm uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                  <input
                    required
                    type="email"
                    name="email"
<<<<<<< HEAD
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition text-sm"
                  />
                </div>
              </div>

              {!editingUser && (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Password
                  </label>
                  <input
                    required={!editingUser}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition text-sm"
                  />
                </div>
              )}

              <div className="flex gap-4">
                {editingUser && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingUser(null);
                      setFormData({ username: "", email: "", password: "", role: "ADMIN" });
                    }}
                    className="flex-1 py-4 text-xs font-bold uppercase tracking-widest border border-white/20 text-white hover:bg-white hover:text-background transition-all"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-4 text-xs font-bold uppercase tracking-widest bg-accent text-background hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50"
                >
                  {loading ? "Processing..." : editingUser ? "Update Account" : "Create Account"}
                </button>
              </div>
            </form>
          </div>

          {/* LIST */}
          <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8 md:p-10 shadow-2xl">
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-bold uppercase text-white mb-2">Existing Accounts</h2>
              <div className="w-14 h-[2px] bg-accent mb-4" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                    <th className="py-4 px-4">Username</th>
                    <th className="py-4 px-4">Email</th>
                    <th className="py-4 px-4">Role</th>
                    <th className="py-4 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-muted-foreground font-light text-sm">
                        No accounts found.
                      </td>
                    </tr>
                  ) : (
                    usersList.map((user) => (
                      <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="py-4 px-4 font-bold text-sm text-white">{user.username}</td>
                        <td className="py-4 px-4 text-muted-foreground font-light text-sm">{user.email}</td>
                        <td className="py-4 px-4">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${user.role === 'ADMIN' ? 'bg-accent/10 text-accent' : 'bg-blue-500/10 text-blue-500'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-3">
                          <button
                            onClick={() => handleEdit(user)}
                            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-red-500 transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
=======
                    placeholder="email@academy.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-500">
                  Password
                </label>

                <input
                  required
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-500">
                  Role
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                >
                  <option value="PLAYER">Elite Player</option>
                  <option value="ADMIN">Academy Admin</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </SectionCard>
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
    </div>
  );
};

export default UserManagement;