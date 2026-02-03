# Plano de Implementação - Página de Contato

## Referência
Página: https://www.marco.fyi/contact

---

## 1. Visão Geral

A página de contato do Marco utiliza uma interface estilo **iMessage/chat** como elemento principal, com um gradiente animado colorido e múltiplas opções de contato.

### Elementos Principais:
- Interface de chat simulando iMessage
- Gradiente animado no fundo (vermelho → laranja → verde → azul → roxo)
- Cards/botões de contato com ícones
- Animações de hover e transições suaves

---

## 2. Estrutura de Layout

```
┌─────────────────────────────────────────┐
│            Navigation (existente)        │
├─────────────────────────────────────────┤
│                                         │
│         ┌─────────────────────┐         │
│         │   CONTACT (título)  │         │
│         └─────────────────────┘         │
│                                         │
│    ┌────────────────────────────────┐   │
│    │                                │   │
│    │     iMessage Chat Interface    │   │
│    │     (conversação simulada)     │   │
│    │                                │   │
│    └────────────────────────────────┘   │
│                                         │
│    ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│    │Email │ │ Text │ │  CV  │ │Twitter│ │
│    └──────┘ └──────┘ └──────┘ └──────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 3. Componentes a Criar/Modificar

### 3.1 Novo Componente: `ChatInterface.tsx`
**Localização:** `src/components/ui/ChatInterface.tsx`

**Funcionalidades:**
- Container estilo iPhone/iMessage
- Bolhas de mensagem (enviadas e recebidas)
- Animação de digitação (três pontos)
- Indicador "Delivered"

**Estrutura das mensagens:**
```tsx
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'contact';
  timestamp?: string;
}
```

### 3.2 Novo Componente: `ContactOptionCard.tsx`
**Localização:** `src/components/ui/ContactOptionCard.tsx`

**Props:**
```tsx
interface ContactOptionCardProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient?: boolean;
}
```

### 3.3 Modificar: `contact.tsx`
**Localização:** `src/pages/contact.tsx`

---

## 4. Estilização Detalhada

### 4.1 Gradiente Animado de Fundo

```css
/* Adicionar em index.css */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background: linear-gradient(
    270deg,
    #ff6570,  /* vermelho */
    #ff842a,  /* laranja */
    #19d175,  /* verde */
    #4697f6,  /* azul */
    #7646ff   /* roxo */
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

### 4.2 Interface do Chat (iMessage Style)

```css
/* Container do iPhone */
.iphone-container {
  background: #f5f5f5;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 380px;
}

/* Bolha de mensagem recebida */
.message-received {
  background: #e5e5ea;
  color: #000;
  border-radius: 18px;
  border-bottom-left-radius: 4px;
  padding: 10px 14px;
  max-width: 75%;
}

/* Bolha de mensagem enviada */
.message-sent {
  background: #007aff;
  color: #fff;
  border-radius: 18px;
  border-bottom-right-radius: 4px;
  padding: 10px 14px;
  max-width: 75%;
  margin-left: auto;
}
```

### 4.3 Cores e Tipografia

| Elemento | Cor | Tamanho |
|----------|-----|---------|
| Título "Contact" | #000 | 32px / bold |
| Texto chat enviado | #fff | 16px |
| Texto chat recebido | #000 | 16px |
| Labels dos botões | #666 | 14px |
| Background página | gradiente animado ou #fff |

---

## 5. Ícones Necessários

### 5.1 Opções (usar Heroicons ou SVG custom):

1. **Email** - Envelope icon
```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
```

2. **iMessage/Text** - Chat bubble icon
```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
</svg>
```

3. **CV/Resume** - Document icon
```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
</svg>
```

4. **Twitter/X** - Twitter icon
```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
```

5. **Instagram** - Instagram icon
```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
```

---

## 6. Animações

### 6.1 Hover nos Cards de Contato
```css
.contact-card {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

### 6.2 Animação de Digitação (três pontos)
```css
@keyframes typing {
  0%, 60%, 100% { opacity: 0.3; }
  30% { opacity: 1; }
}

.typing-dot {
  animation: typing 1.4s infinite;
}
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }
```

### 6.3 Fade In das Mensagens
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message {
  animation: fadeInUp 0.3s ease forwards;
}
```

---

## 7. Dados de Contato (adaptar para Nicolle)

| Método | Valor Sugerido |
|--------|----------------|
| Email | nicolle@email.com |
| Instagram | @nicolle |
| Twitter/X | @nicolle |
| LinkedIn | /in/nicolle |
| Pinterest | /nicolle |

---

## 8. Tarefas de Implementação

### Fase 1: Estrutura Base
- [ ] Criar keyframes de animação em `index.css`
- [ ] Criar componente `ChatInterface.tsx`
- [ ] Criar componente `ContactOptionCard.tsx`

### Fase 2: Interface do Chat
- [ ] Implementar container estilo iPhone
- [ ] Criar bolhas de mensagem (sent/received)
- [ ] Adicionar animação de digitação
- [ ] Implementar indicador "Delivered"

### Fase 3: Cards de Contato
- [ ] Implementar grid de opções de contato
- [ ] Adicionar ícones SVG
- [ ] Implementar hover effects

### Fase 4: Integração
- [ ] Montar página `contact.tsx` completa
- [ ] Adicionar gradiente animado (opcional)
- [ ] Testar responsividade
- [ ] Ajustar espaçamentos e tamanhos

---

## 9. Dependências

Nenhuma dependência externa necessária. Tudo pode ser implementado com:
- React 19
- Tailwind CSS 4
- SVG icons inline

---

## 10. Considerações de Responsividade

| Breakpoint | Comportamento |
|------------|---------------|
| Mobile (<640px) | Chat em tela cheia, cards empilhados |
| Tablet (640-1024px) | Chat centralizado, cards em grid 2x2 |
| Desktop (>1024px) | Layout completo com espaçamentos maiores |

---

## 11. Preview do Resultado Esperado

```
┌──────────────────────────────────────────────────┐
│                   Navigation                      │
├──────────────────────────────────────────────────┤
│                                                  │
│                    CONTACT                       │
│                                                  │
│        ┌──────────────────────────────┐          │
│        │  ┌─────────────────────────┐ │          │
│        │  │ Hey! 👋                 │ │          │
│        │  └─────────────────────────┘ │          │
│        │         ┌──────────────────┐ │          │
│        │         │ Hi! How can I    │ │          │
│        │         │ help you?        │ │          │
│        │         └──────────────────┘ │          │
│        │  ┌─────────────────────────┐ │          │
│        │  │ I'd love to work        │ │          │
│        │  │ with you!               │ │          │
│        │  └─────────────────────────┘ │          │
│        │                    Delivered │          │
│        └──────────────────────────────┘          │
│                                                  │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│   │  📧    │ │  💬    │ │  📄    │ │  🐦    │   │
│   │ Email  │ │  Text  │ │   CV   │ │Twitter │   │
│   └────────┘ └────────┘ └────────┘ └────────┘   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 12. Arquivos a Criar/Modificar

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `src/components/ui/ChatInterface.tsx` | Criar | Componente do chat iMessage |
| `src/components/ui/ContactOptionCard.tsx` | Criar | Card de opção de contato |
| `src/components/ui/index.ts` | Modificar | Exportar novos componentes |
| `src/pages/contact.tsx` | Modificar | Página principal |
| `src/index.css` | Modificar | Adicionar animações |

---

## Aprovação

- [ ] Layout aprovado
- [ ] Cores e tipografia aprovadas
- [ ] Animações aprovadas
- [ ] Dados de contato definidos
- [ ] Pronto para implementação
