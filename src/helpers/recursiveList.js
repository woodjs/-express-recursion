const recursiveList = (data) => {
	let html = `<ul>`;
	data.forEach((item) => {
		html += `<li>${item.name}`;
		if (item.list.length && !item?.isChildren) {
			html += recursiveList(item.list);
		}
		if (item.childrens) {
			html += `<ul>`;
			item.childrens.forEach(
				({ name, city: { name: cityName, data: cityData } }) => {
					html += `<li><p class="tooltip">${name}<span class="tooltip__text">${cityName}, ${cityData} жителей</span><p></li>`;
				}
			);
			html += `</ul>`;

			if (!item.childrens.length) {
				html += `<ul><li>Жителей нет</li></ul>`;
			}
		}

		html += `</li>`;
	});

	html += `</ul>`;

	return html;
};

exports.recursiveList = recursiveList;
