export default function setProgressCircle() {

    const circle = document.querySelector('.promo__progress-ring-circle'),
          radius = circle.r.baseVal.value,
          circumference = 2 * Math.PI * radius,
          persentVal = document.querySelector('.promo__stat-persent').innerHTML.match(/\d+/g);

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = circumference;

    function setProgress(persent) {
        const offset = circumference - persent / 100 * circumference;

        circle.style.strokeDashoffset = offset;
    };

    setProgress(persentVal);
};