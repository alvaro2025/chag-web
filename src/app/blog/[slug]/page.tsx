import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/mdx'

export const dynamic = 'force-static'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://chag.cl/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-heart hover:text-heart-600 transition-colors mb-6 font-body font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-heart/10 text-heart text-xs font-body font-bold rounded-full">
              {post.category}
            </span>
            <span className="text-navy/40 text-sm font-body">{post.date}</span>
            <span className="text-navy/40 text-sm font-body">{post.readTime} lectura</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            {post.title}
          </h1>

          <p className="text-navy/60 text-lg font-body">{post.excerpt}</p>
        </div>

        {/* Content */}
        <article className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
          <MarkdownContent content={post.content} />
        </article>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-heart hover:text-heart-600 transition-colors font-body font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a todos los artículos
          </Link>
        </div>
      </div>
    </main>
  )
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []
  let blockquoteLines: string[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside text-navy/70 mb-6 space-y-2 font-body">
          {listItems.map((item, idx) => {
            // Parse bold text in list items
            const parts = item.split(/\*\*(.*?)\*\*/g)
            return (
              <li key={idx} className="ml-4">
                {parts.map((part, i) => 
                  i % 2 === 1 ? <strong key={i} className="font-bold text-navy">{part}</strong> : part
                )}
              </li>
            )
          })}
        </ul>
      )
      listItems = []
    }
  }

  const flushBlockquote = () => {
    if (blockquoteLines.length > 0) {
      elements.push(
        <blockquote key={`quote-${elements.length}`} className="border-l-4 border-heart pl-4 py-2 mb-6 italic text-navy/60 font-body">
          {blockquoteLines.join(' ')}
        </blockquote>
      )
      blockquoteLines = []
    }
  }

  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="font-bold text-navy">{part}</strong> : part
    )
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('# ')) {
      flushList()
      flushBlockquote()
      elements.push(
        <h1 key={index} className="text-3xl md:text-4xl font-display font-bold text-navy mt-8 mb-4">
          {trimmed.replace('# ', '')}
        </h1>
      )
    } else if (trimmed.startsWith('## ')) {
      flushList()
      flushBlockquote()
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-navy mt-8 mb-4">
          {trimmed.replace('## ', '')}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      flushList()
      flushBlockquote()
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-display font-bold text-navy mt-6 mb-3">
          {trimmed.replace('### ', '')}
        </h3>
      )
    } else if (trimmed.startsWith('> ')) {
      flushList()
      blockquoteLines.push(trimmed.replace('> ', ''))
    } else if (trimmed.startsWith('- ')) {
      flushBlockquote()
      listItems.push(trimmed.replace('- ', ''))
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      flushList()
      flushBlockquote()
      elements.push(
        <p key={index} className="text-navy font-body font-bold mb-4 leading-relaxed">
          {trimmed.replace(/\*\*/g, '')}
        </p>
      )
    } else if (trimmed.startsWith('---')) {
      flushList()
      flushBlockquote()
      elements.push(
        <hr key={index} className="my-8 border-gray-200" />
      )
    } else if (trimmed === '') {
      flushList()
      flushBlockquote()
      elements.push(<div key={index} className="mb-4" />)
    } else if (trimmed) {
      flushList()
      flushBlockquote()
      elements.push(
        <p key={index} className="text-navy/70 font-body mb-4 leading-relaxed">
          {parseBoldText(trimmed)}
        </p>
      )
    }
  })

  flushList()
  flushBlockquote()

  return <div className="markdown-content space-y-2">{elements}</div>
}
