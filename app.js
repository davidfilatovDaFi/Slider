const sliderItems = Array.from(document.querySelectorAll('.slider__item'))
const slider = document.querySelector('.slider')
const arrowNext = document.querySelectorAll('.arrow_right')
const arrowPrew = document.querySelectorAll('.arrow_left')
const line = document.querySelectorAll('.line_small')

const next = () => {
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index
  currentSlide.classList.toggle('item_active')
  currentSlide.removeAttribute('data-active')
  const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`)
  nextSlide.classList.toggle('item_active')
  nextSlide.setAttribute('data-active','')
  const procent = (100 / sliderItems.length) * (nextSlideIndex)
  line.forEach(el => el.style.left = `${procent}%`)
  nextSlide.scrollIntoView({
    block: 'center',
    inline: 'center'
  })
}

const prew = () => {
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index
  currentSlide.classList.toggle('item_active')
  currentSlide.removeAttribute('data-active')
  const nextSlideIndex = currentSlideIndex - 1 === -1 ? sliderItems.length - 1 : currentSlideIndex - 1
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`)
  nextSlide.classList.toggle('item_active')
  nextSlide.setAttribute('data-active','')
  const procent = (100 / sliderItems.length) * (nextSlideIndex)
  line.forEach(el => el.style.left = `${procent}%`)
  nextSlide.scrollIntoView({
    block: 'center',
    inline: 'center'
  })
}

sliderItems.forEach((item,index) => {
    if (index === 0) {
      item.classList.add('item_active')
    }
    item.dataset.index = index
    sliderItems[0].setAttribute('data-active','')
  })

arrowNext.forEach(el => {el.addEventListener('click',next)})

arrowPrew.forEach(el => {el.addEventListener('click',prew)})

setInterval(next,4000)