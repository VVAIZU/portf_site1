"use client"

import { MenuIcon } from "lucide-react"
import { Dialog, DialogClose } from "./ui/dialog"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { Button } from "./ui/button"
import Logo from "@/public/newsitelogo.png";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import ModeToggle from "./modetoggle"
import Image from "next/image"

export function NavBar() {
    const [user, setUser] = useState<{ name: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Расшифровываем токен
            const payload = JSON.parse(atob(token.split(".")[1]));
            setUser({ name: payload.name });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <div className="text-[#858076] flex items-center min-w-full w-full fixed justify-center z-[50] mt-[2rem]">
            <div className="flex justify-between items-center md:w-[1628px] w-full border dark:border-zinc-900 dark:bg-black bg-opacity-90 relative backdrop-filter backdrop-blur-lg border-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-[#858076] text-[#E6DFCF]">
                        <SheetHeader>
                            <SheetTitle>Portfolio site</SheetTitle>
                            <SheetDescription className="px-20 ">
                                Description about this designer, this site and etc.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="#home">
                                    <Button variant="outline" className="w-full">Home</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="#about">
                                    <Button variant="outline" className="w-full">About me</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="#projects">
                                    <Button variant="outline" className="w-full">Projects</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="#form">
                                    <Button variant="outline" className="w-full">Form</Button>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max=[825px]:hidden">
                        <Link href="/" className="pl-2">
                            <h1 className="font-bold">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={120}
                                    height={27.27}
                                    className=" w-full h-full hover:opacity-75"
                                />
                            </h1>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="/gameshop">
                        <Button variant="ghost">Game shop</Button>
                    </Link>
                    <Link href="#about">
                        <Button variant="ghost">IT projects</Button>
                    </Link>
                    <Link href="#projects">
                        <Button variant="ghost">Career</Button>
                    </Link>
                    <Link href="#form">
                        <Button variant="ghost">Home</Button>
                    </Link>
                </div>
                {user ? (
                    <div>
                        <span>Welcome, {user.name}</span>
                        <Button onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Link href="/login">
                        <Button>
                            Login
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}