import ScrollRevealSection from "../common/ScrollRevealSection/ScrollRevealSection";
import { useContactForm } from "./useContactForm.js";
import { itemVariants } from '../common/Animations/animationsVariants';
import { formFields } from "./formFields";
import SectionHeader from "../common/SectionHeader/SectionHeader.jsx";
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import {
    Form, InputsWrapper, InputWrapper, TextareaWrapper, LabelHidden, Input,
    Textarea, ErrorMessage, SubmitButton, FormStatus
} from './styles.js';


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

    return (
        <Section id="contact" $bg="transparent">
            <ScrollRevealSection>
                <SectionContainer $direction="column">
                    <TextContainer variants={itemVariants}>
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
                                            variants={itemVariants}
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
                                    <Textarea
                                        variants={itemVariants}
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

                        <SubmitButton variants={itemVariants} type="submit">{t("submitButton")}</SubmitButton>
                        <FormStatus $show={!!statusMessage} aria-live="polite">{statusMessage}</FormStatus>
                    </Form>
                </SectionContainer>
            </ScrollRevealSection>
        </Section>
    );
};

export default Contact;