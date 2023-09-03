const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
	// hide all panels;
	tabPanels.forEach((panel) => {
		panel.hidden = true;
	});
	// mark all tabs as unselected
	tabButtons.forEach((tab) => {
		tab.setAttribute("aria-selected", false);
	});
	// marked clicked tabs as selected
	e.target.setAttribute("aria-selected", true);
	// find clicked tab and show it
	const id = e.target.id;
	tabPanels.find((panel) => {
		if (panel.getAttribute("aria-labelledby") === id) {
			panel.hidden = false;
		}
	});
}

tabButtons.forEach((button) => {
	button.addEventListener("click", handleTabClick);
});
