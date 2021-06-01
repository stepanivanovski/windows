function image(imageParent) {
  const parent = document.querySelector(imageParent),
        image = document.createElement('img'),
        imageContainer = document.createElement('div');
        
  parent.prepend(imageContainer);
  imageContainer.classList.add('popup');
  imageContainer.prepend(image);
  imageContainer.style.justifyContent = 'center';
  imageContainer.style.alignItems = 'center';
      
  parent.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains('preview')) {
      const path = target.parentNode.getAttribute('href');
      image.src = path;
      imageContainer.style.display= 'flex';
      document.body.style.overflow = 'hidden';
    }

    if (target && target.classList.contains('popup')){
      imageContainer.style.display= 'none';
      document.body.style.overflow = '';
    }

  });

}

export default image;