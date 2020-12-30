const lis = document.querySelectorAll('.box');
const plane = document.querySelector('.airplane-wrapper');
const liOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: '-200px 0px 0px 0px'
};
const planeOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: '-100px 0px 0px 0px'
};

const lisObserver = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry =>{
    if (!entry.isIntersecting) {
      return;
    } 
    entry.target.classList.add('fade-in');
    console.log(entry.target)
  });
}, liOptions);

lis.forEach(li => {
  lisObserver.observe(li);
})

const planeObserver = new IntersectionObserver(function(entries,planeObserver){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('fly-in');
      planeObserver.unobserve(entry.target);
    }
  })
}, planeOptions);

planeObserver.observe(plane);
