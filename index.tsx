
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
  UserCheck,
  Loader2,
  ArrowRight,
  Target,
  Trophy,
  Info
} from 'lucide-react';

// --- CONFIGURATION ---
const LOGO_URL = "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/5/new%20logo%20click%20ai%20(1).png";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXddF8lx9CWXYGiul6y7KCeD-BvqgRFakpj1Xt3LJUv29YNsc1ywzN7RrCGjixTWxbXQ/exec";
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
      { name: "AI Training - Quy trình Trainer 4.0", desc: "Scale mô hình đào tạo lên hàng ngàn người with chi phí tối thiểu." },
      { name: "Sức mạnh xây dựng cộng đồng", desc: "Tại sao Community là tài sản quý giá nhất trong kỷ nguyên AI." },
      { name: "MVP 90-Day Roadmap", desc: "Hành động vượt qua sự hoàn hảo. Quy trình bắt đầu ngay hôm nay." }
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
      "Khách mời chia sẻ về AI trên An ninh TV và VTV1",
      "Admin Group Biết tuốt AI (20.000+ TV)",
      "Sáng tạo nội dung Youtube TrungCaha (40.000+ sub)",
      "Đào tạo online cho hơn 10.000 học viên",
      "Hơn 60 khóa học AI thực chiến đa ngành"
    ]
  },
  {
    name: "Nguyễn Phước Vĩnh Hưng",
    role: "Founder Duhava Technology JSC",
    image: "https://i.postimg.cc/R0rcxyyP/Hung.png",
    cropPos: "object-[center_10%]",
    bio: [
      "Kinh nghiệm Kinh Doanh Online từ 2016",
      "500.000+ followers trên Social về AI & Marketing",
      "Quản Trị Viên Group AI (300.000+ TV)",
      "Triển khai Marketing đa ngành hàng",
      "Đào tạo Inhouse cho HTV, FPT, Droppii..."
    ]
  }
];

const BONUSES = [
  { title: "50+ công cụ AI thực chiến", value: "2.500.000đ", icon: <Zap size={20} /> },
  { title: "Mẫu tự động hóa Copy-Paste", value: "5.000.000đ", icon: <MousePointer2 size={20} /> },
  { title: "Kế hoạch triển khai 90 ngày", value: "3.000.000đ", icon: <CalendarDays size={20} /> }
];

const TOTAL_VALUE = "33.000.000đ";

