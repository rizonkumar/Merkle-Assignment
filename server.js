const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/get-trusted-ticket", async (req, res) => {
  const tableauUsername = "rizon.kumar";
  const tableauServerUrl = "";
  try {
    const params = new URLSearchParams();
    params.append("username", tableauUsername);
    if (siteContentUrl) {
      params.append("target_site", siteContentUrl);
    }

    const response = await axios.post(`${tableauServerUrl}/trusted`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const ticket = response.data;

    res.json({ ticket });
  } catch (error) {
    console.error("Error ", error);
    res.status(500).send("Error getting trusted ticket");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
