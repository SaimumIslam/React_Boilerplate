import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, DocumentTextIcon } from "@heroicons/react/solid";
import { SITE, SIDE_NAV_ITEMS } from "config/site";

function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen px-4 bg-navbar border-r">
      <div className="flex justify-between items-center px-4 my-2">
        {SITE.title}
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {SIDE_NAV_ITEMS.map((el) => {
            const { id, title, path } = el;
            return (
              <a
                className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md  hover:bg-gray-200  hover:text-primary focus:text-primary"
                href={path}
                key={id}
              >
                <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                <span class="mx-4 font-medium">{title}</span>
              </a>
            );
          })}

          <Disclosure as="div" className=" mt-2 focus:text-primary">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 transform  text-gray-600  hover:text-primary hover:bg-gray-200 w-full text-left focus:outline-none  ${
                    open && "text-primary"
                  }`}
                >
                  <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="ml-4 font-medium  flex-1">Accounts</span>
                  <ChevronDownIcon
                    className={`${open && "transform rotate-180"} w-5 h-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col">
                  <a
                    className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md  hover:bg-gray-200  hover:text-primary focus:text-primary"
                    href="/#"
                  >
                    <span className="mx-4 font-medium">Expand</span>
                  </a>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
