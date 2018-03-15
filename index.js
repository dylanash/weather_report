// weather endpoint
// http://api.apixu.com/v1/current.json?key=0e65f225e29f4311bc0155702170308&q=10001
// challenge
// when the user pushes the weather button (id="weatherBtn")
// the current nyc weather is printed in the div with (id="weatherInfo")

// to use local server:
// python -m SimpleHTTPServer 8000
// python (2.7)
//
// or
//
// python3 -m http.server

// you may use jquery

$( document ).ready(function() {
    $('#weatherBtn').on('click', function() {
        $.get(
            "http://api.apixu.com/v1/current.json?key=0e65f225e29f4311bc0155702170308&q=10001",
            function(data) {
                console.log(data);
                // $(`<div>${data.current.condition.text}</div>`).appendTo('#weatherInfo'); 
               $('#weatherInfo').html(data.current.condition.text);               
            }
        );
    })
    console.log( "ready!" );
    
});
