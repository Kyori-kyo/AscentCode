"use client";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navs } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import { Icons } from "../svgs/icons";
import Link from "next/link";

const Navbar = () => {
    const path = usePathname();
    const navItems = navs[path as keyof typeof navs];

    return (
        <main className={"sticky top-0 bg-background"}>
            <div className={"container flex flex-ow items-center justify-between  border-b-[1px] py-3"}>
                <div className={"dark:text-white text-black"}>
                    <Icons.Logo />
                </div>
                <div className={"flex gap-5"}>
                    {
                        navItems?.map((item) => (
                            <Link key={item?.itemName} href={item?.navLink} className={"navItemLink"}>{item?.itemName}</Link>
                        ))
                    }
                </div>
                <div>
                    <ThemeSwitcher />
                </div>
            </div>
        </main>
    );
};

export { Navbar };