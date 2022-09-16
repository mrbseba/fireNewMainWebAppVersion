// TEST ONE: Manually constructing a Script Element and using the "onload"
// property to determine when the remote script has loaded.
(function() {
    var scriptElement = document.createElement( "script" );
    scriptElement.onload = function() {
        console.log( "Successfully loaded script 1 using (onload)." );
    };
    scriptElement.src = "./external-script-1.js";
    document.body.appendChild( scriptElement );
})();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// TEST TWO: Manually constructing a Script Element and using the
// addEventListener() method to determine when the remote script has loaded.
(function() {
    var scriptElement = document.createElement( "script" );
    scriptElement.addEventListener( "load", function() {
            console.log( "Successfully loaded script 2 using (addEventListener)." );
        });
    scriptElement.src = "./external-script-2.js";
    document.body.appendChild( scriptElement );
})();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// TEST THREE: Using jQuery to construct a Script Element and using (THIS IS MY
// POOR ASSUMPTION) the addEventListener() method to determine when the remote
// script has loaded.
(function() {
    $( "<script>" ).on("load",  function() {
                console.log( "Successfully loaded script 3 using (jquery)." );
                
            }
        ).prop( "src", "./external-script-3.js" ).appendTo( document.body );
})();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// TEST FOUR: Manually constructing a Script Element and using the "onload" to
// determine when the remote script has loaded. Note that I am using jQuery,
// in this case, to do nothing more than the final APPEND to the document.
(function() {
    var scriptElement = document.createElement( "script" );
    scriptElement.onload = function() {
        console.log( "Successfully loaded script 4 using (onload + jQuery)." );
    };
    scriptElement.src = "./external-script-4.js";
    // jQuery is being used to do NOTHING MORE than append the element to the
    // active document.
    $( document.body ).append( scriptElement );
})();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// TEST FIVE: Using jQuery to construct and configure the Script Element, but
// then injecting it into the DOM using vanilla DOM APIs.
(function() {
$( "<script>" ).on("load",
    function() {
        console.log( "Successfully loaded script 5 using (jquery + appendChild)." );
    }
).prop( "src", "./external-script-5.js" ).each(
    function() {
    // We used jQuery to construct and configure the Script Element,
    // but we're appending it using a vanilla DOM method.
    document.body.appendChild( this ); });
})();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// Insert script after the head

// laod the script after head
