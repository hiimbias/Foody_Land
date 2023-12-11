let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const dots = document.querySelectorAll('.dot');
  const slideWidth = document.querySelector('.slide').clientWidth;

  if (index < 0) {
    index = slider.children.length - 1;
  } else if (index >= slider.children.length) {
    index = 0;
  }

  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;

  // Update dot styles
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

