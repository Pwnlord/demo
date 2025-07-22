const express = require('express')
const path = require('path')
const dotenv = require('dotenv') 
const session = require('express-session');
const nodemailer = require('nodemailer')

dotenv.config()


app = express()
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true}))


const uploadDetails = require('./controllers/details.controller.js')
const detailsUpload = require('./controllers/second.controller.js')
const ba1Cont = require('./controllers/ba1.controller.js')
const ba2Cont = require('./controllers/ba2.controller.js')
const ba3Cont = require('./controllers/ba3.controller.js')
const by1Cont = require('./controllers/by1.controller.js')
const by2Cont = require('./controllers/by2.controller.js')
const by3Cont = require('./controllers/by3.controller.js')
const bp1Cont = require('./controllers/bp1.controller.js')
const bp2Cont = require('./controllers/bp2.controller.js')
const bp3Cont = require('./controllers/bp3.controller.js')
const bp4Cont = require('./controllers/bp4.controller.js')


app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fgh.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'task.html'));
});

app.get('/become-an-affliate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ba1.html'));
})
app.get('/rent-property', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'by1.html'));
})
app.get('/list-property', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bp1.html'));
})
console.log(uploadDetails);

app.post('/contact-us', uploadDetails, async (req, res) => {
    res.redirect('./page2.html') 
})

app.post('/contact-us1',detailsUpload, (req,res, next) => {
    res.redirect('./submitted.html')
} )

app.post('/ba1',ba1Cont, (req,res, next) => {
    req.session.data1 = req.body
    res.redirect('./ba2.html')
} )

app.post('/ba2',ba2Cont, (req,res, next) => {
    req.session.data2 = req.body
    res.redirect('./ba3.html')
} )

app.post('/ba3',ba3Cont, (req,res, next) => {
    req.session.data3 = req.body
    res.redirect('./ba4.html')
} )

app.post('/ba4',detailsUpload, async (req,res, next) => {
    req.session.data4 = req.body

    const formData = {
        ...req.session.data1,
        ...req.session.data2,
        ...req.session.data3,
        ...req.session.data4
      };

    // Format email content
  const emailBody = Object.entries(formData).map(([key, val]) => `${key}: ${val}`).join('\n');

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use a real SMTP service
    auth: {
      user: 'solomondamola023@gmail.com',
      pass: 'eslbkeaevjbspowa'
    }
  });

  const mailOptions = {
    from: 'solomondamola023@gmail.com',
    to: 'f8df80b3.turningways.com@emea.teams.ms',
    subject: 'New ALMA Application',
    text: emailBody
  };

  try {
    await transporter.sendMail(mailOptions);
    req.session.destroy(); // clear session
    return res.redirect('/thank-you.html');
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).send('Failed to send email');
  }
  //return res.redirect('./submitted.html')

} )

app.post('/by1', by1Cont,(req, res) => {
    req.session.data5 = req.body
    res.redirect('./by2.html')
})

app.post('/by2', by2Cont,(req, res) => {
    req.session.data6 = req.body
    res.redirect('./by3.html')
})

app.post('/by3', by3Cont,async(req, res) => {
    req.session.data7 = req.body
    //res.redirect('./thank-you.html')

    const formData = {
        ...req.session.data5,
        ...req.session.data6,
        ...req.session.data7
      };

    // Format email content
  const emailBody = Object.entries(formData).map(([key, val]) => `${key}: ${val}`).join('\n');

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use a real SMTP service
    auth: {
      user: 'solomondamola023@gmail.com',
      pass: 'eslbkeaevjbspowa'
    }
  });

  const mailOptions = {
    from: 'solomondamola023@gmail.com',
    to: 'f8df80b3.turningways.com@emea.teams.ms',
    subject: 'New RENT Application',
    text: emailBody
  };

  try {
    await transporter.sendMail(mailOptions);
    req.session.destroy(); // clear session
    return res.redirect('/thank-you.html');
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).send('Failed to send email');
  }
  //return res.redirect('./submitted.html')
 
})

app.post('/bp1', bp1Cont, (req, res) => {
    req.session.data8 = req.body
    res.redirect('./bp2.html')
})

app.post('/bp2', bp2Cont, (req, res) => {
    req.session.data9 = req.body
    res.redirect('./bp3.html')
})

app.post('/bp3', bp3Cont, (req, res) => {
    req.session.data10 = req.body
    res.redirect('./bp4.html')
})

app.post('/bp4', bp4Cont, async(req, res) => {
    req.session.data11 = req.body

    const formData = {
        ...req.session.data8,
        ...req.session.data9,
        ...req.session.data10,
        ...req.session.data11
      };

    // Format email content
  const emailBody = Object.entries(formData).map(([key, val]) => `${key}: ${val}`).join('\n');

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use a real SMTP service
    auth: {
      user: 'solomondamola023@gmail.com',
      pass: 'eslbkeaevjbspowa'
    }
  });

  const mailOptions = {
    from: 'solomondamola023@gmail.com',
    to: 'f8df80b3.turningways.com@emea.teams.ms',
    subject: 'New LIST Application',
    text: emailBody
  };

  try {
    await transporter.sendMail(mailOptions);
    req.session.destroy(); // clear session
    return res.redirect('/thank-you.html');
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).send('Failed to send email');
  }
    //res.redirect('./thank-you.html')
})



  
 





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    
})