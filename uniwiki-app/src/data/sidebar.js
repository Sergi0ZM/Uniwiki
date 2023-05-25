import React from "react";

// importando iconos
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiOutlineCalendar  } from 'react-icons/ai';
import { FiSearch, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { GoListOrdered } from 'react-icons/go';
import { RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

// llamando desde sidebar.jsx 
// estructura y Categorías  de navegación del sidebar
export const links = [
  {
    title: 'Core',
    links: [
      {
        name: 'buscador',
        icon: <FiSearch />,
      },
    ],
  },

  {
    title: 'Indicadores',
    links: [      
      {
        name: 'UniRank',
        icon: <GoListOrdered/>,
      },      
    ],
  },

  {
    title: 'Herramientas',
    links: [
      {
        name: 'Calendar',
        icon: <AiOutlineCalendar />,        
      },
    ],
  },
  
  
  // Sección del sidebar para estadísticas
  {
    title: 'Estadísticas',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      // {
      //   name: 'bar',
      //   icon: <AiOutlineBarChart />,
      // },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      // {
      //   name: 'financial',
      //   icon: <RiStockLine />,
      // },
      // {
      //   name: 'color-mapping',
      //   icon: <BsBarChart />,
      // },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      // {
      //   name: 'stacked',
      //   icon: <AiOutlineBarChart />,
      // },
    ],
  },
];