<<<<<<< HEAD
// components/common/SectionCard.jsx
=======
// components/admin/SectionCard.jsx
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
const SectionCard = ({ title, description, children }) => {
  return (
    <div className="
      relative
<<<<<<< HEAD
      bg-card/50
      border border-white/5
      p-6 md:p-7
      space-y-5
      transition-all duration-300
      backdrop-blur-md
      group
      hover:border-accent/30
    ">

      {/* HEADER */}
      <div className="relative z-10">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
=======
      bg-gradient-to-b from-[#111] to-[#0a0a0a]
      border border-gray-800/80
      rounded-2xl
      p-6 md:p-7
      space-y-5
      shadow-lg shadow-black/40
      hover:shadow-green-500/10
      hover:border-green-500/30
      transition-all duration-300
      backdrop-blur-sm
      group
    ">

      {/* subtle glow effect */}
      <div className="
        absolute inset-0 rounded-2xl
        bg-green-500/0 group-hover:bg-green-500/5
        transition duration-300
        pointer-events-none
      " />

      {/* HEADER */}
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          {title}
        </h2>

        {description && (
<<<<<<< HEAD
          <p className="text-muted-foreground font-light text-sm mt-1 leading-relaxed">
=======
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            {description}
          </p>
        )}
      </div>

      {/* CONTENT */}
<<<<<<< HEAD
      <div className="relative z-10 border-t border-white/5 pt-4">
=======
      <div className="relative z-10 border-t border-gray-800/80 pt-4">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        {children}
      </div>

    </div>
  );
};

export default SectionCard;