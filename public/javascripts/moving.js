
window.onload = function(){
    console.log("윈도우 온로드");

    var nowwhat = "login";

    var page = document.getElementById('main');
    var context = page.getContext('2d');
    var charac = document.getElementById('char');
    charac.style.position = 'absolute';
    var vizago = charac.getContext('2d');

    var m1p,m2p,m3p,m4p;
    var m1p = new Image();
    m1p.src = 'images/m1.png';
    var m2p = new Image();
    m2p.src = 'images/m2.png';
    var m3p = new Image();
    m3p.src = 'images/m3.png';
    var m4p = new Image();
    m4p.src = 'images/m4.png';

    var m1 = document.getElementById('m1');
    m1.style.position = 'absolute';
    var m1c = m1.getContext('2d');
    m1p.onload = function () {
        m1c.drawImage(m1p, 0, 0);
    }

    var m2 = document.getElementById('m2');
    m2.style.position = 'absolute';
    var m2c = m2.getContext('2d');
    m2p.onload = function () {
        m2c.drawImage(m2p, 0, 0);
    }

    var m3 = document.getElementById('m3');
    m3.style.position = 'absolute';
    var m3c = m3.getContext('2d');
    m3p.onload = function () {
        m3c.drawImage(m3p, 0, 0);
    }

    var m4 = document.getElementById('m4');
    m4.style.position = 'absolute';
    var m4c = m4.getContext('2d');
    m4p.onload = function () {
        m4c.drawImage(m4p, 0, 0);
    }

    m1.style.left = "-200px";
    m2.style.left = "-200px";
    m3.style.left = "-200px";
    m4.style.left = "-200px";

    m3.onclick = function(){
        m1.style.left = "-200px";
        m2.style.left = "-200px";
        m3.style.left = "-200px";
        m4.style.left = "-200px";
        context.drawImage(ar4, 0, 0);
        vizago.clearRect(0,0,80,100);
        menufalse();
        nowwhat = "map";
    }

    m2.onclick = function(){
        m1.style.left = "-200px";
        m2.style.left = "-200px";
        m3.style.left = "-200px";
        m4.style.left = "-200px";
        context.drawImage(ar2, 0, 0);
        context.drawImage(lf, 0,485);
        context.drawImage(rf, 270,485);
        vizago.drawImage(char, 0,0);
        charac.style.left = "200px";
        charac.style.top = "375px";
        menufalse();
        nowwhat = "home";
    }

    var nowmenu = false;
    page.onclick = function(E){
    if(nowwhat != "login" && nowwhat != "map" && nowmenu == false){
        var cnt1 = 1.5;
        var cnt2 = 1.5;
        var cnt3 = 1.5;
        var cnt4 = 1.5;
        m1.style.left = E.pageX - 50 + "px";
        m2.style.left = E.pageX - 50 + "px";
        m3.style.left = E.pageX - 50 + "px";
        m4.style.left = E.pageX - 50 + "px";
        var starty = E.pageY-218;

        var menuani = setInterval(function(){
            if(cnt1 < 3.5){
                m1.style.top = starty - Math.cos(cnt1)*200 + "px";
                cnt1 += 0.1;
            }

            if(cnt2 < 3.5){
                m2.style.top = starty - Math.cos(cnt2)*140 + "px";
                cnt2 += 0.1;
            }

            if(cnt3 < 3.5){
                m3.style.top = starty - Math.cos(cnt3)*80 + "px";
                cnt3 += 0.1;
            }

            if(cnt4 < 3.5){
                m4.style.top = starty - Math.cos(cnt4)*20 + "px";
                cnt4 += 0.1;
            }
            else{
                clearInterval(menuani);
            }

        },1000/60);
        nowmenu = true;
    }
    else if(nowmenu){
        menufalse();
    }
        if(nowwhat == "map"){
            context.drawImage(ar3, 0, 0);
            context.drawImage(lf, 0,485);
            context.drawImage(rf, 270,485);
            vizago.drawImage(char, 0,0);
            charac.style.left = "200px";
            charac.style.top = "375px";
            nowwhat = "land ";
        }
    }

    var menufalse = function(){
        m1.style.left = "-200px";
        m2.style.left = "-200px";
        m3.style.left = "-200px";
        m4.style.left = "-200px";

        m1.style.top = "-50px";
        m2.style.top = "-50px";
        m3.style.top = "-50px";
        m4.style.top = "-50px";

        nowmenu = false;
    }

    var ar1 = new Image();
    ar1.src = 'images/1login.png';
    var ar2 = new Image();
    ar2.src = 'images/2myhome.png';
    var ar3 = new Image();
    ar3.src = 'images/3land.png';
    var ar4 = new Image();
    ar4.src = 'images/4map.png';

    var lf = new Image();
    lf.src = 'images/left.png';
    var rf = new Image();
    rf.src = 'images/right.png';
    var char = new Image();
    char.src = 'images/char.png';
    var px = 200;
    var py = 375;
    var ax = 0, ay = 0;


    var k1 = makei('input',90,430,180,0,5);
    var k2 = makei('input',130,490,140,0,5);

    var move1 = makei('div',0,485,50,50,5);
    var move2 = makei('div',270,485,50,50,5);
    move1.onmousedown = function(){
        ax = -2;
    }
    move2.onmousedown = function(){
        ax = 2;
    }
    move1.onmouseup = function(){
        ax = 0;
    }
    move2.onmouseup = function(){
        ax = 0;
    }

    k2.type = "password"

    ar1.onload = function () {
        context.drawImage(ar1, 0, 0);
    }


    var egMaestro = setInterval(function(){

        if(nowwhat != "login" && nowwhat != "map"){
            console.log(px);
            charac.style.left = px + ax +  'px';
            px += ax;
            charac.style.top = py + ay + 'px';
            py += ay;
        }

    },1000/30);

    var moving1 = function (E) {
        switch (E.keyCode) {
            case 13:
                if(nowwhat == "login"){
                context.drawImage(ar2, 0, 0);
                k1.style.left = '-500px';
                k2.style.left = '-500px';
                context.drawImage(lf, 0,485);
                context.drawImage(rf, 270,485);
                vizago.drawImage(char, 0,0);
                charac.style.left = "200px";
                charac.style.top = "375px";
                nowwhat = "home";
                }
                break;
            case 37:
                ax = -2;
                break;
            case 39:
                ax = 2;
                break;
        }
    }
    var moving2 = function (E) {
        switch (E.keyCode) {
            case 37:
                ax = 0;
                break;
            case 39:
                ax = 0;
                break;
        }
    }

    addEventListener('keydown',moving1,false);
    addEventListener('keyup',moving2,false);


}














var makei = function(what,x,y,w,h,z){
    var willreturn = document.createElement(what);;
    willreturn.style.left = x + 'px';
    willreturn.style.top = y + 'px';
    if(w){
        willreturn.style.width = w + 'px';
    }
    if(h){
        willreturn.style.height = h + 'px';
    }

    willreturn.style.position = 'absolute';
    willreturn.style.zIndex = z;
    document.body.appendChild(willreturn);
    return willreturn;
}