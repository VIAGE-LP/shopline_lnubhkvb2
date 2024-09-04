const threshold = Array(100).fill().map((val, idx) => idx * 0.01);
const options = {
    root:null,
    rootMargin: "0px",
    threshold: threshold,
};

let prevRatio = 0;
const callback = (entries, observer) => {
    entries.forEach(entry => {
        const { intersectionRatio, target } = entry;
        if (intersectionRatio > prevRatio) {
            // console.log('進入')
            // target.style.backgroundColor = `rgba(40, 40, 190, ${intersectionRatio})`;
            entry.target.classList.add('in-view');
        } else {
            // target.style.backgroundColor = `rgba(190, 40, 40, ${intersectionRatio})`;
            // console.log('離開')        
        }

        prevRatio = intersectionRatio;
    });
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.lazyload');
for (const target of targets) {
    observer.observe(target);
}