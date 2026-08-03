export default async function handler(req, res) {
  const ticker = req.query.symbol;
  const API_KEY = process.env.FINNHUB_KEY;

  if (!ticker) {
    return res.status(400).json({ error: "Missing ticker symbol" });
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
}
//update
