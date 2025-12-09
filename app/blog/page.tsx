"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import Image from "next/image";
import { toast } from "sonner";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Lojistikte 'Kara Kutu' Dönemi Bitiyor: Neden Görünürlük Artık Bir Lüks Değil?",
    summary: "Küresel tedarik zinciri artık sadece yük taşımakla ilgili değil, veriyi taşımakla ilgili. Geleneksel yöntemlerin yarattığı kör noktalar ve bunların maliyetleri üzerine derin bir analiz.",
    category: "Industry Analysis",
    readTime: "5 min read",
    date: "Dec 08, 2025",
    image: "https://images.unsplash.com/photo-1494412651409-ae156eb18455?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Reaktif Değil, Proaktif: Yapay Zeka Krizleri Çıkmadan Nasıl Önler?",
    summary: "Lojistik dünyasında yangın söndürmek yerine, dumanı tütmeden tespit etmek mümkün mü? NobleIntelligence'ın öngörü yeteneklerine odaklanan bir yazı.",
    category: "Artificial Intelligence",
    readTime: "4 min read",
    date: "Dec 06, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "E-posta Eklerinde Kaybolan Milyonlar: Belge Yönetimini Dijitalleştirmenin Önemi",
    summary: "Lojistiğin en büyük düşmanı kağıt işleri ve versiyon karmaşasıdır. NobleSuite ile güvenli ve merkezi belge yönetimini anlatıyoruz.",
    category: "Digital Transformation",
    readTime: "6 min read",
    date: "Dec 03, 2025",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Dijital Forwarder Olmak İçin Kod Yazmanıza Gerek Yok",
    summary: "Orta ölçekli forwarder'ların, teknoloji devleriyle nasıl rekabet edebileceğini ve NobleVerse'ün onlara sunduğu 'Mini Marketplace' fırsatlarını inceleyen bir yazı.",
    category: "Growth",
    readTime: "5 min read",
    date: "Nov 28, 2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "'Walled Garden' Sorunu: Neden Açık API Mimarisi Lojistiğin Geleceği?",
    summary: "Kapalı sistemlerin aksine, NobleVerse'ün entegrasyon odaklı, API-First yaklaşımının avantajlarını anlatan teknik ağırlıklı bir yazı.",
    category: "Technology",
    readTime: "7 min read",
    date: "Nov 25, 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Görünmeyen Maliyetler: Verimsizlik İşletmenize Ne Kadara Mal Oluyor?",
    summary: "Manuel süreçlerin, telefon trafiğinin ve reaktif yönetimin finansal tablolara yansıyan gizli zararlarını ortaya koyan bir yazı.",
    category: "Finance",
    readTime: "4 min read",
    date: "Nov 20, 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Excel Tablolarından 3D Kontrol Kulesine: Lojistik Arayüzü Nasıl Olmalı?",
    summary: "Kullanıcı deneyiminin (UX/UI) lojistik yazılımlarındaki önemi ve NobleVerse'ün sürükleyici tasarım anlayışı.",
    category: "Design",
    readTime: "5 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Manuel Veri Girişine Veda: NobleAutomate ile İş Akışı Otomasyonu",
    summary: "Tekrarlayan, sıkıcı ve hataya açık işlerin NobleAutomate ile nasıl otonom hale getirildiğini anlatan bir yazı.",
    category: "Automation",
    readTime: "4 min read",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Lojistikte Güvenlik Açığı: Verileriniz Blokzincir ile Nasıl Korunur?",
    summary: "Siber güvenlik ve veri bütünlüğünün lojistikteki yeri. NobleVerse'ün çok katmanlı güvenlik protokolleri.",
    category: "Security",
    readTime: "6 min read",
    date: "Nov 05, 2025",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "WhatsApp Kaosuna Son: Bağlamsal İletişim ve Tek Merkezli Yönetim",
    summary: "Dağınık iletişim kanallarının yarattığı bilgi kirliliğini NobleVerse Inbox ile nasıl çözüldüğünü anlatan bir yazı.",
    category: "Communication",
    readTime: "3 min read",
    date: "Oct 30, 2025",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Otonom Lojistiğe Doğru: NoblePilot ve Geleceğin Navlun Ajanı",
    summary: "NobleVerse'ün uzun vadeli vizyonu olan 'Kendi Kendini Yöneten Lojistik' kavramı ve NoblePilot teknolojisi.",
    category: "Future Tech",
    readTime: "8 min read",
    date: "Oct 25, 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Müşteri Desteğinde Yeni Standart: 'Yüküm Nerede?' Sorusunu Tarihe Gömmek",
    summary: "Müşteri memnuniyetini artırmanın yolu, müşterinin soru sormasına gerek bırakmamaktır. Reaktif destekten proaktif ortaklığa geçiş.",
    category: "Customer Success",
    readTime: "5 min read",
    date: "Oct 20, 2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-x border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#ff5a26] rounded-full animate-pulse" />
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Insights & Journal</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-12">
            Thinking <br />
            <span className="text-zinc-700">Aloud.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Deep dives into the future of logistics, technology, and the architecture of global trade.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto border-x border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const handleClick = () => {
    toast.info("Content Unavailable", {
      description: "We are currently unable to load this content. Please try again later.",
      duration: 3000,
    });
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer flex flex-col h-full border-b border-white/10 md:border-b-0"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-mono text-white uppercase tracking-widest">{post.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow bg-black group-hover:bg-zinc-900/20 transition-colors duration-500">
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-medium text-white mb-4 leading-tight group-hover:text-[#ff5a26] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
          {post.summary}
        </p>

        <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
          Read Article
          <ArrowUpRight size={16} className="text-[#ff5a26]" />
        </div>
      </div>
    </div>
  );
}