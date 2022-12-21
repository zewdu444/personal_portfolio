const mobileoption = document.getElementById('mobileoption');
const body = document.querySelector('body');
const barClick = document.getElementById('barClick');
const popupWindow =document.getElementById('popupmenu')
const popClient =document.getElementById('popclient');
const popPicture=document.getElementById('poppicture');
const popTag=document.getElementById('poptag');
const popMobileDetail=document.getElementById('popmobiledetail')
const popDesktopDetail=document.getElementById('popdesktopdetail')
const worksCard=document.querySelector('.workscard')
mobileoption.style.display = 'none';
const projectData=[
{
 desktopName:'Tonic',
 mobileName:'Tonic',
 desktopClient:['CANOPY','&#x2022 Back End Dev','&#x2022 2015'],
 mobileClient:['CANOPY','&#x2022 Back End Dev','&#x2022 2015'],
 desktopTag:['html','css','javascript','Github','Ruby','Bootstrap'],
 mobileTag:['html','css','javascript'],
 desktopPicture:'./images/desktop_one.png',
 mobilePicture:'./images/Tonic one.png',
 desktopAlt:'Tonic',
 mobileAlt:'Facebook 360',
 desktopdetail:'A daily selection of privately personalized reads; no accounts or sign-ups required',
 mobiledetail:'A daily selection of privately personalized reads; no accounts or sign-ups required',
 desktopmainTag:['html','css','javascript']
},
{
desktopName:'Multi-Post Stories',
mobileName:'Multi-Post Stories',
desktopClient:['Facebook','&#x2022 Full Stack Dev','&#x2022 2015'],
mobileClient:['CANOPY','&#x2022 Back End Dev','&#x2022 2015'],
desktopTag:['html','css','javascript','Github','Ruby','Bootstrap'],
mobileTag:['html','css','javascript'],
desktopPicture:'./images/desktop_two.png',
mobilePicture:'./images/multi post stories one.png',
desktopAlt:'Multi-Post Storeis',
mobileAlt:'Multi-Post Stories',
desktopdetail:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
mobiledetail:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
desktopmainTag:['html','Ruby on Rails','css','javascript']
},

{
desktopName:'Facebook 360',
mobileName:'Tonic',
desktopClient:['Facebook','&#x2022 Full Stack Dev','&#x2022 2015'],
mobileClient:['CANOPY','&#x2022 Back End Dev','&#x2022 2015'],
desktopTag:['html','css','javascript','Github','Ruby','Bootstrap'],
mobileTag:['html','css','javascript'],
desktopPicture:'./images/desktop_three.png',
mobilePicture:'./images/Tonic two.png',
desktopAlt:'Facebook 360',
mobileAlt:'Tonic',
desktopdetail:'Exploring the future of media in Facebooks first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR..',
mobiledetail:'A daily selection of privately personalized reads; no accounts or sign-ups required',
desktopmainTag:['html','Ruby on Rails','css','javascript']
}
,{
  desktopName:'Uber Navigation',
  mobileName:'Multi-Post Stories',
  desktopClient:['Uber','&#x2022 Lead Developer','&#x2022 2018'],
  mobileClient:['CANOPY','&#x2022 Back End Dev','&#x2022 2015'],
  desktopTag:['html','css','javascript','Github','Ruby','Bootstrap'],
  mobileTag:['html','css','javascript'],
  desktopPicture:'./images/desktop_four.png',
  mobilePicture:'./images/multi post stories two.png',
  desktopAlt:'Uber Navigation',
  mobileAlt:'Multi-Post Stories',
  desktopdetail:'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  mobiledetail:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  desktopmainTag:['html','Ruby on Rails','css','javascript']
}
]


// add event listener to click barclick
barClick.addEventListener('click', () => {
  mobileoption.style.display = 'block';
  body.style.overflow = 'hidden';
});

// add event listener to mobile option
mobileoption.addEventListener('click', () => {
  mobileoption.style.display = 'none';
  body.style.overflow = 'auto';
});
// check screen size and turned off mobile option in desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileoption.style.display = 'none';
  }
});
// close button on popup menu;
function closePopupMenu(){
    popupWindow.style.display='none';
    body.style.overflow = 'auto';
    window.addEventListener('resize', () => {
          popupWindow.style.display = 'none';
        
      });
}

// clone cards to display
for(let i=0; i<=2; i++){
    let clone=worksCard.cloneNode(true);
    worksCard.after(clone);
}

const seeProject=Array.from(document.querySelectorAll('.projectbutton'));
const generateCard=document.getElementsByClassName('workscard');

for(let i=0;i<=3;i++){ 
generateCard[i].getElementsByClassName('mobilepic')[0].src=projectData[i].mobilePicture;
generateCard[i].getElementsByClassName('desktoppic')[0].src=projectData[i].desktopPicture;
generateCard[i].getElementsByClassName('projecttitle')[0].style.display='block'
generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML=projectData[i].desktopName
while(generateCard[i].getElementsByClassName('client')[0].firstChild)
generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild);
projectData[i].desktopClient.forEach((item,index) =>{
   let li=document.createElement('li');
   let classname=['type','tech','year'];
   li.innerHTML=item;
    li.classList.add(classname[index])

    generateCard[i].getElementsByClassName('client')[0].appendChild(li);   
})
generateCard[i].getElementsByClassName('projectdetail')[0].style.display='block'
generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML=projectData[i].desktopdetail

