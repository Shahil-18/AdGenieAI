import DashboardLayout from "../layouts/DashboardLayout";

function PricingPage() {
  const plans = [
    { name: "Free", price: "₹0", features: ["10 creatives/month", "Basic tools", "Campaign history"] },
    { name: "Starter", price: "₹299", features: ["100 creatives/month", "Premium templates", "WhatsApp campaigns"], active: true },
    { name: "Pro", price: "₹999", features: ["Unlimited creatives", "Analytics", "Priority AI models"] },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-black">Subscription Plans</h1>
      <p className="text-slate-500 mt-2">Choose a plan for your business growth.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 border shadow-sm ${
              plan.active ? "bg-violet-700 text-white border-violet-700 scale-105" : "bg-white border-slate-200"
            }`}
          >
            <h2 className="text-2xl font-black">{plan.name}</h2>
            <p className="text-5xl font-black mt-5">{plan.price}</p>
            <p className={plan.active ? "text-violet-100" : "text-slate-500"}>per month</p>

            <div className="mt-8 space-y-3">
              {plan.features.map((f) => (
                <p key={f}>✅ {f}</p>
              ))}
            </div>

            <button className={`w-full mt-8 py-3 rounded-xl font-bold ${plan.active ? "bg-white text-violet-700" : "bg-slate-900 text-white"}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default PricingPage;