import { MDXRemote } from 'next-mdx-remote';
import type { ArticleMdx } from '../../types/types';
import { Category } from '../shared/components/category/Category';
import { mdxComponents } from './utils/mdxComponents';
import styles from './Article.module.scss';

type ArticleProps = ArticleMdx;

export const Article = ({ source, meta: { title, date, category } }: ArticleProps) => (
  <main>
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.info}>
          <Category category={category} reversed />
          <time dateTime={date} className={styles.date}>
            {date}
          </time>
        </div>
        <h2 className={styles.heading}>{title}</h2>
      </header>
      <MDXRemote {...source} components={mdxComponents} />
    </article>
  </main>
);
