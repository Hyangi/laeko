window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.onload = function(){
    console.log("윈도우 온로드");

    var main = document.getElementById('main');
    var ctxmn = main.getContext('2d');
    var menu = document.getElementById('menu');
    var ctxmu = menu.getContext('2d');
    var eventscreen = document.getElementById('event');
        eventscreen.addEventListener('contextmenu',function(E){E.preventDefault();},false);       //오른쪽 마우스 해제

    /// XY추가하기 ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶
    var cvsBf = makei('textarea',0,700,1000,200,2);
    var cvsAf = makei('textarea',0,900,1000,200,2);
    var cvsBt = makei('button',0,800,30,18,2);
    thatsall(cvsBf);
    thatsall(cvsAf);
    thatsall(cvsBt);
    function thatsall(dom){         //표시, 제거
     //   dom.style.display = 'none';
    }
    cvsBt.onclick = function(){
        cvsAf.value = addXY(cvsBf.value);
    }
    /// XY추가하기 끝 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    /// SAO menu slide Start ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶

    var menuAni = menuani(ctxmu);
    function menuani (context) {

        var that = {};


        that.context = context;
        that.iconradius = 20;
        that.Ex = 0;
        that.Ey = 0;
        that.offsetleft = that.context.canvas.offsetLeft;
        that.offsettop = that.context.canvas.offsetTop;

        that.nowmenu = false;
        that.isinitcondition = true;
        that.ismouseover = false;

        that.loop = false;
        that.play = false;
        that.initcnt = 4.6;
        that.nowy = 0;
        that.tickCout = that.initcnt;

        that.menuW = 40;
        that.menuH = 235;
        that.adjx = -50;
        that.adjy = -390;
        that.xforevent = 0;
        that.yforevent = 0;
        that.yforerase = 195;

        that.menuCount = 4;
        that.ismouseonicon = [false,false,false,false];
        that.distans = [0,0,0,0];

        that.render = function(){
            if(!that.loop){
            }
            else{
                that.tickCout +=0.1;
                if(that.tickCout > 6.7){        //애니메이션이 끝났다면
                    that.loop = false;              //루프중지
                    that.play = false;              //재생 끝
                    that.nowmenu = true;            //메뉴 뜸
                    that.isinitcondition = true;    //메뉴 초기상태(전부 회색)
                    eventscreen.addEventListener('mousemove',menuAni.eventMousemove,false);   //마우스 탐지시작
                }
                that.context.clearRect(that.Ex,that.Ey+that.yforerase,that.menuW,that.menuH);      //이전꺼 지우고
                that.nowy = Math.cos(that.tickCout);
                for(var i = 0; i< that.menuCount; i++){
                    SAOmenucircle(that.context,that.Ex,that.Ey + that.nowy*(i*50+40)+200,"rgb(178, 178, 178)")      //그리기
                }
                that.xforevent = that.Ex+20;                    //마우스 클릭 인식용 x,y값
                that.yforevent = that.Ey + that.nowy*190+90;
            }
        };

        that.update = function(){

        }
        that.eventClicks = function(E){
            if(!that.play){            //애니메이션이 진행중이 아닐때만,
                if(that.nowmenu){                //메뉴가 열려있으면
                    if(that.ismouseover){      //마우스가 올려져 있다면,
                        var i;
                        for(i in that.ismouseonicon){
                            if(that.ismouseonicon[i]){  //어디를 클릭했는지 알아내서
                                console.log(i);
                            }
                        }
                    }
                }
            }
        }
        that.eventRightclick = function(E){
            if(!that.play){            //애니메이션이 진행중이 아닐때만,
                if(that.nowmenu){                //메뉴가 열려있으면
                    that.menufalse();       //끝낸다
                }
                else{                       //안열려있으면 루프시작
                    that.tickCout = that.initcnt;       //애니메이션 카운트 조기화
                    that.play = true;
                    that.loop = true;
                    that.Ex = E.pageX - that.offsetleft + that.adjx;      //메뉴 위치 조정
                    that.Ey = E.pageY - that.offsettop + that.adjy;
                }
            }
        }
        that.eventMousemove = function(E){      //마우스를 움직였을 때
            if(that.nowmenu){
                var i,j;
                for(i in that.distans){
                    that.distans[i] = distans(that.xforevent - E.pageX + that.offsetleft,
                                    that.yforevent + i*43 - E.pageY + that.offsettop);    //각 메뉴에서의 거리를 구하고
                }
                that.ismouseover = false;
                for( i in that.distans){
                    if(that.distans[i] <= that.iconradius){                   //반지름 보다 작다면,
                        if(!that.ismouseonicon[i]){
                            that.context.clearRect(that.Ex,that.Ey+that.yforerase,that.menuW,that.menuH);      //다 지우고
                            for(j in that.ismouseonicon){
                                if(i == j){
                                    that.ismouseonicon[i] = true;
                                    SAOmenucircle(that.context,that.Ex,that.Ey + that.nowy*(j*50+40)+200,"rgb(78, 194, 246)");         //자기만 파랑으로
                                    that.isinitcondition = false; //초기 상태 아님
                                }
                                else{
                                    that.ismouseonicon[j] = false;
                                    SAOmenucircle(that.context,that.Ex,that.Ey + that.nowy*(j*50+40)+200,"rgb(178, 178, 178)");         //나머지는 전부 회색으로
                                }
                            }
                        }
                        that.ismouseover = true;
                    }
                }
                if(!that.ismouseover){      //아무데도 마우스가 올려져 있지 않다면(마우스가 메뉴 밖으로 이동하면)
                    if(!that.isinitcondition){      //메뉴가 초기상태(전부회색)가 아니라면
                        that.context.clearRect(that.Ex,that.Ey+that.yforerase,that.menuW,that.menuH);      //다 지우고
                        for(j in that.ismouseonicon){
                            that.ismouseonicon[j] = false;
                            SAOmenucircle(that.context,that.Ex,that.Ey + that.nowy*(j*50+40)+200,"rgb(178, 178, 178)");         //전부 회색으로
                        }
                        that.isinitcondition = true; //초기 상태로 바낌
                    }
                }
            }
        }
        that.menufalse = function(){
            that.context.clearRect(that.Ex,that.Ey+that.yforerase,that.menuW,that.menuH);
            that.nowmenu = false;
            for(var i in that.ismouseonicon){
                that.ismouseonicon[i] = false;
            }
            eventscreen.removeEventListener('mousemove',menuAni.eventMousemove,false);        //마우스 탐지종료
        }
        return that;
    }

    eventscreen.addEventListener('click',menuAni.eventClicks,false);                          //클릭이벤트 등록
    eventscreen.addEventListener('contextmenu',menuAni.eventRightclick,false);                  //오른쪽 클릭 이벤트 등록


    /// SAO menu slide End ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



    /// Character Exam ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶
    var charac = document.getElementById('char');
    charac.style.position = 'absolute';
    var vizago = charac.getContext('2d');

    var char = new Image();
    char.src = 'images/justis_right.png';

    var justis = sprite({
        context: vizago,
        width: 128,
        height: 48,
        image: char,
        numberOfFrames: 4,
        loop: true
    });
    char.addEventListener('load',gameLoop());
    /// Character Exam End ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



    var myloop;             //메인 루프
    function gameLoop() {
        mainRender(ctxmn);
        mainUpdate();
        justis.update();
        justis.render();
        menuAni.render();
        myloop = requestAnimationFrame(gameLoop);
    }

    addEukarya(oryctolagus,rabit);
  //  addEukarya(Oryza,rice);
}

