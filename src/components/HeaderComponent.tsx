import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faPowerOff,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useLogStore } from "@/hooks/useLogStore";
import { useCountStore } from "@/hooks/useCountStore";

const HeaderComponent = () => {
  const { isLogin, setIsLogin } = useLogStore();
  const { count } = useCountStore();
  return (
    <header className="bg-[#9E60F7] pr-10 py-5 flex justify-end fixed w-full">
      <Link href="/" className="text-white mr-10">
        Home
      </Link>
      <Link href="/cart" className="mr-10 flex">
        <FontAwesomeIcon icon={faCartPlus} className="text-white fa-xl mr-2" />
        <p className="text-white font-bold">: {count}</p>
      </Link>
      {isLogin ? (
        <>
          <p className="text-white mr-2">codecamp</p>
          <Link href="/login" onClick={() => setIsLogin()}>
            <FontAwesomeIcon icon={faPowerOff} className="text-white fa-xl" />
          </Link>
        </>
      ) : (
        <Link href="/login">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="text-white fa-xl"
          />
        </Link>
      )}
    </header>
  );
};

export default HeaderComponent;
