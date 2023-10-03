import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Image from "next/image";

function LeftSidebar() {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-4 px-6">
        {sidebarLinks.map((item, key) => {
          return (
            <Link
              href={item.route}
              key={item.label}
              className="leftsidebar_link"
            >
              <Image
                src={item.imgURL}
                height={28}
                width={28}
                alt={item.label}
              />
              <p className="text-light-1 max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LeftSidebar;
