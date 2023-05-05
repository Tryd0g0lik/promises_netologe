import { default as read } from "./reader.js";
import { default as json } from "./parser.js";


export default class GameSavingLoader {
	load() {
		return new Promise((resolve, reject) => {
			const resp = read()
				.then(item => json(item))
				.then(item => {
					console.log(item)

					const answer = JSON.parse(item);

					class GameSaving {
						constructor() {
							this.ind = answer.id;
							this.createds = answer.created;
							this.userInfos = {
								"id": answer.userInfo.id,
								"name": answer.userInfo.name,
								"level": answer.userInfo.level,
								"points": answer.userInfo.points,
							};
						}
					};
					const resp = new GameSaving();
					return resp;
				})
			resolve(resp), reject(
				new Error(err.message),
			);
		});
	}
}

const response = new GameSavingLoader();
response.load()
	.then(
		item => console.log("========>>: ", item.ind),
		err => {
			console.log(`ERROR: ${err}`);
		},
);
