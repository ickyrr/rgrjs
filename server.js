import express from 'express';
import {MongoClient} from 'mongodb';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();

app.use(express.static("public"));

app.use("/graphql", GraphQLHTTP({
	schema,
	graphiql: true,
}));

let url;

if(process.env.MONGO_URL) {
	url = process.env.MONGO_URL;
}

url = "mongodb://localhost:27017/rgrjs";

let db;

MongoClient.connect(url, (err, database) => {
	if(err) throw err;

	db = database;

	app.listen(3000, () => console.log('Now connected to ' + url));

});

app.get('/links', (req, res) => {

	db.collection("links").find({}).toArray( (err, links) => {
		if(err) throw err;
		res.json(links);
	});

});
