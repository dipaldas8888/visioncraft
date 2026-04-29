import axios from "axios";

export const generateImage = async (prompt: string, image: string) => {
  const res = await axios.post(
    "https://api.siliconflow.com/v1/images/generations",
    {
      prompt,
      image,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      },
    },
  );

  return res.data;
};
