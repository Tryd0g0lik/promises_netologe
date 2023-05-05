import { default as GameSavingLoader } from "../app";


describe("the can", () => {
	const response = new GameSavingLoader();
	test("0001", () => response.load().then((item) => {
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
		return resp
	},
		err => {
			console.log(`ERROR: ${err}`);
		}).then(
			data => {
				// const resp = new data()
				const i = data.ind;
				expect(i).toBe(9);
			},
		));
});
