import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { formFields } from "./formFields";
import { useContactForm } from "./useContactForm.js";
import SectionHeader from "../common/SectionHeader/SectionHeader.jsx";
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import {
    Form, InputsWrapper, InputWrapper, TextareaWrapper, LabelHidden, Input,
    Textarea, ErrorMessage, SubmitButton, FormStatus
} from './styles.js';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';



const Contact = () => {
    const {
        formData,
        errors,
        formTriedSubmit,
        statusMessage,
        handleChange,
        handleSubmit,
        t
    } = useContactForm();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-200px' });

    return (
        <Section id="contact" $bg="transparent">
            <SectionContainer $direction="column"
                as={motion.div}
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                <TextContainer as={motion.div} variants={itemVariants}>
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
                                    <Input as={motion.input} variants={itemVariants}
                                        type={type}
                                        name={name}
                                        id={name}
                                        placeholder={t(i18n)}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        $error={formTriedSubmit && !!errors[name]}
                                        $valid={formTriedSubmit && formData[name] && !errors[name]}
                                        required
                                    />

                                    <ErrorMessage $error={formTriedSubmit && !!errors[name]} aria-live="polite">{errors[name] ? t(errors[name]) : ""}</ErrorMessage>
                                </InputWrapper>
                            )}
                    </InputsWrapper>

                    {formFields
                        .filter(({ type }) => type === "textarea")
                        .map(({ name, i18n }) =>
                            <TextareaWrapper key={name}>
                                <LabelHidden htmlFor={name}>{t(i18n)}</LabelHidden>
                                <Textarea as={motion.textarea} variants={itemVariants}
                                    name={name}
                                    id={name}
                                    required
                                    placeholder={t(i18n)}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    rows="6"
                                    $error={formTriedSubmit && !!errors[name]}
                                    $valid={formTriedSubmit && formData[name] && !errors[name]}
                                >
                                </Textarea>
                                <ErrorMessage $error={formTriedSubmit && !!errors[name]} aria-live="polite">{errors[name] ? t(errors[name]) : ""}</ErrorMessage>
                            </TextareaWrapper>
                        )}

                    <SubmitButton as={motion.div} variants={itemVariants} type="submit">{t("submitButton")}</SubmitButton>
                    <FormStatus $show={!!statusMessage} aria-live="polite">{statusMessage}</FormStatus>
                </Form>
            </SectionContainer>
        </Section>
    );
};

export default Contact;