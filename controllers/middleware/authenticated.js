const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send('You can not access this');
    }

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if(!verify) {
            return res.status(401).send('You can not access this');
        }

        next();
    } catch(err) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = {
    verify
}