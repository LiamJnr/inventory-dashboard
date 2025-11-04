export function metricCards(){
    const dataQntyElements = document.querySelectorAll('.data__qnty');

    dataQntyElements.forEach((dataQnty) => {
        const initValue = parseInt(dataQnty.textContent.replace(/,/g, ''));
        let currentvalue = 0;
        let targetValue = initValue;
        let step = 10;
        let increment = Math.floor(initValue / step);

        const intervalId = setInterval(() => {
            if (currentvalue < targetValue) {
                currentvalue += increment;
                if (currentvalue >= targetValue) {
                    currentvalue = targetValue;
                }
                dataQnty.textContent = currentvalue.toLocaleString();
            } else {
                clearInterval(intervalId);
            }
        }, 50);
    });
}