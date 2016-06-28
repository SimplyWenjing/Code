/*form表单相关的方法*/

//取得用户在文本框中选择的文本
function getSelectedText (textBox) {
	return textBox.value.substring(textBox.selectionStart,textBox.selectionEnd);
}

//跨浏览器实现取得用户在文本框中选择的文本
function selectText (textbox, startIndex, endIndex) {
	if (textbox.setSlectionRange) {
		textbox.setSelectionRange(startIndex,endIndex);
	} else if (textbox.createTextRange) {
		var range = textbox.createTextRange();
		range.collapse(true);
		range.moveStart("character",startIndex);
		range.moveEnd("character",endIndex - startIndex);
		range.select();
	}
	textbox.focus();
}

