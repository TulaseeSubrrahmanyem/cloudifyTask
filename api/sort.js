export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "numbers must be an array" });
  }

  const sorted = numbers.sort((a, b) => b - a);

  return res.status(200).json({ sorted });
}
