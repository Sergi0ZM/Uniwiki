import React, { useEffect } from "react";

// Importando iconos
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";

// Importando componente popup de syncfusion
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Chat } from ".";

// Importando funcionalidad en contexto
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      {/* TODO botones del header */}
      <NavButton
        title="Menú"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        {isClicked.chat && <Chat />}
      </div>
    </div>
  );
};

export default Navbar;
