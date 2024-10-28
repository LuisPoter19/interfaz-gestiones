import Swal from "sweetalert2";

const fieldsToValidate = [
    'code', 'name', 'category', 'supplier', 
    'initialAmount', 'unit', 'minimumStock', 
    'purchasePrice', 'salePrice', 'money', 
    'serialNumber', 'state', 'amountCurrent'
];

// Función de validación genérica
export function validateField(fieldId, validationFunction) {
    const field = document.getElementById(fieldId);
    field.addEventListener('blur', function() {
        const isValid = validationFunction(field.value);
        if (!isValid) {
            field.classList.add('invalid-input');
        } else {
            field.classList.remove('invalid-input');
        }
    });
}

export function validateFieldsAndSubmit() {
    let valid = true;

    fieldsToValidate.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field.value === "") {
            valid = false;
            field.classList.add('invalid-input');
        } else {
            field.classList.remove('invalid-input');
        }

    });

    if (!valid) {
        Swal.showValidationMessage('Completa todos los campos obligatorios *.');
        return false;
    } else {
        document.getElementById('registerForm').submit();
    }
    
}

// Funciones de validación específicas
export function emptyField(value) {
    return value !== "";
}

export function validateName(value) {
    return value !== "" && value.length >= 2 && value.length <= 30;
}

