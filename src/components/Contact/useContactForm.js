import { useState } from "react";
import { formFields } from "./formFields";
import { validateForm, validateField } from "./contactValidation";
import { handleSubmit } from "./handleSubmit";
import { useLanguage } from "../../i18n/LanguageContext";

export const useContactForm = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [formTriedSubmit, setFormTriedSubmit] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (formTriedSubmit) {
            const error = validateField(name, value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error,
            }));
        }
    };

    const handleSubmitWrapped = (e) =>
        handleSubmit({
            e,
            formData,
            validateForm: () => validateForm(formFields, formData),
            setErrors,
            setFormData,
            setFormTriedSubmit,
            setStatusMessage,
            t,
        });

    return {
        formData,
        errors, 
        formTriedSubmit,
        statusMessage,
        handleChange,
        handleSubmit: handleSubmitWrapped,
        t
    };
};