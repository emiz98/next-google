import suggestions from '../../data/suggestions'

export default function handler(req, res) {
  res.status(200).json({ response: suggestions })
}
