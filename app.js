const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classlist.add('show');
        }else{
            entry.target.classlist.remove('show');
        }
    });
});
const hiddenelements=document.querySelectorAll('.hidden');
hiddenelements.forEach((el)=>observer.observe(el));

