import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface FormData {
    nome: string;
    duvida: string;
}

interface FormErrors {
    nome: string;
    duvida: string;
}

const FormularioDuvida: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        duvida: "",
    });

    const [errors, setErrors] = useState<FormErrors>({
        nome: "",
        duvida: "",
    });

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (value.trim() !== "") {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateForm = (): boolean => {
        let valid = true;
        const newErrors: FormErrors = { ...errors };

        if (formData.nome.trim() === "") {
            newErrors.nome = "Por favor, insira seu nome";
            valid = false;
        }

        if (formData.duvida.trim() === "") {
            newErrors.duvida = "Por favor, descreva sua dúvida";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Aqui você faria a chamada para a API ou processamento dos dados
            console.log("Formulário enviado:", formData);

            // Simula o envio (substitua por sua lógica real)
            setTimeout(() => {
                setSubmitted(true);
                setFormData({ nome: "", duvida: "" });

                // Reseta a mensagem de sucesso após 5 segundos
                setTimeout(() => setSubmitted(false), 5000);
            }, 1000);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-white text-white">
                            <h3 className="mb-0 text-danger">
                                Tire sua Dúvida
                            </h3>
                        </div>

                        <div className="card-body">
                            {submitted && (
                                <div
                                    className="alert alert-success alert-dismissible fade show"
                                    role="alert"
                                >
                                    Dúvida enviada com sucesso! Entraremos em
                                    contato em breve.
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setSubmitted(false)}
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="nome"
                                        className="form-label"
                                    >
                                        Nome:
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.nome && "is-invalid"
                                        }`}
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                    />
                                    {errors.nome && (
                                        <div className="invalid-feedback">
                                            {errors.nome}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="duvida"
                                        className="form-label"
                                    >
                                        Sua Dúvida:
                                    </label>
                                    <textarea
                                        className={`form-control ${
                                            errors.duvida && "is-invalid"
                                        }`}
                                        id="duvida"
                                        name="duvida"
                                        rows={5}
                                        value={formData.duvida}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.duvida && (
                                        <div className="invalid-feedback">
                                            {errors.duvida}
                                        </div>
                                    )}
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        Enviar Dúvida
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioDuvida;
