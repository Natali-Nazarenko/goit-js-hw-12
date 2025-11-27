import SimpleLightbox from 'simplelightbox';

export const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

export function createGallery(hits) {
    clearGallery();
    const markup = hits.map(imageTemplate).join('');
    gallery.insertAdjacentHTML('afterbegin', markup);

    lightbox.refresh();
}

function imageTemplate(img) {
    return `<li class="gallery-item">
                <a class="gallery-link" href="${img.largeImageURL }">
                    <img
                        class="gallery-image"
                        src="${img.webformatURL}"
                        alt="${img.tags }"
                    />
                </a>
                <ul class="statistic-block">
                    <li>
                        <p>Likes</p><span>${img.likes}</span>
                    </li>
                    <li>
                        <p>Views</p><span>${img.views}</span>
                    </li>
                    <li>
                        <p>Comments </p><span>${img.comments}</span>
                    </li>
                    <li>
                        <p>Downloads</p><span>${img.downloads}</span>
                    </li>
                </ul>
            </li>`
}

function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}


