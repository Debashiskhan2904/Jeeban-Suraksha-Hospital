/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Calendar, 
  Stethoscope, 
  HeartPulse, 
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Ambulance,
  ChevronRight,
  Baby,
  Bone,
  Activity,
  Brain,
  Microscope,
  Dna,
  Sparkles,
  Search,
  LayoutGrid,
  ShieldCheck,
  Star,
  GraduationCap,
  Award,
  Quote,
  Bed,
  Sticker,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { ScrollToTop } from "./components/ScrollToTop";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Your Health, Our Mission",
    subtitle: "Compassionate care by expert specialists — always here for you.",
    cta: "Book Appointment",
    tag: "JEEBAN SURAKSHA"
  },
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Expert Doctors You Can Trust",
    subtitle: "A team of 50+ specialists dedicated to your well-being.",
    cta: "Meet Our Doctors",
    tag: "SPECIALIZED CARE"
  },
  {
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Advanced Care For Every Patient",
    subtitle: "State-of-the-art technology with a human touch.",
    cta: "Our Departments",
    tag: "TECHNOLOGY"
  },
  {
    image: "https://sudhahospitals.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femergency-overview.40fb9415.webp&w=3840&q=75",
    title: "Emergency Care 24 / 7",
    subtitle: "Rapid response teams ready around the clock, every day.",
    cta: "Emergency: 108",
    tag: "CRITICAL CARE"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "departments" | "dept-detail" | "doctors" | "contact" | "about">("home");
  const [deptType, setDeptType] = useState<"specialty" | "super">("specialty");
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: "Animesh Das",
      role: "Post-Surgery Patient",
      text: "The care I received at Jeeban Suraksha Hospital was exceptional. The surgical team was skilled, and the nursing staff was incredibly attentive during my recovery.",
      rating: 5,
      initial: "AD",
      dept: "General Surgery"
    },
    {
      name: "Priya Mukherjee",
      role: "Diagnostic Patient",
      text: "Highly impressed with their advanced facilities. The diagnostic reports were accurate and timely, and the staff guided me smoothly through the entire process.",
      rating: 5,
      initial: "PM",
      dept: "Radiology"
    },
    {
      name: "Susmita Sen",
      role: "Maternity Care",
      text: "Warm and caring atmosphere for maternity services. Dr. Priya Nair and the midwives made our first baby's arrival a truly special and safe experience.",
      rating: 5,
      initial: "SS",
      dept: "Obstetrics & Gynaecology"
    }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  const handleNewBooking = (data: any) => {
    setBookings(prev => [data, ...prev]);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    (window as any).onBookingConfirmed = handleNewBooking;
    return () => {
      delete (window as any).onBookingConfirmed;
    };
  }, []);

  useEffect(() => {
    if (currentPage !== "home") return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentPage, currentSlide]);

  // Navigation handler with smooth scroll support
  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden relative">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-maroon/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-coral/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[-5%] w-[30%] h-[30%] bg-blue-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Top Info Bar */}
      <div className="bg-maroon min-h-[32px] py-1 text-white px-4 md:px-10 text-[10px] md:text-[11px] font-medium flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 tracking-[0.5px] uppercase relative z-[60]" role="status" aria-label="Quick contact information">
        <div className="flex items-center space-x-4 md:space-x-6">
          <span className="flex items-center gap-2">Bankura, West Bengal, India</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a href="tel:+913242250123" className="flex items-center gap-1.5 hover:text-coral transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white">Emergency: +91 3242 250 123</a>
          <a href="mailto:info@js-hospital.com" className="hidden sm:flex items-center gap-1.5 hover:text-coral transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white">Email: info@js-hospital.com</a>
          <span className="hidden md:block">24/7 Support</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white h-16 md:h-20 flex items-center border-b border-gray-100">
        <nav className="w-full px-4 md:px-10 flex justify-between items-center" aria-label="Main navigation">
          {/* Logo */}
          <button 
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 md:gap-3 group text-left outline-none focus-visible:ring-2 focus-visible:ring-maroon p-1 rounded-lg"
            aria-label="Jeeban Suraksha Hospital Home"
          >
            <div className="relative">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-coral to-maroon rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg shadow-maroon/20 group-hover:rotate-12 transition-transform duration-300">
                <HeartPulse className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-white border-2 border-maroon rounded-full flex items-center justify-center">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-maroon rounded-full animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-base md:text-xl font-black tracking-tight text-navy leading-none block">JEEBAN SURAKSHA</span>
              <p className="text-[8px] md:text-[10px] font-bold text-maroon tracking-[0.2em] uppercase mt-0.5 md:mt-1">Multi-Specialty Hospital</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#444]">
            <button 
              onClick={() => navigateTo("home")}
              className={`${currentPage === "home" ? "text-maroon underline decoration-2 underline-offset-8" : "hover:text-maroon"} transition-colors cursor-pointer outline-none focus-visible:text-maroon focus-visible:underline`}
              aria-current={currentPage === "home" ? "page" : undefined}
            >
              Home
            </button>
            <div 
              className="relative"
              onMouseEnter={() => setIsDeptDropdownOpen(true)}
              onMouseLeave={() => setIsDeptDropdownOpen(false)}
            >
              <button 
                onClick={() => navigateTo("departments")}
                className={`${currentPage === "departments" || currentPage === "dept-detail" ? "text-maroon" : "hover:text-maroon"} transition-colors cursor-pointer flex items-center gap-1 group outline-none focus-visible:text-maroon`}
                aria-haspopup="true"
                aria-expanded={isDeptDropdownOpen}
              >
                Departments <ChevronDown className={`w-4 h-4 transition-transform ${isDeptDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isDeptDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-xl py-3 border border-slate-100 z-50 overflow-hidden"
                    role="menu"
                  >
                    {[
                      { id: "specialty", label: "Specialty Services" },
                      { id: "super", label: "Super Specialty" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setDeptType(item.id as any);
                          navigateTo("departments");
                          setIsDeptDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-all flex items-center gap-3 outline-none ${deptType === item.id && currentPage === "departments" ? "bg-slate-50 text-maroon" : "text-slate-600 hover:bg-slate-50 hover:text-maroon font-medium focus-visible:bg-slate-50 focus-visible:text-maroon"}`}
                        role="menuitem"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${deptType === item.id && currentPage === "departments" ? "bg-maroon" : "bg-slate-200"}`} />
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button 
              onClick={() => navigateTo("doctors")}
              className={`${currentPage === "doctors" ? "text-maroon underline decoration-2 underline-offset-8" : "hover:text-maroon"} transition-colors cursor-pointer outline-none focus-visible:text-maroon focus-visible:underline`}
              aria-current={currentPage === "doctors" ? "page" : undefined}
            >
              Our Doctors
            </button>
            {bookings.length > 0 && (
              <button 
                onClick={() => setIsMyBookingsOpen(true)}
                className="flex items-center gap-1.5 text-coral hover:text-maroon transition-colors font-bold relative outline-none focus-visible:text-maroon"
                aria-label={`My Bookings, ${bookings.length} current bookings`}
              >
                My Bookings
                <span className="absolute -top-1 -right-3 w-4 h-4 bg-coral text-white text-[9px] rounded-full flex items-center justify-center animate-bounce">
                  {bookings.length}
                </span>
              </button>
            )}
            <button 
              onClick={() => navigateTo("about")}
              className={`${currentPage === "about" ? "text-maroon underline decoration-2 underline-offset-8" : "hover:text-maroon"} transition-colors cursor-pointer font-semibold outline-none focus-visible:text-maroon focus-visible:underline`}
              aria-current={currentPage === "about" ? "page" : undefined}
            >
              About Us
            </button>
            <button 
              onClick={() => navigateTo("contact")}
              className={`${currentPage === "contact" ? "text-maroon underline decoration-2 underline-offset-8" : "hover:text-maroon"} transition-colors cursor-pointer outline-none focus-visible:text-maroon focus-visible:underline`}
              aria-current={currentPage === "contact" ? "page" : undefined}
            >
              Contact
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden xl:flex items-center bg-slate-100 rounded-lg px-3 py-2 text-slate-400 group hover:bg-slate-200 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-maroon"
              aria-label="Open search"
            >
               <Search className="w-4 h-4 mr-2" />
               <span className="text-xs mr-4">Search...</span>
               <div className="ml-2 bg-white px-1 rounded text-[9px] font-black tracking-tighter opacity-50 border border-slate-200 font-mono" aria-hidden="true">⌘K</div>
            </button>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-coral to-maroon text-white px-6 py-3 rounded-full text-sm font-black hover:shadow-xl hover:shadow-maroon/20 hover:scale-[1.02] transition-all outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-maroon rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="lg:hidden bg-white border-t border-slate-100 overflow-hidden absolute top-16 md:top-20 left-0 right-0 z-[100]"
        >
          <nav className="px-6 md:px-10 py-6 md:py-8 flex flex-col space-y-6 text-sm font-semibold text-[#444]" aria-label="Mobile menu">
            <button 
              onClick={() => { navigateTo("home"); setIsMenuOpen(false); }}
              className={`text-left outline-none focus-visible:text-maroon focus-visible:underline ${currentPage === "home" ? "text-maroon" : "hover:text-maroon"}`}
            >
              Home
            </button>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => { navigateTo("departments"); setIsMenuOpen(false); }}
                className={`text-left outline-none focus-visible:text-maroon ${currentPage === "departments" ? "text-maroon" : "hover:text-maroon"}`}
              >
                Departments
              </button>
              <div className="pl-4 flex flex-col space-y-3">
                <button 
                  onClick={() => { setDeptType("specialty"); navigateTo("departments"); setIsMenuOpen(false); }}
                  className={`text-left text-xs outline-none focus-visible:text-maroon ${deptType === "specialty" && currentPage === "departments" ? "text-maroon font-bold" : "text-slate-500 font-medium"}`}
                >
                  — Specialty Services
                </button>
                <button 
                  onClick={() => { setDeptType("super"); navigateTo("departments"); setIsMenuOpen(false); }}
                  className={`text-left text-xs outline-none focus-visible:text-maroon ${deptType === "super" && currentPage === "departments" ? "text-maroon font-bold" : "text-slate-500 font-medium"}`}
                >
                  — Super Specialty
                </button>
              </div>
            </div>
            <button 
              onClick={() => { navigateTo("doctors"); setIsMenuOpen(false); }}
              className={`text-left outline-none focus-visible:text-maroon ${currentPage === "doctors" ? "text-maroon" : "hover:text-maroon"}`}
            >
              Doctors
            </button>
            <button 
              onClick={() => { navigateTo("about"); setIsMenuOpen(false); }}
              className={`text-left outline-none focus-visible:text-maroon ${currentPage === "about" ? "text-maroon" : "hover:text-maroon"}`}
            >
              About Us
            </button>
            <button 
              onClick={() => { navigateTo("contact"); setIsMenuOpen(false); }}
              className={`text-left outline-none focus-visible:text-maroon ${currentPage === "contact" ? "text-maroon" : "hover:text-maroon"}`}
            >
              Contact
            </button>
            <button 
              onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
              className="bg-navy text-white px-6 py-3 rounded-sm text-sm font-bold w-full outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              Book Appointment
            </button>
          </nav>
        </motion.div>
      </header>

      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section with Moving Slices */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <motion.img 
              key={`img-${currentSlide}`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 ${currentSlide === 3 ? "bg-navy/65" : "bg-navy/40"}`} />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="max-w-[700px]"
            >
              <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
                <span className="text-white uppercase tracking-[2px] text-[10px] font-bold">
                  {slides[currentSlide].tag}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-[-2px] whitespace-pre-line">
                {slides[currentSlide].title.includes("24 / 7") ? slides[currentSlide].title.replace("24 / 7", "24\n/ 7") : slides[currentSlide].title}
              </h2>
              
              <p className="text-lg md:text-2xl text-white opacity-90 font-normal mb-8 md:mb-10 leading-[1.5] max-w-xl">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => {
                    const cta = slides[currentSlide].cta;
                    if (cta === "Book Appointment") setIsBookingOpen(true);
                    else if (cta === "Meet Our Doctors") navigateTo("doctors");
                    else if (cta === "Our Departments") { setDeptType("specialty"); navigateTo("departments"); }
                    else if (cta.includes("Emergency")) { window.location.href = 'tel:108'; }
                  }}
                  className="w-full sm:w-auto bg-coral text-white py-4 px-8 rounded-sm font-bold uppercase tracking-[1px] text-[13px] hover:opacity-90 transition-opacity"
                >
                  {slides[currentSlide].cta}
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+918918370240'}
                  className="w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border border-white/40 py-4 px-8 rounded-sm font-bold uppercase tracking-[1px] text-[13px] hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators / Navigation Dots */}
        <div className="absolute bottom-10 left-10 z-20 flex gap-3" role="tablist" aria-label="Slides">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative flex items-center justify-center p-2 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              role="tab"
              aria-selected={currentSlide === index}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div 
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                  ? "w-8 h-2 bg-white" 
                  : "w-2 h-2 bg-white/40 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter Overlay */}
        <div className="absolute top-10 right-10 z-20 hidden md:block">
           <span className="text-white font-mono text-sm tracking-widest opacity-60">
             0{currentSlide + 1} / 0{slides.length}
           </span>
        </div>
      </section>

      {/* Stats Bar */}
      <div id="stats" className="w-full bg-white h-[120px] flex items-center border-t border-gray-100 overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-4 min-w-[800px] w-full h-full">
          {[
            { label: "Specialists", value: "50+" },
            { label: "Happy Patients", value: "18K+" },
            { label: "Emergency Care", value: "24/7" },
            { label: "Hygienic Facility", value: "100%" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center border-r border-[#f0f0f0] last:border-r-0"
            >
              <span className="text-[32px] font-extrabold text-navy mb-1 leading-none">{item.value}</span>
              <span className="text-[12px] font-semibold text-[#666] uppercase tracking-[1.5px]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Header */}
      <section id="vision" className="relative py-24 bg-navy overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                      backgroundSize: '40px 40px' }} 
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-10">
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full mb-8">
              <span className="text-white uppercase tracking-[2px] text-[9px] font-bold">Jeeban Suraksha</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-extrabold font-serif text-white mb-6 tracking-tight">
             Mission & Vision
           </h2>
           <div className="w-16 h-[2px] bg-coral mx-auto mb-8" />
           <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic">
             "Guided by compassion, driven by excellence — our purpose and promise to every person we serve."
           </p>
        </div>
      </section>

      {/* Mission & Vision Details */}
      <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Our Mission Row */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-coral" />
                <span className="text-coral uppercase tracking-widest text-[10px] font-black">Our Mission</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold font-serif text-navy leading-[1.2] mb-8">
                Creating a <br /> 
                Compassionate Environment
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.8] font-medium max-w-lg">
                Our mission is to create a <strong className="text-navy font-extrabold underline decoration-coral/30">compassionate environment</strong> for each person entrusted to our care and to <strong className="text-navy font-extrabold">inspire hope and healing</strong> by helping those individuals achieve their highest level of well-being.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1 relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Mission Illustration" 
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Stats Overlay Popover */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-navy leading-none">10,000+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lives Touched</p>
                </div>
              </motion.div>
              {/* Background Blob Decorative */}
              <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Our Vision Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-maroon" />
                <span className="text-maroon uppercase tracking-widest text-[10px] font-black">Our Vision</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold font-serif text-navy leading-[1.2] mb-8">
                Becoming Your <br /> 
                Preferred Healthcare Partner
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.8] font-medium max-w-lg">
                Our vision is to become the <strong className="text-navy font-extrabold">preferred healthcare provider</strong> to each individual we serve. We commit to improving the lives of all people entrusted to our care through <strong className="text-maroon font-extrabold italic underline decoration-maroon/20">clinical excellence</strong> and extraordinary service offered in an atmosphere of <strong className="text-navy font-extrabold">compassion, hospitality</strong>, and respect for the dignity of every person.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                 <div className="mt-12">
                   <img 
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400&h=500" 
                      alt="Vision Step 1" 
                      className="w-full h-full object-cover rounded-[30px] border-4 border-white shadow-xl"
                      referrerPolicy="no-referrer"
                   />
                 </div>
                 <div className="relative">
                   <img 
                      src="https://sjra-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/02/10170227/CT-Technologist-Smiling-At-Patient-As-She-Starts-CT-Scan.webp" 
                      alt="Vision Step 2" 
                      className="w-full h-full object-cover rounded-[30px] border-4 border-white shadow-xl"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-maroon/10 rounded-[30px]" />
                 </div>
              </div>
              {/* Background Blob Decorative */}
              <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-maroon font-bold uppercase tracking-[3px] text-[10px] mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-navy leading-tight mb-6">
              Excellence in Every Detail <br/> of Your Care
            </h2>
            <p className="text-slate-500 text-base font-medium">
              We are committed to providing the highest quality healthcare through innovation, 
              expertise, and a deep-rooted sense of compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Advanced Technology",
                desc: "State-of-the-art diagnostic and treatment equipment for precision care.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Medical Team",
                desc: "Board-certified doctors and compassionate staff dedicated to your health.",
                color: "bg-maroon/5 text-maroon"
              },
              {
                icon: <HeartPulse className="w-8 h-8" />,
                title: "Patient-Centric Approach",
                desc: "Personalized care plans tailored specifically to your individual needs.",
                color: "bg-coral/10 text-coral"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Emergency Care",
                desc: "Rapid response teams ready around the clock, every single day.",
                color: "bg-navy/5 text-navy"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-maroon/20 hover:shadow-2xl hover:shadow-maroon/5 transition-all duration-500 text-center"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-maroon transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative Background Accents */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-coral/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-navy/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Hospital Highlights Section */}
      <section className="py-24 bg-slate-50/50" id="hospital-highlights">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-4">Hospital Highlights</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-coral to-maroon rounded-full mb-8" />
            <p className="text-slate-400 font-bold uppercase tracking-[4px] text-xs">WORLD-CLASS INFRASTRUCTURE AT YOUR SERVICE</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Advanced ICU / CCU",
                desc: "State-of-the-art critical care units with 24/7 monitoring and life support systems."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Pharmacy & Lab",
                desc: "Fully stocked pharmacy and advanced diagnostic laboratory available around the clock."
              },
              {
                icon: <Sticker className="w-8 h-8" />,
                title: "Cashless Support",
                desc: "Tie-ups with major TPA and insurance providers for hassle-free cashless treatments."
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Modern Rooms",
                desc: "A range of patient rooms from economy wards to premium private suites for comfort."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-sm border border-white hover:border-maroon/10 hover:shadow-2xl hover:shadow-maroon/5 p-10 rounded-[40px] flex gap-8 items-start transition-all group"
              >
                <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-maroon shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-navy mb-3 group-hover:text-maroon transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#800000 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 text-maroon font-bold uppercase tracking-[3px] text-[10px] mb-4">
                <div className="w-8 h-[2px] bg-maroon" />
                PATIENT VOICES
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-navy leading-tight">
                What Our Patients <br/> Are Saying
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-right">
                  <p className="text-2xl font-black text-navy leading-none mb-1">4.9/5</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Average Patient Rating</p>
                </div>
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative group flex flex-col h-full"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon/20 group-hover:text-maroon/40 transition-colors duration-500">
                  <Quote className="w-6 h-6 fill-current" />
                </div>
                
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
                </div>

                <p className="text-slate-600 text-base leading-[1.8] font-medium italic mb-8">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-maroon font-black text-sm border border-maroon/10 shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-navy uppercase tracking-wider">{review.name}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{review.dept}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Facilities Gallery (Added Photo Section) */}
      <section id="facilities" className="py-24 bg-white px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-coral font-bold uppercase tracking-[2px] text-[10px] mb-4">
                <div className="w-8 h-[1px] bg-coral" />
                Our Departmental Excellence
              </div>
              <h2 className="text-5xl font-extrabold font-serif text-navy leading-tight tracking-[-1px]">
                World-Class Facilities <br /> for Your Care
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-2 font-medium">
              We combine advanced medical technology with human compassion to provide the best healthcare services in Bankura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            {/* Large Feature Photo */}
            <motion.div 
               whileHover={{ scale: 0.99 }}
               className="md:col-span-8 group relative overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Modern Hospital Hallway"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h4 className="text-white font-bold text-xl mb-1">Advanced Diagnostics</h4>
                <p className="text-white/70 text-sm">equipped with the latest MRI and CT imaging technology.</p>
              </div>
            </motion.div>

            {/* Vertical Split Photos */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <img 
                  src="https://regalhospital.com/wp-content/uploads/2022/03/OPERATION-THEATRES.jpg"
                  alt="Operating Theater"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg mb-1">Surgical Suites</h4>
                  <p className="text-white/70 text-xs">Standardized modular OT with HEPA filters and advanced life support.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <img 
                  src="https://gnanow.org/upload/023/u2333/8/4/when-your-loved-one-is-in-the-intensive-care-unit-icu-photo-blog.webp"
                  alt="Patient Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg mb-1">Patient Wards</h4>
                  <p className="text-white/70 text-xs">Spacious, hygienic, and comfortable staying for rapid recovery.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Grid Row for More Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
             {[
               { img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400&h=300", title: "Pharmacy" },
               { img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400&h=300", title: "Reception" },
               { img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400&h=300", title: "Laboratory" },
               { img: "https://cpimg.tistatic.com/07408132/b/4/Hospital-Ambulance-Van.jpg", title: "Ambulance" }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ y: -5 }}
                 className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group"
               >
                 <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-navy/80 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">{item.title}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </motion.div>
  ) : currentPage === "contact" ? (
    <ContactContent />
  ) : currentPage === "about" ? (
    <AboutContent />
  ) : currentPage === "doctors" ? (
    <DoctorsContent onSelectDept={(id) => { setSelectedDeptId(id); setDeptType("specialty"); setCurrentPage("dept-detail"); }} />
  ) : currentPage === "departments" ? (
    <DepartmentsContent 
      type={deptType}
      onSelectDept={(id) => { setSelectedDeptId(id); setCurrentPage("dept-detail"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
    />
  ) : (
    <DepartmentDetailContent 
      deptId={selectedDeptId} 
      type={deptType}
      onBack={() => { setCurrentPage("departments"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
      onNavigate={(page) => setCurrentPage(page as any)}
      onOpenBooking={() => setIsBookingOpen(true)}
    />
  )}
</AnimatePresence>

<AnimatePresence>
  {isSearchOpen && (
    <SearchModal 
      isOpen={isSearchOpen} 
      onClose={() => setIsSearchOpen(false)}
      onNavigate={(page) => {
        setIsSearchOpen(false);
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onOpenBooking={() => {
        setIsSearchOpen(false);
        setIsBookingOpen(true);
      }}
    />
  )}
  {isBookingOpen && (
    <BookingModal 
      isOpen={isBookingOpen}
      onClose={() => setIsBookingOpen(false)}
    />
  )}
  {isMyBookingsOpen && (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="appointments-modal-title">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMyBookingsOpen(false)}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm" 
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[80vh]"
      >
        <div className="bg-navy p-6 text-white flex justify-between items-center">
          <div>
            <h2 id="appointments-modal-title" className="text-xl font-black flex items-center gap-2">
              <Calendar className="w-5 h-5 text-coral" />
              My Appointments
            </h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Found {bookings.length} reservations</p>
          </div>
          <button 
            onClick={() => setIsMyBookingsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Close appointments modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto bg-slate-50">
          <div className="space-y-4">
            {bookings.map((booking, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Appointment ID</p>
                    <p className="font-mono font-black text-navy">{booking.id}</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-emerald-100">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    {booking.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Doctor</p>
                      <p className="text-sm font-black text-navy">{booking.doctor || 'Specialist'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Schedule</p>
                      <p className="text-sm font-black text-navy">{booking.date} at {booking.time}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">JD</div>
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold">Booked on {booking.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-white">
          <button 
            onClick={() => setIsMyBookingsOpen(false)}
            className="w-full py-4 bg-maroon text-white font-black rounded-xl hover:bg-maroon/90 transition-all shadow-xl"
          >
            Close List
          </button>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>

        <ScrollToTop />
<Footer 
          onNavigate={navigateTo} 
          onSelectDept={(id, type) => {
            setDeptType(type);
            setSelectedDeptId(id);
            setCurrentPage("dept-detail");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

      {/* Floating Action Button */}
      <button 
        className="fixed bottom-8 right-8 z-[100] bg-maroon text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
        aria-label="Call Hospital"
        onClick={() => window.location.href = 'tel:+913242250123'}
      >
        <Phone className="w-6 h-6" />
      </button>

<style>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
  </div>
</div>
);
}

// Search Modal Component
function SearchModal({ isOpen, onClose, onNavigate, onOpenBooking }: { isOpen: boolean, onClose: () => void, onNavigate: (page: any) => void, onOpenBooking: () => void }) {
  const [query, setQuery] = useState("");

  const quickLinks = [
    { title: "Book Appointment", icon: Calendar, color: "text-maroon bg-rose-50 border-rose-100", action: onOpenBooking },
    { title: "Find a Doctor", icon: Users, color: "text-slate-400 bg-slate-50 border-slate-100", action: () => onNavigate("doctors") },
    { title: "Departments", icon: LayoutGrid, color: "text-slate-400 bg-slate-50 border-slate-100", action: () => onNavigate("departments") },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 sm:px-0" role="dialog" aria-modal="true" aria-labelledby="search-modal-title">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
      >
        <h2 id="search-modal-title" className="sr-only">Search our hospital services</h2>
        {/* Search Input Area */}
        <div className="flex items-center px-6 h-16 border-b border-slate-100">
          <Search className="w-6 h-6 text-maroon mr-4 shrink-0" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search doctors, departments, services..." 
            className="w-full h-full bg-transparent border-none outline-none text-base text-navy placeholder:text-slate-400 font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search term"
          />
          <div className="flex items-center gap-2 ml-4 shrink-0">
            <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-1 rounded font-bold uppercase tracking-widest border border-slate-200" aria-hidden="true">ESC</span>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 outline-none focus-visible:ring-2 focus-visible:ring-maroon" aria-label="Close search">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="mb-0">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-4">Quick Links</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, idx) => (
                <button 
                  key={idx}
                  onClick={link.action}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${link.color.split(' ').slice(2).join(' ')} ${link.color.split(' ').slice(1,2).join(' ')} hover:opacity-80 transition-all text-left group`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${link.color.split(' ').slice(0,1).join(' ')} shadow-sm group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-navy">{link.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center bg-white border border-slate-200 rounded px-1 group shadow-sm py-0.5">
               <ChevronUp className="w-3 h-3 text-slate-400" />
               <ChevronDown className="w-3 h-3 text-slate-400" />
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[9px] font-bold text-slate-400 shadow-sm">Enter</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[9px] font-bold text-slate-400 shadow-sm">Esc</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Close</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Booking Modal Component
function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const departments = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Gynecology", "Dermatology", "Gastroenterology", "Ophthalmology", "Urology", "Dental", "Internal Medicine", "General Surgery", "Pulmonology"
  ].sort();

  const doctors = [
    { name: "Dr. BASHAR IMAM AHMAD", dept: "Internal Medicine" },
    { name: "Dr. ARINDAM CHATTERJEE", dept: "Gastroenterology" },
    { name: "Dr. RAJA BANDOPADHYAY", dept: "Internal Medicine" },
    { name: "Dr. ASHOK KUMAR SINGH", dept: "General Surgery" },
    { name: "Dr. TARASANKAR GHOSH", dept: "General Surgery" },
    { name: "Dr. Priya Nair", dept: "Gynecology" },
    { name: "Dr. Anil Verma", dept: "Orthopedics" },
    { name: "Dr. S. K. Gupta", dept: "Cardiology" },
    { name: "Dr. Vikram Seth", dept: "Neurology" },
    { name: "Dr. Sanjay Gupta", dept: "Oncology" },
    { name: "Dr. Vikash Singh", dept: "Dental" },
    { name: "Dr. Meera Krishnan", dept: "Neurology" },
    { name: "Dr. Rahul Varma", dept: "Urology" },
    { name: "Dr. Anjali Gupta", dept: "Ophthalmology" },
    { name: "Dr. Sunita Roy", dept: "Gynecology" },
    { name: "Dr. Amit Roy", dept: "Cardiology" },
    { name: "Dr. Neha Sharma", dept: "Dermatology" },
    { name: "Dr. Mohan Das", dept: "Pulmonology" },
    { name: "Dr. Ramesh Nair", dept: "Pediatrics" },
    { name: "Dr. Kavitha Iyer", dept: "Oncology" },
  ];

  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const filteredDoctors = doctors.filter(d => !formData.department || d.dept === formData.department);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add to local bookings
    const bookingId = `JS-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    if (typeof window !== 'undefined' && (window as any).onBookingConfirmed) {
      (window as any).onBookingConfirmed({
        ...formData,
        id: bookingId,
        status: 'Confirmed',
        timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
      });
    }

    setLoading(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setStep(1);
      setFormData({ department: "", doctor: "", date: "", time: "", name: "", email: "", phone: "", message: "" });
    }, 5000); // Give user time to see success
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-0" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
      >
        {isSuccess ? (
          <div className="p-12 text-center" role="status" aria-live="polite">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-25" aria-hidden="true" />
              <Activity className="w-12 h-12 text-emerald-600" />
            </motion.div>
            <h2 id="booking-modal-title" className="text-3xl font-black text-navy mb-4 italic">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-navy">{formData.name}</span>. Your appointment with <span className="font-bold text-maroon">{formData.doctor || 'a specialist'}</span> has been successfully scheduled.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">Appointment ID</p>
                  <p className="font-mono font-black text-navy">{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">Status</p>
                  <p className="text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
                    Pending Verification
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">Date</p>
                  <p className="text-navy font-bold">{formData.date}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">Time</p>
                  <p className="text-navy font-bold">{formData.time}</p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs mb-8">A confirmation email has been sent to {formData.email}</p>
            <button 
              onClick={onClose}
              className="w-full bg-navy text-white font-black py-4 rounded-xl hover:bg-navy/90 transition-all shadow-lg active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              Done
            </button>
          </div>
        ) : (
          <>
      <LoadingOverlay isLoading={loading} message="Securing your appointment..." />
            <div className="flex flex-col h-full max-h-[90vh]">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 id="booking-modal-title" className="text-xl font-black text-navy tracking-tight">Book Appointment</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Step {step} of 3</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-maroon" aria-label="Close booking modal">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Steps */}
            <div className="p-8 overflow-y-auto">
              <form id="booking-form" onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="dept-field" className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Department</label>
                      <select 
                        id="dept-field"
                        required
                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                      >
                        <option value="">-- Choose Department --</option>
                        {departments.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="doctor-field" className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Doctor (Optional)</label>
                      <select 
                        id="doctor-field"
                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                        value={formData.doctor}
                        onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                      >
                        <option value="">-- Choose Specialist --</option>
                        {filteredDoctors.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="date-field" className="text-xs font-black text-slate-400 uppercase tracking-widest">Appointment Date</label>
                      <input 
                        id="date-field"
                        required
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2" role="group" aria-labelledby="time-label">
                      <span id="time-label" className="text-xs font-black text-slate-400 uppercase tracking-widest block">Preferred Time Slot</span>
                      <div className="grid grid-cols-3 gap-2">
                        {times.map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({...formData, time: t})}
                            className={`py-2 px-3 rounded-lg text-[11px] font-black tracking-tight border transition-all outline-none focus-visible:ring-2 focus-visible:ring-maroon ${formData.time === t ? "bg-maroon text-white border-maroon" : "bg-white text-slate-600 border-slate-200 hover:border-maroon/30"}`}
                            aria-pressed={formData.time === t}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name-field" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Patient Name</label>
                        <input 
                          id="name-field"
                          required
                          type="text"
                          placeholder="Your full name"
                          className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="phone-field" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          id="phone-field"
                          required
                          type="tel"
                          placeholder="+91"
                          className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email-field" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        id="email-field"
                        required
                        type="email"
                        placeholder="email@example.com"
                        className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm font-bold text-navy outline-none focus:border-maroon transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="message-field" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Additional Notes (Optional)</label>
                      <textarea 
                        id="message-field"
                        rows={2}
                        placeholder="Briefly describe your health concern..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-medium text-navy outline-none focus:border-maroon transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
              {step > 1 && (
                <button 
                  onClick={prevStep}
                  disabled={loading}
                  className="flex-1 h-12 bg-white border border-slate-200 text-navy font-bold rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button 
                  onClick={nextStep}
                  className="flex-[2] h-12 bg-maroon text-white font-bold rounded-lg shadow-lg shadow-maroon/20 hover:scale-[1.02] transition-transform"
                >
                  Continue
                </button>
              ) : (
                <button 
                  form="booking-form"
                  type="submit"
                  disabled={loading}
                  className="flex-[2] h-12 bg-maroon text-white font-bold rounded-lg shadow-lg shadow-maroon/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Confirm Appointment <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </div>
        </>
      )}
      </motion.div>
    </div>
  );
}

// Separate component for Doctors Page content
function DoctorsContent({ onSelectDept }: { onSelectDept: (id: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");

  const allDoctors = [
    { 
      name: "Dr. BASHAR IMAM AHMAD", 
      degree: "M.B.B.S., M.D.", 
      dept: "Internal Medicine", 
      initial: "BA", 
      color: "bg-orange-500", 
      border: "border-orange-500",
      education: "M.B.B.S. (AIIMS), M.D. (CMC Vellore)",
      expertise: ["Diabetes Management", "Hypertension", "Geriatric Care"],
      reviews: 4.9,
      exp: "25+ Years",
      deptId: "GEN-MED"
    },
    { 
      name: "Dr. ARINDAM CHATTERJEE", 
      degree: "M.B.B.S., M.D.", 
      dept: "Gastroenterology", 
      initial: "AC", 
      color: "bg-purple-600", 
      border: "border-purple-600",
      education: "M.D. (Medicine), Post Doctoral Fellowship (Gastro)",
      expertise: ["Endoscopy", "Liver Disease", "ERCP"],
      reviews: 4.8,
      exp: "20+ Years",
      deptId: "GASTRO"
    },
    { 
      name: "Dr. RAJA BANDOPADHYAY", 
      degree: "M.B.B.S., M.D.", 
      dept: "Internal Medicine", 
      initial: "RB", 
      color: "bg-orange-500", 
      border: "border-orange-500",
      education: "M.D. (R.G. Kar Medical College)",
      expertise: ["Critical Care", "Infectious Diseases", "Lifestyle Medicine"],
      reviews: 4.7,
      exp: "19+ Years",
      deptId: "GEN-MED"
    },
    { 
      name: "Dr. ASHOK KUMAR SINGH", 
      degree: "M.B.B.S., M.S.", 
      dept: "General Surgery", 
      initial: "AS", 
      color: "bg-blue-600", 
      border: "border-blue-600",
      education: "M.S. (Surgery), FIAGES (Laparoscopy)",
      expertise: ["Laparoscopic Surgery", "Trauma Surgery", "Hernia Repair"],
      reviews: 4.9,
      exp: "22+ Years",
      deptId: "GEN"
    },
    { 
      name: "Dr. TARASANKAR GHOSH", 
      degree: "M.B.B.S., M.S.", 
      dept: "General Surgery", 
      initial: "TG", 
      color: "bg-teal-500", 
      border: "border-teal-500",
      education: "M.S. (IPGMER, Kolkata)",
      expertise: ["Minimally Invasive Surgery", "Appendix", "Gallbladder"],
      reviews: 4.8,
      exp: "18+ Years",
      deptId: "GEN"
    },
    { 
      name: "Dr. Priya Nair", 
      degree: "M.D., D.G.O", 
      dept: "Gynecology", 
      initial: "PN", 
      color: "bg-pink-500", 
      border: "border-pink-500",
      education: "M.D. (Obstetrics & Gynaecology)",
      expertise: ["High-Risk Pregnancy", "Laparoscopic Gyne Surgery", "Infertility"],
      reviews: 4.9,
      exp: "16+ Years",
      deptId: "OBG"
    },
    { 
      name: "Dr. Anil Verma", 
      degree: "M.S., M.Ch", 
      dept: "Orthopedics", 
      initial: "AV", 
      color: "bg-blue-700", 
      border: "border-blue-700",
      education: "M.Ch (Orthopaedics, AIIMS)",
      expertise: ["Joint Replacement", "Spine Surgery", "Arthroscopy"],
      reviews: 4.9,
      exp: "21+ Years",
      deptId: "ORTH"
    },
    { 
      name: "Dr. S. K. Gupta", 
      degree: "M.D., D.M.", 
      dept: "Cardiology", 
      initial: "SK", 
      color: "bg-red-600", 
      border: "border-red-600",
      education: "D.M. (Cardiology, GB Pant Hospital)",
      expertise: ["Interventional Cardiology", "Angioplasty", "Echo"],
      reviews: 4.9,
      exp: "18+ Years",
      deptId: "CARD"
    },
    { 
      name: "Dr. Vikram Seth", 
      degree: "M.D., D.M.", 
      dept: "Neurology", 
      initial: "VS", 
      color: "bg-purple-700", 
      border: "border-purple-700",
      education: "D.M. (Neurology, NIMHANS)",
      expertise: ["Stroke Management", "Epilepsy", "Neuro-immunology"],
      reviews: 4.8,
      exp: "15+ Years",
      deptId: "NEURO"
    },
    { 
      name: "Dr. Sanjay Gupta", 
      degree: "M.S., M.Ch", 
      dept: "Oncology", 
      initial: "SG", 
      color: "bg-emerald-600", 
      border: "border-emerald-600",
      education: "M.Ch (Surgical Oncology, Tata Memorial)",
      expertise: ["Head & Neck Oncology", "Breast Cancer Surgery", "Thoracic Oncology"],
      reviews: 4.9,
      exp: "19+ Years",
      deptId: "S-ONC"
    },
    { 
      name: "Dr. Vikash Singh", 
      degree: "B.D.S., M.D.S.", 
      dept: "Dental", 
      initial: "VS", 
      color: "bg-yellow-500", 
      border: "border-yellow-500",
      education: "M.D.S. (Orthodontics)",
      expertise: ["Cosmetic Dentistry", "Implants", "Root Canal"],
      reviews: 4.7,
      exp: "15+ Years",
      deptId: "DENT"
    },
    { 
      name: "Dr. Meera Krishnan", 
      degree: "M.D., D.M.", 
      dept: "Neurology", 
      initial: "MK", 
      color: "bg-purple-700", 
      border: "border-purple-700",
      education: "D.M. (Neurology, NIMHANS)",
      expertise: ["Neuro-immunology", "Headache Management", "Sleep Medicine"],
      reviews: 4.8,
      exp: "14+ Years",
      deptId: "NEURO"
    },
    { 
      name: "Dr. Rahul Varma", 
      degree: "M.S., M.Ch", 
      dept: "Urology", 
      initial: "RV", 
      color: "bg-blue-500", 
      border: "border-blue-500",
      education: "M.Ch (Urology, AIIMS)",
      expertise: ["Kidney Stones", "Prostate Care", "Lap Urology"],
      reviews: 4.9,
      exp: "13+ Years",
      deptId: "URO"
    },
    { 
      name: "Dr. Anjali Gupta", 
      degree: "M.B.B.S., M.S.", 
      dept: "Ophthalmology", 
      initial: "AG", 
      color: "bg-indigo-500", 
      border: "border-indigo-500",
      education: "M.S. (Ophthalmology, IPGMER)",
      expertise: ["Cataract Specialist", "Lasik Surgeon", "Glaucoma"],
      reviews: 4.8,
      exp: "11+ Years",
      deptId: "EYE"
    },
    { 
      name: "Dr. Sunita Roy", 
      degree: "M.B.B.S., M.S.", 
      dept: "Gynecology", 
      initial: "SR", 
      color: "bg-pink-500", 
      border: "border-pink-500",
      education: "M.S. (OBG, Medical College Kolkata)",
      expertise: ["Prenatal Care", "Adolescent Gynaecology", "Vaginal Delivery"],
      reviews: 4.7,
      exp: "12+ Years",
      deptId: "OBG"
    },
    { 
      name: "Dr. Amit Roy", 
      degree: "M.D., D.M.", 
      dept: "Cardiology", 
      initial: "AR", 
      color: "bg-red-600", 
      border: "border-red-600",
      education: "D.M. (Cardiology)",
      expertise: ["Cardiac Rehab", "Non-Surgical Valve Repair", "ECG Analysis"],
      reviews: 4.8,
      exp: "14+ Years",
      deptId: "CARD"
    },
    { 
      name: "Dr. Neha Sharma", 
      degree: "M.D.", 
      dept: "Dermatology", 
      initial: "NS", 
      color: "bg-emerald-600", 
      border: "border-emerald-600",
      education: "M.D. (Dermatology)",
      expertise: ["Medical Dermatology", "Botox & Fillers", "Skin Allergies"],
      reviews: 4.9,
      exp: "10+ Years",
      deptId: "DERM"
    },
    { 
      name: "Dr. Mohan Das", 
      degree: "M.D., D.M.", 
      dept: "Pulmonology", 
      initial: "MD", 
      color: "bg-teal-600", 
      border: "border-teal-600",
      education: "D.M. (Pulmonology)",
      expertise: ["COPD Care", "Asthma Clinic", "Respiratory Failure"],
      reviews: 4.8,
      exp: "16+ Years",
      deptId: "PULM"
    },
    { 
      name: "Dr. Ramesh Nair", 
      degree: "M.D.", 
      dept: "Pediatrics", 
      initial: "RN", 
      color: "bg-blue-400", 
      border: "border-blue-400",
      education: "M.D. (Pediatrics), Fellowship in surgery",
      expertise: ["Neonatal Care", "Pediatric Trauma", "Child Obesity"],
      reviews: 4.9,
      exp: "17+ Years",
      deptId: "PED-SUR"
    },
    { 
      name: "Dr. Kavitha Iyer", 
      degree: "M.D.", 
      dept: "Oncology", 
      initial: "KI", 
      color: "bg-teal-500", 
      border: "border-teal-500",
      education: "M.D. (Internal Medicine), DM (Oncology)",
      expertise: ["Chemotherapy", "Palliative Care", "Cancer Screening"],
      reviews: 4.8,
      exp: "16+ Years",
      deptId: "S-ONC"
    }
  ];

  const filteredDoctors = allDoctors.filter(dr => {
    const matchesSearch = dr.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dr.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dr.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (dr.expertise && dr.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesDept = selectedDept === "All Departments" || dr.dept === selectedDept;
    const matchesSpecialization = selectedSpecialization === "All Specializations" || dr.dept === selectedSpecialization;
    return matchesSearch && matchesDept && matchesSpecialization;
  });

  const departments = ["All Departments", ...Array.from(new Set(allDoctors.map(dr => dr.dept)))].sort();
  const specializations = ["All Specializations", ...Array.from(new Set(allDoctors.map(dr => dr.dept)))].sort();

  return (
    <motion.div
      key="doctors-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 min-h-screen pb-20"
    >
      {/* Editorial Hero Header */}
      <section className="bg-navy py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505751172107-1bc9a4192b67?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                      backgroundSize: '40px 40px' }} 
        />
        
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-maroon/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            <span className="text-white font-black text-[10px] tracking-[3px] uppercase opacity-70">Citizen Hospital</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-serif text-white mb-8 tracking-tighter"
          >
            Our Experienced Doctors
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-coral mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Guided by compassion, driven by excellence — our purpose and promise to every person we serve.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 shadow-sm relative -mt-10 mx-4 md:mx-10 rounded-xl overflow-hidden shadow-2xl shadow-navy/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="flex-grow flex flex-col gap-1.5 w-full">
            <label htmlFor="doctor-search" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Find a Specialist</label>
            <div className="flex items-center bg-slate-50 px-4 rounded-lg focus-within:ring-1 focus-within:ring-maroon/20 transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                id="doctor-search"
                type="text" 
                placeholder="Search by name, degree or specialty..." 
                className="w-full h-10 bg-transparent text-sm font-medium outline-none text-navy placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Department Select */}
          <div className="flex flex-col gap-1.5 w-full md:w-64">
            <label htmlFor="dept-select" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
            <div className="relative">
              <select 
                id="dept-select"
                className="w-full h-10 bg-white border border-slate-100 rounded-lg px-4 text-sm font-bold text-navy appearance-none cursor-pointer outline-none focus:border-maroon transition-colors"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Specialization Select */}
          <div className="flex flex-col gap-1.5 w-full md:w-64">
            <label htmlFor="spec-select" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Specialization</label>
            <div className="relative">
              <select 
                id="spec-select"
                className="w-full h-10 bg-white border border-slate-100 rounded-lg px-4 text-sm font-bold text-navy appearance-none cursor-pointer outline-none focus:border-maroon transition-colors"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] font-black text-coral uppercase tracking-[4px] mb-3 block">Our Team</span>
            <h2 className="text-4xl font-extrabold font-serif text-navy tracking-tight">{selectedDept}</h2>
          </div>
          <div className="bg-slate-100 px-5 py-2 rounded-full">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{filteredDoctors.length} doctors</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDoctors.map((dr, idx) => {
            const avatarColors = [
              { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
              { bg: "bg-maroon/10", text: "text-maroon", border: "border-maroon/20" },
              { bg: "bg-coral/10", text: "text-coral", border: "border-coral/20" },
              { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
              { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
              { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
              { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
              { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
            ];
            const colorIndex = dr.name.length % avatarColors.length;
            const theme = avatarColors[colorIndex];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.03,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1] 
                }}
                className="group relative bg-white rounded-[2rem] p-8 shadow-2xl shadow-slate-200/40 hover:shadow-xl hover:shadow-maroon/10 border border-slate-50 flex flex-col items-center transition-all duration-500 cursor-pointer"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-[4rem] group-hover:bg-maroon/5 transition-colors duration-500 -z-0" />
                
                {/* Avatar Section */}
                <div className="relative z-10 mb-8 mt-2">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className={`${theme.bg} ${theme.border} w-24 h-24 rounded-3xl border-2 flex items-center justify-center shadow-inner transition-transform duration-500`}
                  >
                    <span className={`text-3xl font-black ${theme.text} tracking-tight`}>
                      {dr.initial}
                    </span>
                  </motion.div>
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="relative z-10 w-full text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-[11px] font-black text-navy">{dr.reviews || 4.7}</span>
                  </div>

                  <h4 className="text-[20px] font-black text-navy mb-1.5 leading-tight group-hover:text-maroon transition-colors duration-300">
                    {dr.name}
                  </h4>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-4 inline-block border-b border-slate-100 pb-1">
                    {dr.degree}
                  </p>
                  
                  {/* New Details Section */}
                  <div className="space-y-4 mb-6 text-left">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Education</p>
                        <p className="text-[11px] font-bold text-navy leading-relaxed">{dr.education || "Premier Medical Institute"}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Expertise</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(dr.expertise || ["Specialized Care", "Clinical Excellence"]).map((exp, i) => (
                            <span key={i} className="text-[9px] font-bold bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md border border-slate-100">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex justify-between items-center w-full">
                      <div className="bg-slate-50 group-hover:bg-maroon/5 transition-colors px-3 py-1.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-black text-slate-500 group-hover:text-maroon uppercase tracking-[1px]">{dr.dept}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase">{dr.exp || "10+ Yrs Exp"}</span>
                    </div>

                    {dr.deptId && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDept(dr.deptId as string);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full mt-2 flex items-center justify-center gap-2 text-[10px] font-black text-maroon hover:text-navy transition-colors uppercase tracking-widest border border-maroon/20 py-2 rounded-xl hover:bg-maroon/5"
                      >
                        View Specialization <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-40">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">No doctors found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your search filters to find clinical specialists.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedDept("All Departments"); setSelectedSpecialization("All Specializations"); }}
              className="mt-8 text-maroon font-black uppercase text-[11px] tracking-widest underline decoration-2 underline-offset-8"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </motion.div>
  );
}

// Separate component for Departments Page content to keep App cleaner
function DepartmentsContent({ onSelectDept, type }: { onSelectDept: (id: string) => void, type: "specialty" | "super" }) {
  const specialtyDepts = [
    {
      id: "OBG",
      name: "Obstetrics & Gynaecology",
      desc: "Comprehensive care for women at every stage of life, from maternity to wellness.",
      icon: Baby,
      color: "bg-pink-500",
      accent: "border-pink-500"
    },
    {
      id: "ORTH",
      name: "Orthopaedics",
      desc: "Restoring movement and rebuilding lives with advanced bone and joint care.",
      icon: Bone,
      color: "bg-blue-600",
      accent: "border-blue-600"
    },
    {
      id: "PULM",
      name: "Pulmonology",
      desc: "Expert care for respiratory health — because every breath matters.",
      icon: Stethoscope,
      color: "bg-teal-500",
      accent: "border-teal-500"
    },
    {
      id: "GEN",
      name: "General & Laparoscopic",
      desc: "Precision surgery and faster recovery through minimally invasive techniques.",
      icon: Activity,
      color: "bg-indigo-600",
      accent: "border-indigo-600"
    },
    {
      id: "GEN-MED",
      name: "General Medicine",
      desc: "Full-scale healthcare services addressing common and chronic illnesses with precision.",
      icon: HeartPulse,
      color: "bg-coral",
      accent: "border-coral"
    },
    {
      id: "EYE",
      name: "Ophthalmology",
      desc: "Complete eye care solutions from vision testing to sophisticated ophthalmic surgery.",
      icon: Users, // Using Users as a placeholder for eye
      color: "bg-indigo-500",
      accent: "border-indigo-500"
    },
    {
      id: "DENT",
      name: "Dental Clinic",
      desc: "Total oral health services including restorative, cosmetic, and general dental care.",
      icon: Activity,
      color: "bg-yellow-500",
      accent: "border-yellow-500"
    },
    {
      id: "DERM",
      name: "Dermatology",
      desc: "Advanced skin care and aesthetic treatments for a healthier, more confident you.",
      icon: Sparkles,
      color: "bg-emerald-600",
      accent: "border-emerald-600"
    }
  ];

  const superDepts = [
    {
      id: "PED-SUR",
      name: "Pediatric Surgery",
      desc: "Gentle hands for the smallest patients, specializing in neonatal surgery.",
      icon: Baby,
      color: "bg-blue-400",
      accent: "border-blue-400"
    },
    {
      id: "NEURO",
      name: "Neurology",
      desc: "Advanced care for the brain & nervous system, treating complex disorders.",
      icon: Brain,
      color: "bg-purple-500",
      accent: "border-purple-500"
    },
    {
      id: "CARD",
      name: "Cardiology",
      desc: "Protecting your heart, every beat. Comprehensive cardiac care for all.",
      icon: HeartPulse,
      color: "bg-red-500",
      accent: "border-red-500"
    },
    {
      id: "NEURO-SUR",
      name: "Neurosurgery",
      desc: "Precision surgery for complex brain & spine using advanced technology.",
      icon: Brain,
      color: "bg-blue-600",
      accent: "border-blue-600"
    },
    {
      id: "S-ONC",
      name: "Surgical Oncology",
      desc: "Fighting cancer with surgical precision and multidisciplinary support.",
      icon: Microscope,
      color: "bg-teal-500",
      accent: "border-teal-500"
    },
    {
      id: "URO",
      name: "Urology",
      desc: "Advanced care for urinary & renal conditions with specialized options.",
      icon: Stethoscope,
      color: "bg-blue-500",
      accent: "border-blue-500"
    },
    {
      id: "NEPH",
      name: "Nephrology",
      desc: "Protecting your kidneys, preserving health through advanced renal care.",
      icon: Activity,
      color: "bg-cyan-600",
      accent: "border-cyan-600"
    },
    {
      id: "GASTRO",
      name: "Gastroenterology",
      desc: "Digestive health from mouth to gut, treating complex GI issues.",
      icon: Activity,
      color: "bg-orange-500",
      accent: "border-orange-500"
    }
  ];

  const departments = type === "specialty" ? specialtyDepts : superDepts;

  return (
    <motion.div 
      key={`dept-page-${type}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Editorial Header Section */}
      <section className="bg-navy py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                      backgroundSize: '40px 40px' }} 
        />
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-maroon/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            <span className="text-white font-black text-[10px] tracking-[2px] uppercase opacity-70">Citizen Hospital</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-serif text-white mb-8 tracking-tight"
          >
            {type === "specialty" ? "Explore Specialty Services" : "Explore Super Specialties"}
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-coral mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Guided by compassion, driven by excellence — our purpose and promise to every person we serve.
          </motion.p>
        </div>
      </section>

      {/* Specialty Grid Section */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-coral font-black text-[10px] uppercase tracking-[3px] mb-4 block">Our Departments</span>
          <h2 className="text-4xl font-extrabold font-serif text-navy mb-6 tracking-tight">
             {type === "specialty" ? "Clinical Specialties" : "Super Specialties"}
          </h2>
          <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto">
            Click on any department to learn more about our services, specialists, and how we can help you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => onSelectDept(dept.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectDept(dept.id)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${dept.name} department`}
                className={`group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-start transition-all hover:shadow-2xl relative overflow-hidden h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-maroon`}
              >
                {/* Colored Accent Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${dept.color}`} />
                
                {/* Background Tint on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity ${dept.color} pointer-events-none`} />
                
                {/* Icon with Glow */}
                <div className={`relative mb-8 pointer-events-none`}>
                  <div className={`absolute inset-0 blur-xl opacity-30 group-hover:opacity-60 transition-opacity ${dept.color}`} />
                  <div className={`w-14 h-14 ${dept.color} rounded-2xl flex items-center justify-center text-white relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-lg`}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                </div>
                
                <span className={`text-[11px] font-black opacity-40 uppercase tracking-[2px] mb-3 pointer-events-none`}>{dept.id}</span>
                <h4 className="text-xl font-extrabold text-navy mb-4 group-hover:text-maroon transition-colors line-clamp-2 min-h-[3.5rem] flex items-center pointer-events-none">{dept.name}</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow pointer-events-none">
                  {dept.desc}
                </p>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectDept(dept.id); }}
                  className="relative z-20 flex items-center gap-2 text-[11px] font-black text-navy uppercase tracking-widest transition-all pb-1 border-b-2 border-transparent hover:border-navy cursor-pointer outline-none bg-transparent"
                >
                  View Department <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// Department Detail Component
function DepartmentDetailContent({ deptId, type, onBack, onNavigate, onOpenBooking }: { deptId: string | null, type: "specialty" | "super", onBack: () => void, onNavigate: (page: string) => void, onOpenBooking: () => void }) {
  const departmentsData = {
    "PED-SUR": {
      name: "Pediatric Surgery",
      fullName: "Department of Pediatric Surgery",
      tag: "PED-SUR DEPARTMENT",
      icon: Baby,
      color: "bg-[#00a8ff]",
      textColor: "text-[#00a8ff]",
      accent: "border-[#00a8ff]",
      desc: "Our Pediatric Surgery unit specialises in surgical conditions affecting newborns, infants, and children — from congenital anomalies to trauma — using minimally invasive techniques tailored for young patients.",
      services: [
        "Neonatal Surgery",
        "Laparoscopic Paediatric Surgery",
        "Congenital Anomaly Correction",
        "Paediatric Urology",
        "Paediatric Oncology Surgery",
        "Hernia & Hydrocele Repair"
      ],
      specialists: [
        { name: "Dr. Ramesh Nair", title: "Sr. Paediatric Surgeon", exp: "17 yrs", initial: "N", color: "text-[#00a8ff] bg-blue-50" },
        { name: "Dr. Swati Joshi", title: "Consultant Paediatric Surgery", exp: "11 yrs", initial: "J", color: "text-blue-600 bg-blue-100" }
      ],
      helpline: "1800-123-4567"
    },
    "NEURO": {
      name: "Neurology",
      fullName: "Department of Neurology",
      tag: "NEURO DEPARTMENT",
      icon: Brain,
      color: "bg-[#a020f0]",
      textColor: "text-[#a020f0]",
      accent: "border-[#a020f0]",
      desc: "Our Neurology department offers comprehensive diagnosis and management of neurological disorders — from stroke and epilepsy to movement disorders and dementia — with state-of-the-art neuroimaging and neuro-physiological labs.",
      services: [
        "Stroke Management",
        "Epilepsy & Seizure Clinic",
        "Movement Disorders",
        "Multiple Sclerosis",
        "Headache & Migraine",
        "Neuromuscular Diseases"
      ],
      specialists: [
        { name: "Dr. Arvind Pillai", title: "Sr. Neurologist", exp: "20 yrs", initial: "P", color: "text-[#a020f0] bg-purple-50" },
        { name: "Dr. Meera Krishnan", title: "Stroke Specialist", exp: "14 yrs", initial: "K", color: "text-purple-600 bg-purple-100" }
      ],
      helpline: "1800-123-4567"
    },
    "OBG": {
      name: "Obstetrics & Gynaecology",
      fullName: "Department of Obstetrics & Gynaecology",
      tag: "OBG DEPARTMENT",
      icon: Baby,
      color: "bg-pink-500",
      textColor: "text-pink-500",
      accent: "border-pink-500",
      desc: "Our Obstetrics & Gynaecology department provides comprehensive care for women from adolescence through menopause. We offer advanced maternal-fetal medicine, minimally invasive surgery, and a full spectrum of reproductive health services.",
      services: [
        "High-Risk Pregnancy Care",
        "Laparoscopic Gynaecology",
        "Fertility & IVF Support",
        "Menopause Management",
        "Cervical Cancer Screening",
        "Foetal Medicine"
      ],
      specialists: [
        { name: "Dr. Priya Nair", title: "Sr. Consultant OBG", exp: "18 yrs", initial: "N", color: "text-pink-600 bg-pink-50" },
        { name: "Dr. Sunita Roy", title: "Consultant Gynaecology", exp: "12 yrs", initial: "R", color: "text-purple-600 bg-purple-50" }
      ],
      helpline: "1800-123-4567"
    },
    "ORTH": {
      name: "Orthopaedics",
      fullName: "Department of Orthopaedics",
      tag: "ORTH DEPARTMENT",
      icon: Bone,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      accent: "border-blue-600",
      desc: "From sports injuries to complex joint replacements, our Orthopaedics team combines precision surgery with personalised rehabilitation to get you back to full mobility.",
      services: [
        "Joint Replacement Surgery",
        "Sports Injury Treatment",
        "Spine & Disc Care",
        "Fracture Management",
        "Arthroscopic Surgery",
        "Paediatric Orthopaedics"
      ],
      specialists: [
        { name: "Dr. Anil Verma", title: "Sr. Consultant Orthopaedics", exp: "22 yrs", initial: "V", color: "text-blue-600 bg-blue-50" },
        { name: "Dr. Rakesh Joshi", title: "Joint Replacement Specialist", exp: "15 yrs", initial: "J", color: "text-indigo-600 bg-indigo-50" }
      ],
      helpline: "1800-456-7890"
    },
    "PULM": {
      name: "Pulmonology",
      fullName: "Department of Pulmonology",
      tag: "PULM DEPARTMENT",
      icon: Stethoscope,
      color: "bg-[#009688]",
      textColor: "text-[#009688]",
      accent: "border-[#009688]",
      desc: "Our Pulmonology department diagnoses and manages all respiratory conditions — from asthma and COPD to sleep disorders and lung cancer — using state-of-the-art bronchoscopy and pulmonary function labs.",
      services: [
        "Asthma & COPD Management",
        "Sleep Apnoea & Polysomnography",
        "Bronchoscopy",
        "Pulmonary Function Testing",
        "Interstitial Lung Disease",
        "Lung Cancer Screening"
      ],
      specialists: [
        { name: "Dr. Mohan Das", title: "Sr. Pulmonologist", exp: "16 yrs", initial: "D", color: "text-teal-600 bg-teal-50" },
        { name: "Dr. Kavitha Iyer", title: "Sleep Medicine Specialist", exp: "10 yrs", initial: "I", color: "text-cyan-600 bg-cyan-50" }
      ],
      helpline: "1800-987-6543"
    },
    "CARD": {
      name: "Cardiology",
      fullName: "Department of Cardiology",
      tag: "SUPER SPECIALTY",
      icon: HeartPulse,
      color: "bg-red-600",
      textColor: "text-red-600",
      accent: "border-red-600",
      desc: "World-class cardiac care including interventional cardiology, heart failure management, and advanced diagnostics to keep your heart healthy.",
      services: [
        "Angiography & Angioplasty",
        "Echocardiography",
        "TMT & Stress Testing",
        "Pacemaker Implantation",
        "Heart Failure Clinic",
        "Preventive Cardiology"
      ],
      specialists: [
        { name: "Dr. S. K. Gupta", title: "Sr. Interventional Cardiologist", exp: "25 yrs", initial: "G", color: "text-red-600 bg-red-50" },
        { name: "Dr. Amit Roy", title: "Consultant Cardiologist", exp: "14 yrs", initial: "R", color: "text-rose-600 bg-rose-50" }
      ],
      helpline: "1800-CAR-DIAC"
    },
    "NEURO-SUR": {
      name: "Neurosurgery",
      fullName: "Department of Neurosurgery",
      tag: "NEURO-SUR DEPARTMENT",
      icon: Brain,
      color: "bg-[#2980b9]",
      textColor: "text-[#2980b9]",
      accent: "border-[#2980b9]",
      desc: "Advanced surgical treatment for brain tumors, spinal trauma, and complex neuro-vascular conditions with focus on minimally invasive neurosurgery.",
      services: [
        "Brain Tumor Surgery",
        "Spine & Disc Surgery",
        "Micro-neurosurgery",
        "Endoscopic Neurosurgery",
        "Head Injury Management",
        "Cerebrovascular Surgery"
      ],
      specialists: [
        { name: "Dr. Prem Sagar", title: "Sr. Neurosurgeon", exp: "24 yrs", initial: "S", color: "text-[#2980b9] bg-blue-50" },
        { name: "Dr. Vikram Seth", title: "Sr. Consultant Neurosurgery", exp: "18 yrs", initial: "V", color: "text-blue-700 bg-blue-50" }
      ],
      helpline: "1800-BRAIN-SURG"
    },
    "GASTRO": {
      name: "Gastroenterology",
      fullName: "Department of Gastroenterology",
      tag: "GASTRO DEPARTMENT",
      icon: Activity,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      accent: "border-orange-500",
      desc: "Compassionate care for digestive health, specializing in disorders of the stomach, intestines, liver, and pancreas.",
      services: [
        "Endoscopy & Colonoscopy",
        "Liver Disease Treatment",
        "Gastro-intestinal Surgery",
        "Pancreatic Care",
        "Digestive Wellness Clinic",
        "ERCP Procedures"
      ],
      specialists: [
        { name: "Dr. Arindam Chatterjee", title: "Sr. Gastroenterologist", exp: "20 yrs", initial: "C", color: "text-orange-600 bg-orange-50" },
        { name: "Dr. Kunal Ghosh", title: "Consultant Gastroenterology", exp: "12 yrs", initial: "G", color: "text-orange-500 bg-orange-50" }
      ],
      helpline: "1800-GI-HEALTH"
    },
    "GEN": {
      name: "General & Laparoscopic",
      fullName: "General & Laparoscopic Surgery",
      tag: "SURGERY DEPARTMENT",
      icon: Activity,
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      accent: "border-indigo-600",
      desc: "Advanced surgical solutions using minimally invasive technologies for faster recovery and minimal scarring.",
      services: [
        "Laparoscopic Surgery",
        "Hernia & Appendix Repair",
        "Gallbladder Surgery",
        "Colorectal Surgery",
        "Trauma & Emergency Surgery",
        "Soft Tissue Surgeries"
      ],
      specialists: [
        { name: "Dr. Ashok Kumar Singh", title: "Sr. General Surgeon", exp: "22 yrs", initial: "S", color: "text-indigo-600 bg-indigo-50" },
        { name: "Dr. Tarasankar Ghosh", title: "Laparoscopic Specialist", exp: "18 yrs", initial: "G", color: "text-blue-600 bg-blue-50" }
      ],
      helpline: "1800-SURGERY"
    },
    "GEN-MED": {
      name: "General Medicine",
      fullName: "Department of General Medicine",
      tag: "MEDICINE DEPARTMENT",
      icon: HeartPulse,
      color: "bg-coral",
      textColor: "text-coral",
      accent: "border-coral",
      desc: "Primary healthcare for acute and chronic conditions, providing comprehensive diagnosis and therapy for all ages.",
      services: [
        "Chronic Disease Management",
        "Infectious Disease Care",
        "Diabetes Clinic",
        "Hypertension Control",
        "Preventive Checkups",
        "Health Screenings"
      ],
      specialists: [
        { name: "Dr. Bashar Imam Ahmad", title: "Sr. Physician", exp: "25 yrs", initial: "A", color: "text-coral bg-orange-50" },
        { name: "Dr. Raja Bandopadhyay", title: "Consultant Physician", exp: "19 yrs", initial: "B", color: "text-red-600 bg-red-50" }
      ],
      helpline: "1800-JS-PHYSICIAN"
    },
    "EYE": {
      name: "Ophthalmology",
      fullName: "Department of Ophthalmology",
      tag: "EYE DEPARTMENT",
      icon: Users,
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      accent: "border-indigo-500",
      desc: "Complete vision care including advanced diagnostics and surgical corrections for various eye conditions.",
      services: [
        "Cataract Surgery (Phaco)",
        "Lasik & Vision Correction",
        "Glaucoma Treatment",
        "Retinal Evaluation",
        "Pediatric Eye Care",
        "Contact Lens Clinic"
      ],
      specialists: [
        { name: "Dr. S. Mukherjee", title: "Sr. Eye Surgeon", exp: "21 yrs", initial: "M", color: "text-indigo-600 bg-indigo-50" },
        { name: "Dr. Anjali Gupta", title: "Consultant Ophthalmology", exp: "11 yrs", initial: "G", color: "text-blue-600 bg-blue-50" }
      ],
      helpline: "1800-EYE-CARE"
    },
    "DENT": {
      name: "Dental Clinic",
      fullName: "Department of Dentistry",
      tag: "DENTAL DEPARTMENT",
      icon: Activity,
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      accent: "border-yellow-500",
      desc: "Transforming smiles with advanced dental technology and compassionate dental healthcare.",
      services: [
        "Root Canal Treatment",
        "Orthodontic Braces",
        "Dental Implants",
        "Teeth Whitening",
        "Pediatric Dentistry",
        "Full Mouth Rehabilitation"
      ],
      specialists: [
        { name: "Dr. Ankita Paul", title: "Cosmetic Dentist", exp: "12 yrs", initial: "P", color: "text-amber-600 bg-amber-50" },
        { name: "Dr. Vikash Singh", title: "Sr. Consultant Dentist", exp: "15 yrs", initial: "S", color: "text-yellow-600 bg-yellow-50" }
      ],
      helpline: "1800-SMILE-FIX"
    },
    "DERM": {
      name: "Dermatology",
      fullName: "Department of Dermatology",
      tag: "SKIN DEPARTMENT",
      icon: Sparkles,
      color: "bg-emerald-600",
      textColor: "text-emerald-600",
      accent: "border-emerald-600",
      desc: "Advanced care for skin, hair, and nail conditions, including medical, surgical, and cosmetic dermatology.",
      services: [
        "Acne & Scar Treatment",
        "Laser Therapy",
        "Skin Grafting",
        "Hair Fall Clinic",
        "Anti-aging Treatments",
        "Psoriasis Care"
      ],
      specialists: [
        { name: "Dr. Ritika Ray", title: "Consultant Dermatologist", exp: "14 yrs", initial: "R", color: "text-emerald-600 bg-emerald-50" },
        { name: "Dr. Neha Sharma", title: "Cosmetic Dermatologist", exp: "10 yrs", initial: "S", color: "text-green-600 bg-green-50" }
      ],
      helpline: "1800-SKIN-DOCTOR"
    },
    "URO": {
      name: "Urology",
      fullName: "Department of Urology",
      tag: "URO DEPARTMENT",
      icon: Stethoscope,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      accent: "border-blue-500",
      desc: "State-of-the-art urinary and renal care focusing on stones, prostate, and pediatric urological surgery.",
      services: [
        "Kidney Stone Removal",
        "Prostate Surgery (Laser)",
        "Pediatric Urology",
        "Male Infertility",
        "Uro-Oncology",
        "Dialysis Support"
      ],
      specialists: [
        { name: "Dr. P.K. Das", title: "Sr. Urologist", exp: "30 yrs", initial: "D", color: "text-blue-600 bg-blue-50" },
        { name: "Dr. Rahul Varma", title: "Consultant Urology", exp: "13 yrs", initial: "V", color: "text-cyan-600 bg-cyan-50" }
      ],
      helpline: "1800-URO-CARE"
    },
    "NEPH": {
      name: "Nephrology",
      fullName: "Department of Nephrology",
      tag: "NEPHRO DEPARTMENT",
      icon: Activity,
      color: "bg-cyan-600",
      textColor: "text-cyan-600",
      accent: "border-cyan-600",
      desc: "Protecting kidney health through advanced dialysis, transplant support, and chronic kidney disease management.",
      services: [
        "Hemodialysis",
        "Peritoneal Dialysis",
        "Kidney Biopsy",
        "Transplant Management",
        "Renal Failure Care",
        "AV Fistula Surgery"
      ],
      specialists: [
        { name: "Dr. Sunando Roy", title: "Sr. Nephrologist", exp: "24 yrs", initial: "R", color: "text-cyan-600 bg-cyan-50" }
      ],
      helpline: "1800-KIDNEY-HELP"
    },
    "S-ONC": {
      name: "Surgical Oncology",
      fullName: "Department of Surgical Oncology",
      tag: "ONCOLOGY DEPARTMENT",
      icon: Microscope,
      color: "bg-[#16a085]",
      textColor: "text-[#16a085]",
      accent: "border-[#16a085]",
      desc: "Comprehensive cancer surgery and multi-disciplinary treatment plans focusing on early detection and precise excision of malignant tumors.",
      services: [
        "Head & Neck Oncology",
        "Breast Cancer Surgery",
        "Gastro-oncology",
        "Gynecologic Oncology",
        "Soft Tissue Sarcomas",
        "Thoracic Oncology"
      ],
      specialists: [
        { name: "Dr. Sanjay Gupta", title: "Sr. Onco-surgeon", exp: "19 yrs", initial: "G", color: "text-[#16a085] bg-teal-50" },
        { name: "Dr. Kavitha Iyer", title: "Medical Oncologist", exp: "16 yrs", initial: "I", color: "text-teal-600 bg-teal-50" }
      ],
      helpline: "1800-CANCER-CARE"
    }
  };

  const dept = (deptId && (departmentsData as any)[deptId]);

  if (!dept) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-10">
        <div className="text-center">
          <h2 className="text-2xl font-black text-navy mb-4 font-serif">Department Not Found</h2>
          <p className="text-slate-400 mb-8 font-medium">Please check the URL or return to the departments list.</p>
          <button onClick={onBack} className="bg-maroon text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-transform hover:scale-105">
            Back to Departments
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key={`dept-detail-${deptId}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white min-h-screen"
    >
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 py-4 px-6 md:px-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs font-bold tracking-wide">
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-slate-400 hover:text-maroon transition-colors cursor-pointer border-none bg-transparent outline-none"
          >
            ← Back to {type === "specialty" ? "Specialties" : "Super Specialties"}
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 uppercase tracking-widest">{dept.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${dept.color} py-24 relative overflow-hidden`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                      backgroundSize: '30px 30px' }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl shrink-0"
          >
            <dept.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </motion.div>
          
          <div className="text-center md:text-left">
            <span className="text-white/80 font-black text-[10px] uppercase tracking-[4px] mb-3 block opacity-80">{dept.tag}</span>
            <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-white mb-6 leading-tight tracking-tight">
              {dept.name}
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-[1.8] max-w-2xl font-medium">
              {dept.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-24 px-6 md:px-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content: Services */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <div className={`w-1 h-8 ${dept.color} rounded-full`} />
                 <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Services Offered</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.services.map((service: string, i: number) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-sm font-bold text-slate-700 tracking-tight">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Specialists Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <h3 className="text-lg font-black text-navy mb-8 uppercase tracking-widest text-[11px] pb-4 border-b border-slate-50">Our Specialists</h3>
               <div className="space-y-6">
                 {dept.specialists.map((dr: any, i: number) => (
                   <div key={i} className="flex items-center gap-5 group cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${dr.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        {dr.initial}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-extrabold text-navy text-[15px] group-hover:text-maroon transition-colors">{dr.name}</h4>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{dr.title} · {dr.exp}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Book Appointment Card */}
            <div className={`rounded-3xl p-8 ${dept.color} text-white shadow-2xl shadow-indigo-200 relative overflow-hidden`}>
               {/* Pattern */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10 space-y-6">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-black mb-2 tracking-tight">Book an Appointment</h3>
                   <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest mb-6">Our team is available Mon–Sat, 8 AM – 8 PM</p>
                 </div>
                 <button 
                   onClick={onOpenBooking}
                   className="w-full bg-white text-navy font-black py-4 rounded-xl text-sm shadow-xl hover:scale-[1.02] transition-transform border-none outline-none"
                 >
                    Schedule Now
                 </button>
               </div>
            </div>

            {/* Helpline Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg flex items-center gap-5">
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                  <Phone className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Helpline</p>
                  <p className="text-lg font-black text-navy">{dept.helpline}</p>
               </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}

// About Content Component
function AboutContent() {
  return (
    <motion.div
      key="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-navy py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 filter saturate-150"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-maroon/20 to-coral/10 z-[1]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block"
          >
             <span className="text-coral font-black text-[10px] uppercase tracking-[6px] mb-6 block bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">Since 2010</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black font-serif text-white mb-8 tracking-tighter leading-tight italic">
            Caring for <span className="text-coral">Generations</span>
          </h1>
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Jeeban Suraksha Super-Specialty Hospital is dedicated to providing world-class healthcare with a human touch, merging cutting-edge technology with compassionate expertise.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[40px] shadow-2xl relative z-10"
              alt="Hospital Interior"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-navy text-white p-10 rounded-3xl z-20 shadow-xl">
              <p className="text-4xl font-black mb-1">14+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-coral">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-navy leading-tight font-serif">Our Journey to Excellence</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              What started as a small clinic in 2010 has now grown into one of West Bengal's most trusted super-specialty hospitals. Our commitment to patients remains the same: providing the highest standard of medical care at an affordable cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center text-coral mb-4">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h4 className="font-black text-navy mb-2">Our Mission</h4>
                <p className="text-sm text-slate-400 font-bold leading-relaxed">To deliver exceptional patient-centered care through clinical excellence and innovative healthcare solutions.</p>
              </div>
              <div className="p-6 bg-navy text-white rounded-2xl">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-coral mb-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h4 className="font-black mb-2">Our Vision</h4>
                <p className="text-sm text-white/60 font-bold leading-relaxed">To be the preferred healthcare partner, recognized for global standards and a compassionate approach to healing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 font-serif italic">Our Core Values</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">The pillars that define Jeeban Suraksha</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every medical diagnosis and ethical treatment.", color: "text-blue-600 bg-blue-50 border-blue-100", icon: ShieldCheck },
              { title: "Excellence", desc: "Striving for perfection through constant learning and state-of-the-art technology.", color: "text-purple-600 bg-purple-50 border-purple-100", icon: Sparkles },
              { title: "Compassion", desc: "Treating every patient like a family member with warmth and empathy.", color: "text-pink-600 bg-pink-50 border-pink-100", icon: HeartPulse },
              { title: "Accessibility", desc: "Ensuring world-class healthcare is within reach for every section of society.", color: "text-emerald-600 bg-emerald-50 border-emerald-100", icon: Activity }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-3xl border ${value.color.split(' ').slice(2).join(' ')} shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${value.color.split(' ').slice(1,2).join(' ')} opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
                <div className={`w-12 h-12 ${value.color.split(' ').slice(1,2).join(' ')} rounded-xl flex items-center justify-center ${value.color.split(' ').slice(0,1).join(' ')} mb-6 group-hover:scale-110 transition-colors`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-navy mb-3">{value.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Stats */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { label: "Beds Capacity", value: "250+" },
            { label: "Surgeries Done", value: "15k+" },
            { label: "Expert Doctors", value: "80+" },
            { label: "Happy Patients", value: "500k+" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
              <p className="text-coral text-xs font-bold uppercase tracking-[3px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// Contact Content Component
function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", date: "", time: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      key="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 min-h-screen pb-20"
    >
      {/* Contact Hero */}
      <section className="bg-navy py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-3xl">
            <span className="text-coral font-black text-[10px] uppercase tracking-[4px] mb-4 block">Get in touch</span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-white mb-8 tracking-tighter leading-tight">
              Contact Us & Book <br />An Appointment
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
              We're here to help. Reach out to us for any medical queries, emergency support, or to schedule your visit with our specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-maroon/20 transition-all flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-navy mb-4">Visit Us</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Jeeban Suraksha Hospital, Bankura-Purulia Road, Bankura, West Bengal — 722101
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-coral/20 transition-all flex flex-col"
          >
            <div className="w-14 h-14 bg-coral/5 rounded-2xl flex items-center justify-center text-coral mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-navy mb-4">Call Support</h3>
            <div className="space-y-2 text-slate-500 font-bold mt-auto">
              <a href="tel:+913242250123" className="block hover:text-maroon transition-colors">Emergency: +91 3242 250 123</a>
              <a href="tel:+918918370240" className="block hover:text-maroon transition-colors">Reception: +91 89183 70240</a>
            </div>
          </motion.div>
 
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-maroon/20 transition-all flex flex-col"
          >
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-navy mb-4">Email Us</h3>
            <p className="text-slate-500 font-bold mt-auto">info@js-hospital.com</p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}

// Shared Footer Component
function Footer({ onNavigate, onSelectDept, onOpenBooking }: { 
  onNavigate: (page: string, sectionId?: string) => void,
  onSelectDept: (id: string, type: "specialty" | "super") => void,
  onOpenBooking: () => void
}) {
  const footerDepts = [
    { name: 'Cardiology', id: 'CARD', type: 'super' },
    { name: 'Neurology', id: 'NEURO', type: 'super' },
    { name: 'Orthopedics', id: 'ORTH', type: 'specialty' },
    { name: 'Pediatrics', id: 'PED-SUR', type: 'super' },
    { name: 'Oncology', id: 'S-ONC', type: 'super' },
    { name: 'Gynecology', id: 'OBG', type: 'specialty' },
    { name: 'Dermatology', id: 'DERM', type: 'specialty' },
    { name: 'General Surgery', id: 'GEN', type: 'specialty' }
  ];

  return (
    <footer className="w-full relative">
      {/* Decorative Gradient Top Line */}
      <div className="h-2 w-full bg-gradient-to-r from-navy via-maroon to-coral" />
      
      {/* Pre-footer: Emergency Bar */}
      <div className="bg-coral py-5 px-6 md:px-10 relative overflow-hidden group" role="complementary" aria-label="Emergency contact">
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" aria-hidden="true" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <img 
              src="https://cpimg.tistatic.com/07408132/b/4/Hospital-Ambulance-Van.jpg" 
              className="w-10 h-10 object-contain rounded-lg bg-white/10" 
              alt="Hospital Ambulance"
              referrerPolicy="no-referrer"
            />
            <p className="font-bold text-sm md:text-base tracking-wide">
              24 / 7 Emergency & Ambulance <span className="hidden md:inline font-normal opacity-80 ml-2">— Rapid response team always on standby</span>
            </p>
          </div>
          <a href="tel:108" className="bg-white text-coral px-6 py-2 rounded-full font-extrabold text-sm flex items-center gap-2 hover:bg-navy hover:text-white transition-all shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-navy">
            <Phone className="w-4 h-4 fill-current" /> Call 108
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#080d17] pt-20 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/5 pb-16">
            
            {/* Column 1: Brand & Bio */}
            <div className="space-y-8">
               <div 
                 onClick={() => onNavigate("home")}
                 className="flex items-center gap-3 cursor-pointer group"
               >
                  <div className="w-11 h-11 bg-gradient-to-br from-coral to-maroon rounded-xl flex items-center justify-center text-white shadow-lg shadow-maroon/20 group-hover:rotate-12 transition-transform duration-300">
                    <HeartPulse className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl leading-none mb-1 text-nowrap">JEEBAN SURAKSHA</h3>
                    <p className="text-coral text-[9px] font-bold tracking-[2px] uppercase">A Super-specialty Hospital</p>
                  </div>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed font-medium">
                 Providing compassionate, world-class healthcare to every individual we serve — with clinical excellence, dignity, and respect.
               </p>
               <div className="space-y-4">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Follow Us</p>
                  <div className="flex gap-3">
                     {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-coral hover:bg-white/10 hover:border-coral/30 transition-all">
                         <Icon className="w-5 h-5" />
                       </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:pl-8">
               <h4 className="text-white font-bold text-sm uppercase tracking-[2px] mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-coral">
                 Quick Links
               </h4>
               <nav aria-label="Footer quick links">
                <ul className="space-y-4 font-medium text-sm">
                  <li>
                    <button 
                      onClick={() => onNavigate("home")}
                      className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group cursor-pointer outline-none focus-visible:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate("departments")}
                      className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group cursor-pointer outline-none focus-visible:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      All Departments
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate("doctors")}
                      className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group cursor-pointer outline-none focus-visible:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      Our Doctors
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate("about")}
                      className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group cursor-pointer outline-none focus-visible:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      About Us
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate("contact")}
                      className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group cursor-pointer outline-none focus-visible:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      Contact Us
                    </button>
                  </li>
                </ul>
               </nav>
            </div>

            {/* Column 3: Departments */}
            <div>
               <h4 className="text-white font-bold text-sm uppercase tracking-[2px] mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-coral">
                 Specialties
               </h4>
               <ul className="space-y-4 font-medium text-sm">
                 {footerDepts.map((dept) => (
                   <li key={dept.id}>
                     <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onSelectDept(dept.id, dept.type as any); }}
                        className="text-slate-400 hover:text-coral flex items-center gap-2 transition-colors group text-left"
                      >
                       <ChevronRight className="w-3 h-3 text-coral opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                       {dept.name}
                     </button>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="space-y-6">
               <h4 className="text-white font-bold text-sm uppercase tracking-[2px] mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-coral">
                 Contact Info
               </h4>
               <div className="space-y-5">
                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      Bankura-Purulia Road, Bankura, West Bengal 722101
                   </p>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
                     <Phone className="w-5 h-5" />
                   </div>
                   <div className="text-slate-400 text-sm font-medium">
                      <a href="tel:+918918370240" className="block hover:text-coral transition-colors">+91 89183 70240</a>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
                     <Mail className="w-5 h-5" />
                   </div>
                   <p className="text-slate-400 text-sm font-medium">info@js-hospital.com</p>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
                     <Clock className="w-5 h-5" />
                   </div>
                   <div className="text-slate-400 text-[13px] font-medium">
                      <p className="text-white font-bold">OPD Hours:</p>
                      <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                      <p>Emergency: 24/7</p>
                   </div>
                 </div>
               </div>
               <button 
                 onClick={onOpenBooking}
                 className="w-full bg-gradient-to-r from-coral to-maroon text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-xl shadow-coral/20 hover:scale-[1.02] transition-transform"
               >
                  <Calendar className="w-4 h-4" /> Book Appointment
               </button>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-white/30 uppercase tracking-[1px]">
             <p>© 2026 Jeeban Suraksha Hospital. All rights reserved.</p>
             <div className="flex items-center gap-6">
                <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
                <span className="opacity-10">|</span>
                <a href="#" className="hover:text-coral transition-colors">Terms of Use</a>
                <span className="opacity-10">|</span>
                <a href="#" className="hover:text-coral transition-colors">Sitemap</a>
             </div>
             <p className="text-white/20">
               Design & Develop By <span className="text-coral">♥</span> Bankura Tech
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
