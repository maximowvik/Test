var data=[{"title":"YouTube","url":"https://youtube.com/","img":"images/Youtube.jpg", "removeed":"true"},
{"title":"Yandex","url":"https://yandex.ru","img":"./images/yan.jpg",  "removeed":"false"},
{"title":"VK","url":"https://m.vk.com","img":"./images/Vk.jpg",  "removeed":"false"},
{"title":"Facebook","url":"https://www.facebook.com","img":"./images/Facebook.jpg",  "removeed":"true"},
{"title":"Google","url":"https://google.com","img":"./images/Google.jpg","removeed":"false"}
];

var enabledremove=0, enabledremove1=0;
var setanab=false;
var faltru='';
let updow=0;
$(document).ready(function(){
for(var i=0; i<data.length; i++){
  var d = document.createElement('div');
  var title=data[i]["title"];
  d.className='block';
  var imag=data[i]["img"];
  d.style.backgroundSize="100%";
  d.style.backgroundPosition="0";
  d.setAttribute("id",data[i]["title"]);
  if (data[i]['removeed']=="true") {
    d.innerHTML='<h1 class="close" onclick="textMsg('+'\''+title+'\''+')">x</h1><img src="'+imag+'" onclick="updown('+'\''+title+'\''+')"><div id="text">'+text(title)+'</div>';
  } else {
    d.innerHTML='<img src="'+imag+'" onclick="updown('+'\''+title+'\''+')"><div id="text">'+text(title)+'</div>';;
  }
  document.body.appendChild(d);
  $("#"+title+" #text").slideUp(0);
}

console.log("Yes return null");
  $("#menu").click(function(){
    document.getElementById("menulist").style.visibility="visible";
    $("body").css("overflow-y","hidden");
    $("#settings").css("scroll","absolute");
  });
  
  $("#closeset").click(function(){
    document.getElementById("menulist").style.visibility="hidden";
    $("body").css("overflow-y","visible");
  });
  
  $("#enabledrem").click(function(){
    if (enabledremove==0) {
      enabledremove++;
      this.style.background="white";
      setanab=true;
      deletel(setanab);
    } else {
      enabledremove--;
      this.style.background="teal";
      setanab=false;
      deletel(setanab);
    }
  })
  
  $("#enabledrem1").click(function(){
    if (enabledremove1==0) {
      enabledremove1++;
      this.style.background="white";
      $('body').css("background-image","url(images/fonnight.jpg)");
      $(".block #text").css("background","rgba(255,255,255,.9)");
      $("#msg").css("background","silver").css("color","orange");
      $("#settings").css("background","silver");
      $(".p").css("color","orange");
    } else {
      enabledremove1--;
      this.style.background="teal";
      $('body').css("background-image","url(images/fon.jpg)");
      $(".block #text").css("background","rgba(0,0,0,.5)");
      $(".p").css("color","tan");
      $("#msg").css("background","white").css("color","tan");
      $("#settings").css("background","white");
    }
  })
  
  
  function deletel(yes){
    if (yes==true) {
      $('.close').css("visibility","visible");
    } else {
        $('.close').css("visibility","hidden");
    }
  }
  
  function text(txt){
    $.ajax({
          url: 'history/file1.txt',
          success: function(data) {
             console.log(data); // Выведет содержимое файла в консоль
             return data;
          }
    });
    return data;
  }
  
});


function updown(ggg){
  if($("#"+ggg+" #text").is(":hidden")){
    $("#"+ggg+" #text").slideDown(200);
  }else{
    $("#"+ggg+" #text").slideUp(200);
  }
 };
  
function textMsg(msg) {
  document.getElementById('text').innerHTML="<h3>Удаление ссылки: <br>"+msg+"</h3>";
  document.getElementById('removemsg').style.display = 'block';
  $("body").css("overflow-y","hidden");
};

function closeMsg() {
  document.getElementById('removemsg').style.display = 'none';
  $("body").css("overflow-y","visible");
};

/*function fileready(){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", '/history/');
  xhr.setRequestHeader('Content-Type', 'text/txt');
  xhr.responseType = 'txt';
  
  xhr.send();
  
  xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }

};

xhr.onerror = function() {
  console.log("Запрос не удался");
};
}*/

//fileready();