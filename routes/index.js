const router = require('express').Router();
// import package swagger
const swaggerUi = require('swagger-ui-express')
// import file json
const swaggerDocument=require('../docs/swagger.json')


// API docs => dokumentasi API
router.use('/api-docs', swaggerUi.serve)
router.use('/api-docs', swaggerUi.setup(swaggerDocument))

const Admin = require("./admin")
const Inventory = require("./inventory")
const Aplikasi = require("./aplikasi")

//API
router.use("/api/v1/admin", Admin)
router.use("/api/v1/inventory", Inventory)
router.use("/api/v1/aplikasi", Aplikasi)

module.exports = router