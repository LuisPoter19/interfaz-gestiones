import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', function() {

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


    const csrfToken = document.querySelector('meta[name="csrf-token"]');

    if (!csrfToken) {
        console.error('CSRF token meta tag not found.');
        return;
    }
    const csrf = csrfToken.getAttribute('content');


    document.getElementById('register').addEventListener('click', function() {
        Swal.fire({
            title: '',
            html: `
                <div class="container-fluid">
                    <form method="POST" action="" id="registerForm" class="form-register">
                        <input type="hidden" name="_token" value="${csrf}">
                        <div class="mb-1 d-flex justify-content-between">
                            <div class="position-relative">
                                <input type="text" id="code" name="code" class="form-control" placeholder=" ">
                                <label for="code" class="placeholder-label">Código</label>
                            </div>

                            <div class="position-relative ms-2">
                                <input type="text" id="name" name="name" class="form-control" placeholder=" ">
                                <label for="name" class="placeholder-label">Nombre</label>
                            </div>

                            <div class="position-relative ms-2">
                                <textarea id="description" name="description" class="form-control" placeholder=" " rows="1" cols="50"></textarea>
                                <label for="decription" class="placeholder-label">Descripción</label>
                            </div>

                            <div class="position-relative ms-2">
                                <input type="text" id="category" name="category" class="form-control" placeholder=" ">
                                <label for="category" class="placeholder-label">Categoria</label>
                            </div>

                            <div class="position-relative ms-2">
                                <input type="text" id="supplier" name="supplier" class="form-control" placeholder=" ">
                                <label for="supplier" class="placeholder-label">Proveedor</label>
                            </div>
                        </div>
                    </form> 
                </div>
            `,
            focusConfirm: false,
            confirmButtonText: 'Registrarse',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            width: '900px',
            height: '800px'
        })
    })

})