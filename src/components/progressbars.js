export function progressBars(){
    const courseCards = document.querySelectorAll('.perf-metrics__cntnr .perf-metric_card');

    courseCards.forEach(card => {
        const metricValue = card.querySelector('.perf-metric__value');
        const progressBar = card.querySelector('.progressbar');

        // Extract target value and unit from data attributes
        const targetValue = parseFloat(metricValue.dataset.targetValue);
        const unit = metricValue.dataset.unit || '';

        // Define animation parameters
        const animationDuration = 1000; // 1 second in milliseconds
        const intervalDelay = 10;     // Update every 10 milliseconds
        const steps = animationDuration / intervalDelay;
        
        let currentProgress = 0;
        let currentValue = 0;

        // Function to format the displayed value based on its unit
        const formatValue = (value, unit) => {
            // Check if the value is an integer or float for formatting
            const isFloat = value % 1 !== 0;
            const formattedValue = isFloat ? value.toFixed(1) : value.toFixed(0);

            if (unit === '%') {
                return `${formattedValue}${unit}`;
            } else if (unit === 'hours') {
                return `${formattedValue} ${unit}`;
            }
            return formattedValue; // Default formatting if no unit or unrecognized unit
        };

        // Initialize progress bar and value to 0
        progressBar.style.width = '0%';
        metricValue.textContent = formatValue(0, unit);

        // Start the animation
        const animateProgress = setInterval(() => {
            currentProgress += 1;
            currentValue = (currentProgress / steps) * targetValue;

            // Cap the value and progress at their targets
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                currentProgress = steps;
                clearInterval(animateProgress); // Stop animation when target is reached
            }

            let barWidthPercentage;
            if (unit === 'hours') {
                const maxHours = 24; // Confirmed max hours
                barWidthPercentage = (currentValue / maxHours) * 100;
            } else { // Assume values like 94, 99.8, 87 are already percentages out of 100
                barWidthPercentage = currentValue;
            }

            // Ensure barWidthPercentage doesn't exceed 100%
            barWidthPercentage = Math.min(barWidthPercentage, 100);

            progressBar.style.width = `${barWidthPercentage}%`;
            metricValue.textContent = formatValue(currentValue, unit);

        }, intervalDelay);
    });
}