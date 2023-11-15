const orderByProps = (obj, sample) => {
	const unSortingArray = [];
	const sortingArrayWithSample = [];

	for(let key in obj) {
		const index = sample.indexOf(key);

		if(index === -1) {
			unSortingArray.push({
				key,
				value: obj[key]
			})
		} else {
			sortingArrayWithSample[index] = {
				key,
				value: obj[key]
			}
		}
	}

	const arraySortWithAlphabet = unSortingArray.sort(sortingWithAlphabet);

	const sortingArray = sortingArrayWithSample.concat(arraySortWithAlphabet);
	const sortingAndFilterArray = sortingArray.filter((item) => {
		if(item != undefined) {
			return item;
		}
	})
	return sortingAndFilterArray;
}

const sortingWithAlphabet = (a, b) => {
	if(a.key > b.key) {
		return 1;
	} else  {
		return -1;
	} 
}

export default orderByProps;