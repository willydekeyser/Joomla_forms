function bereken_total() {
	let number_of_books = document.getElementById('number_of_books').value;
	if (number_of_books == 0) {
		document.getElementById('total').value = 0;
		return;
	} else if (number_of_books < 10) {
		document.getElementById('total').value = number_of_books * 30;
		return;
	} else if (number_of_books < 50) {
		document.getElementById('total').value = number_of_books * 28;
		return;
	} else if (number_of_books >= 50) {
		document.getElementById('total').value = number_of_books * 25;
	}
}
