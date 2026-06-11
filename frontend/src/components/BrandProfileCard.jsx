function BrandProfileCard({ business, campaignsCount = 0 }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
        Brand Workspace
      </p>

      <div className="flex items-center gap-5 mt-5">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#111827] flex items-center justify-center text-white font-black text-2xl">
          {business?.logoUrl ? (
            <img
              src={business.logoUrl}
              alt="Business logo"
              className="w-full h-full object-cover"
            />
          ) : (
            business?.businessName?.charAt(0) || "A"
          )}
        </div>

        <div>
          <h2 className="text-2xl font-black">
            {business?.businessName || "No Business Profile"}
          </h2>

          <p className="text-[#6b7280]">
            {business?.industry || "Add your industry"}
          </p>

          {business?.website && (
            <p className="text-sm text-[#6b7280] mt-1">{business.website}</p>
          )}
        </div>
      </div>

      <p className="text-[#4b5563] mt-5">
        {business?.slogan || "Add your business slogan to personalize campaigns."}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#f9fafb] rounded-xl p-4">
          <p className="text-sm text-[#6b7280]">Campaigns</p>
          <h3 className="text-2xl font-black">{campaignsCount}</h3>
        </div>

        <div className="bg-[#f9fafb] rounded-xl p-4">
          <p className="text-sm text-[#6b7280]">Plan</p>
          <h3 className="text-2xl font-black">Free</h3>
        </div>
      </div>
    </div>
  );
}

export default BrandProfileCard;