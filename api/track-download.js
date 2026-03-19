// api/track-download.js

export default async function handler(req, res) {
  console.log('Méthode reçue :', req.method);
  return res.status(200).json({ message: 'OK', method: req.method });
}