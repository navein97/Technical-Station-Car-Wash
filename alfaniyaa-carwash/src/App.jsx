import { useState, useEffect } from 'react';
import { 
  CalendarCheck, 
  Phone, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Instagram, 
  Droplets, 
  Armchair, 
  Sparkles, 
  ChevronRight, 
  MessageCircle 
} from 'lucide-react';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(true);

  const translations = {
    en: {
      tagline: "The Art Station",
      status: "Open",
      premium_care: "Premium Care",
      hero_title: "Al Faniyaa Car Wash",
      hero_subtitle: "Professional detailing & washing services in East Industrial Area.",
      book_btn: "Book Appointment",
      daily: "Daily",
      location_label: "Location",
      location_text: "East Ind. Area, Opp. Al Shaheed Park",
      call_us: "Call Us",
      gallery: "Our Work",
      services_title: "Services",
      srv_wash: "Premium Wash",
      srv_wash_desc: "Foam, Rinse & Dry",
      srv_interior: "Interior Detail",
      srv_interior_desc: "Vacuum, Steam & Scent",
      srv_polish: "Polishing",
      srv_polish_desc: "Wax & Shine Protection",
      whatsapp_btn: "WhatsApp Us"
    },
    ar: {
      tagline: "المحطة الفنية",
      status: "مفتوح",
      premium_care: "عناية فائقة",
      hero_title: "المحطة الفنية لغسيل السيارات",
      hero_subtitle: "خدمات غسيل وتلميع احترافية في المنطقة الصناعية الشرق.",
      book_btn: "احجز موعدك",
      daily: "يومياً",
      location_label: "الموقع",
      location_text: "شرق الصناعية، مقابل حديقة الشهيد",
      call_us: "اتصل بنا",
      gallery: "معرض الصور",
      services_title: "خدماتنا",
      srv_wash: "غسيل بريميوم",
      srv_wash_desc: "رغوة، شطف وتجفيف",
      srv_interior: "تظيف داخلي",
      srv_interior_desc: "كنس، بخار وتعطير",
      srv_polish: "تلميع وحماية",
      srv_polish_desc: "تلميع وإزالة الخدوش",
      whatsapp_btn: "راسلنا واتساب"
    }
  };

  const t = (key) => translations[currentLang][key] || key;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const openWhatsapp = (msg) => {
    const phone = "96522433300";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 8 && hours < 22);
    };
    updateStatus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden transition-all duration-300">
      {/* Ambient Background */}
      <div className="ambient-glow"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-white/90 p-1 overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <img src="/logo.png" alt="Al Faniyaa Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base md:text-lg font-bold text-white leading-tight uppercase tracking-wider">Al Faniyaa</h1>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium">{t('tagline')}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 mr-4 text-sm font-medium text-gray-300">
              <a href="https://wa.me/96522433300" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('book_btn')}</a>
              <a href="#services" className="hover:text-white transition-colors">{t('services_title')}</a>
            </div>

            {/* Status Badge */}
            <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full ${isOpen ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'} border`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
              <span className={`text-xs font-semibold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>{t('status')}</span>
            </div>

            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="glass-button w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white hover:bg-white/20">
              <span>{currentLang === 'en' ? 'ع' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-32 px-4 max-w-7xl mx-auto w-full">
        
        {/* Hero Card */}
        <div className="relative w-full h-72 md:h-[500px] rounded-3xl overflow-hidden mb-8 shadow-2xl fade-in-up group">
          {/* Background Image */}
          <img 
            src="/hero-bg.jpg" 
            alt="Premium Car Wash" 
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="text-xs md:text-sm font-medium text-white">{t('premium_care')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-arabic leading-tight drop-shadow-lg">
              {t('hero_title')}
            </h2>
            <p className="text-sm md:text-lg text-gray-200 mb-6 line-clamp-2 max-w-2xl drop-shadow-md">
              {t('hero_subtitle')}
            </p>
            
            <div className="flex gap-3 md:max-w-md">
              <a href="https://wa.me/96522433300" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
                <CalendarCheck className="w-5 h-5" />
                <span>{t('book_btn')}</span>
              </a>
              <a href="tel:99779242" className="w-16 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 transition-colors shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 fade-in-up delay-100">
          {/* Time */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col items-start md:col-span-1">
            <div className="bg-blue-500/20 p-2.5 rounded-xl mb-3">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium mb-1 uppercase">{t('daily')}</span>
            <span className="text-base font-bold dir-ltr">8:00 AM - 10:00 PM</span>
          </div>

          {/* Location */}
          <a href="https://goo.gl/maps/oN3dFyKZ2nv" target="_blank" rel="noopener noreferrer" className="glass-panel p-5 rounded-2xl flex flex-col items-start active:scale-95 transition-transform cursor-pointer group md:col-span-2">
            <div className="bg-red-500/20 p-2.5 rounded-xl mb-3 group-hover:bg-red-500/30 transition-colors">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium mb-1 uppercase">{t('location_label')}</span>
            <span className="text-sm font-bold leading-snug">{t('location_text')}</span>
          </a>

          {/* Call Us */}
          <a href="tel:96522433300" className="glass-panel p-5 rounded-2xl flex flex-col items-start active:scale-95 transition-transform cursor-pointer group md:col-span-1">
            <div className="bg-green-500/20 p-2.5 rounded-xl mb-3 group-hover:bg-green-500/30 transition-colors">
              <PhoneCall className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium mb-1 uppercase">{t('call_us')}</span>
            <span className="text-base font-bold dir-ltr">+965 2243 3300</span>
          </a>
        </div>

        {/* Instagram / Visual Section */}
        <div className="mb-12 fade-in-up delay-200">
          <div className="flex justify-between items-end mb-6 px-1">
            <h3 className="text-2xl font-bold">{t('gallery')}</h3>
            <a href="https://www.instagram.com/alfaniyaa" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 flex items-center gap-1.5 hover:text-blue-300 font-medium">
              <Instagram className="w-4 h-4" /> @alfaniyaa
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-3 md:gap-6 h-32 md:h-64">
            {/* Image 1 */}
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="/gallery1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Luxury Cars" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Image 2 */}
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="/gallery2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Station Night" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Image 3 */}
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="/gallery3.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Interior" />
              <a href="https://www.instagram.com/alfaniyaa" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center backdrop-blur-[2px] hover:bg-black/70 transition-colors">
                <Instagram className="w-8 h-8 text-white mb-2" />
                <span className="text-sm font-bold text-white">View More</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div id="services" className="fade-in-up delay-300">
          <h3 className="text-2xl font-bold mb-6 px-1">{t('services_title')}</h3>
          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
            
            {/* Service 1 */}
            <div onClick={() => openWhatsapp('I am interested in Premium Wash')} className="glass-panel p-5 rounded-2xl flex md:flex-col md:items-start items-center justify-between cursor-pointer active:scale-[0.98] transition-all hover:bg-white/5 hover:border-white/20 group">
              <div className="flex items-center md:items-start gap-4 md:flex-col md:gap-6 w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
                  <Droplets className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg">{t('srv_wash')}</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{t('srv_wash_desc')}</p>
                </div>
              </div>
              <div className="md:self-end md:mt-4">
                <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Service 2 */}
            <div onClick={() => openWhatsapp('I am interested in Interior Detailing')} className="glass-panel p-5 rounded-2xl flex md:flex-col md:items-start items-center justify-between cursor-pointer active:scale-[0.98] transition-all hover:bg-white/5 hover:border-white/20 group">
              <div className="flex items-center md:items-start gap-4 md:flex-col md:gap-6 w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900 to-gray-900 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
                  <Armchair className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg">{t('srv_interior')}</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{t('srv_interior_desc')}</p>
                </div>
              </div>
              <div className="md:self-end md:mt-4">
                <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Service 3 */}
            <div onClick={() => openWhatsapp('I am interested in Polishing')} className="glass-panel p-5 rounded-2xl flex md:flex-col md:items-start items-center justify-between cursor-pointer active:scale-[0.98] transition-all hover:bg-white/5 hover:border-white/20 group">
              <div className="flex items-center md:items-start gap-4 md:flex-col md:gap-6 w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-900 to-gray-900 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg">{t('srv_polish')}</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{t('srv_polish_desc')}</p>
                </div>
              </div>
              <div className="md:self-end md:mt-4">
                <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Floating Contact Bar */}
      <div className="fixed bottom-0 w-full z-50 p-4 md:p-6 bg-gradient-to-t from-black via-black/95 to-transparent pb-8">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end gap-3">
          <a href="https://wa.me/96522433300" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3.5 px-6 rounded-xl shadow-lg transition-transform active:scale-95 w-full md:w-auto min-w-[200px]">
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>{t('whatsapp_btn')}</span>
          </a>
          <a href="tel:96522433300" className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white w-14 md:w-16 rounded-xl hover:bg-white/20 active:scale-95 shadow-lg">
            <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
