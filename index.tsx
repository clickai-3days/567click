import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2,
  XCircle,
  MessageCircle,
  ShieldCheck,
  Clock,
  Zap,
  Gift,
  MousePointer2,
  CalendarDays,
  Video,
  Cpu,
  Users,
  Sparkles,
  Layers,
  ChevronRight,
  UserCheck,
  Loader2,
  ArrowRight,
  Target,
  Trophy
} from 'lucide-react';

// --- CONFIGURATION ---
const LOGO_URL = "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/5/new%20logo%20click%20ai%20(1).png";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvrhkOOA1dSzB_Ys4KQknAR6E6wjMz6lSDzev6tpZTlgB3BUmlvndbmmC9dwZUzREvRA/exec";
const ZALO_GROUP_URL = "https://zalo.me/g/axaqfu195";

const CURRICULUM = [
  {
    day: "01",
    title: "AI Contents & Video Automation",
    value: "5.000.000đ",
    icon: <Video size={24} />,
    modules: [
      { name: "Bí mật 3 bước xây dựng kênh bền vững", desc: "Nguyên lý xây kênh Social mà 99% creator nghiệp dư bỏ qua." },
      { name: "Tự động hóa xây video đa kênh", desc: "Tạo 100+ video mỗi tháng không cần camera hay editor." },
      { name: "5 phương thức kiếm tiền từ video", desc: "Chiến lược chuyển đổi Attention thành thu nhập thực tế." }
    ]
  },
  {
    day: "02",
    title: "AI Agent & Vibe Coding",
    value: "7.500.000đ",
    icon: <Cpu size={24} />,
    modules: [
      { name: "Kiến trúc AI Agents & Automation", desc: "Xây dựng hệ thống thông minh tự động làm việc thay bạn." },
      { name: "Build AI Agents & Vibe Coding", desc: "Nói cho AI những gì bạn muốn, AI sẽ viết giải pháp cho bạn." },
      { name: "Lộ trình ứng dụng $10K-$50K/tháng", desc: "Chi tiết quy trình triển khai giải pháp AI cho doanh nghiệp." }
    ]
  },
  {
    day: "03",
    title: "AI Coach & Trainer System",
    value: "10.000.000đ",
    icon: <Users size={24} />,
    modules: [
      { name: "AI Training - Quy trình Trainer 4.0", desc: "Scale mô hình đào tạo lên hàng ngàn người với chi phí tối thiểu." },
      { name: "Sức mạnh xây dựng cộng đồng", desc: "Tại sao Community là tài sản quý giá nhất trong kỷ nguyên AI." },
      { name: "MVP 90-Day Roadmap", desc: "Hành động beat sự hoàn hảo. Quy trình bắt đầu ngay hôm nay." }
    ]
  }
];

const SPEAKERS = [
  {
    name: "Nguyễn Thành Trung",
    role: "CMO/Co-founder ClickAi",
    image: "https://i.postimg.cc/tg0hGwwS/Anh-Trung.png",
    cropPos: "object-[center_15%]",
    bio: [
      "Khách mời chia sẻ về AI trên kênh truyền hình An ninh TV và VTV1",
      "Admin của Group Biết tuốt AI (hơn 20.000 thành viên)",
      "Sáng tạo nội dung Youtube TrungCaha ( hơn 40.000 người theo dõi)",
      "10 năm hoạt động đào tạo online với hơn 10.000 học viên",
      "Đào tạo hơn 60 khóa học AI: Giáo dục, May mặc, Thiết kế, Marketing,..."
    ]
  },
  {
    name: "Nguyễn Phước Vĩnh Hưng",
    role: "Founder Duhava Technology JSC",
    image: "https://i.postimg.cc/R0rcxyyP/Hung.png",
    cropPos: "object-[center_10%]",
    bio: [
      "Kinh nghiệm Kinh Doanh Online từ 2016",
      "500.000++ followers trên Social về AI, Kinh Doanh & Marketing",
      "Quản Trị Viên Group AI (300.000++ thành viên)",
      "Triển khai Marketing cho nhiều doanh nghiệp đa ngành hàng",
      "Đào tạo Inhouse cho HTV, FPT, Droppii, Phương Trường An Group..."
    ]
  }
];

