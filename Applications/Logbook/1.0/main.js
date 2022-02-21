var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var nunjucks = require('nunjucks');
var crypto = require('crypto');
var cookieParser = require('cookie-parser');

var secret_key = 'custom-value0123';

// AD functionality
var ActiveDirectory = require('activedirectory2');
var config = {
	url: 'ldap://deokosdc023.cznet.zeiss.org',
	baseDN: 'CN=APPODEOKOY1_Logs3fmUsers,OU=Groups,OU=01DEOKO,OU=01DE,OU=01,OU=AGC,DC=cznet,DC=zeiss,DC=org',
	username: 'y1imba@cznet.zeiss.org',
	password: 'Y1backup15APR'
}
var ad = new ActiveDirectory(config);

var app = express();

nunjucks.configure('views', {
  	autoescape: true,
  	express   : app
});

app.use(session({
	secret: secret_key,
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 900000 }
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser(secret_key));

/* ====================================================================================================== */
/* =========== Login Page =========== */
// Development mode, to bypass AD auth (true/false)
var devmode = true;

app.get('/', function(request, response) {
	response.render('index.html');
});

app.post('/', function(request, response) {
	// Create variables with the post data
	var username = request.body.username + '@cznet.zeiss.org';
	var password = request.body.password;

	// check if the data exists and is not empty
	if (!(username && password)) {
		response.send('Please enter Username and Password!');
		response.end();
	} else {
		ad.authenticate(username, password, function (err, auth) {
			if (devmode || auth) {
				// Account exists (username and password match)
				// Create session variables
				request.session.loggedin = true;
				request.session.username = username;

				// Redirect to home page
				response.send('Success');
				response.end();
			} else {
				console.log('ERROR: '+JSON.stringify(err));
				response.send('Incorrect Username and/or Password!');
				response.end();
			}
		});
	}
});

/* ====================================================================================================== */
/* =========== Logbook Page =========== */
app.get('/logbook', function(request, response) {
	// Check if user is logged in
	if (request.session.loggedin) {
		// Split the username using '@' as separator
		// The result is an array with 2 elements [user, domain.name]
		var user = request.session.username.split('@');
		// Render logbook page
		response.render('logbook.html', { username: user[0], page_title: 'Logbook' });
	} else {
		// Redirect to login page
		response.redirect('/');
	}
});

var elastic = require('./libraries/elasticsearch');
app.post('/logbook', function(request, response) {
    if (elastic.addDocument(request.body)) {
        response.send('Success')
    } else {
        response.send('Failed')
    }
    response.end();
});



/* ====================================================================================================== */
/* =========== Shift-transfer Page =========== */
app.get('/shift-transfer', function(request, response) {
	// Check if user is logged in
	if (request.session.loggedin) {
		// Split the username using '@' as separator
		// The result is an array with 2 elements [user, domain.name]
		var user = request.session.username.split('@');
		// Render shift-transfer page
		response.render('shift-transfer.html', { username: user[0], page_title: 'Shift transfer' });
	} else {
		// Redirect to login page
		response.redirect('/');
	}
});

/* ====================================================================================================== */
/* =========== Logout =========== */
app.get('/logout', function(request, response) {
	// Destroy session data
	request.session.destroy();
	// Redirect to login page
	response.redirect('/');
});

// Listen on port 3000 (http://localhost:3000/)
 app.listen(3010) ;
console.log('Server running1111...')
