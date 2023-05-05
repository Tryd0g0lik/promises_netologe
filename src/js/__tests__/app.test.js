import { default as GameSavingLoader } from "../app";


describe("the can", () => {
	const response = new GameSavingLoader();
	test("0001", () => response.load().then((item) => {
				// const resp = new data()
		const i = item.ind;
				expect(i).toBe(9);
			},
		));
});
