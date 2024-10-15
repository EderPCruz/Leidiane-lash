
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Obtém os valores do formulário
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Formata a mensagem para o WhatsApp
    var message = `Olá, meu nome é ${name} e meu telefone é ${phone}.`;

    // Número do WhatsApp do empresário (incluir o código do país)
    var whatsappNumber = '5541995038808'; // Substitua pelo número de WhatsApp real do empresário

    // Gera o link para o WhatsApp
    var whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappURL, '_blank');
});
