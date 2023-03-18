/* Le Brand REAL IT Solutions */
function ShowAlertPlayingVideo(videoID){
var GlyphPlayingVideo = "<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> ";
var playingvideoalert = $("<div id=\"playingvideo"+videoID+"\" class=\"alert alert-success\" style=\"position: fixed;float: right;right: 5px;top: 5px;z-index: 99999;display:none\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>" + GlyphPlayingVideo + "Well done!</strong> Video <strong>" + videoID + "</strong> is now playing...&nbsp;&nbsp;</div>");
$("#playingvideoplaceholder").append(playingvideoalert);
$('#playingvideo' + videoID).fadeTo(4000, 500).slideUp(500, function(){ 
    $('#playingvideo' + videoID).slideUp(500);
});
$('#playvideo' + videoID).prop('disabled', true);
}

function ShowAlertYouJustEarned(videoID){
var GlyphYouJustEarned = "<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> ";
var earnedamount = document.getElementById('profitvid' + videoID).innerHTML*1;
var gotprofitalert = $("<div id=\"gotprofit"+videoID+"\" class=\"alert alert-success\" style=\"position: fixed;float: right;right: 5px;top: 5px;z-index: 99999;display:none\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>" + GlyphYouJustEarned + "Congratulations!</strong> You just earned <strong>" + earnedamount + "</strong> points for watching video <strong>#"+videoID+"</strong>&nbsp;&nbsp;</div>");
$("#gotprofitplaceholder").append(gotprofitalert);
$('#gotprofit' + videoID).fadeTo(4000, 500).slideUp(500, function(){ 
$('#gotprofit' + videoID).slideUp(500);
});
}

function ShowAlertGeneral(AlertCode, AlertType, parameterID){
var AlertClassName;
var AlertGlyphicon;
var AlertText;
switch(AlertType){
  case 1:
    AlertClassName = "success";
	AlertGlyphicon = "<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> ";
  break;
  case 2:
    AlertClassName = "info";
  break;
  case 3:
    AlertClassName = "warning";
	AlertGlyphicon = "<span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span> ";
  break;
  case 4:
    AlertClassName = "danger";
	AlertGlyphicon = "<span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span> ";
  break;  
  default:
    AlertClassName = "success";
    AlertGlyphicon = "<span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> ";	
}
switch(AlertCode){
  case 1:
    AlertText = "Please use <strong>PLAY Video " + parameterID + "</strong> button.";
	blinkButtonByNameId('playvideo',parameterID);
  break;  
  default:
    AlertText = "Not defined";  
}
var generatedID = Math.floor(Math.random() * 99999) + 1;
var generalAlert = $("<div id=\"generalAlert"+generatedID+"\" class=\"alert alert-" + AlertClassName + "\" style=\"position: fixed;float: right;right: 5px;top: 5px;z-index: 99999;display:none\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> " + AlertGlyphicon + AlertText + "&nbsp;&nbsp;</div>");
$("#generalalertplaceholder").append(generalAlert);
$('#generalAlert' + generatedID).fadeTo(4000, 500).slideUp(500, function(){ 
$('#generalAlert' + generatedID).slideUp(500);
});
}

function blinkButtonByNameId(thisNAME,thisID){
var thisELEMENT = document.getElementById(thisNAME+thisID);
var BLINKcnt = 0;
var timer = setInterval(function () {
    BLINKcnt++
        if (BLINKcnt == 16) {
			thisELEMENT.setAttribute("class","btn btn-default btn-lg");
            clearInterval(timer);
        } else {
            BLINKcnt % 2 == 1 ? thisELEMENT.setAttribute("class","btn btn-danger btn-lg") : thisELEMENT.setAttribute("class","btn btn-default btn-lg");
        }
    }, 100);
}

function CountDownVideoProgress(container) {
  var vidprbarvalue;
  var vidgetNameProperty;
  var vidnewwidthpercent;
  var timeleft = 19;
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
	document.getElementById("vidbut" + container).style.display = "block";
	stopVideo(container);
	hidePlayButton(container);
  }
    timeleft -= 1;
    vidprbarvalue      = document.getElementById('playerprogressbar' + container); 
    vidgetNameProperty = vidprbarvalue.getAttribute('aria-valuenow')*1;
    vidnewwidthpercent = vidgetNameProperty+5;
    vidprbarvalue.setAttribute("aria-valuenow",vidnewwidthpercent); 
    vidprbarvalue.setAttribute("style","width:" + vidnewwidthpercent + "%");
	document.getElementById('playerprogressbarshow' + container).innerHTML = vidnewwidthpercent;

    var prbarvalue      = document.getElementById('tasksprogressbar'); 
    var getNameProperty = prbarvalue.getAttribute('aria-valuenow')*1;
    var newwidthpercent = getNameProperty+0.625;
    prbarvalue.setAttribute("aria-valuenow",newwidthpercent);
    document.getElementById('progresspercentshow').innerHTML = newwidthpercent;
    prbarvalue.setAttribute("style","width:" + newwidthpercent + "%");

	
}, 1000);
}

