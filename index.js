const p=document.getElementById('p')
const r=document.getElementById('r')
const s=document.getElementById('s')
const pa=document.getElementById('pa')
const us=document.getElementById('us')
const ps=document.getElementById('ps')
const cp=document.getElementById('cp')
var a=0;
var b=0;


var usa=()=>{
    ++a;
    us.innerHTML=`${a}`
}
var psa=()=>{
    ++b;
    ps.innerHTML=`${b}`
}
p.addEventListener('click',()=>{
    var user='p';
    var com=['r','p','s']
    var num=Math.round(Math.random()*2)
    var sum=user+com[num];
    if(num==0){
        cp.src='Rock.png'
    }
    else if(num==1)
        {
            cp.src='Paper.png'
        }
    else if(num==2)
        {
            cp.src='Scissors.png'
        }
    
    if(sum=='pp')
        {
            pa.innerHTML='DRAW!!!!'
        }
    else if(sum=='pr')
        {
            pa.innerHTML='You Won'
            usa();
        }
        else if(sum=='ps')
            {
                pa.innerHTML='You Lose'
                psa();
            }
})
//.............................
r.addEventListener('click',()=>{
    var user='r';
    var com=['r','p','s']
    var num=Math.round(Math.random()*2)
    var sum=user+com[num];
    if(num==0){
        cp.src='Rock.png'
    }
    else if(num==1)
        {
            cp.src='Paper.png'
        }
    else if(num==2)
        {
            cp.src='Scissors.png'
        }
    
    if(sum=='rr')
        {
            pa.innerHTML='DRAW!!!!'
        }
    else if(sum=='rs')
        {
            pa.innerHTML='You Won'
            usa();
        }
        else if(sum=='rp')
            {
                pa.innerHTML='You Lose'
                psa();
            }
})
//..............................................
s.addEventListener('click',()=>{
    var user='s';
    var com=['r','p','s']
    var num=Math.round(Math.random()*2)
    var sum=user+com[num];
    if(num==0){
        cp.src='Rock.png'
    }
    else if(num==1)
        {
            cp.src='Paper.png'
        }
    else if(num==2)
        {
            cp.src='Scissors.png'
        }
    
    if(sum=='ss')
        {
            pa.innerHTML='DRAW!!!!'
        }
    else if(sum=='sp')
        {
            pa.innerHTML='You Won'
            usa();
        }
        else if(sum=='sr')
            {
                pa.innerHTML='You Lose'
                psa();
            }
})

var cimg=()=>{
    if(num==0){
        cp.src='Rock.png'
    }
    else if(num==1)
        {
            cp.src='Paper.png'
        }
    else if(num==2)
        {
            cp.src='Scissors.png'
        }
}
