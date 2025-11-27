import iziToast from "izitoast";
import getImagesByQuery from "./js/pixabay-api";
import {showLoader, hideLoader, createGallery } from "./js/render-functions";


const form = document.querySelector('.form');

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

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const inputData = new FormData(form);
    
    if (inputData.get('search-text').trim() === '') {
        return validInput(errorText.user);
    }

    showLoader();

    getImagesByQuery(inputData.get('search-text').trim())
        .then((data) => {
            if (data.total === 0) return validInput(errorText.api);
            createGallery(data.hits);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() =>
            hideLoader()
        );
    
    ev.target.reset();
})