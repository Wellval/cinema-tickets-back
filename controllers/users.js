const getMe = (req, res) => {
    res.send({ ...req.user, password: undefined });
}

module.exports = { getMe }