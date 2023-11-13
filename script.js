/*const btn = document.querySelector('.btn')
const logos = Array.from(document.querySelectorAll('.body__logo'));



function openCatalog() {
  btn.addEventListener('click', () => {
    logos.forEach(item => item.classList.remove('hidden'));
    btn.textContent ='Скрыть';
  })
}


function response1() {
  if (window.innerWidth > 1055) { //should be 8 elements
    btn.classList.add('hidden');

    logos.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 7) {
        item.classList.remove('hidden')
      } else if (index > 7) {
        btn.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}
response1()


function response2() {
  if (window.innerWidth <= 1055 && window.innerWidth > 320) { //should be 6 el
    btn.classList.add('hidden');

    logos.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 5) {
        item.classList.remove('hidden')
      } else if (index > 5) {
        btn.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}
response2()


/*function response3() { // вместо этого должен быть слайдер
  if (window.innerWidth <= 512) {
    btn.classList.add('hidden');

    logos.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 2) {
      } else if (index > 2) {
        btn.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}
response3()



