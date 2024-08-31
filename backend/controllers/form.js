
const nodemailer = require("nodemailer");
const fs = require("fs");



let mailTransporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // use TLS
	auth: {
		user: process.env.EMAIL_TO,
		pass: "oyeh dqvr bdye caqk",
	},
});

exports.contactForm = (req, res) => {


	const { email, name, message } = req.body
	console.log(req.body)

	let details = {
		from: email,
		to: process.env.EMAIL_TO,
		subject: `Contact form - ${process.env.APP_NAME} `,
		text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message:${message}`,
		html: `
			<h4>Email received from contact form:</h4>
			<p>Sender name:${name} </p>
			<p>Sender email:${email} </p>
			<p>Sender message:${message} </p>
			<hr/>
			<p>This email may contain sensetive information</p>

		`
			
	}; 

	mailTransporter.sendMail(details, (error) => {
	
		if (error) {
			console.log('error ' + error);
			res.json(error);
		}
	
		else {
			console.log('success ');
			return res.json({
				success: true
			});
		}
	
	
	} 
	)  
	
}



exports.contactBlogAuthorForm = (req, res) => {


	const { authorEmail, email, name, message } = req.body
	console.log(req.body)
	let maillist = [authorEmail, process.env.EMAIL_TO]

	let details = {
		from: email,
		to: maillist,
		subject: `Someone messaged you from - ${process.env.APP_NAME} `,
		text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message:${message}`,
		html: `
			<h4>Email received from :</h4>
			<p>Sender name:${name} </p>
			<p>Sender email:${email} </p>
			<p>Sender message:${message} </p>
			<hr/>
			<p>This email may contain sensetive information</p>

		`
			
	}; 

	mailTransporter.sendMail(details, (error) => {
	
		if (error) {
			console.log('error ' + error);
			res.json(error);
		}
	
		else {
			console.log('success ');
			return res.json({
				success: true
			});
		}
	
	
	} 
	)  
	
}


