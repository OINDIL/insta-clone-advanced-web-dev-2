import { navItems } from "@/assets/data";
import { LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";

type Children = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Children) => {
  return (
    <div className="flex">
      <nav className="border-r min-h-screen flex flex-col justify-between py-10 shadow-xl">
        <div>
          <span className="text-4xl font-semibold font-rouge px-5">
            Instagram
          </span>

          <div className="flex flex-col gap-2 mt-6 px-3">
            {navItems.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className="flex gap-2 items-center hover:bg-neutral-200 px-2 py-2 rounded-lg"
              >
                <item.icon />
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 px-5">
          <div className="flex items-center gap-2">
            <Menu />
            More
          </div>
          <div className="flex items-center gap-2">
            <LogOut />
            Log Out
          </div>
        </div>
      </nav>
      <main className="px-10">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
