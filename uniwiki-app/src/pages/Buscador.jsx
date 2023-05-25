import React from "react";

// Importando iconos
import { IoIosMore } from "react-icons/io"; // TODO icono no se está usando!

// Importando dropdown desde syncfusion
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

// Importando datos
import {
  uniRender,    
} from "../data/buscador";

// Impotando componentes
import { Button } from "../components";

// Importando funcionalidad en contexto
import { useStateContext } from "../contexts/ContextProvider";

// FIXME ¿importando imagen?
import product9 from "../data/img/product9.jpg";

const Buscador = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        {/* TODO tener presente para poner barra o filtros de búsuqueda*/}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Selecciona</p>
              <p className="text-1xl">search bar</p>
            </div>
          </div>
          <div className="mt-6">
            {/* CAMPO DE FILTROS  */}
            <Button
              color="white"
              bgColor={currentColor}
              text="Nombre"
              borderRadius="10px"
            />
            <span></span>
            <Button
              color="white"
              bgColor={currentColor}
              text="Tipo"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>

      {/* SECCIÓN DE RENDE <3 */}
      <div className="flex flex-wrap justify-center">
        {/* MAPEANDO ARRAY [] */}
        {uniRender.map((universidad) => (
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            {universidad.datosGenerales.map((item) => (
              <div className="flex flex-col  justify-between">
                <p className="text-xl font-semibold">{item.nombre}</p>
                {/* <img className="md:w-30 h-50 " src={item.logo} alt="" /> */}{" "}
                logo
                <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
                  {item.tipo}
                </p>
              </div>
            ))}

            <div className="flex gap-4 border-b-1 border-color mt-6">
              {universidad.datos.map((item) => (
                <div
                  key={item.titulo}
                  className="border-r-1 border-color pr-4 pb-2"
                >
                  <p className="text-xs text-gray-400">{item.titulo}</p>
                  <p className="text-sm">{item.descripcion}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color pb-4 mt-2">
              <p className="text-md font-semibold mb-2">Otros items</p>
              <div className="flex gap-4">
                {universidad.otros.map((item) => (
                  <p
                    key={item.nombre}
                    style={{ background: item.color }}
                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                  >
                    {item.nombre}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              {/* <p className="font-semibold text-lg">React 18 coming soon!</p>
            <p className="text-gray-400 ">By Johnathan Doe</p>
            <p className="mt-8 text-sm text-gray-400">
              This will be the small description for the news you have shown
              here. There could be some great info.
            </p> */}
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Ver Más"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* SECCIÓN DE RENDE <3 */}
    </div>
  );
};

export default Buscador;
