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
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          Campaign Archive
        </p>
        <h1 className="page-title mt-2">Campaign History</h1>
        <p className="page-subtitle mt-3">
          Review all generated captions, hashtags, WhatsApp messages, and poster prompts.
        </p>
      </div>

      <div className="card mt-6 p-0 overflow-hidden">
        {campaigns.length === 0 && (
          <div className="p-12 text-center">
            <FileText className="mx-auto text-[#9ca3af]" size={32} />
            <p className="font-semibold mt-4">No campaigns saved yet</p>
            <p className="page-subtitle mt-1">Create your first campaign to see it here.</p>
          </div>
        )}

        <div className="divide-y divide-[#e5e7eb]">
          {campaigns.map((item) => (
            <div key={item._id} className="p-5 hover:bg-[#f9fafb]">
              <div className="flex justify-between gap-4">
                <div>
                  <span className="badge bg-[#eff6ff] text-[#2563eb] capitalize">
                    {item.type}
                  </span>
                  <p className="text-xs text-[#6b7280] mt-2">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>

                <button onClick={() => copyText(item.output)} className="btn-secondary inline-flex items-center gap-2">
                  <Copy size={15} />
                  Copy
                </button>
              </div>

              <p className="text-sm text-[#4b5563] mt-4 whitespace-pre-wrap leading-6">
                {item.output}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CampaignHistory;