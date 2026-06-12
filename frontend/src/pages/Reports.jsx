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
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          Reports
        </p>
        <h1 className="page-title mt-2">Campaign Reports</h1>
        <p className="page-subtitle mt-3">
          Review, copy, and export generated marketing assets.
        </p>
      </div>

      <div className="card mt-6 overflow-x-auto p-0">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-[140px_1fr_190px_260px] bg-[#f9fafb] border-b border-[#e5e7eb] px-4 py-3 text-xs font-semibold text-[#6b7280] uppercase">
            <p>Type</p>
            <p>Campaign Output</p>
            <p>Date</p>
            <p>Actions</p>
          </div>

          {campaigns.length === 0 && (
            <div className="p-12 text-center">
              <FileText className="mx-auto text-[#9ca3af]" size={32} />
              <p className="font-semibold mt-4">No reports yet</p>
              <p className="page-subtitle mt-1">Generated campaigns will appear here.</p>
            </div>
          )}

          {campaigns.map((item, index) => (
            <div
              key={item._id}
              className={`grid grid-cols-[140px_1fr_190px_260px] gap-4 px-4 py-4 border-b border-[#f1f5f9] hover:bg-[#f9fafb] ${
                index % 2 === 1 ? "bg-[#fafafa]" : "bg-white"
              }`}
            >
              <p className="capitalize font-semibold text-sm">{item.type}</p>

              <p className="text-sm text-[#4b5563] line-clamp-3 whitespace-pre-wrap">
                {item.output}
              </p>

              <p className="text-sm text-[#6b7280]">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => copyText(item.output)}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Copy size={15} />
                  Copy
                </button>

                <ExportActions title={`${item.type}-campaign`} content={item.output} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Reports;