import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Colete de Peso Ajustável",
    description: "Aumenta o gasto calórico em qualquer treino ou caminhada.",
    price: "€59.90",
    image: "https://via.placeholder.com/300x200.png?text=Colete+de+Peso",
  },
  {
    id: 2,
    title: "Mini Massage Gun",
    description: "Recuperação muscular rápida em formato portátil.",
    price: "€39.90",
    image: "https://via.placeholder.com/300x200.png?text=Mini+Massage+Gun",
  },
  {
    id: 3,
    title: "Manga de Compressão Esportiva",
    description: "Suporte para braços e pernas — melhora circulação e performance.",
    price: "€19.90",
    image: "https://via.placeholder.com/300x200.png?text=Compression+Sleeve",
  },
  {
    id: 4,
    title: "Corda de Pular Inteligente",
    description: "Conta saltos e calorias via app, ideal para desafios virais.",
    price: "€29.90",
    image: "https://via.placeholder.com/300x200.png?text=Smart+Jump+Rope",
  },
  {
    id: 5,
    title: "Faixas de Resistência (kit)",
    description: "Treino funcional e de força em qualquer lugar.",
    price: "€24.90",
    image: "https://via.placeholder.com/300x200.png?text=Resistance+Bands",
  },
  {
    id: 6,
    title: "Bola de Basquete LED",
    description: "Brilha no escuro — perfeita para vídeos e jogos noturnos.",
    price: "€34.90",
    image: "https://via.placeholder.com/300x200.png?text=Basketball+LED",
  },
  {
    id: 7,
    title: "Trainer de Drible Portátil",
    description: "Treina handling e reflexos em casa ou no parque.",
    price: "€27.90",
    image: "https://via.placeholder.com/300x200.png?text=Trainer+Drible",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace("€", "")), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🏀 Street & Court</h1>
        <div className="relative">
          <span className="font-semibold">🛒 {cart.length}</span>
        </div>
      </header>

      {/* Catálogo */}
      <main className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center"
          >
            <img src={product.image} alt={product.title} className="rounded-lg mb-3" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600 text-center">{product.description}</p>
            <p className="text-md font-semibold mt-2">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </main>

      {/* Carrinho */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-3">🛒 Carrinho</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">O carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="mb-3">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 text-sm"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-semibold mb-2">Total: €{total.toFixed(2)}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">
              Finalizar Compra
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
