import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { addListing } from "../controllers/listing.controller.js"
import { getListing } from "../controllers/listing.controller.js";

import upload from "../middlewares/multer.js";

let listingRouter = express.Router()

listingRouter.post("/add",isAuth,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]),addListing)

listingRouter.get("/get",getListing)


export default listingRouter