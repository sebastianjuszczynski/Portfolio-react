import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap.base};
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap.base};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 240px;
`;

export const TextareaWrapper = styled(InputWrapper)`
    flex: 1 1 100%;
`;

export const LabelHidden = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

export const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.padding.inputs};
    font-weight: 600;
    line-height: 1.15;
    border-radius: ${({ theme }) => theme.borders.radius.lg};
    background-color: ${({ theme }) => theme.colors.inputs};
    color: ${({ theme }) => theme.colors.textSecondary};
    border: ${({ theme, $error, $valid}) => {
        if ($error) return `2px solid ${theme.colors.error}`;
        if ($valid) return `2px solid ${theme.colors.valid}`;
        return `2px solid ${theme.colors.accentHover}`
    }}; 
    

    &:focus {
        outline: ${({ theme, $error, $valid}) => {
            if ($error) return theme.borders.error(theme);
            if ($valid) return theme.borders.valid(theme);
            return theme.borders.focus(theme)
        }};
    }

`;

export const Textarea = styled.textarea`
    padding: ${({ theme }) => theme.spacing.padding.inputs};
    font-weight: 600;
    line-height: 1.15;
    border-radius: ${({ theme }) => theme.borders.radius.lg};
    background-color: ${({ theme }) => theme.colors.inputs};
    color: ${({ theme }) => theme.colors.textSecondary};
    border: ${({ theme, $error, $valid}) => {
        if ($error) return `2px solid ${theme.colors.error}`;
        if ($valid) return `2px solid ${theme.colors.valid}`;
        return `2px solid ${theme.colors.accentHover}`
    }}; 
    resize: none;

    &:focus {
        outline: ${({ theme, $error, $valid}) => {
            if ($error) return theme.borders.error(theme);
            if ($valid) return theme.borders.valid(theme);
            return theme.borders.focus(theme)
        }};
    }
`;

export const ErrorMessage = styled.small`
    display: block;
    visibility: ${({ $error }) => $error ? "visible" : "hidden"};
    min-height: 1rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.85rem;
    text-align: left;
    opacity: ${({ $error }) => ($error ? 1 : 0)};
    transition: ${({ theme }) => theme.transition.opacity};
`;

export const SubmitButton = styled.button`
    position: relative;
    overflow: hidden;
    z-index: 0;
    width: 100%;
    align-self: center;
    background: ${({ theme }) => theme.gradients.accent};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: ${({ theme }) => theme.spacing.padding.button};
    border-radius: ${({ theme }) => theme.borders.radius.full};
    border: none;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.sizes.base};

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.gradients.accentHover};
        opacity: 0;
        transition: ${({ theme }) => theme.transition.opacity};
        z-index: -1;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export const FormStatus = styled.div`
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    transition: ${({ theme }) => theme.transition.opacity};
    text-align: left;
    font-weight: bold;
`;


