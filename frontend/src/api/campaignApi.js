import API from "./authApi";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCampaigns = async () => {
  return API.get("/campaigns", authHeader());
};

export const getAnalytics = async () => {
  return API.get("/campaigns/analytics", authHeader());
};