import React from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Robert Johnson',
      role: 'Yat Sahibi',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      quote: 'DenizKoruma bana tam bir huzur verdi. Yatımdan uzaktayken bile teknede neler olduğunu tam olarak biliyorum. Sistem, seyahat halindeyken bir akü sorunu tespit etti ve herhangi bir hasar oluşmadan marina personeliyle iletişime geçerek sorunu çözdüm.',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Kiralık Filo Yöneticisi',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      quote: 'Kiralık tekne filosunu yönetmek eskiden lojistik bir kabustu. Filo Pro sistemi ile tüm teknelerimizi tek bir panelden izleyebiliyoruz. Bu, bakım verimliliğimizi önemli ölçüde artırdı ve çalışmama sürelerini azalttı.',
    },
    {
      id: 3,
      name: 'Michael Torres',
      role: 'Yelkenli Tutkunu',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      quote: 'Temel plan, yelkenlim için ihtiyacım olan her şeye sahip. Kurulum basitti ve mobil uygulama sezgisel ve güvenilir. Teknedeki sistemleri her yerden kontrol edebilmek, teknede olmadığım zamanlarda bile bana güven veriyor.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tekne Sahiplerinin Güvendiği Marka
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Müşterilerimiz, teknelerini korumak ve içlerinin rahat etmesi için izleme sistemlerimize güveniyor.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-hidden">
            <div className="flex gap-8 px-4 animate-scroll md:px-0">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hidden md:block">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hidden md:block">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
    <div className="flex items-center mb-6">
      <div className="mr-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover border-2 border-cyan-400"
        />
      </div>
      <div>
        <h4 className="font-bold text-xl">{testimonial.name}</h4>
        <p className="text-blue-200">{testimonial.role}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-blue-100 italic">"{testimonial.quote}"</p>
  </div>
);

export default Testimonials;