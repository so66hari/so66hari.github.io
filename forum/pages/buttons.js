function changeStyle(input) {
    const background = document.body;
    const bodyline = document.getElementById('bodyline');
    const header = document.getElementById('i_logo');
    const test = document.getElementById('test');
    const tables = document.querySelectorAll('table');
    const tableHead = document.querySelectorAll('th');
    const titles = document.querySelectorAll('h2');
    const text = document.querySelectorAll('td');
    const link = document.querySelectorAll('a');

    switch (input) {
        case 0:
            background.style = "background: url('https://2img.net/s/t/21/75/98/i_background.jpg'), #888888";
            bodyline.stlye = "box-shadow: 0px 0px 10px #000000; background: linear-gradient(to bottom, black, #444444); -webkit-box-shadow: 0px 0px 10px #000000; opacity: 0.8;";
            header.style = "content: url('https://cdn.discordapp.com/attachments/427137355976146951/1004510858128404560/header.png')";
            for(let i = 0; i < tables.length; i++) {tables[i].className = "nctable";}
            for(let i = 0; i < tableHead.length; i++) {tableHead[i].className = "ncth";}
            for(let i = 0; i < titles.length; i++) {titles[i].className = "nch2";}
            for(let i = 0; i < text.length; i++) {text[i].className = "nctd";}
            for(let i = 0; i < link.length; i++) {link[i].className = "nca";}
            break;

        case 1:
            background.style = "background: url('https://i43.servimg.com/u/f43/19/81/66/84/windcl10.jpg'), #759cc5;";
            bodyline.stlye = "box-shadow: 0px 0px 10px #cccccc; background: linear-gradient(to right, #b78d67, #4b699b); -webkit-box-shadow: 0px 0px 10px #cccccc; border-top-left-radius: 300px 50px; border-top-right-radius: 300px 50px;";
            header.style = "content: url('https://cdn.discordapp.com/attachments/427137355976146951/1004858072776314880/windclanhd.png');";
            test.style = "margin: 5px 0; border-collapse: collapse; background-color: transparent; border: 1px solid transparent; border-image: linear-gradient(to right, #b78d67, #4b699b); border-image-slice: 1;";
            for(let i = 0; i < tables.length; i++) {tables[i].classList.add("wctable");}
            for(let i = 0; i < tableHead.length; i++) {tableHead[i].classList.add("wcth");}
            for(let i = 0; i < titles.length; i++) {titles[i].className = "wch2";}
            for(let i = 0; i < text.length; i++) {text[i].className = "wctd";}
            for(let i = 0; i < link.length; i++) {link[i].className = "wca";}
            break;

        case 2:
            background.style = "background: url('https://i43.servimg.com/u/f43/19/81/66/84/schatt10.jpg'), #000000;";
            bodyline.stlye = "  box-shadow: 0px 0px 10px #46526a; background: linear-gradient(to bottom, #1d1f34, #000000); -webkit-box-shadow: 0px 0px 10px #46526a;";
            header.style = "content: url('https://cdn.discordapp.com/attachments/999805372074307614/1005277339669778493/head2.png');";
            for(let i = 0; i < tables.length; i++) {tables[i].className = "sctable";}
            for(let i = 0; i < tableHead.length; i++) {tableHead[i].className = "scth";}
            for(let i = 0; i < titles.length; i++) {titles[i].className = "sch2";}
            for(let i = 0; i < text.length; i++) {text[i].className = "sctd";}
            for(let i = 0; i < link.length; i++) {link[i].className = "sca";}
            break;   
         
        default:
            background.style = "background: url('https://2img.net/s/t/21/75/98/i_background.jpg'), #888888";
            bodyline.stlye = "box-shadow: 0px 0px 10px #000000; background: linear-gradient(to bottom, black, #444444); -webkit-box-shadow: 0px 0px 10px #000000; opacity: 0.8;";
            header.style = "content: url('https://cdn.discordapp.com/attachments/427137355976146951/1004510858128404560/header.png')";             
            for(let i = 0; i < tables.length; i++) {tables[i].className = "nctable";}
            for(let i = 0; i < tableHead.length; i++) {tableHead[i].className = "ncth";}
            for(let i = 0; i < titles.length; i++) {titles[i].className = "nch2";}
            for(let i = 0; i < text.length; i++) {text[i].className = "nctd";}
            for(let i = 0; i < link.length; i++) {link[i].className = "nca";}
    }
}