export default function handlerLength(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { strings } = req.body;

  if (!Array.isArray(strings)) {
    return res.status(400).json({ error: "strings must be an array" });
  }

  const lengths = strings.map(str => str.length);

  res.status(200).json({ lengths });
}
