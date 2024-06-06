const bgSpace = document.getElementById("Space");
const bgSpace2 = document.getElementById("Space2");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });


function MoveBackground(e)
{

   let offsetX = (e.clientX / window.innerWidth * 150) - 150;
   let offsetY = (e.clientY / window.innerHeight * 0) - 0;
 

   bgSpace.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
   bgSpace2.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}

 