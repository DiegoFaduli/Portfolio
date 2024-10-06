import ContactForm from '../assets/Components/ContactForm.jsx';

const Contact = () => {
  return (
    <section className="p-4 md:pt-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:pt-10">Entre em Contato</h2>
        <p className="text-lg text-center mb-12">
        Tem alguma dúvida? Me mande uma mensagem! Respondo rapidamente (em até 48 horas).
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
