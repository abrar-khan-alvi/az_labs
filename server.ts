import express from "express";
import { google } from "googleapis";
import "dotenv/config";

const app = express();
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, whatsapp, objective } = req.body;

  if (!name || !email || !phone || !whatsapp || !objective) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-US", { timeZone: "UTC" }),
            name,
            email,
            phone,
            whatsapp,
            objective,
          ],
        ],
      },
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Google Sheets error:", err);
    res.status(500).json({ error: "Failed to save submission" });
  }
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
