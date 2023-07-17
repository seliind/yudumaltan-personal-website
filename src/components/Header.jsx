import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";
const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkında", href: "/hakkinda" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "İletişim", href: "/iletisim" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="isolate bg-[#A78B71]">
        <div className="px-6 pt-6 lg:px-8">
          <nav className="flex items-center justify-center" aria-label="Global">
           
            <div className="mr-auto hidden lg:flex">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-14 object-cover rounded-lg"
              /> </Link>
            </div>
           

            <div className="flex mr-auto lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item,i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-gray-100 hover:bg-white rounded-sm px-2 hover:text-[#A78B71] hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, i) => (
                      <Link
                        key={i}
                        to={`${item.href}`}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        <main>
          <div className="relative">
            <div className="w-full h-48 mt-10">
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-auto max-w-2xl py-4 lg:py-8">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
              
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                  Av. Yudum ALTAN BAKIR
                </h1>
                <p
                  className={`${styles.overlay} mt-6 text-lg leading-8 text-gray-200`}
                >
                  Size en iyi hukuki hizmeti sunmak için, yasal süreçlerde her
                  adımda sizinle birlikteyiz. Profesyonel ve güvenilir bir hukuk
                  danışmanlığı için iletişime geçin.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 mb-10">
                  <Link
                    to={"/iletisim"}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold hover:text-gray-900 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-xl"
                  >
                    İletişim
                  </Link>
                  <Link
                    to={"/hakkinda"}
                    className="text-sm font-semibold leading-6 text-white hover:scale-105"
                  >
                    Daha fazla <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Header;
