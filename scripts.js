

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate degrees
    const hourDegrees = ((hours % 12) + minutes / 60) * 30; // 360 / 12
    const minuteDegrees = (minutes + seconds / 60) * 6; // 360 / 60
    const secondDegrees = ((seconds + milliseconds / 1000) * 6); // 360 / 60

    // Update hand positions
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
}

// Update every 100ms for smoother transitions
setInterval(updateClock,100);
updateClock(); // Initial call to set the clock immediately
