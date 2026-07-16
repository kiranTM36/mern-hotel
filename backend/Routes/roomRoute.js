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

router.get('filter/:status', async(req, res)=>{
    try {
        const response = await roomModel.find({status : req.params.status})

        res.status(200).json({
            message : `List of ${req.params.status} Rooms`,
            response
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to Filter room",
            error: error.message,
        });
    }
})

router.get('/search/:roomNo', async(req, res)=> {
    try {
        const resposne = await roomModel.findOne({roomNo : req.params.roomNo})

        if(!resposne){
            return res.status(404).json({
                sucess : false,
                message : "Search room Number is not in List",
                resposne
            })
        }

        res.status(200).json({
                sucess : false,
                message : "Search room Number is not in List",
                resposne
        })
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "server Error",
            error: error.message,
        });
    }
})


module.exports = router