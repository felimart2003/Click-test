let startTime = null;
        let lastClickTime = null;
        let isRunning = false;

        document.getElementById('startButton').addEventListener('click', function() {
            startTime = Date.now();
            lastClickTime = startTime;
            document.getElementById('clickButton').disabled = false;
            document.getElementById('stopButton').disabled = false;
            document.getElementById('startButton').disabled = true;
            document.getElementById('result').textContent = "Click as fast as you can!";
            document.getElementById('logList').innerHTML = "";
        });

        document.getElementById('clickButton').addEventListener('click', function() {
            let currentTime = Date.now();
            let reactionTime = currentTime - lastClickTime;
            lastClickTime = currentTime;
            let li = document.createElement('li');
            li.textContent = `Time since last click: ${reactionTime} ms`;
            document.getElementById('logList').insertBefore(li, document.getElementById('logList').firstChild);
        });

        document.getElementById('stopButton').addEventListener('click', function() {
            document.getElementById('clickButton').disabled = true;
            document.getElementById('stopButton').disabled = true;
            document.getElementById('startButton').disabled = false;
            document.getElementById('result').textContent = "Test completed!";
        });
