import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function MonthlyChart({ stats }) {
  const data = [
    { name: "Captions", value: stats?.captions || 0 },
    { name: "Hashtags", value: stats?.hashtags || 0 },
    { name: "WhatsApp", value: stats?.whatsapp || 0 },
    { name: "Posters", value: stats?.posters || 0 },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <h2 className="text-xl font-black">Campaign Breakdown</h2>
      <p className="text-[#6b7280] text-sm mt-1">
        Generated content by module.
      </p>

      <div className="h-[300px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="value" fill="#111827" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyChart;