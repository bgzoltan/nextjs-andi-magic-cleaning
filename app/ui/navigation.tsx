"use client";

import { usePathname } from "next/navigation";
import style from "./navigation.module.css";
import Link from "next/link";

interface NavigationProps {
  showNavigation?: ()=> void;
}

export const Navigation = ({showNavigation}:NavigationProps) => {
  const currentPath = usePathname();
  const routing = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/about",
      name: "ABOUT ME",
    },
    {
      path: "/services",
      name: "SERVICES",
    },
    {
      path: "/reviews",
      name: "REVIEWS",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];

  return (
    <nav className={style.navigationContainer}>
      {routing.map((route) => (
          <Link key={route.path}
            onClick={showNavigation}
            className={`${style.routePath} ${
              currentPath == route.path ? style.currentPath : style.routePath
            }`}
            href={route.path}
          >
            {route.name}
          </Link>
      ))}
    </nav>
  );
};
