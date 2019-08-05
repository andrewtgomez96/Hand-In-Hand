const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const creds = require('./config/credentials.json');
const admin = require('./config/creds');

//init app 
const app = express();

//set up stack
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//set up transporter
const transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type:'OAuth2',
      user: admin.user,
      clientId: creds.ClientID,
      clientSecret: creds.ClientSecret,
      refreshToken: creds.RefreshToken
    }
};
/* OLD TRANSPORTER METHOD WHICH ONLY WORKED FOR:
    Google Gmail Allow Less Secure Apps Access
const transport = {
    service: 'gmail',
    auth: {
      user: creds.user,
      pass: creds.password
    }
};*/
  
const transporter = nodemailer.createTransport(transport);

transporter.verify((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server is ready');
    }
});


app.post('/api/form', async (req, res) => {
    
        const htmlEmail = `
        <h3>Conact Information<h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Phone: ${req.body.phone} </li>
            <li>Email: ${req.body.email} </li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

    let mailOptions = {
        from: admin.user,
        to: admin.user,
        subject: `New Message From: ${req.body.name}`,
        text: req.body.message,
        html: htmlEmail
    } 

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({
                msg: 'fail'    
            });
        } else {
            console.log('MessageId: %s', info.messageId);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
            res.json({
                msg: 'success'
            });
        }
    });
});

//PORT 
const port = process.env.PORT || 3001;
//Start server
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
});