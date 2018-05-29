var position = 0;
var images = document.getElementsByClassName('frame');
var buttons = document.getElementsByClassName('btn');

function change (n) {
  images[position].classList.remove('show');
  buttons[position].classList.remove('active');
  position += n;
  if (position == -1) {
    position = 2;
  } else if (position == 3) {
    position = 0;
  }
  images[position].className += " show";
  buttons[position].className += ' active';
};

function switchTo (n) {
  images[position].classList.remove("show");
  buttons[position].classList.remove('active');
  position = n;
  images[position].className += " show";
  buttons[position].className += ' active';
}
