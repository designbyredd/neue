$(document).ready(function () {

    var controller = new ScrollMagic.Controller();
    var durationfirst = $('#content-tableta').height();
    var wind =  $(window).height();
    var htablet = $('.tableta').height();

    if(wind < durationfirst){
        var dur = durationfirst - htablet;
        var scene1 = new ScrollMagic.Scene({triggerElement: "#tab",duration:dur,triggerHook: 1,offset: wind})
            .setPin(".tableta")
            // .addIndicators({name: "1"})
            .addTo(controller);

    }else{
        var dur  = durationfirst - htablet;
        var scene1 = new ScrollMagic.Scene({triggerElement: "#tab",duration:dur,triggerHook: 1,offset: 500})
            .setPin(".tableta")
            // .addIndicators({name: "1"}) // add indicators (requires plugin)
            .addTo(controller);
    }



//stanga-dreapta

    var tween = TweenMax.fromTo(".animl", 1,
        {right: "50%"},
        {right: -500, yoyo: true, ease: Circ.easeInOut}
    );

    var tween2 = TweenMax.fromTo(".animr", 1,
        {left: "50%"},
        {left: -500, yoyo: true, ease: Circ.easeInOut}
    );

// build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#animatedlr", duration: 1000, offset: -400,triggerHook: 0})
        .setTween(tween)
        // .addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);


    var scene = new ScrollMagic.Scene({triggerElement: "#animatedlr", duration: 1000, offset: -400,triggerHook: 0})
        .setTween(tween2)
        // .addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);

//end stanga dreapta

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

    var scene1 = new ScrollMagic.Scene({triggerElement: ".imagine1",duration:primadurata-200,offset: -100,triggerHook: 0})
        .setPin(".imagine1",{pushFollowers: false})
        // .addIndicators({name: "1"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: ".imagine2",duration:adoua-100,offset: -200,triggerHook: 0})
        .setPin(".imagine2",{pushFollowers: false})
        // .addIndicators({name: "loop2"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: ".imagine3",duration:1,offset: -300,triggerHook: 0})
        .setPin(".imagine3")
        // .addIndicators({name: "loop3"}) // add indicators (requires plugin)
        .addTo(controller);


})




