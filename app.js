names = document.querySelectorAll('p')

images = {
    viren:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png',
    sach:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png',
    gaut:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png',
    virat:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png',
    msd:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png',
    yovr:'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png',

}

var tog = true

names.forEach(element => {
    if(element.id){
        element.style.color='blue'
        element.style.cursor='pointer'
        element.style.width='200px'
        element.addEventListener('click', ()=>{
            IMG = document.getElementById('image')
            IMG.src = images[element.id]
            if (tog){
                IMG.style.display = 'block'
                tog = false
            }
            else{
                IMG.style.display = 'none'
                tog = true
            }


        })
    }
});

var nonBating = ['https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg', 'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg', 'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg', 'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg', 'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg']

console.log(nonBating)
var persons = document.getElementsByClassName('persons')
console.log(persons)

for (let i=0; i<persons.length;i++){
    persons[i].addEventListener('click', ()=>{
        IMG = document.getElementById('image')
        IMG.src = nonBating[i]
        if (tog){
            IMG.style.display = 'block'
            tog = false
        }
        else{
            IMG.style.display = 'none'
            tog = true
        }
    })
}
