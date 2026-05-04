// components/admin/SectionCard.jsx
const SectionCard = ({ title, description, children }) => {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 space-y-4">

      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && (
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        )}
      </div>

      <div className="border-t border-gray-800 pt-4">
        {children}
      </div>

    </div>
  );
};

export default SectionCard;