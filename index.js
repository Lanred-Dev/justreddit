const fetch = require("node-fetch");
const Sort_Types = ["new", "top"];

async function Get_Post(Reddit, Sort_Type, Limit) {
	if (!Reddit) return null;
	if (!Limit || !parseInt(Limit)) Limit = 100;
    if (!Sort_Type || !Sort_Types.includes(Sort_Type)) Sort_Type = "new";

    const Response = await fetch(`https://www.reddit.com/r/${Reddit.toLowerCase()}/${Sort_Type}.json?limit=100&sort=${Sort_Type}`);
	const JSON_Response = await Response.json();

	if (JSON_Response.error || JSON_Response.err) return null;

	const Post = JSON_Response.data.children[Math.floor(Math.random() * JSON_Response.data.children.length)];

	if (!Post) return null;

	return {
		image: Post.data.url.replace("gifv", "gif"),
		title: Post.data.title,
		upvotes: Post.data.ups,
		author: Post.data.author,
		downvotes: Post.data.downs,
		text: Post.data.text,
		raw: Post.data
	};
};

async function Get_Image(Reddit, Sort_Type, Limit) {
	if (!Reddit) return null;
	if (!Limit || !parseInt(Limit)) Limit = 1000;
    if (!Sort_Type || !Sort_Types.includes(Sort_Type)) Sort_Type = "new";

	const Post = await Get_Post(Reddit, Sort_Type, Limit);

	if (!Post) return null;

	return Post.image;
};

async function Get_Random_SubReddit(Sort_Type, Limit) {
	if (!Limit || !parseInt(Limit)) Limit = 100;
    if (!Sort_Type || !Sort_Types.includes(Sort_Type)) Sort_Type = "new";

    const Response = await fetch(`https://www.reddit.com/reddits.json?limit=${Limit}&sort=${Sort_Type}`);
	const JSON_Response = await Response.json();

	if (JSON_Response.error || JSON_Response.err) return null;

	const Reddit = JSON_Response.data.children[Math.floor(Math.random() * JSON_Response.data.children.length)];

	if (!Reddit) return null;

	return Reddit.data;
};

module.exports = {Post: Get_Post, Image: Get_Image, SubReddit: Get_Random_SubReddit};