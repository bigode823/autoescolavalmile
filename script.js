// Funcionalidades principais do site da Auto Escola Valmile
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('formulario-contato');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const categoria = document.getElementById('categoria').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui seria implementada a lógica para enviar os dados para um servidor
            // Como é um protótipo, vamos apenas mostrar uma mensagem de sucesso
            alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            
            // Limpar formulário
            contactForm.reset();
            
            // Opcionalmente, redirecionar para WhatsApp
            const confirmWhatsapp = confirm('Deseja continuar o atendimento pelo WhatsApp?');
            if (confirmWhatsapp) {
                // Número de WhatsApp da Auto Escola (substituir pelo número real)
                const whatsappNumber = '5500000000000';
                
                // Mensagem pré-formatada
                const whatsappMessage = `Olá! Sou ${nome} e tenho interesse na ${categoria}. ${mensagem}`;
                
                // URL codificada para WhatsApp
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                
                // Abrir WhatsApp em nova aba
                window.open(whatsappUrl, '_blank');
            }
        });
    }
    
    // Sistema de chat com respostas automáticas
    const chatButton = document.getElementById('chat-button');
    const chatContainer = document.getElementById('chat-container');
    const chatToggle = document.getElementById('chat-toggle');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-message-input');
    const chatSend = document.getElementById('chat-send');
    
    // Base de conhecimento para respostas automáticas
    const chatResponses = {
        'default': 'Não entendi sua pergunta. Poderia reformular ou entrar em contato pelo WhatsApp para um atendimento personalizado?',
        'keywords': {
            'preço': 'Os preços variam conforme a categoria de habilitação. Por favor, consulte a seção de categorias em nosso site ou entre em contato pelo WhatsApp para valores atualizados.',
            'valor': 'Os valores variam conforme a categoria de habilitação. Por favor, consulte a seção de categorias em nosso site ou entre em contato pelo WhatsApp para valores atualizados.',
            'custo': 'Os custos variam conforme a categoria de habilitação. Por favor, consulte a seção de categorias em nosso site ou entre em contato pelo WhatsApp para valores atualizados.',
            'categoria a': 'A Categoria A é para habilitação de motocicletas e veículos de duas ou três rodas. Consulte os valores em nosso site ou entre em contato para mais informações.',
            'categoria b': 'A Categoria B é para habilitação de veículos de quatro rodas com até 3.500kg. Consulte os valores em nosso site ou entre em contato para mais informações.',
            'categoria ab': 'A Categoria AB combina as habilitações para motocicletas e carros de passeio. Consulte os valores em nosso site ou entre em contato para mais informações.',
            'inclusão': 'Oferecemos serviços de inclusão de categoria, seja para adicionar moto à sua CNH de carro ou vice-versa. Consulte os valores em nosso site ou entre em contato para mais informações.',
            'documento': 'Para iniciar o processo de habilitação, você precisará de RG, CPF, comprovante de residência e uma foto 3x4. Entre em contato para mais detalhes.',
            'documentos': 'Para iniciar o processo de habilitação, você precisará de RG, CPF, comprovante de residência e uma foto 3x4. Entre em contato para mais detalhes.',
            'idade': 'A idade mínima para tirar a CNH é 18 anos. Para mais informações, entre em contato conosco.',
            'aula': 'Oferecemos aulas teóricas e práticas com instrutores experientes. O número de aulas varia conforme a categoria. Entre em contato para mais detalhes.',
            'aulas': 'Oferecemos aulas teóricas e práticas com instrutores experientes. O número de aulas varia conforme a categoria. Entre em contato para mais detalhes.',
            'horário': 'Nosso horário de funcionamento é de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h.',
            'endereço': 'Estamos localizados no endereço da Auto Escola Valmile. Para mais detalhes, consulte a seção de contato em nosso site.',
            'contato': 'Você pode entrar em contato conosco pelo telefone (00) 0000-0000, pelo e-mail contato@autoescolavalmile.com.br ou pelo WhatsApp.',
            'whatsapp': 'Você pode nos contatar pelo WhatsApp clicando no botão abaixo.',
            'olá': 'Olá! Como posso ajudar você hoje?',
            'oi': 'Olá! Como posso ajudar você hoje?',
            'bom dia': 'Bom dia! Como posso ajudar você hoje?',
            'boa tarde': 'Boa tarde! Como posso ajudar você hoje?',
            'boa noite': 'Boa noite! Como posso ajudar você hoje?'
        }
    };
    
    // Função para abrir/fechar o chat
    if (chatButton && chatContainer && chatToggle) {
        chatButton.addEventListener('click', function() {
            chatContainer.style.display = 'flex';
            chatButton.style.display = 'none';
            chatInput.focus();
        });
        
        chatToggle.addEventListener('click', function() {
            chatContainer.style.display = 'none';
            chatButton.style.display = 'flex';
        });
    }
    
    // Função para enviar mensagem no chat
    function sendChatMessage() {
        const message = chatInput.value.trim();
        
        if (message !== '') {
            // Adicionar mensagem do usuário
            addChatMessage(message, 'user');
            
            // Limpar input
            chatInput.value = '';
            
            // Gerar resposta automática após um pequeno delay
            setTimeout(function() {
                const response = getChatResponse(message);
                addChatMessage(response, 'bot');
                
                // Se a resposta mencionar WhatsApp, adicionar botão
                if (response.toLowerCase().includes('whatsapp')) {
                    addWhatsAppButton();
                }
            }, 500);
        }
    }
    
    // Função para adicionar mensagem ao chat
    function addChatMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        
        const messageText = document.createElement('p');
        messageText.textContent = message;
        
        messageElement.appendChild(messageText);
        chatMessages.appendChild(messageElement);
        
        // Scroll para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Função para adicionar botão de WhatsApp
    function addWhatsAppButton() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('message', 'bot');
        
        const whatsappButton = document.createElement('a');
        whatsappButton.href = 'https://wa.me/5500000000000';
        whatsappButton.target = '_blank';
        whatsappButton.classList.add('btn', 'btn-whatsapp', 'btn-small');
        whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i> Falar no WhatsApp';
        
        buttonContainer.appendChild(whatsappButton);
        chatMessages.appendChild(buttonContainer);
        
        // Scroll para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Função para gerar resposta automática
    function getChatResponse(message) {
        const messageLower = message.toLowerCase();
        
        // Verificar palavras-chave
        for (const keyword in chatResponses.keywords) {
            if (messageLower.includes(keyword)) {
                return chatResponses.keywords[keyword];
            }
        }
        
        // Se nenhuma palavra-chave for encontrada, retornar resposta padrão
        return chatResponses.default;
    }
    
    // Eventos para enviar mensagem
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', sendChatMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Máscara para campo de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                // Formatar como (XX) XXXXX-XXXX
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
                } else if (value.length <= 11) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
                } else {
                    value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
                }
            }
            
            e.target.value = value;
        });
    }
    
    // Animação de scroll para elementos
    function animateOnScroll() {
        const elements = document.querySelectorAll('.categoria-card, .sobre-content, .contato-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar animações
    document.querySelectorAll('.categoria-card, .sobre-content, .contato-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Executar animação no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
