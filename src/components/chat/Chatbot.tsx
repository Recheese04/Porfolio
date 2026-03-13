import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const SYSTEM_INSTRUCTION = `
You are Rechie AI, a friendly and professional chatbot representing Rechie James A. Postanes.
Answer questions specifically about Rechie as his virtual assistant. Keep answers concise, clear, and helpful.
Never make up information that isn't listed here. If you don't know something, say so honestly.

PERSONAL & BACKGROUND
- Full name: Rechie James A. Postanes
- Studies at Bohol Island State University (BISU), Candijay Campus
- taking up Bachelor of Science in Computer Science (BSCS), currently 3rd year
- Started coding because of academics — it was required, and it grew into a passion
- Based in Bohol, Philippines

SKILLS & EXPERIENCE
- Full-stack developer — handles both frontend and backend on his own
- Works solo on all his personal projects
- Comfortable with web development, mobile app development, and AI integration
- Has been building real, working projects since starting his CS journey
- Always willing to learn new technologies and adapt to what a project needs

CAREER & GOALS
- Actively looking for an internship opportunity
- Open to collaborations and freelance work
- Eager to grow, learn, and contribute — the kind of developer who figures things out and gets things done
- Dream stack and fields: web, mobile, and AI — he's into all of it

THESIS
- Currently working on a thesis project: a Student Management System (SMS) with QR code and RFID integration
- It's a real-world system designed for campus use

PROJECTS
- TAPasok: Centralized attendance tracking platform for BISU Candijay Campus (In Progress)
- Manga Reading Website: Browse and read manga/manhwa online, powered by MangaDex API
- BISU Accreditation: Web system for managing accreditation workflows
- FundMonitor: Budget tracking and audit dashboard for student organizations
- StepMap: Mobile fitness app with step tracking and location awareness
- The Local Harvest: Agriculture e-commerce marketplace for local products
- Huling Gabi: A Roblox horror game with Filipino folklore themes (In Progress)
- Lakeside Campsite Booking System: Online campsite reservation platform

HOBBIES & INTERESTS
- Loves basketball, chess, and mobile games
- Enjoys listening to music
- A well-rounded person outside of coding too

CONTACT
- Best reached via email or Facebook
- Open to messages about internships, collaborations, or just talking tech

TONE GUIDE
- Be warm, casual but professional — like Rechie himself
- If someone asks if he's available for internship, say yes enthusiastically and encourage them to reach out
- If asked about a project not listed here, say it might be something new he's working on and suggest contacting him directly
`;

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
};

const INITIAL_MESSAGE: Message = {
    id: "1",
    role: "ai",
    content: "Hi there! I'm Rechie AI. Feel free to ask me anything about my experience, skills, or projects!",
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("API key not configured");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                systemInstruction: SYSTEM_INSTRUCTION,
            });

            // Format previous messages for chat context
            const history = messages
                .filter(msg => msg.id !== "1") // Skip the initial hardcoded message if desired, or keep it. Let's keep it.
                .map(msg => ({
                    role: msg.role === "user" ? "user" : "model",
                    parts: [{ text: msg.content }]
                }));

            const chat = model.startChat({
                history: history,
            });

            const result = await chat.sendMessage(userMessage.content);
            const responseText = result.response.text();

            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: responseText,
            };

            setMessages((prev) => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "I'm sorry, I encountered an issue connecting to my brain right now. Please try again later!",
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[340px] h-[500px] bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden sm:w-[380px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-muted/50 to-muted/10">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-card shadow-sm overflow-hidden flex-shrink-0">
                                    <img src="/profile.png" alt="Rechie" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Chat with Rechie AI</h3>
                                    <p className="text-xs text-muted-foreground">Always active</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full hover:bg-muted">
                                <X size={18} />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar bg-background/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm overflow-hidden",
                                            msg.role === "user"
                                                ? "bg-secondary text-secondary-foreground"
                                                : "bg-card border border-border"
                                        )}
                                    >
                                        {msg.role === "user" ? <User size={16} /> : <img src="/profile.png" alt="AI" className="w-full h-full object-cover" />}
                                    </div>
                                    <div
                                        className={cn(
                                            "px-4 py-2.5 text-sm shadow-sm",
                                            msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm"
                                                : "bg-card text-foreground rounded-2xl rounded-tl-sm border border-border"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3 max-w-[85%]">
                                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-card border border-border flex items-center justify-center shadow-sm overflow-hidden">
                                        <img src="/profile.png" alt="AI" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="px-4 py-3.5 text-sm bg-card text-foreground border border-border rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[44px]">
                                        <motion.span
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}
                                            className="w-1.5 h-1.5 rounded-full bg-foreground/60"
                                        />
                                        <motion.span
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
                                            className="w-1.5 h-1.5 rounded-full bg-foreground/60"
                                        />
                                        <motion.span
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}
                                            className="w-1.5 h-1.5 rounded-full bg-foreground/60"
                                        />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-border bg-card">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask anything..."
                                    className="w-full bg-muted/50 border border-transparent focus:border-border rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none transition-all disabled:opacity-50"
                                    disabled={isTyping}
                                />
                                <div className="absolute right-1.5">
                                    <Button
                                        size="icon"
                                        className={cn(
                                            "w-8 h-8 rounded-full transition-all",
                                            inputValue.trim() && !isTyping ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-muted-foreground"
                                        )}
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isTyping}
                                    >
                                        <Send size={14} className={inputValue.trim() && !isTyping ? "opacity-100" : "opacity-50"} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background z-50 relative"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
