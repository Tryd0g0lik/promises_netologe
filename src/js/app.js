import { default as read } from "./reader";
import { default as json } from "./parser";

// import { read } from "./reader"
// import json from "./parser"

export default class GameSavingLoader {
	load() {
		return Promise.resolve(read());
	}

	parsing(datas) {
		return new Promise((resolve, reject) => {
			const response = json(datas);
			resolve(response),
				reject(
					new Error(err.message),
				);
		});
	}
}

// const response = new GameSavingLoader();
// response.load()
// 	.then(
// 		saving => response.parsing(saving),
// 		err => {
// 			console.log(`ERROR: ${err}`);
// 		},
// 	)
// 	.then(resp => console.log(resp));
