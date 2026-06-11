function PlanCard({ name, price, features, active, onChoose }) {
  return (
    <div
      className={`rounded-2xl border p-7 ${
        active
          ? "bg-[#111827] text-white border-[#111827]"
          : "bg-white border-[#e5e7eb]"
      }`}
    >
      <h2 className="text-2xl font-black">{name}</h2>
      <p className="text-4xl font-black mt-4">{price}</p>
      <p className={active ? "text-gray-300" : "text-[#6b7280]"}>per month</p>

      <div className="mt-6 space-y-3">
        {features.map((item) => (
          <p key={item}>✓ {item}</p>
        ))}
      </div>

      <button
        onClick={onChoose}
        className={`w-full mt-7 py-3 rounded-xl font-bold ${
          active ? "bg-white text-[#111827]" : "bg-[#111827] text-white"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}

export default PlanCard;