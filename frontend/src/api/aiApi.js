import API from "./authApi";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const generateCaption = async (data) => {
  return API.post("/ai/caption", data, authHeader());
};

export const generateHashtags = async (data) => {
  return API.post("/ai/hashtags", data, authHeader());
};

export const generateWhatsApp = async (data) => {
  return API.post("/ai/whatsapp", data, authHeader());
};