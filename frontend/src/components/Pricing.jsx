const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["5 ads/month", "Basic captions", "Basic hashtags"],
  },
  {
    name: "Starter",
    price: "₹299",
    features: ["100 ads/month", "Poster ideas", "WhatsApp campaigns"],
    active: true,
  },
  {
    name: "Pro",
    price: "₹999",
    features: ["Unlimited ads", "Analytics", "Premium templates"],
  },
];

function Pricing() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center">Simple pricing</h2>
      <p className="text-slate-400 text-center mt-4">Start free. Upgrade when your business grows.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-7 border ${
              plan.active
                ? "bg-violet-600 border-violet-400 scale-105"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <h3 className="text-2xl font-black">{plan.name}</h3>
            <p className="text-4xl font-black mt-4">{plan.price}</p>
            <p className={plan.active ? "text-violet-100" : "text-slate-400"}>per month</p>

            <div className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <p key={feature}>✅ {feature}</p>
              ))}
            </div>

            <button className="w-full mt-7 bg-white text-black py-3 rounded-xl font-bold">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;