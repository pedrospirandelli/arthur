document.addEventListener('DOMContentLoaded', function () {
    // Data prevista para o nascimento (formato universal YYYY-MM-DD)
    const dueDate = new Date('2025-07-23T00:00:00');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minEl = document.getElementById('min');
    const secEl = document.getElementById('sec');

    function getTimeRemaining(endTime) {
        const now = new Date();
        let total = (endTime - now) / 1000; // total em segundos

        if (total <= 0) {
            return null;
        }

        const days = Math.floor(total / 86400);
        total -= days * 86400;
        const hours = Math.floor(total / 3600);
        total -= hours * 3600;
        const minutes = Math.floor(total / 60);
        const seconds = Math.floor(total % 60);

        return { days, hours, minutes, seconds };
    }

    function countdown() {
        const remaining = getTimeRemaining(dueDate);

        if (remaining) {
            daysEl.innerHTML = remaining.days;
            hoursEl.innerHTML = remaining.hours;
            minEl.innerHTML = remaining.minutes;
            secEl.innerHTML = remaining.seconds;
        } else {
            document.querySelector('.countdown-container').innerHTML = "<h2>Já nasceu! 🎉</h2>";
        }
    }

    countdown();
    setInterval(countdown, 1000);
});
