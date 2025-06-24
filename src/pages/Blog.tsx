import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <>
  <section className="bg-white pt-16 pb-20 px-4 dark:bg-dark">
    <div className="max-w-7xl mx-auto">
      
      {/* Language Switcher */}
      <div className="flex justify-end mb-8">
        <LanguageSwitcher />
      </div>

      {/* Title Section */}
      <div className="mb-12 text-center">
        <span className="block mb-2 text-lg font-semibold text-primary">
          {t('our blogs')}
        </span>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          {t('news')}
        </h2>
        <p className="text-base text-body-color dark:text-gray-400 max-w-2xl mx-auto">
          {t('blog dis')}
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={t('card1.title')}
          CardDescription={t('card1.dis')}
          image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-01.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={t('card1.title')}
          CardDescription={t('card1.dis')}
          image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-02.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={t('card1.title')}
          CardDescription={t('card1.dis')}
          image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
        />
      </div>
    </div>
  </section>
</>
  );
};

export default Blog;

// reusable function return card 
const BlogCard = ({ image, date, CardTitle, CardDescription }: any ) => {
  return (
    <>
      <div className=" w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 object-center overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className="text-black">
            {date && (
              <span className="mb-5 text-black inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary text-black sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};