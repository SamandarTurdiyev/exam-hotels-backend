import {Router} from "express"
import Hotel from "../models/hotel.js"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js"
import { VerifyAdmin } from "../utils/verifyToken.js"
const router = Router()

// create
router.post('/',  VerifyAdmin  , createHotel) 
// update
router.put('/:id',VerifyAdmin , updateHotel) 
// delete
router.delete('/:id',VerifyAdmin , deleteHotel) 
// get
router.get('/find/:id'  , getHotel) 
// get all  
router.get('/' , getHotels) 
router.get('/countByCity' , countByCity) 
router.get('/countByType' , countByType) 
router.get('/room/:id' , getHotelRooms) 

export default router