import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getCampaigns } from "../api/campaignApi";
import { Copy, FileText } from "lucide-react";

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
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
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
            Campaign Archive
          </p>

          <h1 className="text-4xl font-black mt-2 text-[#111827]">
            Campaign History
          </h1>

          <p className="text-[#6b7280] mt-3">
            Review, copy and manage all generated campaign assets.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#e5e7eb] rounded-2xl mt-8 overflow-hidden">
        <div className="grid grid-cols-[160px_1fr_180px_120px] bg-[#f9fafb] border-b border-[#e5e7eb] px-6 py-4 text-sm font-black text-[#6b7280]">
          <p>Type</p>
          <p>Output</p>
          <p>Date</p>
          <p>Action</p>
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
            className="grid grid-cols-[160px_1fr_180px_120px] items-start gap-4 px-6 py-5 border-b border-[#f1f1f1] hover:bg-[#fafafa]"
          >
            <p className="capitalize font-black text-[#111827]">{item.type}</p>

            <p className="text-[#4b5563] line-clamp-3 whitespace-pre-wrap">
              {item.output}
            </p>

            <p className="text-sm text-[#6b7280]">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <button
              onClick={() => copyText(item.output)}
              className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 rounded-xl text-sm font-bold"
            >
              <Copy size={15} />
              Copy
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default CampaignHistory;