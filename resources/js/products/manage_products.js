import Swal from 'sweetalert2';

document.addEventListener('DomContentLoaded', function() {

    if (window.hasError) {
        Swal.fire({
            title: '¡Error!',
            text: window.errorMessage,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '¡Entendido!',
            width: '400px'
        });
    }


    const csrfToken = document.querySelector();

    if (!csrfToken) {
        console.error('CSRF token meta tag not found.');
        return;
    }
    const csrf = csrfToken.getAttribute('content');


})