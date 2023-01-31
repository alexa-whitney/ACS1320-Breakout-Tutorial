(()=>{"use strict";const t=class{constructor(t=0,i=0,s=100,e=100,h="#f00"){this.x=t,this.y=i,this.width=s,this.height=e,this.color=h}moveTo(t,i){this.x=t,this.y=i}moveBy(t,i){this.x+=t,this.y+=i}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},i=class extends t{constructor(t,i,s=55,e=20,h="#0095DD"){super(t,i,s,e,h),this.status=!0}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle="#35fc03",t.fill(),t.closePath()}},s=class extends t{constructor(t,i,s,e,h="#03fcf8",r="16px Arial"){super(t,i,0,0,h),this.text=s,this.color=h,this.value=e,this.font=r}render(t){t.font=this.font,t.fillStyle=this.color,t.textAlign=this.align,t.fillText(`${this.text}${this.value}`,this.x,this.y)}},e=document.getElementById("myCanvas"),h=e.getContext("2d"),r=e.width/2,o=e.height-30;let c=(e.width-75)/2;const l=new class extends t{constructor(t,i=0,s=0,e=10){super(i,s,0,0,t),this.color=t,this.radius=e,this.dx=2,this.dy=-2}moveTo(){this.x+=this.dx,this.y+=this.dy}randColor(){this.color=`#${(Math.floor(16777216*Math.random())+16777216).toString(16).substring(1)}`}render(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}}("pink",r,o),n=new class extends t{constructor(t,i,s=75,e=10,h="#fc03b6"){super(t,i,s,e,h)}moveTo(t){this.x+=t}moveBy(t){this.x=t}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}}(c,e.height-10),d=new s(8,20,"Score: ",0),a=new s(e.width-65,20,"Lives: ",3),f=new class extends t{constructor(t,i,s,e,h="#f59a1b"){super(t,i,s,e,h)}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}}(0,0,e.width,e.height),x=new class{constructor(t=4,i=6){this.rows=t,this.cols=i,this.bricks=[],this.brickWidth=65,this.brickHeight=20,this.brickPadding=10,this.brickOffset=25,this.setup()}setup(){for(let t=0;t<this.cols;t+=1){this.bricks[t]=[];for(let s=0;s<this.rows;s+=1){const e=t*(this.brickWidth+this.brickPadding)+this.brickOffset,h=s*(this.brickHeight+this.brickPadding)+this.brickOffset;this.bricks[t][s]=new i(e,h)}}}render(t){for(let i=0;i<this.cols;i+=1)for(let s=0;s<this.rows;s+=1){const e=this.bricks[i][s];!0===this.bricks[i][s].status&&e.render(t)}}};let y=!1,u=!1;const{addEventListener:w}=document;w("keydown",(function({key:t}){"Right"===t||"ArrowRight"===t?y=!0:"Left"!==t&&"ArrowLeft"!==t||(u=!0)}),!1),w("keyup",(function({key:t}){"Right"===t||"ArrowRight"===t?y=!1:"Left"!==t&&"ArrowLeft"!==t||(u=!1)}),!1),w("mousemove",(function({clientX:t}){const i=t-e.offsetLeft;i>0&&i<e.width&&n.moveBy(i-37.5)}),!1),function t(){h.clearRect(0,0,e.width,e.height),f.render(h),x.render(h),l.render(h),l.moveTo(),n.render(h),d.render(h),a.render(h),function(){for(let t=0;t<x.cols;t+=1)for(let i=0;i<x.rows;i+=1){const s=x.bricks[t][i];!0===s.status&&l.x>s.x&&l.x<s.x+x.brickWidth&&l.y>s.y&&l.y<s.y+x.brickHeight&&(l.dy=-l.dy,s.status=0,d.value+=1,l.randColor(),28===d.value&&(alert("YOU WIN, CONGRATULATIONS!"),document.location.reload()))}}(),(l.x+l.dx>e.width-10||l.x+l.dx<10)&&(l.dx=-l.dx,l.randColor()),l.y+l.dy<10?l.dy=-l.dy:l.y+l.dy>e.height-10&&(l.x>n.x&&l.x<n.x+n.width?(l.dy=-l.dy,l.randColor()):(a.value-=1,a.value?(l.x=e.width/2,l.y=e.height-30,l.dx=2,l.dy=-2,c=(e.width-n.width)/2):(alert("GAME OVER"),document.location.reload()))),y&&n.x<e.width-75?n.moveTo(7):u&&n.x>0&&n.moveTo(-7),requestAnimationFrame(t)}()})();