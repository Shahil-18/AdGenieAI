import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getAnalytics, getCampaigns } from "../api/campaignApi";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Hash,
  MessageCircle,
  Image,
  ArrowRight,
  BarChart3,
  Building2,
} from "lucide-react";

function Dashboard() {
  const [analytics, setAnalytics] = useState({});
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const analyticsRes = await getAnalytics();
      const campaignsRes = await getCampaigns();

      setAnalytics(analyticsRes.data);
      setRecent(campaignsRes.data.campaigns.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
            Workspace Overview
          </p>
          <h1 className="text-4xl font-black mt-2 text-[#111827]">
            Marketing Dashboard
          </h1>
          <p className="text-[#6b7280] mt-3 max-w-2xl">
            Manage brand assets, generate campaign content and monitor marketing activity from one business workspace.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/business"
            className="bg-white border border-[#d1d5db] text-[#111827] px-5 py-3 rounded-xl font-bold flex items-center gap-2"
          >
            <Building2 size={18} />
            Brand Profile
          </Link>

          <Link
            to="/caption-generator"
            className="bg-[#111827] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2"
          >
            Generate Campaign <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <section className="grid md:grid-cols-4 gap-5 mt-8">
        <Stat title="Total Campaigns" value={analytics.totalCampaigns || 0} />
        <Stat title="Captions Generated" value={analytics.totalCaptions || 0} />
        <Stat title="Hashtag Sets" value={analytics.totalHashtags || 0} />
        <Stat title="WhatsApp Campaigns" value={analytics.totalWhatsApp || 0} />
      </section>

      <section className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 mt-8">
        <ToolCard
          icon={<Sparkles />}
          title="Caption Generator"
          text="Create ad captions for social media, promotions and campaigns."
          link="/caption-generator"
        />
        <ToolCard
          icon={<Hash />}
          title="Hashtag Generator"
          text="Generate organized hashtag sets for campaign discovery."
          link="/hashtag-generator"
        />
        <ToolCard
          icon={<MessageCircle />}
          title="WhatsApp Campaigns"
          text="Prepare customer-facing WhatsApp promotional messages."
          link="/whatsapp-generator"
        />
        <ToolCard
          icon={<Image />}
          title="Poster Prompts"
          text="Create structured prompts for campaign poster creatives."
          link="/poster-generator"
        />
      </section>

      <section className="grid lg:grid-cols-[1.5fr_0.8fr] gap-6 mt-8">
        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-[#111827]">
                Recent Campaigns
              </h2>
              <p className="text-[#6b7280] mt-1">
                Latest generated campaign assets and marketing content.
              </p>
            </div>

            <Link
              to="/campaign-history"
              className="text-[#111827] font-bold flex items-center gap-2"
            >
              View All <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {recent.length === 0 && (
              <div className="border border-dashed border-[#d1d5db] rounded-2xl p-10 text-center">
                <BarChart3 className="mx-auto text-[#9ca3af]" />
                <p className="text-[#6b7280] mt-3">
                  No campaigns yet. Generate your first campaign to start tracking activity.
                </p>
              </div>
            )}

            {recent.map((item) => (
              <div
                key={item._id}
                className="border border-[#e5e7eb] rounded-2xl p-5 hover:bg-[#f9fafb] transition"
              >
                <div className="flex justify-between gap-4">
                  <p className="capitalize font-black text-[#111827]">
                    {item.type}
                  </p>
                  <p className="text-sm text-[#6b7280]">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <p className="text-[#4b5563] mt-3 line-clamp-2">
                  {item.output}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Panel
            title="Business Profile Status"
            text="Complete your brand profile to keep generated campaigns consistent with your business identity."
          />

          <Panel
            title="Recommended Next Step"
            text="Add downloadable exports and logo uploads to make this platform production-ready."
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <p className="text-sm text-[#6b7280] font-semibold">{title}</p>
      <h2 className="text-4xl font-black mt-4 text-[#111827]">{value}</h2>
    </div>
  );
}

function ToolCard({ icon, title, text, link }) {
  return (
    <Link
      to={link}
      className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#111827] transition"
    >
      <div className="w-11 h-11 rounded-xl bg-[#f3f4f6] text-[#111827] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-black mt-5 text-[#111827]">{title}</h3>
      <p className="text-[#6b7280] mt-3 leading-relaxed">{text}</p>

      <p className="mt-6 text-[#111827] font-bold flex items-center gap-2">
        Open Tool <ArrowRight size={17} />
      </p>
    </Link>
  );
}

function Panel({ title, text }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <h3 className="font-black text-xl text-[#111827]">{title}</h3>
      <p className="text-[#6b7280] mt-3 leading-relaxed">{text}</p>
    </div>
  );
}

export default Dashboard;