import './App.css';
import MainMenu from './components/mainMenu';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import AccountsPage from './pages/AccountsPage'
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route } from "react-router-dom";

function App() {

const productsData =
  [{ id: 0,
    image: '/img/disney.png',
    title: 'Disney plus',
    description: 'Paquete de disney plus',
    price: 5000,
    stock: 'Disponible',
  },
  { id: 1,
    image: '/img/netflix.jpg',
    title: 'Netflix',
    description: 'Paquete de Netflix',
    price: 7000,
    stock: 'Disponible',
  },
  { id: 2,
    image: '/img/amazonprimev.png',
    title: 'Amazon Prime Video',
    description: 'Paquete de Amazon Prime Video',
    price: 2000,
    stock: 'Disponible',
  },
  { id: 3,
    image: '/img/amazonprimev.png',
    title: 'Amazon Prime Video x 3 Meses',
    description: 'Paquete de Amazon Prime Video x 3 Meses',
    price: 6000,
    stock: 'Disponible',
  },
  { id: 4,
    image: '/img/amazonprimev.png',
    title: 'Amazon Prime Video x 6 Meses',
    description: 'Paquete de Amazon Prime Video x 6 Meses',
    price: 12000,
    stock: 'Disponible',
  }]

const accountsData =
  [{ id: 0,
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    start_date: '01/01/22',
    finish_date: '01/01/23',
    state: 'Activa',
  },
  { id: 1,
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    start_date: '01/01/22',
    finish_date: '01/01/23',
    state: 'Activa',
  },
  { id: 2,
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    start_date: '01/01/22',
    finish_date: '01/01/23',
    state: 'Activa',
  },
  { id: 3,
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    start_date: '01/01/22',
    finish_date: '01/01/23',
    state: 'Activa',
  },
  { id: 4,
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    start_date: '01/01/22',
    finish_date: '01/01/23',
    state: 'Activa',
  }]

const usersData =
  [{ id: 0,
    username: 'user.apellido',
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    rol: 'admin',
    state: 'Activo',
  },
  { id: 1,
    username: 'user.apellido',
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    rol: 'revendedor',
    state: 'Activo',
  },
  { id: 2,
    username: 'user.apellido',
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    rol: 'invitado',
    state: 'Activo',
  },
  { id: 3,
    username: 'user.apellido',
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    rol: 'user',
    state: 'Inactivo',
  },
  { id: 4,
    username: 'user.apellido',
    email: 'service@gmail.com',
    password: 'SRGtgHrthRGsdR456',
    rol: 'user',
    state: 'Activo',
  }]

  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage data={ productsData } />} />
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="products" element={<ProductsPage  data={productsData}/>} />
        <Route path="users" element={<UsersPage data={usersData} />} />
        <Route path="accounts" element={<AccountsPage data={accountsData}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
