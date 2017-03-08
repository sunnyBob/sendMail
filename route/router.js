var express = require('express')
var nodemailer = require('nodemailer')
var router = express.Router()
var bodyParser = require('body-parser');  
   
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.post('/send', urlencodedParser, function(req,res,next) {
	// create reusable transporter object using the default SMTP transport
	var postData = req.body
	var transporter = nodemailer.createTransport({
	    host: "smtp.163.com", // 主机
		secureConnection: false, // 使用 SSL
		port: 25, // SMTP 端口
	    auth: {
	        user: '15589527573@163.com',
	        pass: '>>>>'
	    }
	});

	// setup email data with unicode symbols
	var mailOptions = {
	    from: "Mr Liu<"+postData.sender+">", // sender address
	    to: postData.recev, // list of receivers
	    subject: postData.subject, // Subject line
	    text: postData.content, // plain text body
	    html: '<b>'+postData.content+'</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
})
module.exports = router