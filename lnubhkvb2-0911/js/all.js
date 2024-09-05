$(document).ready(function () {
    //鎖住兩指縮放避免跑版
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchmove', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    //color區塊互動
    for (let i = 1; i <= 7; i++) {
        // console.log(i)
        let item = String(i).padStart(2, '0');
        $(".trigger_" + `${item}` + " img").click(function (e) {
            e.preventDefault();
            dataset = $(this).data("show")
            $(".show_" + `${item}`).html(`<img src="https://lunanaturalbra.com/Lshare/images/06_color/show/${item}_${dataset}.png" alt="">`)
            // console.log(dataset)
        });
    }

    //燈箱套件
    lightbox.option({
        'albumLabel': "第%1張圖，共4張",
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'fadeDuration': 200,
        'maxWidth': 1000,
        'resizeDuration': 150,
        'wrapAround': true,
        'positionFromTop': 100,
    })


    //超過fv，影片播完就不自動往下滑
    const fv_options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.0,
    };

    function fv_scroll(entries, observer) {
        const videoEnd = $('#fv_video_end').position().top;
        const scrollPos = $(window).scrollTop();
        let fvvideo = document.getElementById("fv_video");
        let first = true;

        if (videoEnd < scrollPos) {
            fvvideo.loop = true;
            fvvideo.play();
            observer.unobserve(fv_target);
        } else {
            // fv影片播放完第一遍往下滑，之後loop
            fvvideo.onended = function () {
                if (first) {
                    $('html , body').animate({
                        scrollTop: $('#summer').offset().top,
                    }, 900);
                    first = false;
                    fvvideo.loop = true;
                    // console.log(first, fvvideo);
                }
            }
            fvvideo.addEventListener("ended", () => {
                fvvideo.play();
            })
        }
    }
    const fv_target = document.querySelector(".fv_video_box");
    const fv_observer = new IntersectionObserver(fv_scroll, fv_options);
    fv_observer.observe(fv_target)
});

//客人評論區塊
document.getElementById(`customer-1`).addEventListener('load', function () {
    // for(i=1;i<=3;i++){
    // console.log(i);
    // console.log(document.getElementById(`customer-1`))

    let customerFrame = document.getElementById(`customer-1`);
    let customerContent = customerFrame.contentWindow.document.body.querySelector(".product-reviews-container");
    console.log(customerContent)
    // // 清空 iframe 中的内容
    customerFrame.contentWindow.document.body.innerHTML = '';
    // // 将 .product-reviews-container 元素添加到 iframe 中
    customerFrame.contentWindow.document.body.appendChild(customerContent);

    // 输出 customerContent 内容，仅供测试
    // }
});

//carousel
$(document).ready(function () {
    let items = document.querySelectorAll(".carousel .carousel-item");

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }

    })
});

//載入優化
// document.addEventListener('DOMContentLoaded', function () {
//     var lazyImages = document.querySelectorAll('[data-src]');
//     var options = {
//         root: null, // Use the viewport as the root
//         rootMargin: '1000px', // Add a 50px margin around the viewport
//         threshold: 0.1 // Trigger when 50% of the image is in the viewport
//     };
//     function handleIntersection(entries, observer) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//                 var img = entry.target;
//                 img.src = img.getAttribute('data-src');
//                 img.removeAttribute('data-src');
//                 img.style.opacity = 1; // Set opacity to 1 for a fade-in effect
//                 observer.unobserve(img); // Stop observing the loaded image
//             }
//         });
//     }
//     var observer = new IntersectionObserver(handleIntersection, options);
//     lazyImages.forEach(function (img) {
//         observer.observe(img);
//     });
// });

