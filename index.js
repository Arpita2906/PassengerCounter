let count=0;
function increment()
{
    count=count+1;
    document.getElementById("count-el").innerHTML=count;
}

function save()
{
    let str=document.getElementById("entries");
    console.log(str)
    let str1 = count + "-";
    str.innerHTML+=str1
    count=0;
    document.getElementById("count-el").innerHTML=0;
}