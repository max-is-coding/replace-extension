const josephPics = [
  'https://i.imgur.com/R91oZCk.gif',
  'https://i.imgur.com/DJY1mfA.gif',
  'https://i.imgur.com/FQlIW7Q.gif',
  'https://media1.tenor.com/images/c8ca57a5270d795cf12b7284a2d929ce/tenor.gif?itemid=26580539',
  'https://i.imgur.com/bk9ISaF.gif',
  'https://media1.tenor.com/images/9c85974f40ba5e7f42e336736b0b640a/tenor.gif?itemid=26580630',
]
let imgs = document.getElementsByTagName('img')

setInterval(function () {
  let josephImg = Math.floor(Math.random() * 6)
  let affectedImg = Math.floor(Math.random() * imgs.length)
  let previous = imgs[affectedImg].src
  imgs[affectedImg].src = josephPics[josephImg]
  setTimeout(function () {
    imgs[affectedImg].src = previous
  }, 9800)
}, 10000)