var renderIndex = [];
var renderIndexNextNum = 0;
function mainRender(context){
    context.clearRect(0,0,context.canvas.clientWidth,context.canvas.clientHeight);
    var i;
    for(i=0; i<renderIndex.length;i++){
        renderIndex[i](context, EukaryaIndex[RenderToEukaryaIndex[i]].Sx, EukaryaIndex[RenderToEukaryaIndex[i]].Sy);
    }
}
function mainUpdate(){

}

var RenderToEukaryaIndex = [];
var EukaryaIndex = [];
var EukaryaIndexNextNum = 0;
function addEukarya(sciname,renderData){

    var out = {};

    out.Ax = 100;     //절대 위치 좌표
    out.Ay = 100;
    out.Sx = 100;     //스크린 위에서의 위치
    out.Sy = 100;
    out.data = sciname;
    out.renderNum = renderIndexNextNum;                     //렌더 넘버를 입력
    renderIndex[renderIndexNextNum] = renderData;           //메인렌더에 데이타를 넘겨줌
    EukaryaIndex[EukaryaIndexNextNum] = out;                // 객체 생성
    RenderToEukaryaIndex[renderIndexNextNum] = EukaryaIndexNextNum;     //렌더번호와 생물번호 연결
    renderIndexNextNum++;
    EukaryaIndexNextNum++;

}

function Plantae(){

}




function sprite (options) {


    var that = {},
        frameIndex = 0,
        tickCout = 0,
        ticksPerFrame = 10,
        numberOfFrames = options.numberOfFrames || 1;


    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.loop = options.loop;

        that.render = function(){

            that.context.clearRect(0,0,that.width / numberOfFrames, that.height);

            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
        };

        that.update = function(){

            tickCout +=1;
            if(!that.loop){
                frameIndex = 0;
            }
            else if(tickCout > ticksPerFrame){

                tickCout = 0;
                if (frameIndex < numberOfFrames - 1){
                    // iras al sekvanta kadro

                    frameIndex += 1;
                }
                else if(that.loop){
                    frameIndex = 0;
                }
            }
        }
    return that;
}

function distans(disx, disy){
    return Math.sqrt(Math.pow(Math.abs(disx),2) + Math.pow(Math.abs(disy),2));
}

function addXY(string){
    var lastIndex = 0;
    var endtext = '';
    var fulltext = string;

    var reg = /\.(?:\d*\.)?\d+/g;
    var arr;
    var i = 0;
    while ((arr = reg.exec(fulltext)) != null)
    {
        if(i%2 == 0){
            endtext += fulltext.substring(lastIndex,arr.index+2) + '+x';
            lastIndex = arr.index+2;
        }
        else{
            endtext += fulltext.substring(lastIndex,arr.index+2) + '+y';
            lastIndex = arr.index+2;
        }
        i++;
    }
    endtext += fulltext.substring(lastIndex);
    return endtext;
}

var makei = function(what,x,y,w,h,z){
    var willreturn = document.createElement(what);
    willreturn.style.left = x + 'px';
    willreturn.style.top = y + 'px';
    if(w){
        willreturn.style.width = w + 'px';
    }
    if(h){
        willreturn.style.height = h + 'px';
    }
    willreturn.style.border = '1pt solid #333333';
    willreturn.style.position = 'absolute';
    willreturn.style.zIndex = z;
    document.body.appendChild(willreturn);
    return willreturn;
}