export function rszSubscriptions(){

    const rszCard = document.querySelector('.subscriptions-sctn');

    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const width = entry.contentRect.width;

            if (width < 600) {
                console.log(`width is now: ${width}px`)
            }
        }
    })

    observer.observe(rszCard);
}