import SimpleLightbox from 'simplelightbox';

export const gallery = document.querySelector('.gallery');
export const btnLoad = document.querySelector('.btn-load');
const loader = document.querySelector('.loader');


export const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

export function createGallery(hits) {
    const markup = hits.map(imageTemplate).join('');
    gallery.insertAdjacentHTML('beforeend', markup);

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

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton() { 
    btnLoad.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    btnLoad.classList.add('hidden');
}

export function clearGallery() { 
    gallery.innerHTML = "";
}

