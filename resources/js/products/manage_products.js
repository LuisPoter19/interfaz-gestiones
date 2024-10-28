import Swal from 'sweetalert2';
import { validateField, validateFieldsAndSubmit,validateName, emptyField } from '../validations/validations';

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
        //event.preventDefault();

        fetch(window.routes.getNewProductCode)
            .then(response => response.json())
            .then(data => {
                const generatedCode = data.codigo_sku;

                fetch(window.routes.getCategories)
                    .then(response => response.json())
                    .then(categories => {

                        // Crear las opciones del dropdown dinámicamente
                        let categoryOptions = '<option value="">Selecciona</option>';
                        categories.forEach(category => {
                            // Si la categoría del producto coincide con el id de la categoría, marcarla como seleccionada
                            const selected = data.category_id == category.id ? 'selected' : '';
                            categoryOptions += `<option value="${category.id}" ${selected}>${category.nombre}</option>`;
                        });

                        fetch(window.routes.getSuppliers)
                            .then(response => response.json())
                            .then(suppliers => {
                                let supplierOptions = '<option value="">Selecciona</option>';
                                suppliers.forEach(supplier => {
                                    const selectedSupplier = data.supplier_id == supplier.id ? 'selectedSupplier' : '';
                                    supplierOptions += `<option value="${supplier.id}" ${selectedSupplier}>${supplier.nombre}</option>`;
                                })

                                Swal.fire({
                                    title: '',
                                    html: `
                                        <h2 class="d-flex">Registro Articulo</h2>
                                        <div class="container-fluid">
                                            <form method="POST" action="${window.routes.registerProduct}" id="registerForm" class="form-register">
                                                <input type="hidden" name="_token" value="${csrf}">
                                                <div class="mb-4 d-flex justify-content-between">
                                                    <div class="position-relative">
                                                        <input type="text" id="code" name="code" class="form-control" value=${generatedCode} readonly placeholder=" ">
                                                        <label for="code" class="placeholder-label">Código *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <span class="error-message" id="name-error"></span>
                                                        <input type="text" id="name" name="name" class="form-control" placeholder=" " minlength="2" maxlength="30">
                                                        <label for="name" class="placeholder-label">Nombre *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <textarea id="description" name="description" class="form-control" placeholder=" " rows="1" cols="45"></textarea>
                                                        <label for="description" class="placeholder-label">Descripción</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <select id="category" name="category" class="form-select">
                                                                ${categoryOptions}
                                                            </select>
                                                            <label for="category" class="placeholder-label">Categoria *</label>



                                                        <!--<input type="text" id="category" name="category" class="form-control" placeholder=" ">
                                                        <label for="category" class="placeholder-label">Categoria *</label>-->
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <select id="supplier" name="supplier" class="form-select">
                                                                ${supplierOptions}
                                                            </select>
                                                            <label for="supplier" class="placeholder-label">Proveedor *</label>



                                                        <!--<input type="text" id="supplier" name="supplier" class="form-control" placeholder=" ">
                                                        <label for="supplier" class="placeholder-label">Proveedor *</label>-->
                                                    </div>
                                                </div>
                                                <hr class="custom-hr">
                        
                                                <div class="d-flex justify-content-start mb-4 mt-4">
                                                    <div class="position-relative w-40">
                                                        <input type="number" id="initialAmount" name="initialAmount" class="form-control" placeholder=" ">
                                                        <label for="initialAmount" class="placeholder-label">Cantidad Inicial *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <input type="text" id="unit" name="unit" class="form-control" placeholder=" ">
                                                        <label for="unit" class="placeholder-label">Unidad *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2">
                                                        <input type="number" id="minimumStock" name="minimumStock" class="form-control" placeholder=" ">
                                                        <label for="minimumStock" class="placeholder-label">Stock Minimo *</label>
                                                    </div>
                                                </div>
                                                <hr class="custom-hr">
                        
                                                <div class="d-flex justify-content-start mb-4 mt-4">
                                                    <div class="position-relative"> 
                                                        <input type="number" id="purchasePrice" name="purchasePrice" class="form-control" placeholder=" ">
                                                        <label for="purchasePrice" class="placeholder-label">Precio Compra *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2"> 
                                                        <input type="number" id="salePrice" name="salePrice" class="form-control" placeholder=" ">
                                                        <label for="salePrice" class="placeholder-label">Precio Venta *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2"> 
                                                        <input type="text" id="money" name="money" class="form-control" placeholder=" ">
                                                        <label for="money" class="placeholder-label">Moneda *</label>
                                                    </div>
                                                </div>
                                                <hr class="custom-hr">
                        
                                                <div class="d-flex justify-content-start mt-4">
                                                    <div class="position-relative"> 
                                                        <input type="text" id="serialNumber" name="serialNumber" class="form-control" placeholder=" ">
                                                        <label for="serialNumber" class="placeholder-label">Numero Serie *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2"> 
                                                        <input type="date" id="expirationDate" name="expirationDate" class="form-control" placeholder=" ">
                                                        <label for="expirationDate" class="placeholder-label">Fecha Caducidad</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2"> 
                                                        <input type="text" id="state" name="state" class="form-control" placeholder=" ">
                                                        <label for="state" class="placeholder-label">Estado *</label>
                                                    </div>
                        
                                                    <div class="position-relative ms-2"> 
                                                        <input type="number" id="amountCurrent" name="amountCurrent" class="form-control" placeholder=" ">
                                                        <label for="amountCurrent" class="placeholder-label">Cantidad Actual *</label>
                                                    </div>
                                                </div>
                                            </form> 
                                        </div>
                                    `,
                                    focusConfirm: false,
                                    preConfirm: () => {
                                        return validateFieldsAndSubmit();
                                    },
                        
                                    confirmButtonText: 'Registrar',
                                    showCancelButton: true,
                                    cancelButtonText: 'Cancelar',
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    width: '900px',
                    
                    
                    
                    
                        })

                    validateField('code', emptyField);
                    validateField('name', validateName);
                    validateField('category', emptyField);
                    validateField('supplier', emptyField);
                    validateField('initialAmount', emptyField);
                    validateField('unit', emptyField);
                    validateField('minimumStock', emptyField);
                    validateField('purchasePrice', emptyField);
                    validateField('salePrice', emptyField);
                    validateField('money', emptyField);
                    validateField('serialNumber', emptyField);
                    validateField('state', emptyField);
                    validateField('amountCurrent', emptyField);

                    })

                })     
            })


    })

    document.querySelectorAll('.edit-button').forEach(function(button) {
        button.addEventListener('click', function() {
    
            const productId = this.getAttribute('data-id')
        
            fetch(`/products/${productId}/edit`)
                .then(response => response.json())
                .then(data => {

                    Swal.fire({
                        title: ' ',
                        html:`
                            <h2 class="d-flex">Editar Articulo</h2>
                            <div class="container-fluid">
                            <form method="POST" action="${window.routes.updateProduct.replace(':id', productId)}" id="updateProduct" class="form-register">
                                <input type="hidden" name="_token" value="${csrf}">
                                <input type="hidden" name="_method" value="PUT">
                                <div class="mb-4 d-flex justify-content-between">
                                    <div class="position-relative">
                                        <input type="text" id="code" name="code" class="form-control" placeholder=" " value="${data.codigo_sku}">
                                        <label for="code" class="placeholder-label">Código</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <input type="text" id="name" name="name" class="form-control" placeholder=" " value="${data.nombre}">
                                        <label for="name" class="placeholder-label">Nombre</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <textarea id="description" name="description" class="form-control" placeholder=" " rows="1" cols="50">${data.descripcion}</textarea>
                                        <label for="description" class="placeholder-label">Descripción</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <input type="text" id="category" name="category" class="form-control" placeholder=" " value="${data.category_id}">
                                        <label for="category" class="placeholder-label">Categoria</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <input type="text" id="supplier" name="supplier" class="form-control" placeholder=" " value="${data.supplier_id}">
                                        <label for="supplier" class="placeholder-label">Proveedor</label>
                                    </div>
                                </div>
                                <hr class="custom-hr">

                                <div class="d-flex justify-content-start mb-4 mt-4">
                                    <div class="position-relative">
                                        <input type="number" id="initialAmount" name="initialAmount" class="form-control" placeholder=" " value="${data.cantidad_inicial}">
                                        <label for="initialAmount" class="placeholder-label">Cantidad Inicial</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <input type="text" id="unit" name="unit" class="form-control" placeholder=" " value="${data.unidad_medida}">
                                        <label for="unit" class="placeholder-label">Unidad</label>
                                    </div>

                                    <div class="position-relative ms-2">
                                        <input type="number" id="minimumStock" name="minimumStock" class="form-control" placeholder=" " value="${data.nivel_minimo_stock}">
                                        <label for="minimumStock" class="placeholder-label">Stock Minimo</label>
                                    </div>
                                </div>
                                <hr class="custom-hr">

                                <div class="d-flex justify-content-start mb-4 mt-4">
                                    <div class="position-relative"> 
                                        <input type="number" id="purchasePrice" name="purchasePrice" class="form-control" placeholder=" " value="${data.precio_compra}">
                                        <label for="purchasePrice" class="placeholder-label">Precio Compra</label>
                                    </div>

                                    <div class="position-relative ms-2"> 
                                        <input type="number" id="salePrice" name="salePrice" class="form-control" placeholder=" " value="${data.precio_venta}">
                                        <label for="salePrice" class="placeholder-label">Precio Venta</label>
                                    </div>

                                    <div class="position-relative ms-2"> 
                                        <input type="text" id="money" name="money" class="form-control" placeholder=" " value="${data.moneda}">
                                        <label for="money" class="placeholder-label">Moneda</label>
                                    </div>
                                </div>
                                <hr class="custom-hr">

                                <div class="d-flex justify-content-start mt-4">
                                    <div class="position-relative"> 
                                        <input type="text" id="serialNumber" name="serialNumber" class="form-control" placeholder=" " value="${data.numero_serie}">
                                        <label for="serialNumber" class="placeholder-label">Numero Serie</label>
                                    </div>

                                    <div class="position-relative ms-2"> 
                                        <input type="date" id="expirationDate" name="expirationDate" class="form-control" placeholder=" " value="${data.fecha_caducidad}">
                                        <label for="expirationDate" class="placeholder-label">Fecha Caducidad</label>
                                    </div>

                                    <div class="position-relative ms-2"> 
                                        <input type="text" id="state" name="state" class="form-control" placeholder=" " value="${data.estado}">
                                        <label for="state" class="placeholder-label">Estado</label>
                                    </div>

                                    <div class="position-relative ms-2"> 
                                        <input type="number" id="amountCurrent" name="amountCurrent" class="form-control" placeholder=" " value="${data.cantidad_actual}">
                                        <label for="amountCurrent" class="placeholder-label">Cantidad Actual</label>
                                    </div>
                                </div>
                            </form> 
                        </div>
                        `,
                        preConfirm: () => {
                            document.getElementById('updateProduct').submit();
                        },

                        confirmButtonText: 'Confirmar',
                        showCancelButton: true,
                        cancelButtonText: 'Volver',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',   
                        width: '900px',      

                    })
             })
        })
    })

})