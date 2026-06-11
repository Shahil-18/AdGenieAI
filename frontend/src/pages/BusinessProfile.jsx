import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { saveBusiness, getBusiness } from "../api/businessApi";
import { uploadLogo } from "../api/uploadApi";
import { Upload } from "lucide-react";

function BusinessProfile() {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    website: "",
    slogan: "",
    brandColor: "#111827",
    logoUrl: "",
  });

  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadBusiness();
  }, []);

  const loadBusiness = async () => {
    try {
      const res = await getBusiness();
      if (res.data.business) setFormData(res.data.business);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const base64 = await convertToBase64(file);
      const res = await uploadLogo(base64);

      setFormData((prev) => ({
        ...prev,
        logoUrl: res.data.logoUrl,
      }));

      setMessage("Logo uploaded successfully ✅");
    } catch (error) {
      setMessage("Logo upload failed ❌");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveBusiness(formData);
      setMessage("Business profile saved successfully ✅");
    } catch (error) {
      setMessage("Error saving profile ❌");
    }
  };

  return (
    <DashboardLayout>
      <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
        Brand Settings
      </p>

      <h1 className="text-4xl font-black mt-2">Business Profile</h1>

      <p className="text-[#6b7280] mt-3">
        Manage your company identity, website, logo and campaign branding.
      </p>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 mt-8">
        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8">
          <h2 className="text-2xl font-black">Brand Preview</h2>

          <div className="mt-8 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-3xl border border-[#e5e7eb] bg-[#f9fafb] flex items-center justify-center overflow-hidden">
              {formData.logoUrl ? (
                <img
                  src={formData.logoUrl}
                  alt="Business logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  className="text-4xl font-black text-white w-full h-full flex items-center justify-center"
                  style={{ background: formData.brandColor }}
                >
                  {formData.businessName?.charAt(0) || "A"}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-black mt-5">
              {formData.businessName || "Your Business"}
            </h3>

            <p className="text-[#6b7280] mt-1">
              {formData.industry || "Industry"}
            </p>

            <p className="text-[#4b5563] mt-4">
              {formData.slogan || "Your business slogan appears here."}
            </p>

            {formData.website && (
              <p className="text-sm text-[#6b7280] mt-3">{formData.website}</p>
            )}
          </div>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8">
          {message && (
            <div className="mb-6 bg-[#f3f4f6] border border-[#e5e7eb] p-4 rounded-xl font-semibold">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-bold">Business Logo</label>

              <label className="mt-3 flex items-center justify-center gap-3 border border-dashed border-[#d1d5db] rounded-2xl p-6 cursor-pointer hover:bg-[#f9fafb]">
                <Upload size={20} />
                {uploading ? "Uploading..." : "Upload Logo"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] p-4 rounded-xl"
            />

            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] p-4 rounded-xl"
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website || ""}
              onChange={handleChange}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] p-4 rounded-xl"
            />

            <input
              type="text"
              name="slogan"
              placeholder="Business Slogan"
              value={formData.slogan}
              onChange={handleChange}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] p-4 rounded-xl"
            />

            <div>
              <label className="font-bold block mb-2">Brand Color</label>
              <input
                type="color"
                name="brandColor"
                value={formData.brandColor}
                onChange={handleChange}
                className="w-24 h-14"
              />
            </div>

            <button className="w-full bg-[#111827] text-white p-4 rounded-xl font-black">
              Save Business Profile
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BusinessProfile;