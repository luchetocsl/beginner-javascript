const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

const ob = new IntersectionObserver(obCallback);
ob.observe(terms.lastElementChild);

function obCallback(payload) {
	if (payload[0].intersectionRatio > 0) {
		button.disabled = false;
		ob.unobserve(terms.lastElementChild);
	}

	console.log(payload[0].intersectionRatio);
}
