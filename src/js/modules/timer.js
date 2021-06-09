export default function timer() {
    const timerDeadline = document.querySelector('.timer__deadline span').textContent,
          deadline = new Date(`${timerDeadline}`);

    function getTime(endtime) {
        const total = Date.parse(deadline) - Date.parse(new Date),
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor((total / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((total / (1000 * 60) % 60)),
              seconds = Math.floor((total/ 1000) % 60);
        
            return {
                total,
                days,
                hours,
                minutes,
                seconds,
            }
    }  
    
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('.days'),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(num) {
            if(num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getTime(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if(t.total <= 0) {
                const timerClock = document.querySelector('.timer');
                const end = document.createElement('div');

                timer.style = 'display: none';
                end.classList.add('title', 'title_mt35');
                end.innerHTML = 'The end';
                timerClock.append(end);

                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer__wrapper', deadline);
    
}