// File: src/app/page.js
import { Home as HomeIcon, Users, Heart, BookOpen } from 'lucide-react'
import { FeatureCard } from './components/FeatureCard'

export default function Home() {
  const features = [
    {
      title: "Our Mission",
      description: "Dedicated to serving humanity through various charitable and social welfare programs",
      icon: <HomeIcon className="w-8 h-8" />
    },
    {
      title: "Community Support",
      description: "Building stronger communities through education, healthcare, and social services",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Charitable Programs",
      description: "Implementing sustainable charitable initiatives to help those in need",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Education",
      description: "Promoting education and skill development for underprivileged communities",
      icon: <BookOpen className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Al Ameen Baithulmal Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting communities through charitable initiatives and social welfare programs
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}