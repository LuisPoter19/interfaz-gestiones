import Swal from "sweetalert2";

const fieldsToValidate = [
    'code', 'name', 'category', 'supplier', 
    'initialAmount', 'unit', 'minimumStock', 
    'purchasePrice', 'salePrice', 'coin', 
    'serialNumber', 'state'
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

export function validateInputs(value, maximumCharacters) {
    const initialAmount = document.getElementById(value);
    initialAmount.addEventListener('input', function () {
        // Limitar caracteres
        if (this.value.length > maximumCharacters) {
            this.value = this.value.slice(0, maximumCharacters);
        }

        // Evitar ingresar números negativos y signos
        if (this.value <= 0 || this.value == '-' || this.value =='+') {
            this.value = '';
        }
    });
}


