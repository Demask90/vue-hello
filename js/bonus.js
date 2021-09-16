Vue.config.devtools = true;

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#root',
    data: {
        title: 'Error 404',
        img: 'https://upload.wikimedia.org/wikipedia/it/8/83/No_immagini.png',
    }
})