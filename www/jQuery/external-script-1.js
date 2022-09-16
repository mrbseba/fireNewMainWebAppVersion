console.log( "I am external script ONE." );

function addJS() {
    let scriptToAdd
      = document.createElement('script');
    scriptToAdd.type
      = 'text/javascript';

    // Create contents of the script
    let inlineScript = document.createTextNode(
      "console.log('Script Loaded Successfully');");

    scriptToAdd.appendChild(inlineScript);

    // Uncomment to load script from another 
    // source
    // scriptToAdd.src = 'myscript.js';

    // Get the head element of the document
    // and append the script
    document.head.appendChild(scriptToAdd);

    // Update textarea
    updateHeadOutput();
  }

  function updateHeadOutput() {
    document.querySelector(".head-element")
      .textContent = document.head.innerHTML;
  }

  updateHeadOutput();