const BONUSES = [
  { title: "50+ công cụ AI thực chiến", value: "2.500.000đ", icon: <Zap size={20} /> },
  { title: "Mẫu tự động hóa Copy-Paste", value: "5.000.000đ", icon: <MousePointer2 size={20} /> },
  { title: "Kế hoạch triển khai 90 ngày", value: "3.000.000đ", icon: <CalendarDays size={20} /> }
];

const TOTAL_VALUE = "33.000.000đ";

// --- COMPONENTS ---

interface AppleButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'black' | 'outline';
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const AppleButton = ({ 
  text, 
  subtext,
  onClick, 
  variant = 'primary', 
  className = '', 
  fullWidth = false, 
  loading = false, 
  icon 
}: AppleButtonProps) => {
  const base = "relative overflow-hidden flex flex-col items-center justify-center gap-0 rounded-full font-bold transition-all duration-300 active:scale-[0.98]";
  const styles = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0071E3] shadow-lg shadow-blue-500/20",
    secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
    black: "bg-[#1D1D1F] text-white hover:bg-[#000000]",
    outline: "bg-transparent border border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={loading}
      className={`${base} ${styles[variant as keyof typeof styles]} ${fullWidth ? 'w-full' : 'px-8'} py-4 ${className} disabled:opacity-70 group`}
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : (
        <>
          <span className="flex items-center gap-2">
            {text}
            {icon || <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
          </span>
          {subtext && <span className="text-[10px] opacity-70 font-medium mt-0.5 uppercase tracking-widest">{subtext}</span>}
        </>
      )}
    </button>
  );
};

