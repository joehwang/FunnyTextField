javascript:void(function()
{
  var _type,_n=50,_minW=3,_maxW=10,_corpus='nextmedia',_script;
  window._moreText=function(data){  
    ftx = document.getElementsByTagName("input");                
      for (var index = 0; index < ftx.length; index++){
      if (ftx[index].type == 'text'){
        ftx[index].value =data.sentences[index];
      }
      if (ftx[index].type == 'textarea'){
        ftx[index].text =data.sentences[index];
      }

    }  
  };
    var _limit=_minW+','+_maxW
    _script=document.createElement('script');
    _script.src='http://more.handlino.com/sentences.json?_='+Date.now()+'&callback=_moreText&n='+_n+'&limit='+_limit+'&corpus='+_corpus;
    document.body.appendChild(_script);
}());
