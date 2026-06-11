import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getCampaigns } from "../api/campaignApi";
import { Copy, FileText } from "lucide-react";
import ExportActions from "../components/ExportActions";

function Reports() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const res = await getCampaigns();
      setCampaigns(res.data.campaigns);
    } catch (error) {
      console.log(error);
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <DashboardLayout>
      <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
        Reports
      </p>

      <h1 className="text-4xl font-black mt-2">Campaign Reports</h1>

      <p className="text-[#6b7280] mt-3">
        Review, copy and download generated campaign assets.
      </p>

      <div className="bg-white border border-[#e5e7eb] rounded-2xl mt-8 overflow-hidden">
        <div className="grid grid-cols-[150px_1fr_190px_260px] bg-[#f9fafb] px-6 py-4 text-sm font-black text-[#6b7280]">
          <p>Type</p>
          <p>Campaign Output</p>
          <p>Date</p>
          <p>Actions</p>
        </div>

        {campaigns.length === 0 && (
          <div className="p-12 text-center">
            <FileText className="mx-auto text-[#9ca3af]" size={36} />
            <p className="text-[#6b7280] mt-4">No campaigns saved yet.</p>
          </div>
        )}

        {campaigns.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[150px_1fr_190px_260px] gap-4 px-6 py-5 border-t border-[#f1f1f1] items-start"
          >
            <p className="capitalize font-black text-[#111827]">
              {item.type}
            </p>

            <p className="text-[#4b5563] line-clamp-3 whitespace-pre-wrap">
              {item.output}
            </p>

            <p className="text-sm text-[#6b7280]">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => copyText(item.output)}
                className="bg-[#111827] text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold"
              >
                <Copy size={15} />
                Copy
              </button>

              <ExportActions title={`${item.type}-campaign`} content={item.output} />
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Reports;