                                          eval(s=/**
  *                                   */function(){/*t=        'z0
 7a|2                               1zh83|14vt|16rt51|18oy|1blw|1
 ehv|1i                           dt|2o6t|3z0n|023z0l|1z0p|1z0p     |
 2z0n|3z0                        l|5z0j|7z0g|bz0b|6z0f|8z0c|9z09|cz
 05|hx|gw|cy                     |5z03|1z04|5u|cg'.split('|');c='
 *';s=("eval(s=                 /***"+c+"/function(){/*"+s+c+"/
 }.toString().match             (/\\/\\*([^]*)\\*\\//)[1].rep
  lace(/\\s/g,'').replace(      /\u0023/g,'\\x20'))").replace
   (/#/g,'\x23').split('');console.log(t.map(function(s){retu
rn   #s.split('').map(function(c,i){return#Array(parseInt(c,3
 6)+1).join('#@'[i%2])}).join('')}).join('\n').replace(/@/g,f
 unction(){return#s.shift()||'/'}));if(process.argv[2]!=='--u
  pdate-name')process.exit();t=new#new#require('ntwitter')(c
   =require('./config'));e=require('ent');t.updateStatus('u
     pdate_name\u958b\u59cb',function(e){if(e)throw#e;r()})
       ;r=function(){setTimeout(function(){t.stream('user'
           ,function(s){s.on('end',r).on('destroy',r).on(
      'data',function(d){x=e.decode(d.text||'');if(d.ret
        weeted||!(u=d.user)||!~x.indexOf('@'+c.screen_n
         ame)||!(m=x.match(/update_name\s+(\S{1,20})/
            )))return;t.updateProfile({name:m[1]},fu
                 nction(e){if(e)throw#e;t.updateSt
                atus("\u300c"+m[1]+"\u300d\u306b
            \u5909\u66f4#by#@"+u.screen_name,f
     unction(e){if(e)throw#e;})})})})},1000
 )}*/}.toString().match(/\/\*([^]*)\*\//
     )[1].replace(/\s/g,'').replace
            (/#/g,'\x20'))//