while(generateCard[i].getElementsByClassName('tags')[0].firstChild)
generateCard[i].getElementsByClassName('tags')[0].removeChild(generateCard[i].getElementsByClassName('tags')[0].firstChild);
projectData[i].desktopmainTag.forEach((item) =>{
   let li=document.createElement('li');
   li.innerHTML=item;        
   generateCard[i].getElementsByClassName('tags')[0].appendChild(li);   
})
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        
        generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML=projectData[i].mobileName
        while(generateCard[i].getElementsByClassName('client')[0].firstChild)
        generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild);
        projectData[i].mobileClient.forEach((item,index) =>{
        let li=document.createElement('li');
        let classname=['type','tech','year'];
        li.innerHTML=item;
        li.classList.add(classname[index])
        generateCard[i].getElementsByClassName('client')[0].appendChild(li);   
}) 
generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML=projectData[i].mobiledetail

    }
    else{
        generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML=projectData[i].desktopName
        while(generateCard[i].getElementsByClassName('client')[0].firstChild)
        generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild);
        projectData[i].desktopClient.forEach((item,index) =>{
        let li=document.createElement('li');
        let classname=['type','tech','year'];
        li.innerHTML=item;
        li.classList.add(classname[index])

       generateCard[i].getElementsByClassName('client')[0].appendChild(li);   
})
generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML=projectData[i].desktopdetail
    }
});
}
// popup windows data populate
for(let i=0; i<=3;i++){
    seeProject[i].addEventListener('click',()=>{
        popupWindow.style.display='block'
        body.style.overflow = 'hidden';
        document.getElementById('popname').innerHTML=projectData[i].desktopName;
        while(popClient.firstChild)popClient.removeChild(popClient.firstChild);
        projectData[i].desktopClient.forEach((item,index) =>{
           let li=document.createElement('li');
           let classname=['type','tech','year'];
           li.innerHTML=item;
            li.classList.add(classname[index])
           popClient.appendChild(li);
        })
        popPicture.src=projectData[i].desktopPicture
        popPicture.alt=projectData[i].desktopAlt
        while(popTag.firstChild)popTag.removeChild(popTag.firstChild);
        projectData[i].desktopTag.forEach((item) =>{
           let li=document.createElement('li');
           li.innerHTML=item;
           popTag.appendChild(li);
        })
       popMobileDetail.style.display='none';
      window.addEventListener('resize', () => {
    if(window.innerWidth<768){
        popMobileDetail.style.display='block'
        popupWindow.style.display='block'
        body.style.overflow = 'hidden';
        document.getElementById('popname').innerHTML=projectData[i].mobileName;
        while(popClient.firstChild)popClient.removeChild(popClient.firstChild);
        projectData[i].mobileClient.forEach((item,index) =>{
           let li=document.createElement('li');
           let classname=['type','tech','year'];
           li.innerHTML=item;
            li.classList.add(classname[index])
           popClient.appendChild(li);
        })
        popPicture.src=projectData[i].mobilePicture
        popPicture.alt=projectData[i].mobileAlt
        while(popTag.firstChild)popTag.removeChild(popTag.firstChild);
        projectData[i].mobileTag.forEach((item) =>{
           let li=document.createElement('li');
           li.innerHTML=item;
           popTag.appendChild(li);
        })
     }
     else{
        popupWindow.style.display='block'
        body.style.overflow = 'hidden';
        document.getElementById('popname').innerHTML=projectData[i].desktopName;
        while(popClient.firstChild)popClient.removeChild(popClient.firstChild);
        projectData[i].desktopClient.forEach((item,index) =>{
           let li=document.createElement('li');
           let classname=['type','tech','year'];
           li.innerHTML=item;
            li.classList.add(classname[index])
           popClient.appendChild(li);
        })
        popPicture.src=projectData[i].desktopPicture
        popPicture.alt=projectData[i].desktopAlt
        while(popTag.firstChild)popTag.removeChild(popTag.firstChild);
        projectData[i].desktopTag.forEach((item) =>{
           let li=document.createElement('li');
           li.innerHTML=item;
           popTag.appendChild(li);
        })
       popMobileDetail.style.display='none';
     }
})
if(window.innerWidth<768){
     popMobileDetail.style.display='block'
    popupWindow.style.display='block'
    body.style.overflow = 'hidden';
    document.getElementById('popname').innerHTML=projectData[i].mobileName;
    while(popClient.firstChild)popClient.removeChild(popClient.firstChild);
    projectData[i].mobileClient.forEach((item,index) =>{
       let li=document.createElement('li');
       let classname=['type','tech','year'];
       li.innerHTML=item;
        li.classList.add(classname[index])
       popClient.appendChild(li);
    })
    popPicture.src=projectData[i].mobilePicture
    popPicture.alt=projectData[i].mobileAlt
    while(popTag.firstChild)popTag.removeChild(popTag.firstChild);
    projectData[i].mobileTag.forEach((item) =>{
       let li=document.createElement('li');
       li.innerHTML=item;
       popTag.appendChild(li);
    })
 }
})
}
