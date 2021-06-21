function openForm() {
    document.getElementById("myForm").style.display = "block";
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var blur1 = document.getElementById('blur1')
    blur1.classList.toggle('active')
    var blur2 = document.getElementById('blur2')
    blur2.classList.toggle('active')
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var blur1 = document.getElementById('blur1')
    blur1.classList.toggle('active')
    var blur2 = document.getElementById('blur2')
    blur2.classList.toggle('active')
}

function mask() {
    $(document).ready(function () {
        $("#cnpj").mask("99.999.999/9999-99");
    });
}