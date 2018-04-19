$(document).ready(function(){
    $("#musicSeacrh").on("click",function(){
        amount = $("#amount").val();
    }
}
$.ajax({
    url: "https://itunes.apple.com/search?term=jack+johnson",
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(result) {
        console.log(result);
        myFunction(result);
    },
    error: function() { alert('Failed!'); }
});


