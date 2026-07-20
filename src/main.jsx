import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Search, MessageCircle, MapPin, Camera, Sparkles, Crown, Gem, Phone, Menu, X, Star, ChevronLeft } from 'lucide-react'
import './styles/index.css'
import { products, categories, gallery, reviews } from './data/products'

const whatsappNumber = '967777000000'
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: 'easeOut' } } }

function Navbar(){const [open,setOpen]=useState(false); const links=['الرئيسية','التصاميم','الفساتين','الجلابيات','المعرض','التواصل']; return <nav className="nav"><a className="brand" href="#home"><span>تصاميم</span><small>TASAMMEM</small></a><div className="nav-links">{links.map(l=><a key={l} href={`#${l==='الرئيسية'?'home':l}`}>{l}</a>)}</div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><AnimatePresence>{open&&<motion.div className="mobile" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{links.map(l=><a onClick={()=>setOpen(false)} key={l} href={`#${l==='الرئيسية'?'home':l}`}>{l}</a>)}</motion.div>}</AnimatePresence></nav>}
function Hero(){return <section id="home" className="hero"><div className="hero-glow"/><motion.div className="hero-copy" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.15}}}}><motion.span variants={fadeUp} className="eyebrow"><Sparkles size={18}/> مجموعة مناسبات 2026</motion.span><motion.h1 variants={fadeUp}>أناقتك تبدأ من هنا</motion.h1><motion.p variants={fadeUp}>فساتين سهرة وجلابيات بتصاميم راقية تناسب أجمل مناسباتك، مختارة بعناية لتظهري بإطلالة لا تُنسى.</motion.p><motion.div variants={fadeUp} className="actions"><a href="#التصاميم" className="btn primary">تصفح التشكيلة</a><a href={`https://wa.me/${whatsappNumber}`} className="btn ghost">تواصل معنا</a></motion.
