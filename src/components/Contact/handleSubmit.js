export const handleSubmit = async ({
    e,
    formData,
    validateForm,
    setFormData,
    setErrors,
    setFormTriedSubmit,
    setStatusMessage, 
    t
}) => {
    e.preventDefault();
    setFormTriedSubmit(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;

    if (!isValid) return;

    try {
        const response = await fetch("https://formspree.io/f/xbloydej", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatusMessage(t("formSuccess"));
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            setFormTriedSubmit(false);
        } else {
            setStatusMessage(t("formError"));
        }
    } catch (err) {
        setStatusMessage(t("formError"));
    }

    setTimeout(() => setStatusMessage(""), 3000);
};
