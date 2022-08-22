var type = getCookie('Vorlage1');
var wahl = document.getElementById('wahl');
wahl.innerHTML ='<select onchange="changeskin(this.options[this.selectedIndex].value);window.location.reload();"><option>Wähle einen Style</option><option value="wert1"> Original </option><option value="wert2"> NebelClan </option><option value="wert3"> DonnerClan </option><option value="wert4"> FlussClan </option><option value="wert5"> SchattenClan </option><option value="wert6"> WindClan </option><option value="wert7"> WolkenClan </option></select>';
        
switch(type) {
    case 'wert1':
        document.write('<link rel="stylesheet" type="text/css" href="styles/original.css">');
        break;
    case 'wert2':
        document.write('<link rel="stylesheet" type="text/css" href="styles/nebelclan.css">'); 
       break; 
    case 'wert3':
        document.write('<link rel="stylesheet" type="text/css" href="styles/donnerclan.css">');
        break;    
    case 'wert4':
        document.write('<link rel="stylesheet" type="text/css" href="styles/flussclan.css">');
        break;
    case 'wert5':
        document.write('<link rel="stylesheet" type="text/css" href="styles/schattenclan.css">');
        break;
    case 'wert6': 
        document.write('<link rel="stylesheet" type="text/css" href="styles/windclan.css">');
        break;
    case 'wert7':
        document.write('<link rel="stylesheet" type="text/css" href="styles/wolkenclan.css">');
        break;
    default:
        document.write('<link rel="stylesheet" type="text/css" href="styles/original.css">');
}

function changeskin(change) {
    var scheme = change;
    var name = 'Vorlage1';
    var pathname = location.pathname;
    //var myDomain = pathname.substring(0,pathname.lastIndexOf('/')) +'/';
    var ExpDate = new Date ();
    ExpDate.setTime(ExpDate.getTime() + (180 * 24 * 3600 * 1000));
    setCookie(name,scheme,ExpDate,'/');
}

function getCookie(name){
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return unescape(dc.substring(begin, end));
        }
    }
    return null;
}

function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
    ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    ((secure == null) ? "" : "; secure");
}