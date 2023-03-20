var Enter_btn = document.getElementById('enter_btn')
var Ok_btn = document.getElementById('ok_btn')
var Modal = document.getElementById('modal-container')
var Hello_Line = 'Hello '

function showModal() {
    Modal.classList.add('open')
}

function hideModal() {
    Modal.classList.remove('open')
}

Enter_btn.onclick = function() {
    Hello_Line += document.getElementById('input_label').value;
    document.getElementById('modal-frame').innerHTML = Hello_Line;
    showModal()
}

Ok_btn.onclick = function() {
    Modal.classList.remove('open')
    document.getElementById('input_label').value = "";
    Hello_Line = 'Hello '
}
