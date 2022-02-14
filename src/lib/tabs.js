export default function useTabs() {
	const tabList = document.querySelector('[role="tablist"]');
	const tabs = tabList.querySelectorAll('*[role="tab"]');
	const parent = tabList.parentNode;

	let tabFocus = 0;

	function activateTabs() {
		tabList.addEventListener('keydown', changeFocus);
		tabs.forEach((tab) =>
			tab.addEventListener('click', () => handleTabClick(tab))
		);
		console.log('activate tabs');
	}

	function deactivateTabs() {
		tabList.removeEventListener('keydown', changeFocus);
		tabs.forEach((tab) =>
			tab.removeEventListener('click', () => handleTabClick(tab))
		);
		console.log('deactivate tabs');
	}

	function handleTabClick(tab) {
		const ariaControls = tab.getAttribute('aria-controls');
		const currentTab = parent.querySelector('[aria-selected="true"]');
		const currentArticle = parent.querySelector(
			'[role="tabpanel"][data-selected="true"]'
		);
		const targetArticle = parent.querySelector(
			`[role="tabpanel"]#${ariaControls}`
		);
		const currentPicture = parent.querySelector(
			'picture[data-selected="true"]'
		);
		const targetPicture = parent.querySelector(
			`picture[data-id=${ariaControls}]`
		);
		if (currentPicture && targetPicture) {
			currentPicture.setAttribute('data-selected', 'false');
			targetPicture.setAttribute('data-selected', 'true');
		}
		currentTab.setAttribute('aria-selected', 'false');
		tab.setAttribute('aria-selected', 'true');
		currentArticle.setAttribute('data-selected', 'false');
		targetArticle.setAttribute('data-selected', 'true');
	}

	function changeFocus(e) {
		if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
			tabs[tabFocus].setAttribute('tabindex', -1);
			if (e.code === 'ArrowRight') {
				tabFocus++;
				if (tabFocus >= tabs.length) {
					tabFocus = 0;
				}
			} else {
				tabFocus--;
				if (tabFocus < 0) {
					tabFocus = tabs.length - 1;
				}
			}

			tabs[tabFocus].setAttribute('tabindex', 0);
			tabs[tabFocus].focus();
		}
	}

	return { activateTabs, deactivateTabs };
}
