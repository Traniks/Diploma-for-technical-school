document.addEventListener('DOMContentLoaded', () => {
    function openModal(boxID, modalID) {
		const box = document.querySelector(`#${boxID}`)
        const modal = document.querySelector(`#${modalID}`)
		const cross = document.querySelector(`#${modalID}__cross`)

        // Закрытие на крестик
		cross.addEventListener('click', () => {
			modal.style.cssText = 'display: none' // Убирает класс - закрывает модалку
			document.body.style.overflow = '' // Восстанавливает прокрутку сайта
		})

        // Открытие модалки
        box.addEventListener('click', () => {
			modal.style.cssText = 'display: flex' // Убирает класс - закрывает модалку
			document.body.style.overflow = 'hidden' // Восстанавливает прокрутку сайта
		})
	}

    openModal("box1", "modal1")
    openModal('box2', 'modal2')
    openModal('box3', 'modal3')
    openModal('box4', 'modal4')
    openModal('box5', 'modal5')
    openModal('box6', 'modal6')
})