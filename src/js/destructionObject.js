const destructionObj = (obj) => {
	const arraySpecialObj = [];

	for(let item of obj.special) {
		const { id, name, icon, description = "Описание недоступно" } = item;
		arraySpecialObj.push({
			id,
			name,
			icon,
			description,
		})
	}

	return arraySpecialObj;
}

export default destructionObj;