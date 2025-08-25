export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Stonyhouse
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Дома и интерьеры с силой скалы.  
        Натуральные фасады, глемпинги и арт-объекты под камень.
      </p>
      <a
        href="mailto:info@stonyhouse.ru"
        className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Связаться с нами
      </a>
    </main>
  );
}
