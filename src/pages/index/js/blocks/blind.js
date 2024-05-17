export function blind() {
	const btn = document.querySelector('[data-header="blind-btn"]')

	btn.addEventListener('click', function () {
		const existingLink = document.head.querySelector('link[href="assets/css/blind.css"]')

		if (existingLink) {
			existingLink.remove()
		} else {
			const link = document.createElement('link')
			link.rel = 'stylesheet'
			link.href = 'assets/css/blind.css'
			document.head.appendChild(link)
		}
	})
}