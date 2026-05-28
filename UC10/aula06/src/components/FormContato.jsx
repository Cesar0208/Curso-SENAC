import { useState } from 'react';

function FormContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email inválido';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem muito curta';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem muito curta';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccessMessage('Mensagem enviada com sucesso');
      // Desafio Extra: limpar os campos do formulário
      setFormData({
        nome: '',
        email: '',
        mensagem: '',
      });
    }
  };

  return (
    <section className="contato" style={{ padding: '60px 0', backgroundColor: 'var(--bg-light, #f8fafc)' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>Fale Conosco</h2>
        
        {successMessage && (
          <div
            className="success-message"
            style={{
              backgroundColor: '#dcfce7',
              border: '1px solid #bbf7d0',
              color: '#15803d',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="nome" style={{ fontWeight: '600', color: 'var(--text-color, #1e293b)' }}>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: errors.nome ? '2px solid #ef4444' : '1px solid #cbd5e1',
                fontSize: '16px',
                outline: 'none',
              }}
            />
            {errors.nome && (
              <span className="error-message" style={{ color: '#ef4444', fontSize: '14px', fontWeight: '500' }}>
                {errors.nome}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontWeight: '600', color: 'var(--text-color, #1e293b)' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: errors.email ? '2px solid #ef4444' : '1px solid #cbd5e1',
                fontSize: '16px',
                outline: 'none',
              }}
            />
            {errors.email && (
              <span className="error-message" style={{ color: '#ef4444', fontSize: '14px', fontWeight: '500' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="mensagem" style={{ fontWeight: '600', color: 'var(--text-color, #1e293b)' }}>Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="5"
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: errors.mensagem ? '2px solid #ef4444' : '1px solid #cbd5e1',
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
            {errors.mensagem && (
              <span className="error-message" style={{ color: '#ef4444', fontSize: '14px', fontWeight: '500' }}>
                {errors.mensagem}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              padding: '14px',
              borderRadius: '6px',
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormContato;
