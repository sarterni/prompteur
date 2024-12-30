<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompteur</title>
    <link rel="stylesheet" href="css/HomePage.css?v=<?php echo filemtime('css/HomePage.css'); ?>" />
</head>

<body>
    <div class="prompteur-container">
        <div class="text-display" id="textDisplay">
            <!-- Default scrolling text -->
            Welcome to your custom teleprompter! Enter your text in the box below and click "Load Text" to get started. click "Start" and ajust the speed.
        </div>
    </div>

    <div class="user-input">
        <textarea id="userText" placeholder="Enter your text here..."></textarea>
        <button id="loadTextBtn">Load Text</button>
    </div>

    <div class="controls">
        <button id="startBtn">Start</button>
        <button id="stopBtn">Stop</button>
        <label for="speed">Speed:</label>
        <input type="range" id="speed" min="1" max="10" value="5">
    </div>

    <script src="./js/script.js"></script>
</body>

</html>