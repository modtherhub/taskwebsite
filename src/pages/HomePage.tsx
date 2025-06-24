import LanguageSwitcher from "../components/LanguageSwitcher"
import Navbar from "../components/Navbar"
import { useTranslation } from 'react-i18next';

const HomePage = () => {

  const { t } = useTranslation();

  return (
    <>
        <div className="relative z-0">
            {/* Background Layer */}
            <div className="absolute inset-0 h-screen bg-[#f1f2ed] z-[-1]"> 
            </div>

            <div className="relative z-0">
                <div className="z-[9999] relative">
                  <Navbar />
                </div>    
                <div className="flex flex-auto justify-end px-6 p-2">
                  <LanguageSwitcher />
                </div>    
                {/* Hero Section */}
                <div className="flex items-center justify-center pt-24 relative z-0">
                    <div className="text-center max-w-xl relative z-0">
                        <h1 className="lg:text-4xl text-2xl text-black font-bold">
                          {t('hero.title')}
                        </h1>
                        <p className="text-lg text-body-color dark:text-gray-400 mb-6 pt-4">
                          {t('hero.subtitle')}
                        </p>  
                        {/* Animated Button */}
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group z-0"
                        >
                          {/* Glowing background effects */}
                          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#70d675] rounded-full blur-md ease z-0" />
                          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease z-0">
                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ffc269] rounded-full blur-md z-0" />
                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#7cd8a8] rounded-full blur-md z-0" />
                          </span>
                          <span className="relative text-black z-10">{t('hero.button')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage
