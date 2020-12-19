import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import LocomotiveScroll from 'locomotive-scroll';
import { preloadImages, preloadFonts } from './utils';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
if(window.location.href.split('/').pop()=="" || window.location.href.split('/').pop()=="index.html"){
    Promise.all([preloadImages('main')]).then(() => {


        gsap.to('#loader',{duration:.5,autoAlpha:0});
        
        // console.log(scroll);
        gsap.registerPlugin(CSSRulePlugin);
        
        window.addEventListener('resize', () => { 
            document.querySelector(':root').style
              .setProperty('--vh', window.innerHeight + 'px');
          })
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        
            let tl = gsap.timeline();
            let rule = CSSRulePlugin.getRule('main .hero .img1:after');
            let rule1 = CSSRulePlugin.getRule('main .hero .img2:after');
            let rule2 = CSSRulePlugin.getRule('header .menu-icon li:nth-of-type2');
        
            tl.to('#Path_119',{duration:1.5,strokeDashoffset:0,fill:'#000',ease:'linear'});
        
            tl.from('.line span',{
                delay:1,
                duration:.5,
                y:140,
                ease:"power4.out",
                skew:10,
                stagger:{
                    amount:0.4
                }
        
            },'-=1.1');
        
            tl.to(rule, {delay:.5,duration: .5, cssRule: {scaleY:0,autoAlpha:0.6},ease:'power3.easeIn'},'-=.3');
            tl.to(rule1, {duration: .5, cssRule: {scaleY:0,autoAlpha:0.6},ease:'power4.easeIn'});
            tl.from('.awards', {duration: .5, scaleX:0,ease:'power4.easeIn'},'-=1');
            tl.from('.awards h2', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'},'-=.5');
            if(document.querySelector('#Rectangle_3')){
            tl.from('.menu-icon li',{duration:.5,scaleX:0}).add(()=>{
                document.querySelector('#Rectangle_3').classList.add('UQjVfciE_0')
                document.querySelector('#Path_42').classList.add('UQjVfciE_1')
        
            })
        }
            tl.from('.second',{duration:.5,y:'0'})
        
        
        
        })

}
//Interactions
//Mobile Menu
let clicked = false;
let tl1 = gsap.timeline();
document.querySelector('.menu-icon').addEventListener('click',(e)=>{
    e.preventDefault();
    if(!clicked){
    e.target.style.zIndex =8;

    document.querySelectorAll('.menu-icon li').forEach(elem=>{
        elem.classList.add('centerOrigin')
    })
    tl1.to('.menu-icon li.second',{duration:.2,y:'0'});
    tl1.to('.menu-icon li.second',{duration:.2,rotate:-45,xPercent:5},'-=.1');
    tl1.to('.menu-icon li.first',{duration:.2,rotate:45,x:1,y:1},'-=.2');
    tl1.to('#overlaymenu',{duration:.5,left:0,ease:'power4.out'});
    tl1.fromTo('.menu-icon li',{duration:.5,background:'rgba(0,0,0,1)',ease:'power4.out'},{duration:.5,background:'rgba(255,255,255,1)',ease:'power4.out'},'-=.4');
    tl1.from('#overlaymenu .overlaymenu-content .links li', {duration:.4,stagger:0.2,opacity:0,y:10,ease:'power4.out'},'-=.4')
    tl1.from('#overlaymenu .logins a', {duration:.4,stagger:0.2,opacity:0,y:10,ease:'power4.out'})
    tl1.from('#overlaymenu .logins p', {duration:.4,opacity:0,y:10,ease:'power4.out'}) .add(()=>{
        if (tl1.reversed()) {
            clicked = false;
        } else {
            clicked = true;
        }
    });

    }else{
        if (tl1.reversed()) {
            tl1.play();
        } else {
            tl1.reverse();
        }
// tl1.reverse();

    }
});








function pageTransition(){
    let tl = gsap.timeline();
    tl.to('#transitions ul li',{duration:.5,scaleY: 1, transformOrigin: "bottom left",stagger: .2});
    tl.to('#transitions ul li',{duration:.5,scaleY: 0, transformOrigin: "bottom left",stagger: .1,delay:.1});
//   scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true
//     });
    return tl;
}
function delay(n) {
   n = n || 2000;
   return new Promise( done =>{
       setTimeout(() => {
           done();
       }, n);
   })
}
function contentAnimation() {
    // let tl = gsap.timeline();
    // tl.from('.left',{duration:1.5,translateY:50,opacity:0})
    // tl.to('img',{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)"},'-=.5')
   
    return tl;
}
// barba.init({
//     transitions:[{
//          sync:true,
//         leave(data){
//             const done = this.async();

//             pageTransition();
//              delay(1500).then(res=>{
//                 done();

//                 return res;
                
//              });
//         },
//          enter(data){
//             const scroll = new LocomotiveScroll({
//                 el: document.querySelector('[data-scroll-container]'),
//                 smooth: true
//             });
// // contentAnimation();
//         },
//          once(data){
             
//             // contentAnimation();
//                     }
//     }]
// })
let scroll;
barba.use(barbaPrefetch);
barba.init({
    
    views: [{
        namespace: 'home',
    
        enter(){
  
        },
        afterEnter(data){
            let tl = gsap.timeline();
            let rule = CSSRulePlugin.getRule('main .hero .img1:after');
            let rule1 = CSSRulePlugin.getRule('main .hero .img2:after');
            let rule2 = CSSRulePlugin.getRule('header .menu-icon li:nth-of-type2');
    
        
            tl.to(rule, {delay:.5,duration: .5, cssRule: {scaleY:0,autoAlpha:0.6},ease:'power3.easeIn'},'-=.3');
            tl.to(rule1, {duration: .5, cssRule: {scaleY:0,autoAlpha:0.6},ease:'power4.easeIn'});
           
   
        }
      },
      {
          namespace:'product',
          afterEnter(data){
            let tl = gsap.timeline();
            tl.to('#Path_119',{duration:1.5,strokeDashoffset:0,fill:'#000',ease:'linear'});
            if(document.querySelector('#Rectangle_3')){
                tl.from('.menu-icon li',{duration:.5,scaleX:0}).add(()=>{
                    document.querySelector('#Rectangle_3').classList.add('UQjVfciE_0')
                    document.querySelector('#Path_42').classList.add('UQjVfciE_1')
            
                })
            }

          }

      },
      
      {
        namespace: 'awards',
        afterEnter(data) {
            
            let tl = gsap.timeline();
            let rule = CSSRulePlugin.getRule('body main');
            tl.to('#Path_119',{duration:1.5,strokeDashoffset:0,fill:'#000',ease:'linear'});

            tl.to('.slider .image img',{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)"},'-=.5')
            tl.from('.slider h1', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.slider h2', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.slider  p', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.second',{duration:.5,y:'0'}).add(()=>{
             
            })
          
    
      
        },
        once(){
            
            let tl = gsap.timeline();
            tl.to('#Path_119',{duration:1.5,strokeDashoffset:0,fill:'#000',ease:'linear'});

            tl.to('.slider .image img',{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)"},'-=.5')
            tl.from('.slider h1', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.slider h2', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.slider  p', {duration: .5, opacity:0,y:10,ease:'power4.easeIn'});
            tl.from('.second',{duration:.5,y:'0'}).add(()=>{
                
            })

        },
      }],
    transitions: [
        {
            once(){

                    scroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true
                }); 
           
                // scroll.destroy();

            }
        },
        {
         leave(data) {

            const done = this.async();
            setTimeout(() => {
                done();

            }, 800);

            return pageTransition();
            // done();
        },
        afterEnter(data){
            setTimeout(() => {
                window.scrollTo(0, 5);
                scroll.update();

            }, 500);
        
// scroll.update();
        }
    }]
  });

document.querySelectorAll('.hovered-image').forEach(element=>{
    element.addEventListener('mouseover',(e)=>{
        let hover = gsap.timeline();
        e.target.classList.add('filter');
        hover.to('#turbulence',{duration:.5,ease:'power4.easeOut',attr:{baseFrequency:'0.1'}});
        hover.to('#turbulence',{duration:.5,ease:'power4.easeOut',attr:{baseFrequency:'0.0'}}).add(()=>{
            e.target.classList.remove('filter');
        })
    })
  
})
