document.addEventListener('DOMContentLoaded', () => {
	// Получаем все элементы с классом "faq__box"
	const boxes = document.querySelectorAll('.faq__box')

	// Проходимся по каждому элементу и добавляем обработчик события "click"
	boxes.forEach(box => {
		// Находим дочерние элементы с классами "faq__box-img" и "faq__box-description"
		const img = box.querySelector('.faq__box-img')
		const description = box.querySelector('.faq__box-description')

		// Добавляем обработчик события "click" для каждого "box"
		box.addEventListener('click', () => {
			// Добавляем классы при нажатии
			img.classList.toggle('faq__box-img_active')
			description.classList.toggle('faq__box-description_active')
		})
	})
})