const products = [
  {
    id: "1",
    name: "Straps",
    price: 3500,
    category: "Accesorio",
    img: "/images/straps.jpeg",
    stock: 30,
    description:
      "Straps con aperturas en los dedos, para mejorar el agarre seas el ejercicio que realices.",
  },
  {
    id: "2",
    name: "Venda",
    price: 2500,
    category: "Accesorio",
    img: "/images/vendas.jpeg",
    stock: 50,
    description:
      "Vendas de varios colores, para una mayor estabilidad en la muñeca.",
  },
  {
    id: "3",
    name: "Guantes de Boxeo",
    price: 47000,
    category: "Guantes",
    img: "/images/guante.jpeg",
    stock: 12,
    description:
      " Guantes de boxeo profesionales,con gran estabilidad y variedad en colores",
  },
  {
    id: "4",
    name: "Colchoneta yoga",
    price: 4000,
    category: "Colchoneta",
    img: "/images/colchoneta.jpeg",
    stock: 20,
    description: "Colchoneta semiprofesional, recofortable de yoga.",
  },
  {
    id: "5",
    name: "Zapatilla Jordan 1 Mid",
    price: 70000,
    category: "Zapatillas",
    img: "/images/zapatilla.jpg",
    stock: 2,
    description: "Zapatilla Jordan 1 Mid, colorwey orange.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.find((prod) => {
          return prod.id === id;
        })
      );
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
