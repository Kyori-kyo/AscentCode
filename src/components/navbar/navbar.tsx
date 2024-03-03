"use client";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navs } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import { Icons } from "../svgs/icons";

const Navbar = () => {
    const path = usePathname();
    const navItems = navs[path as keyof typeof navs];

    return (
        <main className={"container flex justify-between items-center py-3"}>
            <div className={"dark:text-white text-black"}>
                <Icons.Logo />
            </div>
            <div className={"flex gap-5"}>
                {
                    navItems.map((item) => {
                        return (
                            <a key={item.itemName} href={item.navLink}>{item.itemName}</a>
                        )
                    })
                }
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </main>
    );
};

export { Navbar };