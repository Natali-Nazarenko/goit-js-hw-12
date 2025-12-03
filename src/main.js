import iziToast from "izitoast";
import getImagesByQuery from "./js/pixabay-api";
import {
        btnLoad,
        showLoader,
        hideLoader,
        createGallery,
        showLoadMoreButton,
        hideLoadMoreButton,
        clearGallery
    } from "./js/render-functions";


const form = document.querySelector('.form');
const per_page = 15;
let totalPages;
let query;
let page;

const errorText = {
    user: {
        title: 'WARNING!',
        message: 'You didn’t enter the image name!'
    },
    api: {
        title: 'Sorry,',
        message: 'there are no images matching your search query. Please try again!'
    },
    endLoad: {
        title: '!',
        message: `We're sorry, but you've reached the end of search results.`
    },
    network: {
        title: 'WARNING!',
        message: ''
    }
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

function infoMessage({ title, message }) {
    iziToast.show({
            title,
            titleColor: 'blue',
            message,
            position: 'topCenter',
            messageColor: 'blue',
            color: 'blue',
    });
}

function smoothScroll() {
    const liElement = document.querySelector('.gallery-item');
    const heightLi = liElement.getBoundingClientRect();
    const scrollHeight = heightLi.height * 2;
    
    window.scrollBy({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
}

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    hideLoadMoreButton();

    const inputData = new FormData(form);
    query = inputData.get('search-text').trim();
    
    if (query === '') {
        return validInput(errorText.user);
    }

    clearGallery();
    showLoader();

    try {
        page = 1;
   
        const data = await getImagesByQuery(query, page);
        totalPages = Math.ceil(data.total / per_page);
        
        if (data.total === 0 || data.hits.length === 0) return validInput(errorText.api);

        createGallery(data.hits);

        if (data.hits.length === per_page && page !== totalPages) return showLoadMoreButton();
        
    }catch (error) {
        console.log(error.message);
        errorText.network.message = error.message;
        validInput(errorText.network);
    }finally {
        hideLoader(); 
    }
    
    ev.target.reset();
})

btnLoad.addEventListener('click', async () => {
    showLoader();

    ++page;
    try {
        const data = await getImagesByQuery(query, page);
        totalPages = Math.ceil(data.total / per_page);

        if (page === totalPages) { 
            hideLoadMoreButton();
            infoMessage(errorText.endLoad);
        }
        createGallery(data.hits);
        smoothScroll();
    } catch (error) {
        console.log(error.message);
        errorText.network.message = error.message
        validInput(errorText.network);
    }finally {
        hideLoader(); 
    }
})