function ShowGetPaymentButton(vidbutid) {
    document.getElementById("vidbut" + vidbutid).style.display = "block";
}
function HideGetPaymentButton(vidbutid) {
    var nextvideo  = vidbutid+1;
    var tskcounter = document.getElementById('dailytaskscounter').innerHTML*1;
	var total      = document.getElementById('dailytotalprofit').innerHTML*1;
	var butprice   = document.getElementById('profitvid' + vidbutid).innerHTML*1;
	var profit     = total + butprice;
    ShowAlertYouJustEarned(vidbutid);
	
	/*
    var prbarvalue      = document.getElementById('tasksprogressbar'); 
    var getNameProperty = prbarvalue.getAttribute('aria-valuenow')*1;
    var newwidthpercent = getNameProperty+14.28571428571429;
    prbarvalue.setAttribute("aria-valuenow",newwidthpercent);
    document.getElementById('progresspercentshow').innerHTML = newwidthpercent;
    prbarvalue.setAttribute("style","width:" + newwidthpercent + "%");
	*/
	
    document.getElementById('dailytaskscounter').innerHTML = tskcounter -1;	
	document.getElementById('dailytotalprofit').innerHTML = '';
	document.getElementById('dailytotalprofit').innerHTML = profit;	
    document.getElementById('vidbut' + vidbutid).style.display = "none";
	document.getElementById('watchvid' + vidbutid).style.display = "none";
	if (nextvideo <= 8){
	document.getElementById('watchvid' + nextvideo).style.display = "block";
    }
}
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player1;
	  var player2;
	  var player3;
	  var player4;
	  var player5;
	  var player6;
	  var player7;
	  var player8;
      var done;
	  
	  const allVideos = ["VN5cNiP_I3Y","bNeTikyoB7o","vXAVidL59Gw","UBE5c34m2uU","reev--pTXk0","0KOknUus29A","Q3w2U8NYPeo","em294WkOS-I","s9TEqx8uyMY","JjuaLKGm8ic","usyBP3VFNFg","rXgnkksaTxs","xg_RoHzMfzc","WdmFzxSAbFU","fEnhsJG5mac","fe7HvuL7ccA","ho1wRg4mBbc","9jofzBHZ-j4","ew-Ufo4hHHw","kzGCUB4DTfA","oFrshXyphdw","L8JmsjFhmhQ","D_zAXig8vp8","G6KW_lBAnII","KsWI5Ty1S-E","bZBhu-Bxnhk","3fHp8ZFjqww","MajZs3g_Fuk","1PgE0UPAhRI","K2AGYpxrAfA","xYlFKB_Wm-8","gocnLbRRlWw","5h88YW6wAes","PZ1xfr8gF_I","NQ1uaPtCgr8","CHXvOkIiurk","HwHPkWAKPA8","mySQgWp7hAo","ewTdYp96hJw","sJ1xyZ5P1p4","bJi5ZGhv2eY","KkcImKCnCg4","pzvPwFm7MoI","_CbZoBWl-HI","f_uzr2XTX6g","AV8SLNCm9cI","Bs1sJH0sNbM","d5f0Exkkzmk","CwSesDTYyWY","0v32sfQRAOA","6HeDi1ssG4I","5oGjVrOaZac","zz57Ph8HZ4s","I06oTMXHQmw","d_jeAZ_JvxU","jcuET_qtsxQ","zEaZ7SkSrJs","3Ytm6TA5klw","Zbcn-76_jnU","vKTPe9lq6Ew","2uyiYROGzGw","i88GgbZgjI4","BkXa-FKbUfQ","PHOQS3BSYho","c5U70RX7W3o","cTZ78nFLvvk","jjXiyJQK7P8","t9svMhwQJoE","fzQgMAr_pLI","4AMEtkHQGA0","5376eK9jfPI","aHZEq86b8ow","6BrKdOdI4P0","osy4X0nTq78","aklPzjxEVUg","1KPgJAgWack","z7itndWDsko","FkbPOwaETmY","1dwtW1qjmww","Ak5KnUyDLOs","gEf10QZlNbY","Ryu53JXe7fQ","_Uqbi7vnAuc","7hVCclsmvVQ","05Gz3WHP4Zw","0ULKkPqOPC8","HUmMl4IHZxo","bSQdhHrikBE","LkWcjdRvEkk","YtNuwnATi9A","FsH9XDsSSV8","aCIBALDyboI","LbQV_hIonMg","JCGZQKG690Q","t5TVJxBlymo","JuyoWI_PUEU","wyrqnpUfVCk","0xQlt9T5Bj4","hedo_3fv_JY","aSIuiuVLpCo","gZW2kHO98ZE","qjTGs6tk08w","SFm9MSzwKvc","jXcP9gokQG8","k1l0ioTCt4A","KMvjYbrcArY","yrd8biRzhSo","xGAgl0PLxQQ","kYjyY9LShIw","aJACneSF580","fBlHFXol52I","qYjpDsiS1uo","xxVFoidovsk","kqzVdDrYotY","C3C5KMb3Ch0","_CKGP1LAH8g","REozgUSnNbQ","ay7BdOo8EDs","Jbwi_GUS_AM","aiUsi-VT80s","ng2LQpucIY4","h1ckHj1IFsY","WjnsXb3K9O8","aOIHRlWaufY","prqgl7DsKeQ","gSB0aOl8S1s","X7KePfIl30s","hJLhWJeS1k4","FoR3AS13h10","OhfruAs2qNk","FIBL3ylKqVw","jNYvQrUhGIs","eAgvxFMryWo","zpFSfEFkdDE","hlWeX-CbPcw","TJ6n9-L9aO4","c1CQEDHe-b8","uTj4Kn7H5SY","3fQZz5VVTGc","bMZ3fe1KmGU","MFNs64UrIhM","TwIJ2WOSk_g","Q0_VHY7vaJc","v5CXiQPdTXA","U19dn2tydgc","9tVi-iW3Upg","hRpxXfaf510","_FVCq_EUw3I","fdnRBdXFk8g","vHhFw2hQx_w","6HEsk9pC244","UVJ2MA4J4dc","LgiVxREsKP4","qLWAyLKAnw8","gli-HYliQgI","kKSnxW9T5iA","ItutAtyJmNE","gqAQlGonYRE","mMkk4zX9_is","YD6CbPV-0QY","naprg9UVORw","KyE69U4NsVE","LmWmcWBmrWg","0fNckbHWm0I","TncehcTg-h0","OA3tmihcFKI","mix9dxLdKoU","qET5v_FHk9k","IHuQkgD7lvc","6VOwc2FvC6A","zoBQ3_U0EwY","xtUB6lWY4Sc","BoKgmQVf9_E","NsazkkuTKhM","yFebiKfFMN4","rAnyGI4CXys","AMOdACu7Tp8","J3C2blhMu_0","TpwhOFlSTwQ","ltLVayRy0jA","Iv7Qxzszd7U","0WIRoIPZcj4","Fu7WAujNXV8","Z0yZydosfeM","o2ASZq3CQnU","XDVV5N4ivi0","E2HP083jMsw","v-mDZrDkP0s","l9Tb30p1-BY","g3JuIfiz2z0","rP5BwqthDS8","rp2AMScT2zM","fADTQlpET0k","P70Uuh1RcMQ","mp0EzCGSPvI","kElSXFtFASY","q0C3nrWh9aE","7PVrHkG0E6I","ykzCIUf9hCo","nScqcgd2LlE","gUHYV0jEmx0","aZOJiEDCS14","FWRnPSvq_w8","Wy1OvwA-1Gc","5pzOznUL-cQ","aCn3GZ_hwzk","vc4p_Mpabv0","yidICnbw1Rg","Nd4R7lihYpQ","rWGCh8jQf2Y","drGsuO47C1s","J4Fj2UrTCiU","HcHkPFVQIr4","oppuw63al_Y","2XKHVCZp7fk","EdAh-1d8lNY","mkZPHdViwLo","9Ma8h_SLmiU","LFFcD393XoA","Sq1a-6u-nT4","oq5bwelJUzQ","8lWFn2_quR8","J1y8hNSmMd4","cV90YOIs-0g","iPk4_0Xf2ZI","p066qJ0gPrk","v3W9bSU7Wzg","ixm2Ai46EzA","y8-jC2g9eJk","GHU-eUJ5QHU","9862mZnbNYs","6MSPIWvKWcM","lzZkqQtS5Qo","soUPmZZ2O4Q","6SVhn8uBj7U","nbrqVcSr8Uc","DHVcTCwyT1E","UYMPtkvoc-s","LcwtnuDp_mI","k06pJHFswa0","Ib2rpAGWMQI","5BKz8vNbQRw","ovTVHd8mDek","v7D11ad3QZg","ljjURjvPcCc","jloaCaZO4Lw","ZP-lWDAvMuw","lC_2PEZ8jEQ","QlttwsqtSd0","x0h3SE_-Sbk","yl-Xmzc59-s","aIWa4Ly9dko","ZclBluzAZVE","nezazWl629A","aYSy8guUUV0","Rt286R-FyUQ","R6H9YxJg1BY","OPVt37HmysA","tnLfbN8mKbs","pQ5iC4JNgI8","fYjFQxRsb1k","sDGRag77bFs","rNgxceVQ3vk","q893YGEWLUc","yDDw4AG-TX8","2fD14AkGRn4","M43iwNdE9qw","vmwccMU-MbM","v88qUrUxvjU","J_hsxh_QNi0","a-_O_Sjc5iM","JAuxeaql-EU","UPRqnFnnrr8","289VV0aaJK4","HX8wlaLEeC8","j4Y_zLZARTI","SoOL2CrJtkA","PIf-nsIunLg","i6V8LQ71RIc","wnsEB-f9-Bg","yvmDgXfYPbA","VLkXqpCm8qQ","pKFkhsgtYAs","4wDqxyyV1ag","xbFoFdjX-QY","yLDOSOHZ62g","5g63zkB2pGU","ZYq8Vj4RjFY","Kt796qFaY7k","5YwKAze_cmA","JUdzLnqsOTs","QvjYYrTWQ0A","FaYQqX44dGE","N58NoxSG9iI","Kn4CQGddKlA","tEsJmDv1les","qEZtNgkkGx4","Mjz0LjwW6f4","HVd9k3U2_Hw","JQljWakkrqg","DlzCDUzNTHo","c-ydlGxIKzw","_GiS4ofPIsY","J-sTPC3w4Qg","e7iyl6wrCzI","EIG4J1FuIIk","YheYsRw9-VM","KbnM3cnsHuE","uiUD_Ivo0A4","ngphvh04V4I","IDHY-REvaCE","2GSzkfe1aAY","xU4JryrQZls","Jy8Gg1yVNd4","UBy0X2S7zFU","nXYI77-pqrE","jXqC8gWx7xc","DYcLBgl9GRU","Q6dlj1fsicA","JZHzzX6yfdw","LBRfe5qhrb4","8SbUopsEJMw","3aOd_BZh7W4","YLuV1bbMEWg","VklxPiJvCOI","E48VFWLKA0c","jO9lc3wzifY","2kTbDtNysBk","-u2Q9Tx-0NM","Wbq0VR5wb4Q","ZjT-wtmZ65o","rmkpPW9BfRg","jMWx4LzPyJI","pvWpR66yiQI","hunKnfbiL1w","GGiiRqF12Ho","0BMele6eeZY","M2oE5ulp1VM","Gjtgzzzlg8s","dxwHlnOZ-ko","9bx4e4He1p0","IsKG7Txaa_w","VMtqp1szUPI","DU3BR_9WMgI","1rjYDSORYUQ","R2LyB6tXksw","fUw8adePeDY","JmfKCByFFEs","kJ-7QGIGqA0","4Gqvnv65HY4","915M_jngigE","PUErX3m_aZo","jFaqjYZQYJA","gPFN2rvJOp0","BCmfEx8HWl8","db2AN-ebwLE","v7nzoWRN3Qs","ftT8hR0tqO0","ZTES0bjTmFU","I26H5g41QMQ","OT6lcd9Ja_A","QksGybGVeWI","kr4wl1oGCzU","cCYew3_0guk","k0iX5qZeAFE","n10pIAO-714","Z2w3PV4j98Y","_hRJ34Sr9Rw","lT-fhZh7_e8","JXpW6IJRNNs","EjDTvhf8Yxg","ZR0KK6sDfTI","7x905LG87es","xJF4jXNIEIo","qiZH4tQOfks","7NTsa-EOg_Y","8m9arYALrfA","t17ywCQq3Fk","38a38DDJo4k","ivXDT3cuEOE","kteX1JAE2iw","_y9bj5jqV7I","EciM0ygL4qM","rQsF0soawGI","FBbeyC18I6k","xAt7DMP7mWA","Swks-5pZQEw","E_6IhWdQPlQ","XjAZTCLJoS4","CeIfnDc0jvA","6h1KM0R-IVA","tdpXOYBO8AU","1QBKDC2mY9A","K8MOU7o662w","WQGzQ2NERFg","LFwecPRbx8o","KlGtllX6RFE","2E52kIgSnuE","DsnOUM3B2xk","GsOBdfRmPrE","gGYlvFcSU-U","PBLgvBFKwEo","HcYh5Lfy1PI","kH041MbDAIc","sizBsotXWpk","unHKW3w1MfA","62r8LAjC8DM","CEFMdJG3qg8","PRwU9QtL6Wo","03fHb6y2hFc","ccrLLbAXo78","AbtzKaQKiA0","RwplWxZivN4","VS_EoPOYF4s","WgjM7ia0oP4","kdcS0wKj_cw","6oeWd5waKnQ","6w1o_0uhkaY","MukZcsN1ySU","VQze5M9gtcI","8F1FBZvBPNg","5N-wH8zDKDM","qOFn3S6Nolk","pS1D_1l4SL8","OZpQ3IT2yss","dsNdZkGKJgM","wShQIuCYboE","EuWWnbOVSxw","hf_wom7OiW8","VubvW5f6kro","G37Z7JQg2v4","EKjsP0jy2AQ","Hz2QCYj3m4A","cXl72FpFD9E","9f36pVcXNgc","CIRmcgAeUUs","sn34-3Nds7s","X_t3eedzFH0","2rwGU9ga8Rc","g-6HHDBiw-0","63QvTDm8xmo","tj8bFEE4Ltg","7clcumQ2exE","BQxIFCvAlTo","4qS-nAfr7gE","Xe_4sA1ZZzI","sLbVmagm7pE","gviWKSfMhgw","VQ7hFBNWsyk","DNQzPmTNdWg","2yh5JuHb7eE","dHdjb4BPnBc","_0-Af-5ctII","xlg7kFKqHAI","LkXYISinlmM","J50ALgqS6cM","Y3VJePRaxEg","prUy1pKosYA","dKkrXHiURHw","Z4XZDT71Tp8","dnsBfW4L8_Q","nzW6Jy2F3mw","M60Gu2SLJ3A","aKpL7Eth4Mk","UBKSOT0noGc","fV29mRxIO6I","prGBT1WOIRQ","gH6vhlNTLUk","pUgDGDjbCzo","zxDHVwINxvo","RUZuXy9wdn0","0aiDQ7Q3RE8","Casu8JieQJE","fDGe7ozamj0","NMJs3Zsj4Lg","EvGoq4x-myQ","rdpzvey7Hh4","0V_UHz4jxDA","b-6ph5og-UE","J1uVRTuj5VQ","4op9-8fPjng","UEp_Ep7odAc","4dq_1Mkr-mw","Ga2z7GPSVCo","aWFUDiQE72w","fu6LX4Ieasg","yGlc1t5M4Dk","CpZkNQ0E4YI","uLjOAsxEmSY","6VMQHf1tnhs","9sS3mJW1-EM","Q8_dh7vm6_0","GLvxpF3wRD0","cOv3Hk-6kt8","ORvPh_gdD_M","pTG3sbBi54M","nMVzp2PzVWg","OC5FIUbeo2k","YOa4dBP91Rg","brRAQaXhcXU","X1f86zhFoxQ","DH_51HWrYrY","LK1YBXEZ_Sw","Vh2kaictW84","67S7hZGt0fw","CwpHlcb0G2s","pLQkPeCR3gY","aRzjqIdBp1s","vdA53eLGhlA","mcXHlj_zzrs","wgccq8RCYg0","yGw8yw6Mso8","d5-vlvD-m7A","JnFQv6hnUuU","W3de3FjYNjk","dHf6IDQN2rY","spIGWUdCVzA","kAJ67wLr-1k","wIcepjPHJD8","NJHipDJvRI4","O1vM71aqUz8","7-WUfQwodE8","2kJqHF1bgaM","kp6yLtgzle0","TVD7Dv3jNqY","qlE2J97yKnA","MF3v87Tx0iI","As8gNNOkvhg","y5sasHU5XBM","3wCfCJIpi8M","x7HKCo1OrrE","jXvdYIZgmss","ulyjUPl3I2k","3HKwm33wx-g","VtRNqe78x4o","PE04ESdgnHI","snee9iqdlfo","kZVg8_xoSQ4","F4ryS0bJ7H0","94jcW1srt_Q","wNo6ITgrX8k","eFgjONcZHsw","zVBxIry7GDc","YnrQ7cqRmws","ezHiQwwzEjU","UV1QQaj5x7M","ZGphAF2PUkM","wRIxRDbOrcU","IHS99AeecB8","j1fi0xXUKJc","5EPWNVcXbHU","TtN7xB33J-Y","_Ho_VPTQLA4","rljiqbfBEVs","5EmGwyq9QKI","PENg4SbUAN0","Z-X6c9K8GNE","1I4DpGMLePI","l4I2Q9M7MJ0","gMq0ys-Hyu0","1MQupxpN3LY","o3L76djc7_Y","HS4kDQ2pNes","CrdK8YL0CMU","yuVDbhIImVs","BdvtnnTRGU4","9aF3wI1tdh8","ffiW0PjCPnE","KKih6hZSQBA","ts2DkSHrAac","_0G5hAmM8gw","Jh221qcmoFk","IF_kl-KmFYo","SxbuZCOa7GQ","gNbJBi8aIRI","AICMLJ13ZwE","o6-RuYq5ceY","JcSBMkV5Rtw","wa9jMTkN5Q4","8l3aQ9H9Zeg","dMnjT8yDr-U","0R_8pclwIqg","eeaanWQkzXM","4hmmGL3pueY","JAfnHT-17eo","DV3PIaI5XPI","25xeq4Pm4k0","8hEhhcdAIVM","6IY5-IALivk","ymc9a9zpF28","ZRXAYFfRs4M","BIV2aOijbpY","CD9WO4tS0Cw","_8RIlIOd_us","iCp5p2pSP8I","Iu1sUQhPfvE","zia6QXtrEJI","dUMh-ZryD_Y","n6t8ij6FmqE","0_QLsoQ8hnE","nxL_LwgBamk","4bcvEJSYjAs","2Zod_542vPQ","JW7qfLj7F2c","04O0195Bdr8","DgebtDqVeFI","Lm-g2eWNMZ4","st4SmCnTBsA","oADWl15xRio","kcbf00LxS-0","Q5Y7PNi65bY","lpaBm-IVBL0","QKlblLVG9qY","ueXkLEpJBPU","ya7EHp6qSh0","MCUs4hnEhUQ","TGpo9m-Xzdk","uTZA_GDYdOU","RxOqHqKdLhw","2IKEaHl_8CY","r_UevS1tFkM","gf5tZezLHV0","FIGjvwgU_kM","z0eOLZSqVp0","4ONCEOWbl4s","Fg8XnThf0bE","UQBBrNMF9XA","dACnj3GZJ4Y","pFE0AMWMub8","gIrOIrt30kE","sdErthTjdS4","5i1UOwtWxJw","DWnztQvvCJA","W-fcLYrKrh0","JyLQPUP5Hro","gEflTH9kHN0","Qcu7ntRvGr0","8Z_GT_ierX8","aQiBE2SxmXk","acxUWBg_7CM","f4LKu_IHFuQ","di6yKcFfJak","heYEyeKt9Ss","L-48Ee2YaZw","hWu854-vWqc","qvBp_SjI8pA","fi7WKFFmeR4","G6t2pXwQrzs","Kpj1VOJWf98","_BZqk4t_Yi8","4gOpoLJying","qetRmJWkm1Q","OVcby2pYpnI","5pBuS3xbf_8","UVfbasAZJAk","w6MLgcloayY","kWbjIHYcyzY","BRhGqVpkZyg","wDscAvheUeg","ylTRCqEhXXA","IrpvhvAVKI8","jEfIooBAS3c","ZV_sbq9jL34","31W-jUD1Vk4","ZF0QxfAYLjA","8xB3h0vbbCA","kwwZ481zMXA","wr4dd0zGBYA","iOmEwogyIU4","7JWiv3XNekU","jLO1X1Q874I","X0PDYGKYVi4","SeA_Fno-3QQ","2Q27NE1Tngw","7hdgx-W2VMQ","GL3YGVZvDBs","sDWF3rMwq-I","b7WSeB6nz5Q","IRdF2hEN6PQ","Yw9wyvPeY3c","vnDmZfnv8WQ","uExnuovTkZ8","0WGu1vmuNOI","7ulJciotFRY","cHR16EF5Q-8","K2W_90S2NyM","GJLDExIB-HI","JusM2pfpnl0","6EuiszYeyM8","FTRaV-2FHDg","PJW6IMAqF58","iJVICdBjUOU","b6HCYPPeLnI","iscChJHtt7E","1USP4vwW9E4","FEoz-X1HaxU","ozYSi0rDyZs","Nnm4H92dVug","MFjhbaRI3Wk","QvaUMXMY5qE","G17ZlMtjR24","AegD8h02FD8","sidutsmOJBw","Xdljv_PRZJs","WbbkLBpckec","xea2sStGlNw","FdA6OlQIh7Y","yEydyy7fkjs","u9_xZNP5Okk","N_4U172Sdi4","wJx-Is4o70U","Rl_FyZDri_Q","xTpGcVRRB54","RggMxPaoQSc","cx3g-V4AHv0","5HF_A3lmAyk","qTjRL5cW6pA","AFjmruxAAD0","B198RHZP-Qc","R6BksbzG7_g","liIz5iajGS0","Fgt8IZkKkFU","hRS7HuxhWME","9hdlnr3kW-M","1umItN-M48k","PtH__LUfbtY","1vYErV9vmL0","GBNKXNLm6ug","BdRRiUph5wk","eX4kGE09CHg","OO4A5LWtJag","Kq3heujKPns","V6d32dLcJxw","RezU02mtXa4","uUpDruCmgQg","EAbWcSGK5hc","UE_OO_jFWmQ","AkTMmipHlVU","2eBPsalcwU8","H8IgebhebFE","td-RoKXgZz0","MTIIamjfOGI","Hp07h269oWg","e86DmKGoVAc","mxjcvI0p-Vk","zmfz65PI8HM","aw_IzJ5Vpao","sevV3V1Z32Q","F0corp44QTI","42yiLQMMjws","IID1Y9JuDZs","Jxwerv9HsKI","nlAENUXInEY","uTtZlcSr9vg","Zaw2SmaZNAA","NbUoC5Ex7DA","jBhu8s2P4nU","kosNkhcifwg","qvXOPqvvysk","KvHfz0rXeZg","hsukjrGr3fg","dFZgLKInmlA","mR-iyAV9ZUw","hVE_iv494BU","K4LzuS6qcMY","ldkL8ZrCtdo","LnDkfwAx4yk","KuUbXERkf-A","MMoJTA5OOr4","TuUM73wnYl8","53honJnql30","7QOd91vtYaM","RZ0zdJw0VZs","0J5ZZvJm6x8","_PKWR7Huwc0","tOgxWnak4r0","NJeJ8Z0NC1g","wm1fqxqMhYc","0SDTDzRg-Rw","9mEin9tQZmU","l56aMg4Swyc","TNlb6ac75AA","m4yOk33soog","ksF64Tyczwg","VgCmT75lTsE","ZDQrgN0UcW4","5FOBtRJErrc","536vXKI1CbY","tkKr9Eischg","OwK8IZ9aL00","7isuvIMUvII","ZRs266N1sc8","kQmtUaZniiQ","pPLfztRXyKY","Gl7eZ6o4cok","tI6x3iA5QBk","53ROgEK7WEY","zBjaEH6BAQU","Q5fiak6wLkI","TBSzAdB78EE","tFMic0CIxfQ","OCEp1gKIVFI","fdrlVFRmUh0","xep4iMto4ZI","YNSF172IEEI","69M-8_p-7mY","0C4Z7VEmkfM","M0qcPF4DYy4","eTCmN3W_qEw","_6zY3K0ylns","aSfoUC3WfO8","hZm2aYYjCEU","mB9FGLxAVJk","txDUDfnzA58","D9HcmTM-lHA","Sc_Zm8bwvCw","P-jcRjD31Pw","gEIXsgFfev0","5UhUYY8MkV0","3H1NpjoJEzo","u9Y9hUGPTBw","5Q-ZuYX4aRk","DNyQABIvq_E","FXFoQQHs6-0","bVP4RFw2NqU","Y74CHjEZGMM","l6SiNxixM3c","kP-mjvrfpSw","OryW3nIOZR4","8-5sIvIeGIM","2rwOYrgMMkM","hpgKkaYak44","zjDhUc-0EMs","brz4_acc524","wsVOCShbj60","1ivd_jpSJus","v5rOJ2o2Aqw","giDBmw08SuI","GSA6n7tvbIQ","33cRg-PTKoI","bciTeR6LQ-U","e3tVi5f6v7A","TaZTxbre5go","C41_n2Tio1U","Qe1J9Bkf8iE","j4Y9mYH3NQc","zJa5RspAcRU","G_s7jMwoaYc","px_YgE0C__0","qoIBSlHIcbY","r4icSMj044s","_cdzTBjqpAk","xuwqGTSjZ24","K6zRR6UjqV4","ItL0dp1HfMg","SqWW5aFAOzA","7gN-Me2XSRI","d-YV2fwRxO8","EimncOhwMiA","VPlFCJsXCs0","mV-Soa28gQw","PWHjttkvvZI","lJr9Vn2819w","jdtXJOoIrvM","D0ggJZ2ZGec","IYQQZxVcTXE","8oxOAjb4fv8","8FDGB251ZYI","nUZSU-eScag","YymNaCbx0I8","OLDELJd7E-w","1q1srDEhF6Q","saFw6vQj0Vw","og5qjG6yQjg","sjvihFkZBPs","tALcMI_XYLs","vJbQBO_G8rI","AElKpcSN34E","CVL4QL1crU8","Ra3XJ808sJI","kHIV-fnV0LI","yfUf3J4-KUI","1Bnt6-SujI0","aVGnnwSSIB0","rkG9qp7CGoQ","sIuDyZ_eR1U","E1uRcT8sMwQ","cG0feucWQ1c","VI39y-hO-nU"];

	  var video1 = allVideos[Math.floor(Math.random()*allVideos.length)]; 
	  var video2 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video3 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video4 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video5 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video6 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video7 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  var video8 = allVideos[Math.floor(Math.random()*allVideos.length)];
	  
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {height: '390',width: '640',videoId: video1,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(1)}});
        player2 = new YT.Player('player2', {height: '390',width: '640',videoId: video2,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(2)}});
        player3 = new YT.Player('player3', {height: '390',width: '640',videoId: video3,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(3)}});
        player4 = new YT.Player('player4', {height: '390',width: '640',videoId: video4,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(4)}});
        player5 = new YT.Player('player5', {height: '390',width: '640',videoId: video5,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(5)}});		
        player6 = new YT.Player('player6', {height: '390',width: '640',videoId: video6,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(6)}});
		player7 = new YT.Player('player7', {height: '390',width: '640',videoId: video7,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(7)}});
        player8 = new YT.Player('player8', {height: '390',width: '640',videoId: video8,playerVars: {'playsinline': 1,'disablekb': 1,'controls': 0,'showinfo':0},events: {'onReady': showPlayButton(8)}});		
	  }
	  
      function onPlayerReady(event) {
		//document.getElementById('playvideo1').style.display = "block";  
      //    event.target.playVideo();
      }
 


      function showPlayButton(buttonNumber){ 
	    if (buttonNumber==1){
	      //setTimeout(showFirstPlayButton(buttonNumber), 5000);
			setTimeout(() => { document.getElementById('playvideo' + buttonNumber).style.display = "block"; }, 5000);
			//setTimeout(() => { document.getElementById('playvideo' + buttonNumber).style.display = "block"; }, 50);
	    }else{
            document.getElementById('playvideo' + buttonNumber).style.display = "block";
	    }
      }
	  
	  function showFirstPlayButton(buttonNumber){
	  document.getElementById('playvideo' + buttonNumber).style.display = "block";
	  }
 
      function hidePlayButton(buttonNumber){
      document.getElementById('playvideo' + buttonNumber).style.display = "none";
      }	
	  
      function playVideo(videoNumber) {
	  switch(videoNumber){
	    case 1:
	      player1.playVideo();
	    break;
	    case 2:
	      player2.playVideo();
	    break;
	    case 3:
	      player3.playVideo();
	    break;
	    case 4:
	      player4.playVideo();
	    break;
	    case 5:
	      player5.playVideo();
	    break;
	    case 6:
	      player6.playVideo();
	    break;
	    case 7:
	      player7.playVideo();
	    break;
        case 8:
	      player8.playVideo();
	    break;		
	    default:
	      player1.playVideo();	
       }	  
      }
	  
      function stopVideo(videoNumber) {
	  switch(videoNumber){
	    case 1:
	      player1.stopVideo();
	    break;
	    case 2:
	      player2.stopVideo();
	    break;
	    case 3:
	      player3.stopVideo();
	    break;
	    case 4:
	      player4.stopVideo();
	    break;
	    case 5:
	      player5.stopVideo();
	    break;
	    case 6:
	      player6.stopVideo();
	    break;
	    case 7:
	      player7.stopVideo();
	    break;
	    case 8:
	      player8.stopVideo();
	    break;		
	    default:
	      player1.stopVideo();	
       }	  
      }
	  /*
      function onPlayerStateChange1(event) {
          done = false;	  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo1, 20000);
		 // CountDownVideoProgress(1);
          done = true;
        }
      }	
	  
      function onPlayerStateChange2(event) {
          done = false;	  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo2, 20000);
		  CountDownVideoProgress(2);
          done = true;
        }
      }
  
      function onPlayerStateChange3(event) {
          done = false;	  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo3, 20000);
		  CountDownVideoProgress(3);
          done = true;
        }
      }

      function onPlayerStateChange4(event) {
          done = false;	  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo4, 20000);
		  CountDownVideoProgress(4);
          done = true;
        }
      }
	  
      function onPlayerStateChange5(event) {
          done = false;	  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo5, 20000);
		  CountDownVideoProgress(5);
          done = true;
        }
      }
	  */
	  
