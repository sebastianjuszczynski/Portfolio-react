import { formFields } from "./formFields";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import SectionHeader from "../common/SectionHeader/SectionHeader.jsx";
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import {
    Form, InputsWrapper, InputWrapper, TextareaWrapper, LabelHidden, Input,
    Textarea, ErrorMessage, SubmitButton, FormStatus
} from './styles.js';
import { useState, useEffect } from "react";

const Contact = () => {
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

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateField = (name, value) => {
        if (name === "name" && value.trim().length < 3) {
            return t("errorName");
        }

        if (name === "email" && !validateEmail(value)) {
            return t("errorEmail");
        }

        if (name === "message" && value.trim().length < 10) {
            return t("errorMessage");
        }

        return "";
    };

    const validateForm = () => {
        const newErrors = {};

        for (const { name } of formFields) {
            const error = validateField(name, formData[name]);
            if (error) {
                newErrors[name] = error;
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
  e.preventDefault();
  setFormTriedSubmit(true);
  const isValid = validateForm();

  if (!isValid) {
    return; 
  }
  
  console.log("Wysyłanie formularza:", formData);

  setFormData({
    name: "",
    email: "",
    message: ""
  });
  setErrors({});
  setStatusMessage("Formularz został wysłany!");
};

useEffect(() => {
  if (statusMessage) {
    const timer = setTimeout(() => {
      setStatusMessage(""); 
    }, 2000); 

    return () => clearTimeout(timer);
  }
}, [statusMessage]);






    return (
        <Section id="contact">
            <SectionContainer>
                <TextContainer>
                    <SectionHeader
                        sub={t("contactSubheader")}
                        span={t("contactSpan")}
                        title={t("contactTitle")}
                    />
                </TextContainer>
                <Form noValidate onSubmit={handleSubmit}>
                    <InputsWrapper>
                        {formFields
                            .filter(({ type }) => type !== "textarea")
                            .map(({ name, type, i18n }) =>
                                <InputWrapper key={name}>
                                    <LabelHidden>{t(i18n)}</LabelHidden>
                                    <Input
                                        type={type}
                                        name={name}
                                        id={name}
                                        placeholder={t(i18n)}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        required
                                    />

                                    <ErrorMessage aria-live="polite"></ErrorMessage>
                                </InputWrapper>
                            )}
                    </InputsWrapper>

                    {formFields
                        .filter(({ type }) => type === "textarea")
                        .map(({ name, i18n }) =>
                            <TextareaWrapper key={name}>
                                <LabelHidden htmlFor={name}>{t(i18n)}</LabelHidden>
                                <Textarea
                                    name={name}
                                    id={name}
                                    required
                                    placeholder={t(i18n)}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    rows="6"
                                >
                                </Textarea>
                                <ErrorMessage aria-live="polite"></ErrorMessage>
                            </TextareaWrapper>
                        )}

                    <SubmitButton type="submit">{t("submitButton")}</SubmitButton>
                    <FormStatus>{statusMessage}</FormStatus>
                </Form>
            </SectionContainer>
        </Section>
    );
};

export default Contact;