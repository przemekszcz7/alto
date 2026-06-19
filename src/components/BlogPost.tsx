import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { BLOG_POSTS, BlogPostType } from '../data/blogPosts';
import { useHashRoute } from '../hooks/useHashRoute';

interface BlogPostProps {
  slug: string;
  onBack?: () => void;
}

export default function BlogPost({ slug, onBack }: BlogPostProps) {
  const { navigate } = useHashRoute();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const handleBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate('/blog');
    if (onBack) onBack();
  };

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <p className="text-text-muted mb-4">Artykuł nie został znaleziony.</p>
        <button onClick={handleBack} className="text-primary hover:underline font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer">
          <ArrowLeft size={14} /> Wróć do bloga
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 overflow-hidden bg-navy-dark min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] shadow-[0_0_8px_rgba(201,168,76,0.5)]"
        style={{ scaleX }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors cursor-pointer bg-transparent border-none outline-none"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Wróć do bloga
          </button>
        </motion.div>

        {/* Post Header */}
        <div className="mb-12">
          {/* Category */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold tracking-widest uppercase text-primary border border-primary/30 px-2 py-0.5 rounded-sm inline-block mb-6"
          >
            {post.category}
          </motion.span>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight mb-8 text-white leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Infos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-xs text-text-muted font-mono border-y border-white/10 py-6"
          >
            <div className="flex items-center gap-2">
              <User size={14} className="text-primary/70" />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary/70" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary/70" />
              <span>{post.readTime}</span>
            </div>
            
            <div className="ml-auto text-[10px] text-primary tracking-widest uppercase">
              {post.tag}
            </div>
          </motion.div>
        </div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="article-content"
        >
          {post.content}
        </motion.div>

        {/* Bottom Navigation */}
        <div className="border-t border-white/10 mt-16 pt-12 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary hover:text-white transition-colors cursor-pointer bg-transparent border border-primary/30 px-4 py-2 rounded-sm"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Wróć do listy artykułów
          </button>
        </div>
      </div>
    </div>
  );
}
