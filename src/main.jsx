import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Search, MessageCircle, MapPin, Camera, Sparkles, Crown, Gem, Phone, Menu, X, Star, ChevronLeft } from 'lucide-react'
import './styles/index.css'
import { products, categories, gallery, reviews } from './data/products'

const whatsappNumber = '967777000000'
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: 'easeOut' } } }

function Navbar(){const [open,setOpen]=useState(false); const links=['الرئيسية','التصاميم','الفساتين','الجلابيات','المعرض','التواصل']; return <nav className="nav"><a className="brand" href="#home"><span>تصاميم</span><small>TASAMMEM<
