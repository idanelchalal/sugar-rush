const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwtUtils = require('../util/JwtUtils')

exports.logIn = async (req, res) => {
    // FINDING A USER BY GIVEN USERNAME
    const user = await userModel.findOne({ username: req.body.username })
    if (!user) {
        return res.status(401).json({ ok: false, data: 'USERNAME_INCORRECT' })
    }

    // USERNAME FOUND => COMPARING PASSWORDS
    const passwordsMatch = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (passwordsMatch) {
        try {
            const token = jwtUtils.accessToken(user._id)
            user.token = token
            user.save()
            let expireDate = Date.now() + 1000 * 60 * 60 // HOUR
            if (req.body.isRememberChecked) {
                expireDate = Date.now() + 60 * 60 * 24 * 1000 * 30 // A MONTH
            }

            return res.status(202).json({
                ok: true,
                data: 'CREDENTIALS_CORRECT',
                token: {
                    id: user._id,
                    sessionToken: token,
                    expirationDate: expireDate,
                },
            })
        } catch (err) {
            // IN-CASE THROWS AN ERROR
            return res.status(500).send({ ok: false, data: err })
        }
    } else
        return res.status(422).send({
            ok: false,
            data: 'PASSWORD_INCORRECT',
        })
}

exports.logOut = (req, res) => {}
