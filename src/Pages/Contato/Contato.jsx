import { useState } from 'react';
import { api } from '../../services/api';

const Contato = () => {
    // Estados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Manipula mudanças nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
        if (submitError) setSubmitError("");
    };

    // Submissão do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await api.post("/contato", {
                nome: formData.nome,
                email: formData.email,
                mensagem: formData.mensagem
            });

            setSubmitSuccess(true);
            setFormData({ nome: "", email: "", mensagem: "" });

            setTimeout(() => setSubmitSuccess(false), 5000);

            } catch (error) {
            if (error.response) {
                console.error("Erro:", error.response.data);
                setSubmitError(error.response.data.message || "Erro ao enviar mensagem.");
            } else {
                console.error("Erro:", error.message);
                setSubmitError("Erro inesperado.");
            }
            } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section className="flex flex-col items-center" id="contato">
      <h1 className="title text-4xl md:text-5xl font-bold text-[var(--text-color)] max-w-md mb-10 text-center">
        Entre em contato com a gente
      </h1>

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-xs md:max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6 mb-10"
      >
        <div>
          <label htmlFor="nome" className="block text-[var(--text-color)] font-medium mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            className="w-full px-4 py-2 rounded-lg border border-[var(--body-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[var(--text-color)] font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            className="w-full px-4 py-2 rounded-lg border border-[var(--body-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] transition"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-[var(--text-color)] font-medium mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--body-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] transition"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-center bg-[var(--text-color)] text-[var(--base-color)] font-bold px-4 py-2 rounded-full text-lg shadow-md hover:bg-[#d14034] hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {submitSuccess && (
          <div className="p-3 bg-green-100 text-green-800 rounded-lg border border-green-300 text-center">
            ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        {submitError && (
          <div className="p-3 bg-red-100 text-red-800 rounded-lg border border-red-300 text-center">
            ❌ Mensagem não enviada.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contato;
