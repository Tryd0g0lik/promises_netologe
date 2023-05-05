import { default as read } from './reader';
import { default as json } from './parser';


export default class GameSavingLoader {
	load() {
		return new Promise((resolve, reject) => {
			const resp = read()
				.then(item => json(item))
				.then(item => {
					const answer = JSON.parse(item);

					class GameSaving {
						constructor() {
							this.ind = answer.id;
							this.createds = answer.created;
							this.userInfos = {
								'id': answer.userInfo.id,
								'name': answer.userInfo.name,
								'level': answer.userInfo.level,
								'points': answer.userInfo.points,
							};
						}
					}
					const respone = new GameSaving();
					return respone;
				});
			resolve(resp),
				reject(() => new Error(err.message));
		});
	}
}
