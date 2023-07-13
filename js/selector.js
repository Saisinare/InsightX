const low = document.querySelector('#low')
const medium = document.querySelector('#medium')
const high = document.querySelector('#high')
const type = document.querySelector('#type')

const model = document.querySelector('#model')
const model1 = document.querySelector('#model1')
const model2 = document.querySelector('#model2')

low.addEventListener('click',()=>{
    low.classList.add('type-selected')
    medium.classList.remove('type-selected')
    high.classList.remove('type-selected')
    type.value="low"
})
high.addEventListener('click',()=>{
    high.classList.add('type-selected')
    low.classList.remove('type-selected')
    medium.classList.remove('type-selected')
    type.value="high"
})
medium.addEventListener('click',()=>{
    medium.classList.add('type-selected')
    low.classList.remove('type-selected')
    high.classList.remove('type-selected')
    type.value="medium"
})

model1.addEventListener('click',()=>{
    model.value="Balanced Bagging"
    model1.classList.add('model-selected')
    model2.classList.remove('model-selected')
})
model2.addEventListener('click',()=>{
    model2.classList.add('model-selected')
    model1.classList.remove('model-selected')
    model.value="Balanced Randome Forest"
})