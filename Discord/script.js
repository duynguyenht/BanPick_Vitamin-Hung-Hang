// Function to start screen sharing
async function startScreenShare() {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const videoElement = document.getElementById('screenVideo');
        videoElement.srcObject = screenStream;
    } catch (err) {
        console.error("Error sharing screen: ", err);
    }
}

// Timer function
function startTimer(durationInMinutes) {
    let duration = durationInMinutes * 60;
    const timerElement = document.getElementById('timer');
    let interval = setInterval(function () {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.textContent = minutes + ':' + seconds;
        if (--duration < 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}

// Adding event listeners to the buttons
document.getElementById('shareBtn').addEventListener('click', startScreenShare);
document.getElementById('startTimerBtn').addEventListener('click', function() {
    startTimer(5); // Start 5-minute timer when button is clicked
});



