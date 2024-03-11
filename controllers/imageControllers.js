const asyncHandler = require('express-async-handler')
const Image = require('../models/imageModel')

// add image and caption
const add = asyncHandler(async(req,res) => {
    const imagedata = req.file.filename;
    const Caption = (req.Text) || '';
    console.log("Text: "+req.Text)
    if( !req.file ){
        res.status(400).send("File not uploaded");
        throw new Error("File not uploaded");
    }
    
    const data = await Image.create({
        image: imagedata,
        text: Caption
    })
    if( !data ){
        res.status(400).send("Not uploaded to database")
        return new Error("Database not uploaded")
    }
    res.status(200).send("image and text uploaded");
});

//delete image and caption
const del = asyncHandler(async(req,res) => {
    res.status(200).send("image deleted");
});

//view image and caption
const view = asyncHandler(async(req,res) => {
    res.status(200).send("image viewed");
});



module.exports = {add,del,view};