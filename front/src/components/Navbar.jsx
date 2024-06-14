import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import React from "react";
import { useLocation } from "react-router-dom";

export default function () {

  const location = useLocation();

  return (
    <Navbar disableAnimation isBordered className="fixed h-16 border-none">

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="text-inherit">SmartCity Senai</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="text-inherit">SmartCity Senai</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem data-active={location.pathname === "/signup"}>
          <Link href="/signup" className={`text-black ${location.pathname === "/signup" ? 'text-blue-500' : ''}`}>Sign Up</Link>
        </NavbarItem>

        <NavbarItem data-active={location.pathname === "/login"}>
          <Link href="/login" className={`text-black ${location.pathname === "/login" ? 'text-blue-500' : ''}`}>Log In</Link>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  )
}

