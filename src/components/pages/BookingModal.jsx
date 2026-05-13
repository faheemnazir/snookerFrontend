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
        className="fixed inset-0 bg-background/90 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-fade-in"
        onClick={() => {
          setOpen(false);
          onCloseSuccess();
        }}
      >
        <div
          className="bg-card/90 backdrop-blur-md border border-white/5 p-12 max-w-lg w-full shadow-2xl relative overflow-hidden text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="font-heading text-3xl font-bold uppercase text-white mb-2 italic">RESERVATION<br/><span className="text-accent">CONFIRMED</span></h2>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-6">Your session has been secured</p>
          
          <div className="bg-background/50 rounded-lg p-6 mb-6 text-left border border-white/5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Asset</p>
                <p className="text-sm font-bold text-white">{currentTable?.tableName || "Elite Table"}</p>
              </div>
              <div>
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Date</p>
                <p className="text-sm font-bold text-white">{formData.bookingDate}</p>
              </div>
              <div>
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Time</p>
                <p className="text-sm font-bold text-white">{formData.startTime}</p>
              </div>
              <div>
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm font-bold text-white">{selected?.hours} Hour(s)</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onCloseSuccess();
            }}
            className="w-full py-4 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
          >
            Acknowledge
          </button>
        </div>
      </div>
    );
  }


  return (
    <div
      className="fixed inset-0 bg-background/90 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-card/90 backdrop-blur-md border border-white/5 p-12 max-w-lg w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BRAND ACCENT */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        
        <div className="text-center mb-10">
           <p className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-4">Secured Session</p>
           <h2 className="font-heading text-5xl font-black text-white leading-none mb-6 uppercase italic">ARENA <br/> <span className="text-muted-foreground">BOOKING</span></h2>
           {error && (
             <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest p-4 rounded-lg mb-4">
               {error}
             </div>
           )}
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Candidate Name</label>
                <input
                  type="text"
                  name="guestName"
                  placeholder="e.g. Faheem Nazir"
                  value={formData.guestName}
                  onChange={handleChange}
                  className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition-all font-bold text-sm"
                />
             </div>
             <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Contact Identifier</label>
                <input
                  type="tel"
                  name="guestPhone"
                  placeholder="+91 XXXXX"
                  value={formData.guestPhone}
                  onChange={handleChange}
                  className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition-all font-bold text-sm"
                />
             </div>
             <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Registry Date</label>
                <input
                  type="date"
                  name="bookingDate"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full p-4 bg-background border border-white/5 rounded-lg text-white outline-none focus:border-accent transition-all font-bold text-sm"
                />
             </div>
          </div>

          <div className="bg-background rounded-lg p-6 border border-white/5">
             <div className="flex justify-between items-center">
                <div>
                   <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Asset Assigned</p>
                   <p className="text-xl font-bold text-white">
                      {tables.find(t => t.id == formData.tableId)?.tableName || "Elite Table"}
                   </p>
                </div>
                <div className="text-right">
                   <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Valuation</p>
                   <p className="text-accent text-xl font-black tracking-tight">
                      ₹{selected?.total} <span className="text-[10px] text-muted-foreground">/ {selected?.hours}H</span>
                   </p>
                </div>
             </div>
          </div>

          {occupiedRanges.length > 0 && (
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">Booked Slots for Today</p>
              <div className="flex flex-wrap gap-2">
                {occupiedRanges.map((range, index) => (
                  <span key={index} className="bg-background text-red-500 text-[10px] font-bold px-3 py-1 rounded-lg border border-red-500/20 shadow-sm">
                    {range}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
             <div className="text-center">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] block mb-4">Select Starting Epoch</label>
                <div className="relative group max-w-[200px] mx-auto">
                   <input
                     type="time"
                     name="startTime"
                     required
                     value={formData.startTime || ""}
                     onChange={handleChange}
                     className="w-full p-5 text-4xl rounded-lg bg-background border border-white/5 text-white outline-none focus:border-accent transition-all font-black text-center"
                   />
                </div>
             </div>
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50"
            >
              {loading ? "AUTHORIZING..." : "CONFIRM RESERVATION"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-3 text-muted-foreground hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
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
