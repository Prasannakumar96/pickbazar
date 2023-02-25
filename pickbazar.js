const rclick=document.getElementById("next");
const lclick=document.getElementById("prev");
const art=document.getElementsByClassName("scard");
const imgh=document.getElementById("second");
let imageWidth = 0;
rclick.addEventListener("click",()=>
{
    
        imgh.style.transform = `translateX(${-67}%)`;
        imgh.style.transition="1s";
        lclick.style.display="block";
        rclick.style.display="none";
    });
 lclick.addEventListener("click",()=>
 {
    imgh.style.transform = `translateX(${0}%)`;
    imgh.style.transition="1s";
    lclick.style.display="none";
    rclick.style.display="block";
 })   


var url=` https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish
`;
fetch(url)
.then(response=>response.json())
.then(data=>{
        data.data.map((e)=>{
            const newHtml=`
            <article class="card">
            <img class="cardimg" src=${e.image.thumbnail} />
            <div class="itemcost">$${e.price}</div>
            <div class="itemname">${e.name}</div>
            <div class="bdiv"><button onclick="sub()" class="minb">-</button><button onclick="add()" class="addb">ADD</button><button onclick="add()" class="plusb">+</button></div>
            </article>
            `
            const newDiv=document.getElementById("items");
            newDiv.innerHTML+=newHtml;
            console.log(e);
        })
    })




// function add()
// {
//     var value=parseInt(document.getElementById("count").value);
//     value=isNaN(value) ? 0 : value;
//     if(value<50){
//         value++;
//         document.getElementById("count").value = value;
//         document.getElementById("count").innerHTML=value;var b=document.getElementsByClassName("addb");
//         for (i=0;i<b.length;i++)
//         {
//             b[i].innerHTML=value;
//         }
//         var a=document.getElementsByClassName("minb")
//         for(i=0;i<a.length;i++)
//         {
//             a[i].style.display="block";
//         }
//     }
// }
// function sub()
// {
//     var value=parseInt(document.getElementById("count").value);
//     value=isNaN(value)? 0: value;
//     if(value>0)
//     {
//         value--;
//         document.getElementById("count").value = value;
//         document.getElementById("count").innerHTML=value;
//         var b=document.getElementsByClassName("addb");
//         for (i=0;i<b.length;i++)
//         {
//             b[i].innerHTML=value;
//         }
       
//     }
//     if(value==0)
//     {
        
//         var b=document.getElementsByClassName("addb");
//         for (i=0;i<b.length;i++)
//         {
//             b[i].innerHTML="ADD";
//         }
//         var a=document.getElementsByClassName("minb")
//         for(i=0;i<a.length;i++)
//         {
//             a[i].style.display="none";
//         }
//     }
// }

