// ===== BEEP SOUND =====

const beep = new Audio(
    "data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAAAA/////wAAAP///wAAAP///wAAAP///w=="
);


// ===== UPDATE CLOCK =====

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;


    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", options);


    // ===== BEEP EVERY SECOND =====
    beep.currentTime = 0;
    beep.play().catch(() => {});
}


// Start clock
updateClock();


// Update every 1 second
setInterval(updateClock, 1000);
