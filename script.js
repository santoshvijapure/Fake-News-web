const evaluate = async (news) => {
	// const news=["Trump's unlikely to unveil Obama's White House portrait. Here's a look back at a tradition that may be on its way out"]
	// const fake=["Trump’s plane loses contact with airport, receiving Dr. Batra’s email assures them they are in India and can land now"]
	encoder = await use.load();
	embeddings = await encoder.embed(news);
	arr = await embeddings.array();
	console.log(arr)
	model = await tf.loadLayersModel('https://santoshvijapure.github.io/model/model.json');
	console.log(model);
	result = await model.predict(tf.tensor(arr));
	result = await result.array();
	result = result[0][0];
	console.log(result);

	document.getElementById('label').innerHTML = result > 0.5 ? 'This is True' : 'This is Fake';
};

function myFunction(e) {
	var news = document.getElementById('news').value;
	evaluate(news);
	// const b = [ 'This is Fake', 'This is True' ];

	// document.getElementById('label').innerHTML = result;

	// var news = document.getElementById('news').value;
	// console.log(news);
}
