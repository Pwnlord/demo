const express = require('express')
const path = require('path')
const dotenv = require('dotenv') 
dotenv.config()


app = express()
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true}))


const uploadDetails = require('./controllers/details.controller.js')
const detailsUpload = require('./controllers/second.controller.js')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'task.html'));
});
console.log(uploadDetails);

app.post('/contact-us', uploadDetails, async (req, res) => {
    //const { fullName, phoneNumber, email, company} = req.body
    
    res.redirect('./page2.html')
    
})

app.post('/contact-us1',detailsUpload, (req,res, next) => {
    res.redirect('./submitted.html')
} )
 





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    
})