import { articles, personalInfo } from '../data/personal';

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Blog
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-cream mt-4">
              Latest <span className="text-accent">Articles</span>
            </h2>
          </div>
          <a
            href={personalInfo.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-charcoal/70 dark:text-cream/70 hover:text-accent transition-colors font-medium"
          >
            View all on Medium
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className="group">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Article thumbnail placeholder */}
        <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light mb-6 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-60 transition-opacity">
            <img src={article.imageLink} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium bg-cream/90 dark:bg-charcoal/90 text-charcoal dark:text-cream rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-charcoal/50 dark:text-cream/50">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-xl font-bold text-charcoal dark:text-cream group-hover:text-accent transition-colors">
            {article.title}
          </h3>

          <p className="text-charcoal/60 dark:text-cream/60 line-clamp-2">
            {article.description}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
            Read article
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </a>
    </article>
  );
}

