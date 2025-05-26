import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Маникюр",
      description: "Классический и аппаратный маникюр с покрытием",
      price: "от 1 500 ₽",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    },
    {
      title: "Наращивание ресниц",
      description: "2D, 3D эффекты, голливудский объем",
      price: "от 2 500 ₽",
      image:
        "https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=400&h=300&fit=crop",
    },
    {
      title: "Стрижка и укладка",
      description: "Женские и мужские стрижки, окрашивание",
      price: "от 2 000 ₽",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    },
  ];

  const specialists = [
    {
      name: "Анна Петрова",
      specialty: "Мастер маникюра",
      experience: "5 лет опыта",
      image:
        "https://images.unsplash.com/photo-1594824020400-5c8c7a27c78b?w=300&h=300&fit=crop",
    },
    {
      name: "Елена Смирнова",
      specialty: "Lash-мастер",
      experience: "3 года опыта",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop",
    },
    {
      name: "Мария Козлова",
      specialty: "Парикмахер-стилист",
      experience: "7 лет опыта",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-pink-500" size={28} />
              <span className="font-bold text-2xl text-gray-800">МИРА</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#specialists"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Мастера
              </a>
              <a
                href="#booking"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Запись
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Отзывы
              </a>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              <Icon name="Calendar" size={16} />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Салон красоты
            <span className="block text-pink-500">МИРА</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Превосходное качество услуг, опытные мастера и индивидуальный подход
            к каждому клиенту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
            >
              <Icon name="Calendar" size={20} />
              Записаться онлайн
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3"
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 text-lg">
              Широкий спектр beauty-услуг для вашей красоты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-pink-600">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {service.price}
                    </span>
                    <Button className="bg-pink-500 hover:bg-pink-600">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Мастера */}
      <section
        id="specialists"
        className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши мастера
            </h2>
            <p className="text-gray-600 text-lg">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-gray-800">
                    {specialist.name}
                  </CardTitle>
                  <CardDescription className="text-pink-600 font-medium">
                    {specialist.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{specialist.experience}</p>
                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-pink-50"
                  >
                    Записаться к мастеру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
            <p className="text-gray-600 text-lg">Мы ждем вас в нашем салоне</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Icon name="MapPin" className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Адрес</h3>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-pink-500" size={20} />
                    <span>г. Кострома, ул. Ленина, д. 49</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" className="text-pink-500" size={20} />
                    <span>+7(915) 905-22-29</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Icon name="Clock" className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Время работы</h3>
                  <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Карта салона</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Sparkles" className="text-pink-400" size={28} />
            <span className="font-bold text-2xl">МИРА</span>
          </div>
          <p className="text-gray-400 mb-6">
            Салон красоты премиум-класса в центре Москвы
          </p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Instagram"
              className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors"
              size={24}
            />
            <Icon
              name="MessageCircle"
              className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors"
              size={24}
            />
            <Icon
              name="Phone"
              className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors"
              size={24}
            />
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500">
            <p>&copy; 2024 Салон красоты МИРА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
