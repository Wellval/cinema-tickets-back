const getMe = (req, res) => {
    res.send({ ...req.user.toJSON(), password: undefined });
}

module.exports = { getMe }