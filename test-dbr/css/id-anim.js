$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var inaltime = $('.images').height();
    var imagine1d = $('.imagine1').height();
    var imagine2d = $('.imagine2').height();
    var imageine3d = $('.imagine3').height();
    var primadurata = inaltime - imageine3d ;
    var adoua = inaltime - imagine1d - imageine3d ;
    var atreia = adoua - imagine2d;


    $(window).on("resize",function () {
        var inaltime = $('.images').height();
        var imagine1d = $('.imagine1').height();
        var imagine2d = $('.imagine2').height();
        var imageine3d = $('.imagine3').height();
        var primadurata = inaltime;
        var adoua = inaltime - imagine1d - imageine3d;
        var atreia = adoua - imagine2d;
    })

    var scene1 = new ScrollMagic.Scene({triggerElement: ".imagine1",duration:primadurata - 300,offset: 0,triggerHook: 0})
        .setPin(".imagine1",{pushFollowers: false})
        // .addIndicators({name: "1"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: ".imagine2",duration:adoua -100,offset: -200,triggerHook: 0})
        .setPin(".imagine2",{pushFollowers: false})
        // .addIndicators({name: "loop2"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: ".imagine3",duration:100,offset: -400,triggerHook: 0})
        .setPin(".imagine3")
        // .addIndicators({name: "loop3"}) // add indicators (requires plugin)
        .addTo(controller);

})