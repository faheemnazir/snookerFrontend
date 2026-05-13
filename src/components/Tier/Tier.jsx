import React, { useEffect, useState } from "react";
import {
  createTier,
  getAllTiers,
  updateTier,
  deleteTier
} from "../../Services/api";
import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const Tier = () => {
  const [hours, setHours] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [tableType, setTableType] = useState("REGULAR");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tiers, setTiers] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  const fetchTiers = async () => {
    try {
      setListLoading(true);
      const res = await getAllTiers();
      setTiers(Array.isArray(res) ? res : res?.data || []);
    } catch (err) {
      console.error("FETCH TIERS ERROR:", err);
      setTiers([]);
    } finally {
      setListLoading(false);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchTiers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (hours === "" || basePrice === "") {
      setError("Please fill all fields. All fields are mandatory.");
      return false;
    }

    if (hours <= 0 || basePrice < 0) {
      setError("Invalid values");
      return false;
    }

    const payload = {
      hours: Number(hours),
      basePrice: Number(basePrice),
      tableType: tableType,
    };

    try {
      setLoading(true);
      await createTier(payload);
      await fetchTiers();
      // reset form
      setHours("");
      setBasePrice("");
      return true;
    } catch (err) {
      console.error(err);
      setError(err.response?.data || err.message || "Failed to create tier");
      return false;
    } finally {
      setLoading(false);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
 
       {/* HEADER */}
       <div className="flex items-center justify-between border-b border-white/5 pb-4">
         <div>
           <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">
             Pricing Tiers
           </h2>
           <p className="text-muted-foreground font-light text-sm mt-1">
             Define pricing based on duration
           </p>
         </div>
 
         <button
           onClick={() => setIsModalOpen(true)}
           className="bg-accent text-background px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
         >
           + Create Tier
         </button>
       </div>
 
       {/* TIER LIST */}
       <div className="space-y-8">
         <SectionCard
           title="Premium Tiers"
           description="Pricing tiers for Premium tables"
         >
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {listLoading ? (
               <p className="text-muted-foreground font-light text-sm">Loading tiers...</p>
             ) : tiers.filter(t => t.tableType === "PREMIUM").length === 0 ? (
               <p className="text-muted-foreground font-light text-sm">No premium tiers found</p>
             ) : (
               tiers.filter(t => t.tableType === "PREMIUM").map((t) => (
                 <div
                   key={t.id}
                   className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-4 hover:border-accent/30 transition-all duration-300"
                 >
                   <div className="flex items-center justify-between">
                     <h3 className="font-heading text-lg font-bold text-white">{t.hours} Hours</h3>
                     <button
                       onClick={async () => {
                         if (!window.confirm("Delete this tier?")) return;
                         try {
                           await deleteTier(t.id);
                           setTiers((prev) => prev.filter((tier) => tier.id !== t.id));
                         } catch (err) {
                           alert("Delete failed");
                         }
                       }}
                       className="text-red-500 hover:text-red-600 text-[10px] font-bold uppercase tracking-widest"
                     >
                       Delete
                     </button>
                   </div>
                   <div>
                     <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Price</p>
                     <p className="font-heading text-2xl font-bold text-accent">₹{t.basePrice}</p>
                   </div>
                   <div className="flex gap-2 pt-2">
                     <button
                       onClick={async () => {
                         const newHours = prompt("Enter hours", t.hours);
                         const newPrice = prompt("Enter price", t.basePrice);
                         if (!newHours || !newPrice) return;
                         try {
                           await updateTier(t.id, {
                             hours: Number(newHours),
                             basePrice: Number(newPrice),
                           });
                           await fetchTiers();
                         } catch {
                           alert("Update failed");
                         }
                       }}
                       className="flex-1 border border-white/20 text-white py-2 text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
                     >
                       Edit
                     </button>
                   </div>
                 </div>
               ))
             )}
           </div>
         </SectionCard>
 
         <SectionCard
           title="Regular Tiers"
           description="Pricing tiers for Regular tables"
         >
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {listLoading ? (
               <p className="text-muted-foreground font-light text-sm">Loading tiers...</p>
             ) : tiers.filter(t => t.tableType === "REGULAR" || !t.tableType).length === 0 ? (
               <p className="text-muted-foreground font-light text-sm">No regular tiers found</p>
             ) : (
               tiers.filter(t => t.tableType === "REGULAR" || !t.tableType).map((t) => (
                 <div
                   key={t.id}
                   className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-4 hover:border-accent/30 transition-all duration-300"
                 >
                   <div className="flex items-center justify-between">
                     <h3 className="font-heading text-lg font-bold text-white">{t.hours} Hours</h3>
                     <button
                       onClick={async () => {
                         if (!window.confirm("Delete this tier?")) return;
                         try {
                           await deleteTier(t.id);
                           setTiers((prev) => prev.filter((tier) => tier.id !== t.id));
                         } catch (err) {
                           alert("Delete failed");
                         }
                       }}
                       className="text-red-500 hover:text-red-600 text-[10px] font-bold uppercase tracking-widest"
                     >
                       Delete
                     </button>
                   </div>
                   <div>
                     <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Price</p>
                     <p className="font-heading text-2xl font-bold text-accent">₹{t.basePrice}</p>
                   </div>
                   <div className="flex gap-2 pt-2">
                     <button
                       onClick={async () => {
                         const newHours = prompt("Enter hours", t.hours);
                         const newPrice = prompt("Enter price", t.basePrice);
                         if (!newHours || !newPrice) return;
                         try {
                           await updateTier(t.id, {
                             hours: Number(newHours),
                             basePrice: Number(newPrice),
                           });
                           await fetchTiers();
                         } catch {
                           alert("Update failed");
                         }
                       }}
                       className="flex-1 border border-white/20 text-white py-2 text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
                     >
                       Edit
                     </button>
                   </div>
                 </div>
               ))
             )}
           </div>
         </SectionCard>
       </div>
 
       {/* MODAL */}
       {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm">
           <div className="bg-card border border-white/5 p-8 w-full max-w-md relative">
             {/* CLOSE */}
             <button
               onClick={() => setIsModalOpen(false)}
               className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
             >
               ✕
             </button>
 
             <h3 className="font-heading text-2xl font-bold uppercase text-white mb-6">
               Create Tier
             </h3>
 
             <form
               onSubmit={async (e) => {
                 const success = await handleSubmit(e);
                 if (success) setIsModalOpen(false);
               }}
               className="space-y-6"
             >
               {error && (
                 <div className="bg-red-500/10 border border-red-500 text-red-400 text-xs p-3 text-center rounded-lg">
                   {error}
                 </div>
               )}
               <div>
                 <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                   Hours
                 </label>
                 <input
                   required
                   type="number"
                   value={hours}
                   onChange={(e) => setHours(e.target.value)}
                   className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
                 />
               </div>
 
               <div>
                 <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                   Price
                 </label>
                 <input
                   required
                   type="number"
                   value={basePrice}
                   onChange={(e) => setBasePrice(e.target.value)}
                   className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
                 />
               </div>
 
               <div>
                 <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                   Table Type
                 </label>
                 <select
                   value={tableType}
                   onChange={(e) => setTableType(e.target.value)}
                   className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
                 >
                   <option value="REGULAR">Regular</option>
                   <option value="PREMIUM">Premium</option>
                 </select>
               </div>
 
               <button
                 type="submit"
                 disabled={loading}
                 className="w-full py-4 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
               >
                 {loading ? "Creating..." : "Create Tier"}
               </button>
             </form>
           </div>
         </div>
       )}
    </div>
  );
};

export default Tier;