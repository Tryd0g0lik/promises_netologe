import { default as read } from "./reader";
import { default as json } from "./parser";


export default class GameSavingLoader {
	// parsing(datas) {
	// 	return new Promise((resolve, reject) => {
	// 		const response = json(datas);
	// 		resolve(response),
	// 			reject(
	// 				new Error(err.message),
	// 			);
	// 	});
	// }
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
		(sav) => {
			const answer = JSON.parse(sav);
			return class GameSaving {
				constructor() {
					this.ind = answer.id;
					this.createds = answer.created;
					this.userInfos = {
						id: answer.userInfo.id,
						name: answer.userInfo.name,
						Hitman: answer.userInfo.Hitman,
						level: answer.userInfo.level,
						points: answer.userInfo.points
					}
				}
			};

		},
		err => {
			console.log(`ERROR: ${err}`);
		},
	)
	.then(item => {
		const objClassGameSaving = new item();
		console.log("========>>: ", objClassGameSaving)
	});
