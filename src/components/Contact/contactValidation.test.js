import { validateField, validateForm } from './contactValidation';
import { formFields } from './formFields';

describe('validateField', () => {
    test('returns error for too short name', () => {
        expect(validateField('name', 'a')).toBe('errorName');
        expect(validateField('name', 'Sebastian')).toBe('');
    });
    test('returns error for ivalid email', () => {
        expect(validateField('email', 'abc')).toBe('errorEmail');
        expect(validateField('email', 'test@mail.com')).toBe('');
    });
    test('returns error for too short message', () => {
        expect(validateField('message', 'abc')).toBe('errorMessage');
        expect(validateField('message', 'valid message text')).toBe('');
    });
    describe('validateForm', () => {
        test('returns error object for invalid form', () => {
            const formData = {
                name: '',
                email: 'wrong',
                message: 'too short'
            };
            const errors = validateForm(formFields, formData);
            expect(errors).toEqual({
                name: 'errorName',
                email: 'errorEmail',
                message: 'errorMessage',
            });
        });

        test('return empty object for valid form', () => {
            const formData = {
                name: 'Sebastian',
                email: 'test@mail.com',
                message: 'Correct message',
            };
            expect(validateForm(formFields, formData)).toEqual({});
        });
    });
});