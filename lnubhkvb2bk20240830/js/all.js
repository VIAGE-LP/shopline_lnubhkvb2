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
    // // 網頁載入12秒後開啟lottery modal
    // let copyText1 = document.querySelector(".copyText1");
    // let copyButton1 = document.querySelector(".copyButton1");
    // copyButton1.addEventListener("click", function () {
    //     //點擊按鈕後選擇文本
    //     copyText1.select();
    //     copyText1.setSelectionRange(0, 99999);
    //     //將文本寫入剪貼簿
    //     navigator.clipboard.writeText(copyText1.value);
    //     // Alert the copied text
    //     alert("恭喜你獲得TWD$100(≈HKD$25)折扣金！\n您已複製以下優惠代碼，於購物車「優惠代碼」欄位輸入，\n即可享總結帳金額再折TWD$100\n限時優惠，把握機會。\n優惠代碼： " + copyText1.value);
    //     // e.preventDefault();
    //     $('html , body').animate({
    //         scrollTop: $('#color_box').offset().top,
    //     }, 900);

    // });

    // let copyText2 = document.querySelector(".copyText2");
    // let copyButton2 = document.querySelector(".copyButton2");
    // copyButton2.addEventListener("click", function (e) {
    //     //點擊按鈕後選擇文本
    //     copyText2.select();
    //     copyText2.setSelectionRange(0, 99999);
    //     //將文本寫入剪貼簿
    //     navigator.clipboard.writeText(copyText2.value);
    //     // Alert the copied text
    //     alert("恭喜你獲得TWD$100折扣金！\n您已複製以下優惠代碼，於購物車「優惠代碼」欄位輸入，\n即可享總結帳金額再折TWD$100\n限時優惠，把握機會。\n優惠代碼： " + copyText2.value);
    //     if($(window).scrollTop() > $('#color_box').offset().top){
    //         e.preventDefault()
    //     }else{
    //         $('html , body').animate({
    //             scrollTop: $('#color_box').offset().top,
    //         }, 900);
    //     }

    // });
    // let copyText3 = document.querySelector(".copyText3");
    // let copyButton3 = document.querySelector(".copyButton3");
    // copyButton3.addEventListener("click", function () {
    //     //點擊按鈕後選擇文本
    //     copyText3.select();
    //     copyText3.setSelectionRange(0, 99999);
    //     //將文本寫入剪貼簿
    //     navigator.clipboard.writeText(copyText2.value);
    //     // Alert the copied text
    //     alert("恭喜你獲得TWD$100折扣金！\n您已複製以下優惠代碼，於購物車「優惠代碼」欄位輸入，\n即可享總結帳金額再折TWD$100\n限時優惠，把握機會。\n優惠代碼： " + copyText3.value);
    //     $('html , body').animate({
    //         scrollTop: $('#color_box').offset().top,
    //     }, 900);
    // });
    // var myModal = new bootstrap.Modal(document.getElementById('lotterymodal'), {
    //     keyboard: false
    // })
    // setTimeout(() => {
    //     myModal.show();
    // }, 12000)

    // 立即訂購btn動態


    // 日本的modal
    $('.modal-open-button').click(function () {
        $('#modal-wrap').css('position', 'absolute');
    });

    // 日本的modal自動抓取月份最後一天
    var nowDate = new Date();
    var year = nowDate.getFullYear()
    var month = nowDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var lastDay = new Date(`${year}`, `${month}`, 0);
    var day = lastDay.getDate();
    day = day < 10 ? '0' + day : day;
    $('.lastday').text(`${month}/${day}`);

    // 購物車加上type="button"
    $("#cros-category-selector").attr("type", "button");
    $('select[name="color-selector"]').attr("type", "button");

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
    //滾動至文字高度後啟動動畫
    $(window).scroll(function () {
        var windowHeight = $(window).scrollTop();
        var windowHeight_scope = Math.trunc(windowHeight / 100) * 100

        // var scaling_set = $(".scaling_set").offset().top;
        // var scaling_set_scope = Math.trunc(scaling_set / 100) * 100;
        // var tolerance_set_scope = Math.ceil(($(window).height() - $(".scaling_set").outerHeight()) / 100) * 100;
        // console.log(Math.trunc(windowHeight_scope))
        // console.log(Math.trunc(io_scaling_scope))
        // console.log(Math.trunc(tolerance_scope))

        // if (((windowHeight_scope - tolerance_set_scope) == scaling_set_scope) || ((windowHeight_scope + tolerance_set_scope) == scaling_set_scope)) {
        //     $(".scaling_set").addClass("active")
        // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_set_scope) > scaling_set_scope) || ((windowHeight_scope + tolerance_set_scope) < scaling_set_scope)) {
        //     $(".scaling_set").removeClass("active")
        // console.log("xxx")
        // }

        // var scaling_MD1 = $(".MD1").offset().top;
        // var scaling_MD1_scope = Math.trunc(scaling_MD1 / 100) * 100;
        // var tolerance_MD1_scope = Math.ceil(($(window).height() - ($(".MD1").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD1_scope) == scaling_MD1_scope) || ((windowHeight_scope + tolerance_MD1_scope) == scaling_MD1_scope)) {
        //     $(".MD1").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD1_scope) > scaling_MD1_scope) || ((windowHeight_scope + tolerance_MD1_scope) < scaling_MD1_scope)) {
        //     $(".MD1").removeClass("active")
        //     // console.log("xxx")
        // }
        // var scaling_MD2 = $(".MD2").offset().top;
        // var scaling_MD2_scope = Math.trunc(scaling_MD2 / 100) * 100;
        // var tolerance_MD2_scope = Math.ceil(($(window).height() - ($(".MD2").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD2_scope) == scaling_MD2_scope) || ((windowHeight_scope + tolerance_MD2_scope) == scaling_MD2_scope)) {
        //     $(".MD2").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD2_scope) > scaling_MD2_scope) || ((windowHeight_scope + tolerance_MD2_scope) < scaling_MD2_scope)) {
        //     $(".MD2").removeClass("active")
        //     // console.log("xxx")
        // }


        // var scaling_MD3 = $(".MD3").offset().top;
        // var scaling_MD3_scope = Math.trunc(scaling_MD3 / 100) * 100;
        // var tolerance_MD3_scope = Math.ceil(($(window).height() - ($(".MD3").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD3_scope) == scaling_MD3_scope) || ((windowHeight_scope + tolerance_MD3_scope) == scaling_MD3_scope)) {
        //     $(".MD3").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD3_scope) > scaling_MD3_scope) || ((windowHeight_scope + tolerance_MD3_scope) < scaling_MD3_scope)) {
        //     $(".MD3").removeClass("active")
        //     // console.log("xxx")
        // }

        // var scaling_MD4 = $(".MD4").offset().top;
        // var scaling_MD4_scope = Math.trunc(scaling_MD4 / 100) * 100;
        // var tolerance_MD4_scope = Math.ceil(($(window).height() - ($(".MD4").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD4_scope) == scaling_MD4_scope) || ((windowHeight_scope + tolerance_MD4_scope) == scaling_MD4_scope)) {
        //     $(".MD4").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD4_scope) > scaling_MD4_scope) || ((windowHeight_scope + tolerance_MD4_scope) < scaling_MD4_scope)) {
        //     $(".MD4").removeClass("active")
        //     // console.log("xxx")
        // }
        // var scaling_MD5 = $(".MD5").offset().top;
        // var scaling_MD5_scope = Math.trunc(scaling_MD5 / 100) * 100;
        // var tolerance_MD5_scope = Math.ceil(($(window).height() - ($(".MD5").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD2_scope) == scaling_MD5_scope) || ((windowHeight_scope + tolerance_MD5_scope) == scaling_MD5_scope)) {
        //     $(".MD5").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD5_scope) > scaling_MD5_scope) || ((windowHeight_scope + tolerance_MD5_scope) < scaling_MD5_scope)) {
        //     $(".MD5").removeClass("active")
        //     // console.log("xxx")
        // }


        // var scaling_MD6 = $(".MD6").offset().top;
        // var scaling_MD6_scope = Math.trunc(scaling_MD6 / 100) * 100;
        // var tolerance_MD6_scope = Math.ceil(($(window).height() - ($(".MD6").outerHeight() / 2)) / 100) * 100;
        // if (((windowHeight_scope - tolerance_MD6_scope) == scaling_MD6_scope) || ((windowHeight_scope + tolerance_MD6_scope) == scaling_MD6_scope)) {
        //     $(".MD6").addClass("active")
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_MD6_scope) > scaling_MD6_scope) || ((windowHeight_scope + tolerance_MD6_scope) < scaling_MD6_scope)) {
        //     $(".MD6").removeClass("active")
        //     // console.log("xxx")
        // }


        // var scaling_point = $(".point_content").offset().top;
        // var scaling_point_scope = Math.trunc(scaling_point / 100) * 100;
        // var tolerance_point_scope = Math.ceil(($(window).height() - ($(".point_content").outerHeight())) / 100) * 100;
        // if (((windowHeight_scope - tolerance_point_scope) == scaling_point_scope) || ((windowHeight_scope + tolerance_point_scope) == scaling_point_scope)) {
        //     setTimeout(() => {
        //         $(".point_cycle_1").addClass("active")
        //     }, 100);
        //     setTimeout(() => {
        //         $(".point_cycle_2").addClass("active")
        //     }, 500);
        //     setTimeout(() => {
        //         $(".point_cycle_3").addClass("active")
        //     }, 800);
        //     setTimeout(() => {
        //         $(".point_cycle_4").addClass("active")
        //     }, 1200);
        //     // console.log("OOO")
        // } else if (((windowHeight_scope - tolerance_point_scope) > scaling_point_scope) || ((windowHeight_scope + tolerance_point_scope) < scaling_point_scope)) {
        //     $(".point_cycle_1").removeClass("active")
        //     $(".point_cycle_2").removeClass("active")
        //     $(".point_cycle_3").removeClass("active")
        //     $(".point_cycle_4").removeClass("active")
        //     // console.log("xxx")
        // }
    });

//燈箱套件
    lightbox.option({
        'albumLabel': "第%1張圖，共4張",
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'fadeDuration': 200,
        'maxWidth':1000,
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
        const summerTop = $('#summer').position().top;
        const scrollPos = $(window).scrollTop();
        let fvvideo = document.getElementById("fv_video");
        let first = true;

        if (summerTop < scrollPos) {
            fvvideo.loop = true;
            fvvideo.play();
            observer.unobserve(fv_target);
        } else {
            // console.log("在領域", summerTop, scrollPos);
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

