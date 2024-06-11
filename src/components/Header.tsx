import { Button, Icons, Logo } from "@/components";
import { navLinks } from "@/data";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 z-20 w-full bg-white h-16 md:h-20 border-b flex items-center shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <button className="hidden md:flex xl:hidden flex-col justify-between w-6 h-4">
            <span className="w-1/2 h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-3/4 h-0.5 bg-black"></span>
          </button>
          <Logo />
        </div>
        <div className="flex items-center gap-x-4">
          <ul className="hidden xl:flex items-center gap-x-5">
            {navLinks.map(({ id, link, title, children }) => (
              <div
                key={id}
                className="group relative flex items-center gap-x-2 py-3"
              >
                <Link to={link}>{title}</Link>
                {children && <Icons.arrow.downOutlined />}
                <div className="absolute left-0 bottom-0 translate-y-full border shadow-sm rounded-md bg-white opacity-0 -z-50 group-hover:opacity-100 group-hover:z-50 flex flex-col transition-all duration-300">
                  {children?.map(({ id, link, title }) => (
                    <Link
                      to={link}
                      key={id}
                      className="text-nowrap py-2.5 px-5"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>
          <button className="w-9 h-9 rounded-full hidden md:flex items-center justify-center border">
            <Icons.search />
          </button>
          <Button className="hidden md:flex">Join</Button>
          <Button className="hidden sm:flex">Become a Seller</Button>
        </div>
      </div>
    </header>
  );
}
