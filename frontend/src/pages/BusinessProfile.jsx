import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { saveBusiness, getBusiness } from "../api/businessApi";
import { uploadLogo } from "../api/uploadApi";
import { Upload, Building2, CheckCircle, AlertCircle } from "lucide-react";

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
  const [saving, setSaving] = useState(false);

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

      setMessage("Logo uploaded successfully.");
    } catch (error) {
      setMessage("Logo upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      await saveBusiness(formData);
      setMessage("Business profile saved successfully.");
    } catch (error) {
      setMessage("Error saving profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          Brand Settings
        </p>
        <h1 className="page-title mt-2">Business Profile</h1>
        <p className="page-subtitle mt-3 max-w-2xl">
          Manage your company identity, logo, website, brand color, and campaign positioning.
        </p>
      </div>

      {message && (
        <div className="card mt-6 flex items-center gap-3">
          {message.toLowerCase().includes("failed") ||
          message.toLowerCase().includes("error") ? (
            <AlertCircle size={18} className="text-[#dc2626]" />
          ) : (
            <CheckCircle size={18} className="text-[#16a34a]" />
          )}
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 mt-6">
        <div className="card">
          <h2 className="section-title">Brand Preview</h2>
          <p className="page-subtitle mt-1">
            This preview appears across your workspace.
          </p>

          <div className="mt-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] flex items-center justify-center overflow-hidden">
              {formData.logoUrl ? (
                <img
                  src={formData.logoUrl}
                  alt="Business logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  className="text-3xl font-bold text-white w-full h-full flex items-center justify-center"
                  style={{ background: formData.brandColor }}
                >
                  {formData.businessName?.charAt(0) || "A"}
                </span>
              )}
            </div>

            <h3 className="text-[18px] font-semibold mt-5">
              {formData.businessName || "Your Business"}
            </h3>

            <p className="page-subtitle mt-1">
              {formData.industry || "Industry"}
            </p>

            <p className="text-sm text-[#4b5563] mt-4 leading-6 max-w-md">
              {formData.slogan || "Your business slogan appears here."}
            </p>

            {formData.website && (
              <p className="text-xs text-[#6b7280] mt-3">{formData.website}</p>
            )}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-[#2563eb]" />
            <h2 className="section-title">Profile Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label className="text-sm font-medium">Business Logo</label>

              <label className="mt-2 flex items-center justify-center gap-3 border border-dashed border-[#d1d5db] rounded-lg p-6 cursor-pointer hover:bg-[#f9fafb]">
                <Upload size={18} className="text-[#2563eb]" />
                <span className="text-sm font-medium">
                  {uploading ? "Uploading..." : "Upload Logo"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
            </div>

            <Field
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="AdGenie AI"
            />

            <Field
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="Marketing Technology"
            />

            <Field
              label="Website"
              name="website"
              value={formData.website || ""}
              onChange={handleChange}
              placeholder="https://example.com"
            />

            <Field
              label="Business Slogan"
              name="slogan"
              value={formData.slogan}
              onChange={handleChange}
              placeholder="Create better ads in seconds"
            />

            <div>
              <label className="text-sm font-medium block mb-2">Brand Color</label>
              <input
                type="color"
                name="brandColor"
                value={formData.brandColor}
                onChange={handleChange}
                className="w-20 h-11 rounded-md border border-[#e5e7eb]"
              />
            </div>

            <button disabled={saving} className="btn-primary w-full">
              {saving ? "Saving..." : "Save Business Profile"}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Field({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-modern"
      />
    </div>
  );
}

export default BusinessProfile;