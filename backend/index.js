const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');

const port = 3001;
const app = express();
app.use(cors())

//parsing the body using parser of express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.post("/send", async(req, res)=>{
    const {name, email, phone, details} = req.body;

    // Create a transport object for nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      //user: process.env.EMAIL,
      //pass: process.env.PASSWORD,
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Set up the email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL2,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDetails: ${details}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(3001, () => {
    console.log(`Server listening on port ${3001}`);
  });