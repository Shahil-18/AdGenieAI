import API from "./authApi";

export const uploadLogo = async (image) => {
  const token = localStorage.getItem("token");

  return API.post(
    "/upload/logo",
    { image },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};