exports.getUser = (req, res) => {
        res.json({
            users: []
        });
};

exports.createUser = (req, res) => {
    res.send("create User");
}