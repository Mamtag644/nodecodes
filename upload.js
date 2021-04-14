const file = 'C:\Users\Dell\Downloads\one.jpg';
const fs = require('fs');
const path =require('path');



fs.readFile(file,(err,content) => {

    const parent = __dirname;
    console.log(parent);
    const fullpath = path.join(parent,'images/upload.jpg');


    fs.write(fullpath,content,(err)=>{
    if(err)
    {
        console.log('upload error');
    }
    else
    {
        console.log('upload done.........');
    }

    });
});

