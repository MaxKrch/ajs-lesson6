import orderByProps from "../sortObjByProps.js";

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

test("correct sort", () => {
	const sample = ["name", "level"];
	const received = orderByProps(obj, sample);
	const expected = [
		{key: 'name', value: 'мечник'},
		{key: 'level', value: 2},
		{key: 'attack', value: 80},
		{key: 'defence', value: 40},
		{key: 'health', value: 10},
	];

	expect(received).toEqual(expected)
});


test("sort wyth empty value", () => {
	const sample = ["rang", "name", "shield"];
	const received = orderByProps(obj, sample);
	const expected = [
		{key: 'name', value: 'мечник'},
		{key: 'attack', value: 80},
		{key: 'defence', value: 40},
		{key: 'health', value: 10},
		{key: 'level', value: 2},
	];

	expect(received).toEqual(expected)
});