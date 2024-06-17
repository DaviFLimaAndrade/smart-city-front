import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import React from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();

    return (
        <Navbar disableAnimation isBordered className="fixed h-16 border-none bg-black">
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link href="/" className="text-white ">SmartCity Senai</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem data-active={location.pathname === "/signup"}>
                    <Link href="/signup" className={`text-white ${location.pathname === "/signup" ? 'text-black' : ''}`}>Sign Up</Link>
                </NavbarItem>

                <NavbarItem data-active={location.pathname === "/login"}>
                    <Link href="/login" className={`text-white ${location.pathname === "/login" ? 'text-black' : ''}`}>Log In</Link>
                </NavbarItem>

                <NavbarItem data-active={location.pathname === "/createSensor"}>
                    <Link href="/createSensor" className={`text-white ${location.pathname === "/createSensor" ? 'text-black' : ''}`}>Create Sensor</Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
}
