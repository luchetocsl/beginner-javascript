const cardButtons = document.querySelectorAll(".card-button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(e) {
	const button = e.currentTarget;
	const card = button.closest(".card");
	const imgSrc = card.querySelector("img").src;
	const desc = card.dataset.description;

	// Populate modal with card content

	modalInner.innerHTML = `
      <img src="${imgSrc.replace("200", "400")}">                        
       <p>${desc}</p>
                          `;

	modalOuter.classList.add("open");
}

function closeModal() {
	modalOuter.classList.remove("open");
}

cardButtons.forEach((button) =>
	button.addEventListener("click", handleCardButtonClick)
);

modalOuter.addEventListener("click", function (event) {
	const isOutside = !event.target.closest(".modal-inner");

	if (isOutside) {
		closeModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeModal();
	}
});
