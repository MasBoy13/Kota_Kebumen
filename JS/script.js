// Fungsi untuk scroll to top
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Fungsi untuk modal popup
  function showModal(imageSrc, title, description) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${imageSrc}" class="d-block w-100" alt="${title}">
            <p>${description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    // Menghapus modal setelah ditutup
    modal.addEventListener('hidden.bs.modal', () => {
      modal.remove();
    });
  }
  
  // Menambahkan event listener untuk gambar di carousel
  const carouselImages = document.querySelectorAll('.carousel-item img');
  carouselImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      const title = image.alt || `Tempat Wisata ${index + 1}`;
      const description = `Deskripsi lengkap tentang ${title}`;
      showModal(image.src, title, description);
    });
  });
  
  // Menambahkan scroll to top button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.classList.add('btn', 'btn-primary', 'position-fixed', 'bottom-0', 'end-0', 'm-3');
  scrollTopButton.innerHTML = `<i class="fas fa-arrow-up"></i>`;
  scrollTopButton.style.display = 'none';
  scrollTopButton.addEventListener('click', scrollToTop);
  document.body.appendChild(scrollTopButton);
  
  // Menampilkan tombol scroll ke atas ketika menggulir
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  