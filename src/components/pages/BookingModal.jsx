import React from "react";

const BookingModal = ({ 
  open, 
  setOpen, 
  formData, 
  handleChange, 
  tables, 
  handleSubmit, 
  loading, 
  error, 
  selected,
  isSuccess,
  onCloseSuccess
}) => {
  if (!open) return null;

  const currentTable = tables.find(t => t.id == formData.tableId);
  const occupiedRanges = currentTable?.occupiedRanges || [];

  if (isSuccess) {
    return (
      <div
        className="fixed inset-0 bg-[#003874]/90 backdrop-blur-xl flex items-center justify-center z-50 px-4 animate-fade-in"
        onClick={() => {
          setOpen(false);
          onCloseSuccess();
        }}
      >
        <div
          className="bg-white rounded-[40px] p-12 max-w-lg w-full shadow-[0_50px_100px_rgba(0,56,116,0.3)] relative overflow-hidden text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-[#003874] mb-2 tracking-tighter uppercase italic">RESERVATION<br/><span className="text-green-500">CONFIRMED</span></h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">Your session has been secured</p>
          
          <div className="bg-slate-50 rounded-2xl p-6 mb-6 text-left border border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Asset</p>
                <p className="text-sm font-bold text-[#003874]">{currentTable?.tableName || "Elite Table"}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Date</p>
                <p className="text-sm font-bold text-[#003874]">{formData.bookingDate}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Time</p>
                <p className="text-sm font-bold text-[#003874]">{formData.startTime}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm font-bold text-[#003874]">{selected?.hours} Hour(s)</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onCloseSuccess();
            }}
            className="w-full py-4 bg-[#003874] text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:brightness-110 transition-all shadow-xl shadow-blue-900/20"
          >
            Acknowledge
          </button>
        </div>
      </div>
    );
  }


  return (
    <div
      className="fixed inset-0 bg-[#003874]/90 backdrop-blur-xl flex items-center justify-center z-50 px-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-[40px] p-12 max-w-lg w-full shadow-[0_50px_100px_rgba(0,56,116,0.3)] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BRAND ACCENT */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#ED1C24]"></div>
        
        <div className="text-center mb-10">
           <p className="text-[#ED1C24] font-bold text-xs uppercase tracking-[0.5em] mb-4">Secured Session</p>
           <h2 className="text-5xl font-extrabold text-[#003874] leading-none mb-6 tracking-tighter uppercase italic">ARENA <br/> <span className="text-slate-300">BOOKING</span></h2>
           {error && (
             <div className="bg-red-50 border border-red-100 text-[#ED1C24] text-[10px] font-black uppercase tracking-widest p-4 rounded-2xl mb-4">
               {error}
             </div>
           )}
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="col-span-2 space-y-1 group">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#003874]">Candidate Name</label>
                <input
                  type="text"
                  name="guestName"
                  placeholder="e.g. Faheem Nazir"
                  value={formData.guestName}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 outline-none focus:border-[#003874] focus:bg-white transition-all font-bold"
                />
             </div>
             <div className="space-y-1 group">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#003874]">Contact Identifier</label>
                <input
                  type="tel"
                  name="guestPhone"
                  placeholder="+91 XXXXX"
                  value={formData.guestPhone}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 outline-none focus:border-[#003874] focus:bg-white transition-all font-bold"
                />
             </div>
             <div className="space-y-1 group">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-[#003874]">Registry Date</label>
                <input
                  type="date"
                  name="bookingDate"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 outline-none focus:border-[#003874] focus:bg-white transition-all font-bold"
                />
             </div>
          </div>

          <div className="bg-[#003874]/5 rounded-3xl p-6 border border-[#003874]/10">
             <div className="flex justify-between items-center">
                <div>
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Asset Assigned</p>
                   <p className="text-xl font-bold text-[#003874]">
                      {tables.find(t => t.id == formData.tableId)?.tableName || "Elite Table"}
                   </p>
                </div>
                <div className="text-right">
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Valuation</p>
                   <p className="text-[#ED1C24] text-xl font-black tracking-tight">
                      ₹{selected?.total} <span className="text-[10px] text-slate-400">/ {selected?.hours}H</span>
                   </p>
                </div>
             </div>
          </div>

          {occupiedRanges.length > 0 && (
            <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
              <p className="text-[9px] font-black text-[#ED1C24] uppercase tracking-widest mb-2">Booked Slots for Today</p>
              <div className="flex flex-wrap gap-2">
                {occupiedRanges.map((range, index) => (
                  <span key={index} className="bg-white text-[#ED1C24] text-[10px] font-bold px-3 py-1 rounded-lg border border-red-200 shadow-sm">
                    {range}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
             <div className="text-center">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-4">Select Starting Epoch</label>
                <div className="relative group max-w-[200px] mx-auto">
                   <input
                     type="time"
                     name="startTime"
                     required
                     value={formData.startTime || ""}
                     onChange={handleChange}
                     className="w-full p-5 text-4xl rounded-[24px] bg-[#003874] border-2 border-[#003874] text-white outline-none focus:border-[#ED1C24] transition-all font-black text-center shadow-2xl"
                   />
                </div>
             </div>
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-6 bg-[#ED1C24] text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:brightness-110 hover:scale-[1.02] transition-all shadow-xl shadow-red-500/20 disabled:opacity-50"
            >
              {loading ? "AUTHORIZING..." : "CONFIRM RESERVATION"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-3 text-slate-400 hover:text-[#003874] text-[9px] font-black uppercase tracking-[0.5em] transition-colors"
            >
              Cancel Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(BookingModal);