const AppleButton = ({ text, onClick, variant = 'primary', className = '', fullWidth = false, loading = false, icon }: any) => {
  const base = "relative overflow-hidden flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-[0.98]";
  const styles = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0071E3] shadow-lg shadow-blue-500/20",
    secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
    black: "bg-[#1D1D1F] text-white hover:bg-[#000000]"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={loading}
      className={`${base} ${styles[variant as keyof typeof styles]} ${fullWidth ? 'w-full' : 'px-6 md:px-8'} py-3.5 md:py-4 ${className} disabled:opacity-70 group`}
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : (
        <>
          <span className="truncate">{text}</span>
          {icon || <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />}
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
    if (!formData.name || !formData.email || !formData.phone) return;
    setLoading(true);

    const body = new URLSearchParams();
    body.append('name', formData.name.trim());
    body.append('email', formData.email.trim());
    body.append('phone', formData.phone.trim());
    body.append('utm', utm || "Direct");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      setSuccess(true);
    } catch (err) {
      setSuccess(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-apple-dark-gray hover:text-apple-black transition-colors">
              <XCircle size={28} />
            </button>
            
            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-apple-black uppercase italic">Giữ chỗ ngay</h2>
                  <p className="text-apple-blue text-[12px] md:text-sm font-black uppercase tracking-widest italic">Ưu đãi miễn phí có hạn</p>
                </div>

                <div className="bg-apple-blue/5 border border-apple-blue/10 p-4 rounded-2xl flex gap-3 items-start">
                   <Info className="text-apple-blue shrink-0 mt-0.5" size={16} />
                   <p className="text-[12px] md:text-[13px] text-apple-black font-bold leading-tight">
                     Sau khi đăng ký, bạn sẽ vào <span className="text-apple-blue italic underline">Nhóm Zalo kín</span> nhận bộ quà 10.5M & link học Zoom trực tuyến.
                   </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-apple-dark-gray ml-2 uppercase tracking-widest">Họ và tên *</label>
                    <input required type="text" placeholder="Nguyễn Văn A" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-apple-gray rounded-xl py-3.5 px-5 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none transition-all font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-apple-dark-gray ml-2 uppercase tracking-widest">Số điện thoại Zalo *</label>
                    <input required type="tel" placeholder="090xxxxxxx" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-apple-gray rounded-xl py-3.5 px-5 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none transition-all font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-apple-dark-gray ml-2 uppercase tracking-widest">Email nhận tài liệu *</label>
                    <input required type="email" placeholder="abc@gmail.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-apple-gray rounded-xl py-3.5 px-5 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none transition-all font-bold text-sm" />
                  </div>
                </div>
                <div className="pt-2">
                  <AppleButton text="Đăng ký & Vào Zalo" fullWidth loading={loading} className="py-4 text-lg" />
                  <p className="text-[10px] text-center text-apple-dark-gray mt-4 font-bold flex items-center justify-center gap-2 uppercase tracking-tighter">
                    <ShieldCheck size={12} className="text-green-500" /> Bảo mật thông tin 100%
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="text-green-500" size={40} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-apple-black tracking-tighter uppercase italic">Thành công!</h3>
                  <div className="bg-apple-blue/5 p-5 rounded-2xl border border-apple-blue/10">
                    <p className="text-apple-black font-bold text-sm md:text-base leading-tight">
                      Bấm nút dưới đây để vào <span className="text-apple-blue italic underline">Nhóm Zalo kín</span> nhận quà & link học ngay.
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-4 pt-2">
                  <a href={ZALO_GROUP_URL} target="_blank" className="flex items-center justify-center w-full bg-[#007AFF] text-white h-16 rounded-2xl font-black text-lg hover:bg-[#0071E3] transition-all shadow-xl">
                    <MessageCircle className="mr-2" size={24} /> THAM GIA NHÓM ZALO
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
  const [utm, setUtm] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const params = new URLSearchParams(window.location.search);
    const utmTags = [];
    if (params.get('utm_source')) utmTags.push(`src:${params.get('utm_source')}`);
    if (params.get('utm_medium')) utmTags.push(`med:${params.get('utm_medium')}`);
    setUtm(utmTags.join(' | ') || "Direct");

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-apple-black selection:bg-apple-blue/10 overflow-x-hidden">
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} utm={utm} />

      {/* Scarcity Banner */}
      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-center py-2.5 px-4 text-[11px] md:text-[13px] font-black flex items-center justify-center gap-2 fixed top-0 w-full z-[1100] border-b border-white/5">
        <span className="bg-apple-blue text-white text-[9px] px-1.5 py-0.5 rounded-full animate-pulse">LIVE</span>
        Workshop giới hạn 97 người. <span className="text-apple-blue italic">Chỉ còn 12 chỗ trống.</span>
      </div>

      {/* Nav */}
      <header className={`fixed top-10 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'translate-y-[-2px]' : ''}`}>
        <nav className={`max-w-[1200px] mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full mt-2 border border-black/5 mx-3 md:mx-auto shadow-lg' : ''}`}>
          <div className="flex items-center gap-4 md:gap-10">
            <img src={LOGO_URL} alt="Logo" className="h-6 md:h-8 cursor-pointer object-contain" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
            <div className="hidden lg:flex gap-8 text-[12px] font-black text-apple-black/70 uppercase tracking-widest">
              <button onClick={() => scrollToSection('curriculum')} className="hover:text-apple-blue transition-colors">Lộ trình</button>
              <button onClick={() => scrollToSection('speakers')} className="hover:text-apple-blue transition-colors">Chuyên gia</button>
              <button onClick={() => scrollToSection('valuestack')} className="hover:text-apple-blue transition-colors">Ưu đãi</button>
            </div>
          </div>
          <AppleButton text="Đăng ký FREE" className="h-9 md:h-10 px-4 md:px-6 text-[11px] md:text-[13px]" onClick={() => setModalOpen(true)} />
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-40 md:pt-64 pb-20 md:pb-32 px-4 md:px-6 hero-gradient">
        <div className="max-w-[1100px] mx-auto text-center space-y-8 md:space-y-12">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-apple-blue/10 text-apple-blue px-4 md:px-6 py-2 rounded-full text-[11px] md:text-sm font-black uppercase tracking-widest italic">
            <Target size={14} /> The AI Solopreneur Workshop 2026
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-4xl sm:text-6xl md:text-[100px] font-black tracking-tighter leading-[1.1] md:leading-[0.9] uppercase italic break-words">
            ĐỪNG CHỈ DÙNG AI.<br/><span className="text-apple-dark-gray/30 not-italic">HÃY XÂY HỆ THỐNG.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            <p className="text-lg md:text-3xl text-apple-dark-gray font-bold leading-tight tracking-tight px-2">Cài đặt một <span className="text-apple-black italic underline decoration-apple-blue/30">AI Workspace</span> vận hành doanh nghiệp thay bạn 24/7.</p>
            <div className="flex flex-col items-center gap-10 md:gap-12">
              <AppleButton text="Giữ chỗ miễn phí ngay" className="py-6 md:py-8 px-8 md:px-16 text-xl md:text-3xl shadow-2xl w-full md:w-auto" onClick={() => setModalOpen(true)} />
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3 text-apple-dark-gray text-xs md:text-base font-black uppercase tracking-widest italic">
                <span className="flex items-center gap-2"><Clock size={16} className="text-apple-blue" /> 19:30 – 21:00</span>
                <span className="flex items-center gap-2"><CalendarDays size={16} className="text-apple-blue" /> 05/01 – 07/01</span>
                <span className="flex items-center gap-2"><Users size={16} className="text-apple-blue" /> Qua Zoom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section id="gap" className="py-20 md:py-40 px-4 md:px-6 border-t border-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-5xl md:text-[120px] font-black tracking-tighter italic uppercase text-apple-black">The Gap.</h2>
            <div className="w-20 md:w-32 h-2 md:h-3 bg-apple-blue mx-auto rounded-full"></div>
            <p className="text-apple-dark-gray text-lg md:text-2xl font-black max-w-2xl mx-auto uppercase italic tracking-tight pt-4">Nỗ lực điên cuồng và Kết quả đột phá.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="apple-card p-8 md:p-16 border border-red-500/10">
              <div className="flex items-center gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-2xl md:text-3xl italic">X</div>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">Thực trạng</h3>
                  <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] italic">The Burnout</p>
                </div>
              </div>
              <ul className="space-y-6 md:space-y-10">
                {["Làm việc 12h/ngày vẫn dậm chân", "Tăng trưởng phụ thuộc sức người", "Kẹt trong các tác vụ lặp lại", "Không có thời gian chiến lược"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 text-apple-dark-gray font-bold text-base md:text-xl leading-snug">
                    <XCircle size={22} className="text-red-400 mt-1 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="apple-card p-8 md:p-16 bg-[#1D1D1F] text-white shadow-2xl">
              <div className="flex items-center gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-apple-blue flex items-center justify-center text-white font-black text-2xl md:text-3xl italic">✓</div>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none italic text-white">Mục tiêu</h3>
                  <p className="text-apple-blue text-[10px] font-black uppercase tracking-[0.2em] italic">The Wealth</p>
                </div>
              </div>
              <ul className="space-y-6 md:space-y-10">
                {["AI tự động hóa 80% quy trình", "Quy mô doanh nghiệp không giới hạn", "Tập trung sáng tạo & doanh thu", "Cỗ máy kiếm tiền 24/7/365"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 font-bold text-base md:text-xl text-white/90 leading-snug">
                    <CheckCircle2 size={22} className="text-apple-blue mt-1 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 md:py-40 bg-apple-gray px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic">Lộ trình.</h2>
            <p className="text-apple-dark-gray text-xs md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic">3 Buổi - 100% Hành động</p>
          </div>
          <div className="space-y-6 md:space-y-10">
            {CURRICULUM.map((day, idx) => (
              <div key={idx} className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-sm flex flex-col md:flex-row gap-8 md:gap-16 group hover:shadow-xl transition-all">
                <div className="md:w-1/3 space-y-4">
                  <div className="inline-flex items-center gap-2 text-apple-blue font-black text-[10px] md:text-sm tracking-widest uppercase bg-apple-blue/5 px-4 py-2 rounded-full italic">
                    <Sparkles size={14} /> BUỔI {day.day}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black leading-tight tracking-tighter uppercase italic">{day.title}</h3>
                  <span className="inline-block bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase italic">Giá trị: {day.value}</span>
                </div>
                <div className="md:w-2/3 grid gap-8 md:gap-12 border-l border-apple-border/20 pl-6 md:pl-16">
                  {day.modules.map((m, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-lg md:text-2xl font-black flex items-center gap-3 md:gap-4 uppercase tracking-tighter italic"><span className="text-apple-blue/20">0{i+1}</span> {m.name}</h4>
                      <p className="text-apple-dark-gray leading-snug font-bold text-sm md:text-lg">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-20 md:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 text-apple-blue font-black text-[10px] md:text-sm tracking-widest uppercase italic"><UserCheck size={18} /> Diễn giả</div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic">Thực chiến.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {SPEAKERS.map((s, idx) => (
              <div key={idx} className="apple-card p-8 md:p-16 flex flex-col gap-10 border border-black/5">
                <div className="flex flex-col items-center md:flex-row md:items-center gap-6 md:gap-10 text-center md:text-left">
                  <img src={s.image} alt={s.name} className={`w-32 h-32 md:w-48 md:h-48 rounded-[32px] md:rounded-[50px] object-cover shadow-xl ${s.cropPos}`} />
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic">{s.name}</h3>
                    <p className="text-apple-blue font-black tracking-widest text-[11px] md:text-sm uppercase italic">{s.role}</p>
                  </div>
                </div>
                <ul className="space-y-4 md:space-y-6 border-t border-apple-border/20 pt-8">
                  {s.bio.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-apple-dark-gray font-bold text-sm md:text-lg leading-snug">
                      <CheckCircle2 size={16} className="text-apple-blue mt-1 flex-shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section id="valuestack" className="py-20 md:py-40 px-3 md:px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#1D1D1F] rounded-[40px] md:rounded-[60px] text-white p-6 md:p-24 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-apple-blue/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
            <div className="relative z-10 space-y-16 md:space-y-24">
              <div className="text-center space-y-4 md:space-y-6">
                {/* Fixed responsive size using Tailwind classes */}
                <Trophy className="mx-auto text-apple-blue w-[50px] h-[50px] md:w-[80px] md:h-[80px]" strokeWidth={1.5} />
                <h2 className="text-5xl md:text-[120px] font-black italic tracking-tighter uppercase leading-none italic">The Stack.</h2>
                <p className="text-apple-dark-gray text-xs md:text-xl font-black uppercase tracking-widest italic">Giá trị bạn nhận được</p>
              </div>
              <div className="space-y-4">
                {[...CURRICULUM, ...BONUSES].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-5 md:py-8 border-b border-white/5 hover:bg-white/5 px-4 md:px-8 rounded-2xl transition-colors">
                    <div className="flex items-center gap-4 md:gap-8 min-w-0">
                      <div className="text-apple-blue bg-white/5 p-2 md:p-4 rounded-xl italic shrink-0">{(item as any).icon || <Gift size={24} />}</div>
                      <span className="text-base md:text-3xl font-black tracking-tighter uppercase italic truncate">{item.title}</span>
                    </div>
                    <span className="text-apple-dark-gray font-black text-xs md:text-2xl hidden sm:block italic shrink-0 ml-4">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-12 md:space-y-20">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-apple-dark-gray text-[10px] md:text-sm font-black uppercase tracking-[0.3em]">TỔNG GIÁ TRỊ</p>
                  <div className="flex justify-center"><span className="strikethrough-apple text-4xl md:text-[100px] font-black italic tracking-tighter leading-none italic">{TOTAL_VALUE}</span></div>
                </div>
                <div className="bg-white/5 rounded-[32px] md:rounded-[50px] p-8 md:p-24 border border-white/10 space-y-6 md:space-y-10">
                  <p className="text-apple-blue font-black uppercase tracking-[0.3em] text-sm md:text-xl italic">HÔM NAY</p>
                  <h3 className="text-[70px] sm:text-[120px] md:text-[220px] font-black leading-none tracking-tighter uppercase italic drop-shadow-2xl italic">FREE</h3>
                  <AppleButton text="Đăng ký giữ chỗ ngay" fullWidth className="py-6 md:py-10 text-xl md:text-4xl mt-6 md:mt-12 shadow-2xl" onClick={() => setModalOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-32 px-4 md:px-6 border-t border-apple-gray bg-apple-gray">
        <div className="max-w-[1200px] mx-auto text-center space-y-12 md:space-y-16">
          <img src={LOGO_URL} alt="Logo" className="h-8 md:h-10 mx-auto grayscale opacity-40" />
          <h2 className="text-3xl md:text-[80px] font-black tracking-tighter uppercase italic text-apple-black italic leading-tight">SẴN SÀNG VẬN HÀNH?</h2>
          <div className="flex justify-center flex-wrap gap-8 md:gap-12 text-[10px] md:text-sm font-black uppercase tracking-widest text-apple-dark-gray italic">
            <button onClick={() => scrollToSection('curriculum')}>Lộ trình</button>
            <button onClick={() => scrollToSection('speakers')}>Chuyên gia</button>
            <button onClick={() => setModalOpen(true)} className="text-apple-blue underline underline-offset-8">Đăng ký</button>
          </div>
          <p className="pt-10 md:pt-24 text-apple-dark-gray text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] italic">Copyright &copy; 2026 Click AI Architecture.</p>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
