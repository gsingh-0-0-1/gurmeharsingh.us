var name_cursor = document.getElementById("name_cursor")

var name_content = document.getElementById("name_content")

function toggleContent(element) {
	const currentContent = element.innerHTML;

	if (currentContent === '&nbsp;' || currentContent === ' ') {
		element.innerHTML = '_';
	} else {
		element.innerHTML = '&nbsp;';
	}
}

function graduallyFillText(element, text) {
	let currentIndex = 0;

	function addNextCharacter() {
		if (currentIndex < text.length) {
			element.textContent += text[currentIndex];
			currentIndex++;
                } else {
			clearInterval(intervalId); // Clear the interval when done
                }
	}

	const intervalId = setInterval(addNextCharacter, 100);
}

graduallyFillText(name_content, "Gurmehar Singh");

setTimeout(() => graduallyFillText(greet_en, "Hello!"), 1500);
setTimeout(() => graduallyFillText(greet_hn, "नमस्ते!"), 2300);
setTimeout(() => graduallyFillText(greet_pn, "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!"), 3000);
setTimeout(() => graduallyFillText(greet_ur, "!آداب"), 3400);
setTimeout(() => graduallyFillText(greet_sp, "Hola!"), 3800);
setTimeout(() => graduallyFillText(greet_ar, "!مرحبا"), 4200);
setTimeout(() => graduallyFillText(greet_pr, "!درود"), 4600);
setTimeout(() => graduallyFillText(greet_tr, "Merhaba!"), 5000);
setTimeout(() => graduallyFillText(greet_krn, "B rhtecp!"), 5400);

setInterval(() => toggleContent(name_cursor), 500);
