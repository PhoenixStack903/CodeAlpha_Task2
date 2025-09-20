const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigate images
function showImage(index) {
  if (index >= galleryItems.length) index = 0;
  if (index < 0) index = galleryItems.length - 1;
  lightboxImg.src = galleryItems[index].src;
  currentIndex = index;
}

nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
// ---------------- Filter Functionality ----------------
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// ---------------- Image Filter Functionality ----------------
const filterButtons = document.querySelectorAll('.img-filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const effect = button.getAttribute('data-filter');
    if (effect === 'none') {
      lightboxImg.style.filter = 'none';
    } else {
      lightboxImg.style.filter = effect;
    }
  });
});