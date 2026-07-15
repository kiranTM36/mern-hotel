const router = require('express').Router()
const roomModel = require('./../model/roomModel')
const multer = require('../middleware/multer')

router.post('/create' ,multer.single('image'), async(req, res)=> {
    try {
        const data = req.body
        const image = req.file
        const newRoom = new roomModel({
            roomNo : data.roomNo,
            description : data.description,
            category : data.category,
            price : data.price,
            capacity : data.capacity,
            bedType : data.bedType,
            image :image ? image.filename : null,
            amenities : data.amenities,
            status : data.status
        })

        const response = await newRoom.save()

        res.status(200).json({
            sucess : false,
            message : "Room Added Sucessfully",
            response
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to create room",
            error: error.message,
        });
    }
})

module.exports = router