const uifeature = document.querySelector('.ui-feature')
const uiImg = document.querySelector('.ui-img')
const card1 = document.querySelector('.card1')
const card1head = document.querySelector('.card1-description')
const card1des = document.querySelector('.card1-head')
const card1img = document.querySelector('.card1img')
const card2 = document.querySelector('.card2')
const card2head = document.querySelector('.card2-description')
const card2des = document.querySelector('.card2-head')
const card2img = document.querySelector('.card2img')

const options = {
    root:null,
    rootMargin:'0px',
    thresold:.4
}
let obeserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList[1]=='ui-feature'){
                uiImg.classList.add('ui-image-slideUp')
                entry.target.classList.add('active-animation')
            }
            if(entry.target.classList[1]=='card1'){
                card1head.classList.add('card-des-animation')
                card1des.classList.add('card-des-animation')
                card1img.classList.add('card-img-animation');
            }
            if(entry.target.classList[1]=='card2'){
                card2head.classList.add('card2-des-animation')
                card2des.classList.add('card2-des-animation')
                card2img.classList.add('card2-img-animation');
            }
        }
        else{
            card1img.classList.remove('card-img-animation');
            uiImg.classList.remove('ui-image-slideUp')
            entry.target.classList.remove('active-animation')
            card1head.classList.remove('card-des-animation')
            card1des.classList.remove('card-des-animation')
        }
    })
    },options)
    
    let obeserver2 = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){

                if(entry.target.classList[1]=='card2'){
                    card2head.classList.add('card2-des-animation')
                    card2des.classList.add('card2-des-animation')
                    card2img.classList.add('card2-img-animation');
                }
            }
            else{
                card2head.classList.remove('card2-des-animation')
                card2des.classList.remove('card2-des-animation')
                card2img.classList.remove('card2-img-animation');

            }
        })
        },options)

obeserver.observe(uifeature)
obeserver.observe(card1)
obeserver2.observe(card2)