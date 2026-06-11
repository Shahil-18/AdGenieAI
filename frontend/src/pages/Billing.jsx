import DashboardLayout from "../layouts/DashboardLayout";
import PlanCard from "../components/PlanCard";
import API from "../api/authApi";
import { useAuth } from "../context/AuthContext";

function Billing() {
  const { user } = useAuth();

  const updatePlan = async (plan) => {
    const token = localStorage.getItem("token");

    await API.post(
      "/subscription/update-plan",
      { plan },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Plan updated. Please login again to refresh plan.");
  };

  return (
    <DashboardLayout>
      <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
        Billing
      </p>

      <h1 className="text-4xl font-black mt-2">Subscription Plans</h1>

      <p className="text-[#6b7280] mt-3">
        Choose a plan based on your monthly campaign needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <PlanCard
          name="Free"
          price="₹0"
          active={user?.plan === "free"}
          features={["100 campaigns", "Basic generators", "Campaign history"]}
          onChoose={() => updatePlan("free")}
        />

        <PlanCard
          name="Starter"
          price="₹299"
          active={user?.plan === "starter"}
          features={["500 campaigns", "PDF exports", "Reports dashboard"]}
          onChoose={() => updatePlan("starter")}
        />

        <PlanCard
          name="Pro"
          price="₹999"
          active={user?.plan === "pro"}
          features={["Unlimited campaigns", "Advanced analytics", "Priority tools"]}
          onChoose={() => updatePlan("pro")}
        />
      </div>
    </DashboardLayout>
  );
}

export default Billing;