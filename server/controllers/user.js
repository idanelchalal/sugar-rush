const mongoose = require('mongoose').Types
const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')

exports.getSingleUser = async (req, res) => {
    const user_parameter = req.params['id']
    const parsed_id = mongoose.ObjectId.isValid(user_parameter)
    if (parsed_id) {
        try {
            const user = await UserModel.findById(user_parameter).select(
                '-password'
            )
            if (user) return res.status(200).json({ ok: true, data: user })
            else
                return res.status(404).json({
                    ok: false,
                    data: 'No user was found.',
                })
        } catch (err) {
            return res.status(404).json({ ok: false, data: err })
        }
    } else {
        try {
            const user = await UserModel.findOne({
                username: user_parameter,
            }).select('-password')

            if (user) return res.status(200).json({ ok: true, data: user })
            else
                return res.status(404).json({
                    ok: false,
                    data: 'No user was found',
                })
        } catch (err) {
            return res.status(404).json({ ok: false, data: err })
        }
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select('-password').lean()
        res.status(200).json({ ok: true, data: users })
    } catch (error) {
        res.status(500).json({ ok: false, data: err })
    }
}

exports.deleteUserById = (req, res) => {
    res.send('USER SELF DELETION PAGE')
}
exports.createNewUser = (req, res) => {
    {
        //bcrypt.hash(req.body.password, 12).then((data) => {
        // const newUser({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password,
        //     birthdate: req.body.birthdate,
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name
        // })
        //.save()
        // .catch((err) => {
        //      res.status(500).send({ ok: false, data: err })
        //  })
        //  .then((data) => {
        //      res.status(201).send({ ok: true, data: data })
        //  })
        //}
        const newUser = new UserModel({
            username: 'idandi',
            email: 'theurani@gmail.com',
            password: 'idandi',
            birthdate: '01-16-1998',
            first_name: 'idan',
            last_name: 'elchalal',
            token: '',
        })
            .catch((err) => {
                res.status(500).json({ ok: false, data: err })
            })
            .then((data) => {
                res.status(201).json({ ok: true, data: data })
            })
    }
}