const RegistrationModal = ({ isOpen, onClose, utm }: { isOpen: boolean; onClose: () => void; utm: string }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, utm })
      });
      setSuccess(true);
    } catch (err) {
      console.error("Lỗi đăng ký:", err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-black/5"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-apple-dark-gray hover:text-apple-black transition-colors">
              <XCircle size={32} />
            </button>
            
            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl font-extrabold tracking-tight text-apple-black">Giữ chỗ ngay</h2>
                  <p className="text-apple-blue text-sm font-bold uppercase tracking-wider italic">Ưu đãi miễn phí có hạn</p>
                </div>
                <div className="space-y-4">
                  {[
                    { key: 'name', label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                    { key: 'phone', label: "Số điện thoại (Zalo)", type: "tel", placeholder: "090xxxxxxx" },
                    { key: 'email', label: "Email nhận tài liệu", type: "email", placeholder: "abc@gmail.com" }
                  ].map((field) => (
                    <div key={field.key} className="space-y-1.5">
                      <label className="text-[12px] font-bold text-apple-dark-gray ml-2 uppercase tracking-wide">{field.label}</label>
                      <input 
                        required 
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.key]}
                        onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                        className="w-full bg-apple-gray rounded-2xl py-4 px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-medium" 
                      />
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <AppleButton text="Hoàn tất đăng ký" fullWidth loading={loading} />
                  <p className="text-[13px] text-center text-apple-black mt-6 font-bold leading-tight px-2">
                    * Lưu ý: Sau khi đăng ký thành công, bạn sẽ được mời vào Nhóm Zalo Kín để nhận link Zoom và các tài liệu quan trọng của Workshop.
                  </p>
                  <p className="text-[11px] text-center text-apple-dark-gray mt-4 flex items-center justify-center gap-1.5 font-semibold uppercase tracking-widest opacity-50">
                    <ShieldCheck size={14} className="text-green-500" /> Secure Connection
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 flex flex-col items-center gap-8">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-500" size={48} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-extrabold text-apple-black">Thành công!</h3>
                  <p className="text-apple-dark-gray font-medium text-lg text-center leading-tight">
                    Thông tin của bạn đã được ghi nhận. <br/>Vui lòng tham gia nhóm ngay để nhận link Zoom và tài liệu.
                  </p>
                </div>
                <div className="w-full space-y-4">
                  <a href={ZALO_GROUP_URL} target="_blank" className="flex items-center justify-center w-full bg-[#007AFF] text-white h-16 rounded-2xl font-bold text-lg hover:bg-[#0071E3] transition-all shadow-xl shadow-blue-500/20">
                    <MessageCircle className="mr-3" size={24} /> Tham gia Group Zalo Ngay
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utm, setUtm] = useState("Direct");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const params = new URLSearchParams(window.location.search);
    const tags = [];
    if (params.get('utm_source')) tags.push(`src:${params.get('utm_source')}`);
    if (params.get('utm_medium')) tags.push(`med:${params.get('utm_medium')}`);
    if (params.get('utm_campaign')) tags.push(`cam:${params.get('utm_campaign')}`);
    if (tags.length > 0) setUtm(tags.join(' | '));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} utm={utm} />

      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-center py-3 px-4 text-[13px] font-bold flex items-center justify-center gap-3 fixed top-0 w-full z-[110] border-b border-white/5">
        <span className="bg-apple-blue text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
        Workshop giới hạn 97 người. Ưu đãi hết hạn sau khi đủ số lượng.
      </div>

      <header className={`fixed top-11 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'translate-y-[-2px]' : ''}`}>
        <nav className={`max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full mt-3 border border-black/5 mx-4 md:mx-auto shadow-lg' : ''}`}>
          <div className="flex items-center gap-10">
            <img 
              src={LOGO_URL} 
              alt="Click AI" 
              className="h-7 md:h-10 object-contain cursor-pointer transition-transform hover:scale-105" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            />
            <div className="hidden md:flex gap-8 text-[13px] font-bold text-apple-black/70 uppercase tracking-widest">
              <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="hover:text-apple-blue transition-colors">Lộ trình</a>
              <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="hover:text-apple-blue transition-colors">Chuyên gia</a>
              <a href="#valuestack" onClick={(e) => scrollToSection(e, 'valuestack')} className="hover:text-apple-blue transition-colors">Ưu đãi</a>
            </div>
          </div>
          <AppleButton 
            text="Đăng ký FREE" 
            className="h-10 px-6 text-[13px]" 
            onClick={() => setModalOpen(true)} 
          />
        </nav>
      </header>

      <section className="hero-gradient pt-56 md:pt-72 pb-24 md:pb-40 px-6">
        <div className="max-w-[1100px] mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest"
          >
            <Target size={14} /> The AI Solopreneur Workshop 2025
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-[96px] font-black tracking-tighter text-apple-black leading-[0.95] uppercase"
          >
            Đừng chỉ dùng AI.<br/>
            <span className="text-apple-dark-gray/40">Hãy xây hệ thống.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="max-w-3xl mx-auto space-y-12"
          >
            <p className="text-xl md:text-3xl text-apple-dark-gray font-semibold leading-tight tracking-tight">
              Cài đặt một <span className="text-apple-black">hệ thống AI Workspace</span> để vận hành doanh nghiệp thay bạn 24/7. Giải phóng 80% thời gian.
            </p>
            <div className="flex flex-col items-center gap-8 pt-4">
              <AppleButton 
                text="Giữ chỗ miễn phí ngay" 
                className="px-16 py-6 text-2xl shadow-2xl" 
                onClick={() => setModalOpen(true)} 
              />
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-apple-dark-gray text-sm md:text-base font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={18} className="text-apple-blue" /> 19:30 – 21:00</span>
                <span className="flex items-center gap-2"><CalendarDays size={18} className="text-apple-blue" /> 05/01 – 07/01</span>
                <span className="flex items-center gap-2"><Users size={18} className="text-apple-blue" /> Nền tảng Zoom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gap" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-apple-black italic uppercase">The Gap.</h2>
            <div className="w-24 h-2 bg-apple-blue mx-auto rounded-full"></div>
            <p className="text-apple-dark-gray text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-tight">
              Khoảng cách giữa "Nỗ lực điên cuồng" và "Kết quả đột phá" chính là một hệ thống tự động.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apple-card p-10 md:p-16 border border-red-500/10 hover:border-red-500/30 shadow-sm">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-2xl">X</div>
                <div>
                  <h3 className="text-3xl font-black text-apple-black leading-none uppercase">THỰC TRẠNG</h3>
                  <p className="text-red-500 text-sm font-bold mt-1 uppercase tracking-widest italic">The Burnout Cycle</p>
                </div>
              </div>
              <ul className="space-y-8">
                {["Làm việc 12h/ngày vẫn dậm chân tại chỗ", "Tăng trưởng phụ thuộc hoàn toàn vào sức người", "Bị kẹt trong các tác vụ lặp đi lặp lại", "Không có thời gian để suy nghĩ chiến lược"].map((t, i) => (
                  <li key={i} className="flex items-start gap-5 text-apple-dark-gray font-bold text-lg leading-snug">
                    <XCircle size={24} className="text-red-400 mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="apple-card p-10 md:p-16 bg-[#1D1D1F] text-white shadow-2xl">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-apple-blue flex items-center justify-center text-white font-black text-2xl">✓</div>
                <div>
                  <h3 className="text-3xl font-black leading-none uppercase">MỤC TIÊU</h3>
                  <p className="text-apple-blue text-sm font-bold mt-1 uppercase tracking-widest italic">The Wealth System</p>
                </div>
              </div>
              <ul className="space-y-8">
                {["AI tự động hóa 80% quy trình vận hành", "Mở rộng quy mô doanh nghiệp không giới hạn", "Tập trung 100% vào sáng tạo & doanh thu", "Sở hữu cỗ máy kiếm tiền 24/7/365"].map((t, i) => (
                  <li key={i} className="flex items-start gap-5 font-bold text-lg text-white/90 leading-snug">
                    <CheckCircle2 size={24} className="text-apple-blue mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-padding px-6 bg-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-apple-black uppercase">Lộ trình thực chiến.</h2>
            <p className="text-apple-dark-gray text-xl font-bold uppercase tracking-widest">3 Buổi - 0% Lý thuyết - 100% Hành động</p>
          </div>
          
          <div className="space-y-10">
            {CURRICULUM.map((day, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm flex flex-col md:flex-row gap-16 group hover:shadow-2xl transition-all duration-700"
              >
                <div className="md:w-1/3 space-y-6">
                  <div className="inline-flex items-center gap-2 text-apple-blue font-black text-sm tracking-widest uppercase bg-apple-blue/5 px-4 py-2 rounded-full italic">
                    <Sparkles size={16} /> BUỔI {day.day}
                  </div>
                  <h3 className="text-4xl font-black text-apple-black leading-tight tracking-tighter italic">{day.title}</h3>
                  <div className="flex items-center gap-3 pt-4">
                    <span className="bg-green-100 text-green-700 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Giá trị: {day.value}</span>
                  </div>
                </div>
                <div className="md:w-2/3 grid gap-10">
                  {day.modules.map((m, i) => (
                    <div key={i} className="space-y-3 relative">
                      <h4 className="text-2xl font-black text-apple-black flex items-center gap-4">
                        <span className="text-apple-blue/20">0{i+1}</span> {m.name}
                      </h4>
                      <p className="text-apple-dark-gray pl-12 leading-relaxed font-bold text-lg">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="section-padding px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 text-apple-blue font-black text-sm tracking-widest uppercase mb-2">
              <UserCheck size={20} /> Expertise you can trust
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-apple-black uppercase">Diễn giả đồng hành.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {SPEAKERS.map((speaker, idx) => (
              <div key={idx} className="apple-card p-10 md:p-16 flex flex-col gap-12 border border-black/5 hover:border-apple-blue/20 transition-all shadow-sm">
                <div className="flex flex-col items-center text-center gap-8">
                  <div className="relative group/img flex-shrink-0 w-64 h-64">
                    <div className="absolute inset-0 bg-apple-blue rounded-[50px] rotate-6 opacity-5 group-hover/img:rotate-0 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-[50px] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[#F5F5F7]">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className={`absolute inset-0 w-full h-full object-cover ${speaker.cropPos} grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100`}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black text-apple-black tracking-tighter leading-none italic">{speaker.name}</h3>
                    <p className="text-apple-blue font-black tracking-widest text-sm uppercase italic">{speaker.role}</p>
                  </div>
                </div>
                
                <div className="space-y-5 border-t border-apple-border/20 pt-10">
                  {speaker.bio.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className="text-apple-blue mt-1 flex-shrink-0" />
                      <p className="text-apple-dark-gray font-bold leading-tight text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="valuestack" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#1D1D1F] rounded-[60px] text-white p-10 md:p-24 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-apple-blue/15 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-20 space-y-4">
                <Trophy className="mx-auto text-apple-blue mb-6" size={64} />
                <h2 className="text-5xl md:text-8xl font-black mb-4 italic tracking-tighter uppercase">The Stack.</h2>
                <p className="text-apple-dark-gray text-xl font-bold uppercase tracking-widest italic">Giá trị thực nhận tại Workshop</p>
              </div>

              <div className="space-y-4">
                {[...CURRICULUM, ...BONUSES].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-6 border-b border-white/5 hover:bg-white/5 px-6 rounded-2xl transition-colors group">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-apple-blue group-hover:scale-110 transition-transform">
                        {'icon' in item ? item.icon : <Gift size={24} />}
                      </div>
                      <span className="text-xl md:text-2xl font-black tracking-tight">{item.title}</span>
                    </div>
                    <span className="text-apple-dark-gray font-black tracking-tighter text-xl hidden md:block">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-24 text-center space-y-16">
                <div className="space-y-4">
                  <p className="text-apple-dark-gray text-sm font-black uppercase tracking-[0.3em]">TỔNG GIÁ TRỊ THỰC TẾ</p>
                  <div className="flex items-center justify-center">
                    <span className="strikethrough-apple text-5xl md:text-7xl font-black italic tracking-tighter">{TOTAL_VALUE}</span>
                  </div>
                </div>

                <div className="space-y-4 bg-white/5 p-12 rounded-[40px] border border-white/10">
                  <p className="text-apple-blue font-black uppercase tracking-[0.3em] text-lg">GIÁ TRỰC TIẾP HÔM NAY</p>
                  <h3 className="text-[100px] md:text-[180px] font-black leading-none tracking-tighter drop-shadow-2xl">FREE</h3>
                  <p className="text-apple-dark-gray font-bold italic uppercase tracking-widest">Dành cho 97 người hành động nhanh nhất</p>
                </div>

                <div className="pt-10 space-y-10">
                  <AppleButton 
                    text="Giữ chỗ miễn phí ngay" 
                    fullWidth 
                    className="py-10 text-3xl shadow-blue-500/40" 
                    onClick={() => setModalOpen(true)} 
                  />
                  <div className="flex flex-wrap justify-center gap-10 text-[13px] text-apple-dark-gray font-black uppercase tracking-widest">
                    <div className="flex items-center gap-3"><Clock size={18} /> 19:30 – 21:00</div>
                    <div className="flex items-center gap-3"><CalendarDays size={18} /> 05/01 – 07/01</div>
                    <div className="flex items-center gap-3 text-apple-blue"><Layers size={18} /> 97 Slots Only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 border-t border-apple-gray bg-apple-gray">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="space-y-6 text-center md:text-left">
            <img src={LOGO_URL} alt="Logo" className="h-8 grayscale opacity-40 mx-auto md:mx-0 hover:opacity-100 transition-opacity" />
            <p className="text-apple-dark-gray text-sm font-bold leading-relaxed tracking-tight uppercase">
              Copyright &copy; 2025 Click AI Architecture.<br/>
              Hệ thống AI cho thế hệ Solopreneur.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-[12px] font-black text-apple-dark-gray uppercase tracking-[0.2em]">
            <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="hover:text-apple-blue transition-colors">Lộ trình</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="hover:text-apple-blue transition-colors">Chuyên gia</a>
            <a href="#valuestack" onClick={(e) => scrollToSection(e, 'valuestack')} className="hover:text-apple-blue transition-colors">Ưu đãi</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}