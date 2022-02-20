import response from '../../data/response'

export default function handler(req, res) {
  res.status(200).json({ response: response })
}
