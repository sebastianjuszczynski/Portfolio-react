export const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateField = (name, value) => {
        if (name === "name" && value.trim().length < 3) {
            return "errorName";
        }

        if (name === "email" && !validateEmail(value)) {
            return "errorEmail";
        }

        if (name === "message" && value.trim().length < 10) {
            return "errorMessage";
        }

        return "";
    };

export const validateForm = (formFields, formData) => {
        const newErrors = {};

        for (const { name } of formFields) {
            const error = validateField(name, formData[name]);
            if (error) {
                newErrors[name] = error;
            }
        }

        return newErrors;

    };