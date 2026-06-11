import API from "./authApi";

export const saveBusiness = async (data) => {
  const token = localStorage.getItem("token");

  return API.post("/business", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBusiness = async () => {
  const token = localStorage.getItem("token");

  return API.get("/business", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};