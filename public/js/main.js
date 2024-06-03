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
setTimeout(() => graduallyFillText(greet_pn, "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!"), 3200);
setTimeout(() => graduallyFillText(greet_ur, "!آداب"), 4700);
setTimeout(() => graduallyFillText(greet_sp, "Hola!"), 5500);
setTimeout(() => graduallyFillText(greet_ar, "!مرحبا"), 6300);
setTimeout(() => graduallyFillText(greet_pr, "!درود"), 7200);
setTimeout(() => graduallyFillText(greet_krn, "B rhtecp!"), 8200);

setInterval(() => toggleContent(name_cursor), 500);
