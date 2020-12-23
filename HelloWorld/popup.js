$(function() {
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val());
    })
})
// document.querySelector('h2').textContent = "Abe kaam nhi kr rha";