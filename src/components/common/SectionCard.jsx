// components/common/SectionCard.jsx
const SectionCard = ({ title, description, children }) => {
  return (
    <div className="
      relative
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
          {title}
        </h2>

        {description && (
          <p className="text-muted-foreground font-light text-sm mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 border-t border-white/5 pt-4">
        {children}
      </div>

    </div>
  );
};

export default SectionCard;