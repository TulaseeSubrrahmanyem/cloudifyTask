export default function handler(req, res) {

     if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
      }
  const { strings } = req.body;

  const lengths = strings.map(str => str.length);

  res.status(200).json({ lengths });
}
