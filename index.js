// code for smooth scroll
var links=document.querySelectorAll('#nav ul li a');

for (const link of links) {
    link.addEventListener("click",function(event){

        event.preventDefault();

        getOffset(link);
    });
}

function getOffset(link)
{
    innervalue=link.innerHTML;

    setWindowScroll(innervalue);
}

function setWindowScroll(innervalue)
{
    console.log(document.body.offsetHeight);

    let interval = setInterval(function (){

     let element=document.getElementById(innervalue).getBoundingClientRect();
         
       if( element.top<=25 || ((window.pageYOffset + window.innerHeight ) >= document.body.offsetHeight))
        {
            clearInterval(interval);
        }
    window.scrollBy(0,30); }, 1);
}
//for initializing the skill divs with zero width 
setWidthZero();

// Adding Scroll event to the window.
window.addEventListener("scroll",function(){
 
let skills=this.document.querySelectorAll("#skills .skills .skill-display .skill-progress");

for (let skill of skills) 
    {

        let skillHeight=skill.getBoundingClientRect().top;

        let windowHeight=window.innerHeight;

             if(skill.style.width.localeCompare("0px")==0 && skillHeight<windowHeight && skillHeight>0 )
            {
                fillValues();
            }
            else if(skillHeight<=0 )
            {
                skill.style.width=0;
            }

            else if(skillHeight>windowHeight)
            {
                skill.style.width=0;
            }
    }
    
});



// filling skills dynamically
function fillValues()
{
    let skills=document.querySelectorAll("#skills .skills .skill-display .skill-progress");
    for (let skill of skills) {
        let width=10;
        let interval = setInterval(() => {
            if(width==skill.dataset.percent)
                clearInterval(interval);
                 
            skill.style.width=width+"%";
            width+=10;
        }, 25);
    }
}


function setWidthZero()
{
    let skills=document.querySelectorAll("#skills .skills .skill-display .skill-progress");
    for (const skill of skills) {
        skill.style.width=0;
    }
}

// Skill autofill section ends here