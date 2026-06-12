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
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          Billing
        </p>
        <h1 className="page-title mt-2">Subscription Plans</h1>
        <p className="page-subtitle mt-3">
          Choose a plan based on your monthly campaign generation needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
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