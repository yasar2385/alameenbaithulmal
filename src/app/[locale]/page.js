import { useTranslations } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Home, Users, Heart, BookOpen } from 'lucide-react';
import { FeatureCard } from '../../components/FeatureCard';

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  const title = messages.HomePage.title;
  console.log(title);
  return { title };
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  const features = [
    { key: "mission", icons: <Home className='w-8 h-8' /> },
    { key: "community", icon: <Users className='w-8 h-8' /> },
    { key: "charity", icon: <Heart className='w-8 h-8' /> },
    { key: "education", icon: <BookOpen className='w-8 h-8' /> }
  ];

  return (

    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={t('features.' + feature.key + '.title')}
              description={t('features.' + feature.key + '.description')}
              icon={index == 0 ? <Home className='w-8 h-8' /> : feature.icon}
            />
          ))}
        </div>
      </main>
    </div>

  );
}
