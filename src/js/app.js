import { default as read } from "./reader.js"
import { default as json } from "./parser.js"

// import { read } from "./reader"
// import json from "./parser"

// export default
class GameSavingLoader {
	constructor() { }

	load() {
		return Promise.resolve(read());
	}
	parsing(datas) {
		return new Promise((resolve, reject) => {
			const response = json(datas);
			resolve(response),
				reject(err => err.message);
		});
	}
}
const response = new GameSavingLoader()
response.load()
	.then(saving => response.parsing(saving))
	.then(resp => console.log(resp))