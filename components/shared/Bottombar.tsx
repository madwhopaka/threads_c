"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathName.includes(item.route) && item.route.length > 1) ||
            pathName === item.route;
          return (
            <Link
              href={item.route}
              key={item.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={item.imgURL}
                height={24}
                width={24}
                alt={item.label}
              />
              <p className="text-light-1 text-subtle-medium  max-sm:hidden">
                {item.label.split(" ")[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
