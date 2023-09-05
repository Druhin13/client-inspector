function displayBrowserDetails() {
    // Get the browser details
    const browser = navigator.userAgent;
    const os = navigator.platform;

    const screenResolution = window.screen.width + " × " + window.screen.height;
    const colorDepth = window.screen.colorDepth;
    const availableScreenSpace = window.screen.availWidth + " × " + window.screen.availHeight;
    const language = navigator.language;


    // Create <p> elements for each data point
    const browserP = document.createElement("p");
    browserP.textContent = "Browser: " + browser;
    const osP = document.createElement("p");
    osP.textContent = "OS: " + os;
    const resolutionP = document.createElement("p");
    resolutionP.textContent = "Screen Resolution: " + screenResolution;
    const windowP = document.createElement("p");
    windowP.textContent = "Window Size: " + window.innerWidth + " × " + window.innerHeight;
    const colorDepthP = document.createElement("p");
    colorDepthP.textContent = "Color Depth: " + colorDepth;
    const availableSpaceP = document.createElement("p");
    availableSpaceP.textContent = "Available Screen Space: " + availableScreenSpace;
    const languageP = document.createElement("p");
    languageP.textContent = "Browser Language: " + language;



    // Append the <p> elements to the <h1> element
    const dimensionsH1 = document.getElementById("dimensions");
    dimensionsH1.innerHTML = "";
    dimensionsH1.appendChild(browserP);
    dimensionsH1.appendChild(osP);
    dimensionsH1.appendChild(resolutionP);
    dimensionsH1.appendChild(windowP);
    dimensionsH1.appendChild(colorDepthP);
    dimensionsH1.appendChild(availableSpaceP);
    dimensionsH1.appendChild(languageP);
}

// Display the browser details on load
displayBrowserDetails();

// Re-display the browser details every time the window is resized
window.addEventListener("resize", displayBrowserDetails);




//copy mechanism
document.getElementById('screenshotButton').addEventListener('click', function () {
    const targetElement = document.getElementById('targetElement');

    // Use html2canvas to capture the content of the target element
    html2canvas(targetElement).then(function (canvas) {
        // Convert the canvas content to an image Blob
        canvas.toBlob(function (blob) {
            // Create a ClipboardItem with the Blob
            const clipboardItem = new ClipboardItem({
                'image/png': blob
            });

            // Copy the ClipboardItem to the clipboard
            navigator.clipboard.write([clipboardItem]).then(function () {
                alert('Copied to clipboard!');
            }).catch(function (error) {
                console.error('Failed to copy image to clipboard:', error);
            });
        });
    });
});

//download mechanism
document.getElementById('downloadButton').addEventListener('click', function () {
    const targetElement = document.getElementById('targetElement');

    // Use html2canvas to capture the content of the target element
    html2canvas(targetElement).then(function (canvas) {
        // Convert the canvas content to an image Blob
        canvas.toBlob(function (blob) {
            // Create a temporary anchor element
            const tempAnchor = document.createElement('a');
            tempAnchor.href = URL.createObjectURL(blob);
            tempAnchor.download = 'scecs-sheet.png';

            // Simulate a click on the anchor element to trigger the download
            tempAnchor.click();

            // Clean up
            URL.revokeObjectURL(tempAnchor.href);
        });
    });
});