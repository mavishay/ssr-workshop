// req = HTTP incoming message, res = HTTP server response
export const handler = (req, res) => {
    res.status(200).json({ text: 'Hello' })
}
export default handler;