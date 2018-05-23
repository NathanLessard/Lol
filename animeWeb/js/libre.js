var m = {};
m.opacityIn = [0,1];
m.scaleIn = [0.2, 1];
m.scaleOut = 3;
m.durationIn = 800;
m.durationOut = 600;
m.delay = 1000;

anime.timeline({loop: true})
    .add({
        targets: '.m .lettres-1',
        opacity: m.opacityIn,
        scale: m.scaleIn,
        duration: m.durationIn
    }).add({
    targets: '.m .lettres-1',
    opacity: 0,
    scale: m.scaleOut,
    duration: m.durationOut,
    easing: "easeInExpo",
    delay: m.delay
}).add({
    targets: '.m .lettres-2',
    opacity: m.opacityIn,
    scale: m.scaleIn,
    duration: m.durationIn
}).add({
    targets: '.m .lettres-2',
    opacity: 0,
    scale: m.scaleOut,
    duration: m.durationOut,
    easing: "easeInExpo",
    delay: m.delay
}).add({
    targets: '.m .lettres-3',
    opacity: m.opacityIn,
    scale: m.scaleIn,
    duration: m.durationIn
}).add({
    targets: '.m .lettres-3',
    opacity: 0,
    scale: m.scaleOut,
    duration: m.durationOut,
    easing: "easeInExpo",
    delay: m.delay
}).add({
    targets: '.m .lettres-4',
    opacity: m.opacityIn,
    scale: m.scaleIn,
    duration: m.durationIn
}).add({
    targets: '.m .lettres-4',
    opacity: 0,
    scale: m.scaleOut,
    duration: m.durationOut,
    easing: "easeInExpo",
    delay: m.delay
}).add({
    targets: '.m',
    opacity: 0,
    duration: 500,
    delay: 500
});

$('#footer').mouseover(function () {
    window.close();
});