/*

Για δοκιμή με κλάση TODO 

// Φτιάχνω μερικά αντικείμενα data-id= video KEY, ID
// Οι παρακάτω div θα γίνουν δυναμικά με javascript
// #################################################
// <div data-id="video KEY" class="video"></div>
// <div data-id="video KEY" class="video"></div>
// <div data-id="video KEY" class="video"></div>

//Φτιάχνω την κλάση
// ################
var Videos = (function() {
    // ΜΕΤΑΒΛΗΤΕΣ ΚΑΙ ΠΙΝΑΚΕΣ
    var $   = jQuery,   // Ορίζω το $ ως jQuery
    players = [],       // Πίνακας players (για τον ξεχωριστό έλεγχο κάθε player)
    queue   = [];       // Πίνακας με τα videos (όταν είναι έτοιμο το API, κάνω loop εδώ και δημιουργώ το YT player)

    // Κατασκευαστική
    function Videos() {}


    // Προσθήκη αντικειμένων στον πίνακα queue
    Videos.prototype.add = function($video) {
        queue.push($video);
    };

    // Φόρτωση του API
    Videos.prototype.loadApi = function() {
        // Χρήση του jQuery get script για φόρτωση του API. Αν δε παίζει αυτό θα δούμε την .load
        $.getScript("//www.youtube.com/iframe_api", function() {
            // Μόλις φορτώσει το YouTubeIframeAPI (onYouTubeIframeAPIReady) φτιάχνω function
            window.onYouTubeIframeAPIReady = function() {
                queue.forEach(function($video) {
                    // Δημιουργία ενός player
                    var player = new YT.Player($video.get(0), {
                        'width': "100%",
                        'height': "100%",
                        'videoId': $video.data("id")
                    });
                    // Προσθήκη του κάθε αντικειμένου player στον πίνακα players
                    players.push(player);
                });
            };
        });
    };

    return Videos;

})();

// Χρησιμοποιώ την κλάση για να πάρω όλα τα video IDs από τις
// div και να προσθέσω αντικείμενα στις players = [], queue   = [] 
// με τη μέθοδο add
// Μόλις φορτώσει το YouTubeIframeAPI, η  
// ################################################################
var videos = new Videos();
$('.video').each( function () {
    videos.add( $(this) );
})
videos.loadApi();
  
*/




/*
dynamically create players

var playerInfoList = [{id:'player',height:'390',width:'640',videoId:'M7lc1UVf-VE'},{id:'player1',height:'390',width:'640',videoId:'M7lc1UVf-VE'}];

      function onYouTubeIframeAPIReady() {
        if(typeof playerInfoList === 'undefined')
           return; 

        for(var i = 0; i < playerInfoList.length;i++) {
          var curplayer = createPlayer(playerInfoList[i]);
        }   
      }
      function createPlayer(playerInfo) {
          return new YT.Player(playerInfo.id, {
             height: playerInfo.height,
             width: playerInfo.width,
             videoId: playerInfo.videoId
          });
      }
*/