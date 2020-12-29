const lis = document.querySelectorAll('.box');

const options = {
  root: null,
  threshold: 0.25,
  rootMargin: '-200px 0px 0px 0px'
};

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry =>{
    if (!entry.isIntersecting) {
      return;
    } 
    entry.target.classList.add('fade-in');
    console.log(entry.target)
  });
}, options);

lis.forEach(li => {
  observer.observe(li);
})