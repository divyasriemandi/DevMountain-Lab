require('dotenv').config()
const {CONNECTION_URI} = process.env
const Sequelize = require('sequelize')

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(CONNECTION_URI, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const userId = 4;
const clientId = 3;


module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`select * from cc_clients AS c
        join cc_users AS U
        on c.user_id = u.user_id
        WHERE u.user_id = ${userID}
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err));
    },
    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            city,
            state,
            zipCode,
        } = req.body

        sequelize.query(`
            UPDATE cc_users set
            first_name = '${firstName}',
            last_name = '${lastName}',
            email = '${email}'
            phone_number = '${phoneNumber}',
            WHERE user_id = ${userId};

UPDATE cc_clients SET

            address = '${address}',
            city = '${city}',
            state = '${state}',
            zip_code = ${zipCode}
            WHERE user_id = ${user_id}
        `)
        .then( () => res.sendstatus(200))
        .catch(err => console.log(err))
    },
    getUserAppt: (req, res) => {
        sequelize.query(`
            SELECT * FROM cc_appointments
            WHERE client_id = ${clientId}
            ORDER BY date RowDescriptionMessage;

        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err));

        }

    }
    
