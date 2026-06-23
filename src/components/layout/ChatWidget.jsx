import React, { useState, useRef, useEffect } from 'react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! Welcome to Dreamwarez. How can we help you today?", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    // Simulate bot response
    setTimeout(() => {
      let replyText = "Thank you for reaching out! A representative will connect with you shortly. For immediate response, please contact us at info@dreamwarez.in or call +91 9130081817.";
      
      const lower = text.toLowerCase();
      if (lower.includes('quote') || lower.includes('price')) {
        replyText = "We'd love to provide a custom quote for your project! Please visit our Contact Us page or drop an email to info@dreamwarez.in with your requirements.";
      } else if (lower.includes('erp') || lower.includes('module')) {
        replyText = "Our ERP system consists of modular features like Purchase Management, Warehouse Stock Management, MRP, Accounting, and HR. Which modules are you interested in?";
      } else if (lower.includes('services') || lower.includes('website')) {
        replyText = "We offer Web Development, Mobile Apps (Android & iOS), Custom Software, Cybersecurity, and AR/VR solutions. Tell us about your idea!";
      } else if (lower.includes('address') || lower.includes('location') || lower.includes('where')) {
        replyText = "Our address is: 518, 5th Floor, Wakad Business Bay, Behind Tip Top International Hotel, Wakad, Pune - 411057, Maharashtra MH, India. We'd love to have you drop by.";
      } else if (lower.includes('hours') || lower.includes('time') || lower.includes('open')) {
        replyText = "Our business hours are Monday to Friday, 9:00 AM to 6:30 PM (IST). We are closed on weekends.";
      } else if (lower.includes('support') || lower.includes('help') || lower.includes('issue')) {
        replyText = "For technical support or any immediate issues, please email support@dreamwarez.in or call our dedicated helpline at +91 9130081817.";
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('framework')) {
        replyText = "We work with a modern tech stack! For frontend, we specialize in React, Vue, and Angular. For backend, we use Node.js, Python, Java, and .NET. We also build mobile apps using Flutter and React Native.";
      } else if (lower.includes('hiring') || lower.includes('job') || lower.includes('career')) {
        replyText = "We are always looking for talented individuals! Please send your resume to hr@dreamwarez.in and our HR team will get back to you if your profile matches our requirements.";
      } else if (lower.includes('maintenance') || lower.includes('after launch') || lower.includes('update')) {
        replyText = "Yes! We provide comprehensive post-launch maintenance, updates, and support packages to ensure your software remains secure and up-to-date.";
      } else if (lower.includes('experience') || lower.includes('how long') || lower.includes('portfolio')) {
        replyText = "We have successfully delivered 500+ projects for 100+ clients across the globe, ranging from startups to enterprise-level businesses.";
      } else if (lower.includes('hello') || lower.includes('hi ') || lower.includes('hey')) {
        replyText = "Hello there! How can I assist you with your software development needs today?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: replyText, isBot: true }]);
    }, 1000);
  };

  const handleQuickAction = (actionText) => {
    handleSend(actionText);
  };

  return (
    <>
      <div className="chat-widget-btn" onClick={toggleChat} title="Chat with support">
        💬
      </div>

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">D</div>
            <div>
              <div className="chat-title">Dreamwarez Support</div>
              <div style={{ fontSize: '11px', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                Online
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={toggleChat}>×</button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
              {msg.text}
            </div>
          ))}
          {messages.length === 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              <button 
                onClick={() => handleQuickAction("I want to get a quote")} 
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '99px', padding: '6px 12px', fontSize: '11px', color: '#0284c7', cursor: 'pointer' }}
              >
                💼 Get a Quote
              </button>
              <button 
                onClick={() => handleQuickAction("Tell me about ERP modules")} 
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '99px', padding: '6px 12px', fontSize: '11px', color: '#0284c7', cursor: 'pointer' }}
              >
                ⚙️ ERP Modules
              </button>
              <button 
                onClick={() => handleQuickAction("Contact Sales")} 
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '99px', padding: '6px 12px', fontSize: '11px', color: '#0284c7', cursor: 'pointer' }}
              >
                📞 Contact Sales
              </button>
              <button 
                onClick={() => handleQuickAction("Where are you located?")} 
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '99px', padding: '6px 12px', fontSize: '11px', color: '#0284c7', cursor: 'pointer' }}
              >
                📍 Our Address
              </button>
              <button 
                onClick={() => handleQuickAction("What are your business hours?")} 
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '99px', padding: '6px 12px', fontSize: '11px', color: '#0284c7', cursor: 'pointer' }}
              >
                🕒 Business Hours
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSend(inputVal); }} className="chat-input-area">
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-send-btn">Send</button>
        </form>
      </div>
    </>
  );
}
