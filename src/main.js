import iziToast from "izitoast";
import getImagesByQuery from "./js/pixabay-api";
import {
    btnLoad,
    showLoader,
    hideLoader,
    createGallery,
    showLoadMoreButton,
    hideLoadMoreButton,
    gallery,
    lightbox
    } from "./js/render-functions";


const form = document.querySelector('.form');
const per_page = 15;
let totalPages;
let query;
let page = 1;

const errorText = {
    user: {
        title: 'WARNING!',
        message: 'You didn’t enter the image name!'
    },
    api: {
        title: 'Sorry,',
        message: 'there are no images matching your search query. Please try again!'}
}

function validInput({ title, message}) {
        iziToast.show({
            title,
            titleColor: 'red',
            message,
            position: 'topCenter',
            messageColor: 'black',
            color: 'red',
    });
}

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const inputData = new FormData(form);
    query = inputData.get('search-text').trim();
    
    if (query === '') {
        return validInput(errorText.user);
    }

    showLoader();

    try { 
        const { data } = await getImagesByQuery(query, page);

        totalPages = Math.ceil(data.total / per_page);
        console.log(totalPages);
        
        
        if (data.total === 0 && data.hits.length === 0) return validInput(errorText.api);
        
        const markup = createGallery(data.hits);
        gallery.innerHTML = markup;

        lightbox.refresh();
        if (data.hits.length >= per_page) return showLoadMoreButton();
        
    }catch (error) {
            console.log(error.message);
    }finally {
        hideLoader(); 
    }
    
    ev.target.reset();
})

btnLoad.addEventListener('click', async () => {
    ++page;
    if (page === totalPages) { 
        hideLoadMoreButton();
    }
    const result = await getImagesByQuery(query, page);
    const markup = createGallery(result.data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
})