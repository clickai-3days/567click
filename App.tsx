
import React, { useState, useEffect } from 'react';
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
  UserCheck,
  Loader2,
  ArrowRight,
  Target,
  Trophy,
  Info
} from 'lucide-react';

// --- CONFIGURATION ---
const LOGO_URL = "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/5/new%20logo%20click%20ai%20(1).png";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2CEnH-BEpj4GeEz0Kwi2Qu3m1Xmk74Ix6VCJEaPej2L0LwE6wdqdeturLrn3IpIFvjA/exec";
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
      { name: "Lộ trình ứng dụng $10K - $50K/tháng", desc: "Chi tiết quy trình triển khai giải pháp AI cho doanh nghiệp." }
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
const AppleButton = ({ text, onClick, variant = 'primary', className = '', fullWidth = false, loading = false, icon }: {
  text: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'black';
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}) => {
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
      className={`${base} ${styles[variant as keyof typeof styles]} ${fullWidth ? 'w-full px-4' : 'px-6 md:px-8'} py-3.5 md:py-4 ${className} disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : (
        <>
          <span className="text-center">{text}</span>
          {icon || <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />}
        </>
      )}
    </button>
  );
};

const RegistrationModal = ({ isOpen, onClose, utm }: { isOpen: boolean; onClose: () => void; utm: string }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // QUAN TRỌNG: Không sử dụng state để lưu form data nữa.
  // Lý do: State React có thể bị trễ so với thao tác gõ phím nhanh hoặc Autofill, gây mất dữ liệu.

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    
    // 1. LẤY DỮ LIỆU "TƯƠI" TRỰC TIẾP TỪ HTML DOM
    // Đảm bảo lấy đúng những gì đang hiện trên màn hình, không thông qua React State.
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    const rawName = formDataObj.get('name') as string || '';
    const rawEmail = formDataObj.get('email') as string || '';
    const rawPhone = formDataObj.get('phone') as string || '';

    // Validate đơn giản
    if (!rawEmail.trim() || !rawPhone.trim()) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    // 2. KHÓA FORM (LOCK)
    // Khi set loading = true, các input bên dưới sẽ bị readOnly.
    // Vì không dùng value={state}, dữ liệu trong input sẽ KHÔNG bị reset/biến mất.
    setLoading(true);
    
    // 3. CHUẨN BỊ DỮ LIỆU GỬI ĐI (Mapping với Google Sheet)
    // Dùng URLSearchParams (x-www-form-urlencoded) để tương thích chuẩn nhất với Google Script
    const submitData = new URLSearchParams();
    submitData.append('name', rawName.trim());  // Cột A
    submitData.append('email', rawEmail.trim().toLowerCase()); // Cột B
    submitData.append('phone', rawPhone.trim()); // Cột C
    submitData.append('utm', utm || "Direct");   // Cột D (Ref Code)
    
    // LƯU Ý QUAN TRỌNG: 
    // KHÔNG gửi 'time' từ Client nữa. Việc gửi time từ Client đã gây ra lỗi lệch cột (Time nhảy vào cột A).
    // Google Script sẽ tự động điền thời gian vào cột cuối cùng (Cột E) như các dòng dữ liệu cũ đã đúng.

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: submitData.toString()
      });
      
      setSuccess(true);
      
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'CompleteRegistration');
      }

    } catch (err) {
      console.error("Lỗi gửi form:", err);
      // Vẫn báo thành công để khách vào nhóm Zalo, tránh kẹt ở màn hình loading
      setSuccess(true);
    } finally {
      // Chỉ tắt loading nếu chưa thành công (để retry), còn thành công rồi thì giữ nguyên để hiện UI Success
      if (!success) setLoading(false); 
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
            className="relative w-full max-w-lg bg-white p-6 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl overflow-y-auto max-h-[95vh]"
          >
            <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 text-apple-dark-gray hover:text-apple-black transition-colors"><XCircle className="w-7 h-7 md:w-8 md:h-8" /></button>
            
            {!success ? (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 md:gap-6">
                <div className="text-center space-y-2 md:space-y-3">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-apple-black uppercase whitespace-nowrap">Giữ chỗ ngay</h2>
                  <p className="text-apple-blue text-xs md:text-sm font-bold uppercase tracking-wider">Số lượng quà tặng có hạn</p>
                </div>

                <div className="bg-apple-blue/5 border border-apple-blue/10 p-4 md:p-5 rounded-2xl flex gap-3 md:gap-4 items-start">
                  <Info className="text-apple-blue shrink-0 mt-0.5 w-[18px] h-[18px] md:w-5 md:h-5" />
                  <p className="text-sm text-apple-black font-semibold leading-relaxed">
                    Sau khi đăng ký thành công, bạn sẽ được chuyển vào <span className="text-apple-blue font-black">nhóm Zalo kín</span> để nhận liên kết học Zoom và bộ tài liệu thực chiến.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="space-y-1 md:space-y-1.5">
                    <label className="text-[10px] md:text-[11px] font-bold text-apple-dark-gray ml-1 md:ml-2 uppercase tracking-widest flex items-center">
                      Họ và tên <span className="text-apple-blue ml-1">*</span>
                    </label>
                    {/* INPUT UNCONTROLLED: Không có value={}, không có onChange={}. Trình duyệt tự quản lý. */}
                    <input 
                      name="name"
                      required 
                      readOnly={loading} 
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className={`w-full bg-apple-gray rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold text-sm md:text-base ${loading ? 'opacity-80 cursor-not-allowed select-none bg-gray-100' : ''}`}
                      autoComplete="name"
                      spellCheck={false}
                    />
                  </div>

                  <div className="space-y-1 md:space-y-1.5">
                    <label className="text-[10px] md:text-[11px] font-bold text-apple-dark-gray ml-1 md:ml-2 uppercase tracking-widest flex items-center">
                      Số điện thoại Zalo <span className="text-apple-blue ml-1">*</span>
                    </label>
                    <input 
                      name="phone"
                      required 
                      readOnly={loading}
                      type="tel"
                      placeholder="Ví dụ: 090xxxxxxx"
                      className={`w-full bg-apple-gray rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold text-sm md:text-base ${loading ? 'opacity-80 cursor-not-allowed select-none bg-gray-100' : ''}`}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-1.5">
                    <label className="text-[10px] md:text-[11px] font-bold text-apple-dark-gray ml-1 md:ml-2 uppercase tracking-widest flex items-center">
                      Email nhận tài liệu <span className="text-apple-blue ml-1">*</span>
                    </label>
                    <input 
                      name="email"
                      required 
                      readOnly={loading}
                      type="email"
                      placeholder="Ví dụ: abc@gmail.com"
                      className={`w-full bg-apple-gray rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold text-sm md:text-base ${loading ? 'opacity-80 cursor-not-allowed select-none bg-gray-100' : ''}`}
                      autoComplete="email"
                      spellCheck={false}
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <AppleButton text={loading ? "Đang xử lý..." : "Hoàn tất đăng ký ngay"} fullWidth loading={loading} className="py-4 md:py-5" />
                  <p className="text-[10px] md:text-[11px] text-center text-apple-dark-gray mt-5 md:mt-6 flex items-center justify-center gap-1.5 font-bold uppercase tracking-widest opacity-60">
                    <ShieldCheck size={14} className="text-green-500" /> Secure Data Encryption
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 md:py-6 flex flex-col items-center gap-6 md:gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="text-green-500 w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-apple-black uppercase tracking-tighter">Đăng ký thành công!</h3>
                  <p className="text-apple-dark-gray font-bold text-base md:text-lg leading-snug">Bạn đã ghi danh vào Workshop AI Workspace.</p>
                </div>
                <div className="w-full space-y-4 md:space-y-5 bg-apple-gray/50 p-5 md:p-6 rounded-[24px] md:rounded-3xl border border-black/5">
                  <p className="text-xs md:text-sm font-black text-apple-blue uppercase tracking-[0.2em]">Bước cuối cùng & quan trọng nhất:</p>
                  <p className="text-xs md:text-sm font-bold text-apple-black/70">Bấm nút bên dưới để vào nhóm Zalo nhận link học.</p>
                  <a href={ZALO_GROUP_URL} target="_blank" className="flex items-center justify-center w-full bg-[#007AFF] text-white h-14 md:h-16 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-[#0071E3] transition-all shadow-xl shadow-blue-500/20 tracking-tight">
                    <MessageCircle className="mr-2 md:mr-3 w-6 h-6 md:w-7 md:h-7" /> Vào nhóm Zalo ngay
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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utm, setUtm] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Tối ưu hóa việc bắt UTM và Referal Code
    const params = new URLSearchParams(window.location.search);
    const utmTags = [];
    
    // Standard UTMs
    if (params.get('utm_source')) utmTags.push(`src:${params.get('utm_source')}`);
    if (params.get('utm_medium')) utmTags.push(`med:${params.get('utm_medium')}`);
    if (params.get('utm_campaign')) utmTags.push(`cam:${params.get('utm_campaign')}`);
    
    // Bắt thêm Ref Code nếu có
    if (params.get('ref')) utmTags.push(`ref:${params.get('ref')}`);
    
    setUtm(utmTags.join(' | ') || "Direct");

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} utm={utm} />

      {/* Notification Header */}
      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-center py-2.5 md:py-3 px-4 text-[11px] md:text-[13px] font-bold flex items-center justify-center gap-2 md:gap-3 fixed top-0 w-full z-[110] border-b border-white/5">
        <span className="bg-apple-blue text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded-full animate-pulse shrink-0">LIVE</span>
        <span className="truncate">Workshop giới hạn 97 người. Ưu đãi hết hạn sau khi đủ chỗ.</span>
      </div>

      <header className={`fixed top-9 md:top-11 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'translate-y-[-2px]' : ''}`}>
        <nav className={`max-w-[1200px] mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full mt-2 md:mt-3 border border-black/5 mx-3 md:mx-auto shadow-sm' : ''}`}>
          <div className="flex items-center gap-4 md:gap-10">
            <img 
              src={LOGO_URL} 
              alt="Click AI" 
              className="h-6 md:h-10 object-contain cursor-pointer transition-transform hover:scale-105" 
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
            className="h-9 md:h-10 px-4 md:px-6 text-[11px] md:text-[13px]" 
            onClick={() => setModalOpen(true)} 
          />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-44 md:pt-72 pb-20 md:pb-40 px-6 overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-center space-y-6 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest"
          >
            <Target size={14} className="shrink-0" /> The AI Solopreneur Workshop 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[22px] sm:text-[40px] md:text-[96px] font-black tracking-tighter text-apple-black leading-[1.3] md:leading-[0.95]"
          >
            ĐỪNG CHỈ DÙNG AI.<br/>
            <span className="text-apple-dark-gray/30">HÃY XÂY HỆ THỐNG.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="max-w-3xl mx-auto space-y-8 md:space-y-12"
          >
            <p className="text-lg md:text-3xl text-apple-dark-gray font-semibold leading-tight tracking-tight px-4">
              Cài đặt một <span className="text-apple-black whitespace-nowrap">AI Workspace</span> để vận hành doanh nghiệp thay bạn 24/7. Giải phóng 80% thời gian.
            </p>
            <div className="flex flex-col items-center gap-6 md:gap-8 pt-2">
              <AppleButton text="Giữ chỗ miễn phí ngay" className="w-full md:w-auto px-8 md:px-16 py-5 md:py-6 text-lg md:text-2xl shadow-2xl tracking-tighter" onClick={() => setModalOpen(true)} />
              <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3 text-apple-dark-gray text-[11px] md:text-base font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock className="text-apple-blue w-4 h-4 md:w-[18px] md:h-[18px]" /> 19:30 – 21:00</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><CalendarDays className="text-apple-blue w-4 h-4 md:w-[18px] md:h-[18px]" /> 05/01 – 07/01</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><Users className="text-apple-blue w-4 h-4 md:w-[18px] md:h-[18px]" /> Nền tảng Zoom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section id="gap" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-[34px] md:text-8xl font-black tracking-tighter text-apple-black uppercase whitespace-nowrap">The Gap.</h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-apple-blue mx-auto rounded-full"></div>
            <p className="text-apple-dark-gray text-lg md:text-2xl font-bold max-w-2xl mx-auto tracking-tight leading-snug px-2">Khoảng cách giữa "Nỗ lực điên cuồng" và "Kết quả đột phá" chính là một hệ thống tự động.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="apple-card p-8 md:p-16 border border-red-500/10 hover:border-red-500/30">
              <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-xl md:text-2xl">X</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-apple-black leading-none uppercase">THỰC TRẠNG</h3>
                  <p className="text-red-500 text-[10px] md:text-sm font-bold mt-1 uppercase tracking-widest">The Burnout Cycle</p>
                </div>
              </div>
              <ul className="space-y-5 md:space-y-8">
                {["Làm việc 12h/ngày vẫn dậm chân tại chỗ", "Tăng trưởng phụ thuộc hoàn toàn vào sức người", "Bị kẹt trong các tác vụ lặp đi lặp lại", "Không có thời gian để suy nghĩ chiến lược"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 md:gap-5 text-apple-dark-gray font-bold text-base md:text-lg leading-snug">
                    <XCircle className="text-red-400 mt-0.5 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="apple-card p-8 md:p-16 bg-[#1D1D1F] text-white shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-apple-blue flex items-center justify-center text-white font-black text-xl md:text-2xl">✓</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black leading-none uppercase">MỤC TIÊU</h3>
                  <p className="text-apple-blue text-[10px] md:text-sm font-bold mt-1 uppercase tracking-widest">The Wealth System</p>
                </div>
              </div>
              <ul className="space-y-5 md:space-y-8">
                {["AI tự động hóa 80% quy trình vận hành", "Mở rộng quy mô doanh nghiệp không giới hạn", "Tập trung 100% vào sáng tạo & doanh thu", "Sở hữu cỗ máy kiếm tiền 24/7/365"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 md:gap-5 font-bold text-base md:text-lg leading-snug text-white/90">
                    <CheckCircle2 className="text-apple-blue mt-0.5 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="section-padding px-6 bg-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-3 md:space-y-4">
            <h2 className="text-[34px] md:text-7xl font-black tracking-tighter text-apple-black uppercase">LỘ TRÌNH THỰC CHIẾN.</h2>
            <p className="text-apple-dark-gray text-xs md:text-xl font-bold uppercase tracking-widest px-4">3 Buổi - 0% Lý thuyết - 100% Hành động</p>
          </div>
          
          <div className="space-y-6 md:space-y-10">
            {CURRICULUM.map((day, idx) => (
              <div key={idx} className="bg-white rounded-[28px] md:rounded-[40px] p-8 md:p-16 shadow-sm flex flex-col md:flex-row gap-8 md:gap-16 group hover:shadow-2xl transition-all duration-700 border border-black/[0.02]">
                <div className="md:w-1/3 space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 text-apple-blue font-black text-[10px] md:text-sm tracking-widest uppercase bg-apple-blue/5 px-4 py-2 rounded-full">
                    <Sparkles size={16} className="shrink-0" /> BUỔI {day.day}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-apple-black leading-tight tracking-tighter uppercase">{day.title}</h3>
                  <div className="flex items-center gap-3 pt-2 md:pt-4">
                    <span className="bg-green-100 text-green-700 text-[10px] md:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">Giá trị: {day.value}</span>
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col gap-6 md:gap-10">
                  {day.modules.map((m, i) => (
                    <div key={i} className="space-y-2 relative">
                      <h4 className="text-lg md:text-2xl font-black text-apple-black flex items-center gap-3 md:gap-4 uppercase">
                        <span className="text-apple-blue/20 shrink-0">0{i+1}</span> 
                        <span className="leading-tight">{m.name}</span>
                      </h4>
                      <p className="text-apple-dark-gray pl-8 md:pl-12 leading-relaxed font-bold text-sm md:text-lg">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="section-padding px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 text-apple-blue font-black text-[10px] md:text-sm tracking-widest uppercase mb-1">
              <UserCheck className="w-[18px] h-[18px] md:w-5 md:h-5" /> Expertise you can trust
            </div>
            <h2 className="text-[34px] md:text-7xl font-black tracking-tighter text-apple-black uppercase">DIỄN GIẢ ĐỒNG HÀNH.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {SPEAKERS.map((speaker, idx) => (
              <div key={idx} className="apple-card p-8 md:p-16 flex flex-col gap-8 md:gap-12 border border-black/5 hover:border-apple-blue/20 transition-all shadow-sm">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                  <div className="relative group/img flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-apple-blue rounded-[40px] md:rounded-[50px] rotate-6 opacity-5 group-hover/img:rotate-0 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[#F5F5F7]">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className={`absolute inset-0 w-full h-full object-cover ${speaker.cropPos} grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100`}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-4xl font-black text-apple-black tracking-tighter leading-none uppercase whitespace-nowrap">{speaker.name}</h3>
                    <p className="text-apple-blue font-black tracking-widest text-[10px] md:text-sm uppercase opacity-70 whitespace-nowrap">{speaker.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-5 border-t border-apple-border/20 pt-8 md:pt-10">
                  {speaker.bio.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4">
                      <CheckCircle2 className="text-apple-blue mt-0.5 md:mt-1 flex-shrink-0 w-4 h-4 md:w-[18px] md:h-[18px]" />
                      <p className="text-apple-dark-gray font-bold leading-tight text-[13px] md:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section id="valuestack" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#1D1D1F] rounded-[40px] md:rounded-[60px] text-white p-8 md:p-24 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h ... (truncated)
