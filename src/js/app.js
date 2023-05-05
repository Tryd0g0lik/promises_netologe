import { default as read } from "./reader.js";
import { default as json } from "./parser.js";


export default class GameSavingLoader {
	load() {
		return new Promise((resolve, reject) => {
			const resp = read()
				.then(item => {
					const respone = json(item);
					return respone;
				});
			resolve(resp), reject(
				new Error(err.message),
			);
		});
	}
}

const response = new GameSavingLoader();
response.load()
	.then(
		sav => {
			const answer = JSON.parse(sav);
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

			return resp
		},
		err => {
			console.log(`ERROR: ${err}`);
		},
	)
	.then(item => {
		// const objClassGameSaving = new item();
		console.log("========>>: ", item.ind);
	});
