import { z } from 'astro/zod';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

const form: HTMLFormElement = document.getElementById('contactForm') as HTMLFormElement;

const name: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
const nameError: HTMLDivElement = document.getElementById('nameError') as HTMLDivElement;

const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
const emailError: HTMLDivElement = document.getElementById('emailError') as HTMLDivElement;

const reason: HTMLSelectElement = document.getElementById('reason') as HTMLSelectElement;
const reasonError: HTMLDivElement = document.getElementById('reasonError') as HTMLDivElement;

const phone: HTMLInputElement = document.getElementById('phone') as HTMLInputElement;
const phoneError: HTMLDivElement = document.getElementById('phoneError') as HTMLDivElement;

const message: HTMLTextAreaElement = document.getElementById('message') as HTMLTextAreaElement;
const messageError: HTMLDivElement = document.getElementById('messageError') as HTMLDivElement;

const ContactFormSchema = z.object({
    name: z.string().min(1, 'Please enter your name'),
    email: z.string().email('Please enter a valid email address'),
    reason: z.string().min(1, 'Please select your reason for contacting'),
    phone: z.string().refine((val) => isMobilePhone(val), {
        message: 'Please enter a valid phone number',
    }),
    message: z.string().min(1, 'Please enter a message'),
});

document.addEventListener('DOMContentLoaded', () => {
    const selectInputs = document.querySelectorAll<HTMLSelectElement>('.select-input');
    const labelSelect = document.querySelector<HTMLLabelElement>('.label-select');

    selectInputs.forEach((select) => {
        select.addEventListener('change', (event) => {
            const target = event.target as HTMLSelectElement;
            if (target.value) {
                labelSelect?.classList.remove('-translate-y-[5px]');
                labelSelect?.classList.add('-translate-y-9');
                labelSelect?.classList.remove('scale-100');
                labelSelect?.classList.add('scale-75');
            } else {
                labelSelect?.classList.add('-translate-y-[5px]');
                labelSelect?.classList.remove('-translate-y-9');
                labelSelect?.classList.add('scale-100');
                labelSelect?.classList.remove('scale-75');
            }
        });
    });
});

// Function to handle field errors
function handleFieldError(
    field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    errorElement: HTMLElement,
    errors: string[] | undefined,
): void {
    if (errors) {
        errorElement.textContent = errors.join(', ');
        field?.classList.add('border', 'border-red-500');
    } else {
        errorElement.textContent = '';
        field?.classList.remove('border', 'border-red-500');
    }
}

// Function to handle form submission
function onFormSubmit(e: Event): void {
    e.preventDefault();

    const formData = {
        name: name?.value,
        email: email?.value,
        reason: reason?.value,
        phone: phone?.value,
        message: message?.value,
    };

    const validationResults = ContactFormSchema.safeParse(formData);

    if (!validationResults.success) {
        const formattedFormErrors = validationResults.error.format();

        handleFieldError(name, nameError, formattedFormErrors.name?._errors);
        handleFieldError(email, emailError, formattedFormErrors.email?._errors);
        handleFieldError(reason, reasonError, formattedFormErrors.reason?._errors);
        handleFieldError(phone, phoneError, formattedFormErrors.phone?._errors);
        handleFieldError(message, messageError, formattedFormErrors.message?._errors);
    } else {
        // Clear all fields if the form is valid
        [name, email, reason, phone, message].forEach((field) => {
            field?.classList.remove('border', 'border-red-500');
        });

        [nameError, emailError, reasonError, phoneError, messageError].forEach((errorElement) => {
            errorElement.textContent = '';
        });
    }
}

form?.addEventListener('submit', onFormSubmit);
