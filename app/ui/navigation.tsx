"use client";

import { usePathname } from "next/navigation";
import style from "./navigation.module.css";
import Link from "next/link";
export const Navigation = () => {
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
      path: "/blog",
      name: "BLOG",
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
