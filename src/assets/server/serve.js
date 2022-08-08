const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(44382, () => {
  console.log('Server Started!');
});

app.route('/api/bookstore').get((request, response) => {
  response.send(BOOKS);
});

var BOOKS = [
	{
		id:1,
		name: 'Book1',
		price: 24,
		quantity: 1,
		category: 'action',
		img: 'img1'	
	},
	{
		id:2,
		name: 'Book2',
		price: 50,
		quantity: 1,
		category: 'action',
		img: 'img2'	
	},
	{
		id:3,
		name: 'Book3',
		price: 20,
		quantity: 2,
		category: 'action',
		img: 'img3'	
	},
	{
		id:4,
		name: 'Book4',
		price: 10,
		quantity: 1,
		category: 'action',
		img: 'img4'	
	},
	{
		id:5,
		name: 'Book5',
		price: 15,
		quantity: 5,
		category: 'action',
		img: 'img5'	
	}	
];