
let timer;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        function startStop() {
            if (timer) {
                clearInterval(timer);
                timer = null;
            } else {
                timer = setInterval(updateTime, 1000);
            }
        }

        function updateTime() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }

            const formattedTime = formatTime(hours, minutes, seconds);
            document.getElementById('stopwatch').innerText = formattedTime;
        }

        function formatTime(hours, minutes, seconds) {
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function reset() {
            clearInterval(timer);
            timer = null;
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById('stopwatch').innerText = '00:00:00';
        }










