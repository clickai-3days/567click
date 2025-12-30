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
// THAY LINK /EXEC MỚI CỦA BẠN VÀO ĐÂY SAU KHI DEPLOY "ANYONE"
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
      { name: "AI Training - Quy trình Trainer 4.0", desc: "Scale mô hình đào tạo lên hàng ngàn người với chi phí tối thiểu." },
      { name: "Sức mạnh xây dựng cộng đồng", desc: "Tại sao Community là tài sản quý giá nhất trong kỷ nguyên AI." },
      { name: "MVP 90-Day Roadmap", desc: "Hành động beat sự hoàn hảo. Quy trình bắt đầu ngay hôm nay." }
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
  const base = "relative overflow-hidden flex items-center justify-center gap-2 rounded-full font-black transition-all duration-300 active:scale-[0.98]";
  const styles = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0071E3] shadow-lg shadow-blue-500/20",
    secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
    black: "bg-[#1D1D1F] text-white hover:bg-[#000000]"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={loading}
      className={`${base} ${styles[variant as keyof typeof styles]} ${fullWidth ? 'w-full' : 'px-8'} py-4 ${className} disabled:opacity-70 group italic`}
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : (
        <>
          {text}
          {icon || <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
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

    // Chuẩn bị dữ liệu gửi đi (Gửi chữ "Trống" nếu người dùng không nhập gì để test connection)
    const params = new URLSearchParams();
    params.append('name', formData.name.trim() || "Test_No_Name");
    params.append('email', formData.email.trim() || "test@noemail.com");
    params.append('phone', formData.phone.trim() || "0000000000");
    params.append('utm', utm || "Direct");

    try {
      // Gửi POST tới Google Script với chế độ no-cors (Bắt buộc để chạy được)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      
      // Chuyển sang màn hình thành công
      setSuccess(true);
    } catch (err) {
      console.error("Lỗi gửi dữ liệu:", err);
      // Vẫn hiện thành công để khách hàng vào nhóm Zalo, tránh làm mất khách
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
                  <h2 className="text-4xl font-black tracking-tighter text-apple-black italic uppercase">Giữ chỗ ngay</h2>
                  <p className="text-apple-blue text-sm font-black uppercase tracking-widest italic">Ưu đãi miễn phí có hạn</p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-black text-apple-dark-gray ml-2 uppercase tracking-wide italic">Họ và tên</label>
                    <input 
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-apple-gray rounded-2xl py-4 px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-black text-apple-dark-gray ml-2 uppercase tracking-wide italic">Số điện thoại (Zalo)</label>
                    <input 
                      type="tel"
                      placeholder="090xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-apple-gray rounded-2xl py-4 px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-black text-apple-dark-gray ml-2 uppercase tracking-wide italic">Email nhận tài liệu</label>
                    <input 
                      type="email"
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-apple-gray rounded-2xl py-4 px-6 text-apple-black border border-transparent focus:border-apple-blue/30 outline-none focus:ring-4 focus:ring-apple-blue/5 transition-all font-bold" 
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <AppleButton text="Hoàn tất đăng ký" fullWidth loading={loading} />
                  <p className="text-[11px] text-center text-apple-dark-gray mt-6 flex items-center justify-center gap-1.5 font-black uppercase tracking-widest opacity-60 italic">
                    <ShieldCheck size={14} className="text-green-500" /> Hệ thống bảo mật 2 lớp
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 flex flex-col items-center gap-8">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="text-green-500" size={48} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-apple-black italic uppercase">Đăng ký thành công!</h3>
                  <p className="text-apple-dark-gray font-bold text-lg text-center leading-tight italic">
                    Tham gia nhóm Zalo bên dưới để nhận link Zoom và tài liệu Workshop 05/01.
                  </p>
                </div>
                <div className="w-full">
                  <a href={ZALO_GROUP_URL} target="_blank" className="flex items-center justify-center w-full bg-[#007AFF] text-white h-16 rounded-2xl font-black text-lg hover:bg-[#0071E3] transition-all shadow-xl shadow-blue-500/20 italic">
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
    
    // Thu thập UTM và ghép thành chuỗi Ref Code
    const params = new URLSearchParams(window.location.search);
    const tags = [];
    if (params.get('utm_source')) tags.push(`src:${params.get('utm_source')}`);
    if (params.get('utm_medium')) tags.push(`med:${params.get('utm_medium')}`);
    if (params.get('utm_campaign')) tags.push(`cam:${params.get('utm_campaign')}`);
    if (tags.length > 0) setUtm(tags.join(' | '));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} utm={utm} />

      {/* Top Bar */}
      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-center py-3 px-4 text-[13px] font-black flex items-center justify-center gap-3 fixed top-0 w-full z-[120] border-b border-white/5 min-h-[50px]">
        <span className="bg-apple-blue text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse flex-shrink-0 uppercase">LIVE</span>
        <span className="leading-tight uppercase tracking-tighter italic">Workshop giới hạn 97 người. Ưu đãi hết hạn sau khi đủ số lượng.</span>
      </div>

      {/* Hero Section */}
      <section className="hero-gradient pt-48 pb-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 italic"
          >
            <Target size={14} /> The AI Solopreneur Workshop 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[42px] sm:text-6xl md:text-[100px] font-black tracking-tighter text-apple-black leading-[0.9] uppercase mb-8 italic"
          >
            Đừng chỉ dùng AI.<br/>
            <span className="text-apple-dark-gray/40">Hãy xây hệ thống.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="max-w-3xl mx-auto space-y-10"
          >
            <p className="text-lg md:text-2xl text-apple-dark-gray font-black leading-tight tracking-tight uppercase italic">
              Cài đặt một <span className="text-apple-black">hệ thống AI Workspace</span> để vận hành doanh nghiệp thay bạn 24/7. Giải phóng 80% thời gian.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <AppleButton 
                text="Giữ chỗ miễn phí ngay" 
                className="w-full sm:w-auto px-16 py-6 text-2xl shadow-2xl" 
                onClick={() => setModalOpen(true)} 
              />
              
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-apple-dark-gray text-sm font-black uppercase tracking-widest italic">
                <span className="flex items-center gap-2"><Clock size={16} className="text-apple-blue" /> 19:30 – 21:00</span>
                <span className="flex items-center gap-2"><CalendarDays size={16} className="text-apple-blue" /> 05/01 – 07/01</span>
                <span className="flex items-center gap-2"><Users size={16} className="text-apple-blue" /> Zoom Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-6xl md:text-[120px] font-black tracking-tighter text-apple-black italic uppercase leading-none">The Gap.</h2>
            <div className="w-24 h-2 bg-apple-blue mx-auto rounded-full"></div>
            <p className="text-apple-dark-gray text-xl md:text-2xl font-black max-w-2xl mx-auto leading-tight italic uppercase">
              Khoảng cách giữa "Nỗ lực điên cuồng" và "Kết quả đột phá" chính là một hệ thống tự động.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apple-card p-10 md:p-16 border border-red-500/10 shadow-sm">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-3xl italic">X</div>
                <h3 className="text-3xl font-black text-apple-black uppercase italic">THỰC TRẠNG</h3>
              </div>
              <ul className="space-y-8">
                {["Làm việc 12h/ngày vẫn dậm chân tại chỗ", "Tăng trưởng phụ thuộc hoàn toàn vào sức người", "Bị kẹt trong các tác vụ lặp đi lặp lại", "Không có thời gian để suy nghĩ chiến lược"].map((t, i) => (
                  <li key={i} className="flex items-start gap-5 text-apple-dark-gray font-black text-lg italic uppercase tracking-tighter">
                    <XCircle size={24} className="text-red-400 mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="apple-card p-10 md:p-16 bg-[#1D1D1F] text-white shadow-2xl">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-apple-blue flex items-center justify-center text-white font-black text-3xl italic">✓</div>
                <h3 className="text-3xl font-black uppercase italic">MỤC TIÊU</h3>
              </div>
              <ul className="space-y-8">
                {["AI tự động hóa 80% quy trình vận hành", "Mở rộng quy mô doanh nghiệp không giới hạn", "Tập trung 100% vào sáng tạo & doanh thu", "Sở hữu cỗ máy kiếm tiền 24/7/365"].map((t, i) => (
                  <li key={i} className="flex items-start gap-5 font-black text-lg text-white/90 italic uppercase tracking-tighter">
                    <CheckCircle2 size={24} className="text-apple-blue mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding px-6 bg-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-apple-black uppercase italic">Lộ trình thực chiến.</h2>
            <p className="text-apple-dark-gray text-lg font-black uppercase tracking-widest italic">3 Buổi - 0% Lý thuyết - 100% Hành động</p>
          </div>
          
          <div className="space-y-10">
            {CURRICULUM.map((day, idx) => (
              <div key={idx} className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm flex flex-col md:flex-row gap-16 group hover:shadow-2xl transition-all duration-700">
                <div className="md:w-1/3 space-y-6">
                  <div className="inline-flex items-center gap-2 text-apple-blue font-black text-sm tracking-widest uppercase bg-apple-blue/5 px-4 py-2 rounded-full italic">
                    BUỔI {day.day}
                  </div>
                  <h3 className="text-4xl font-black text-apple-black leading-tight tracking-tighter italic uppercase">{day.title}</h3>
                </div>
                <div className="md:w-2/3 grid gap-10">
                  {day.modules.map((m, i) => (
                    <div key={i} className="space-y-2 relative">
                      <h4 className="text-2xl font-black text-apple-black flex items-center gap-4 uppercase italic">
                        <span className="text-apple-blue/20">0{i+1}</span> {m.name}
                      </h4>
                      <p className="text-apple-dark-gray pl-12 leading-relaxed font-black text-lg italic">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-apple-gray bg-apple-gray text-center md:text-left">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6">
            <img src={LOGO_URL} alt="Logo" className="h-8 grayscale opacity-40 mx-auto md:mx-0 hover:opacity-100 transition-opacity" />
            <p className="text-apple-dark-gray text-sm font-black leading-relaxed tracking-tight uppercase italic opacity-60">
              Copyright &copy; 2026 Click AI Architecture.<br/>
              Hệ thống AI cho thế hệ Solopreneur.
            </p>
          </div>
          <AppleButton 
            text="Đăng ký giữ chỗ miễn phí" 
            className="px-10 py-4 italic" 
            onClick={() => setModalOpen(true)} 
          />
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