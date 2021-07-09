export const Root = ({ children }) => (
  <div className="relative flex items-center justify-between h-12 bg-navbar px-2 sm:px-0 md:px-6 lg:px-8">
    {children}
  </div>
);

export const MenuWrapper = ({ children }) => (
  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
    {children}
  </div>
);

export const IconButton = ({ children }) => (
  <button className="p-1 rounded-full text-primary focus:outline-none bg-background transform hover:scale-110 transition duration-500 ease-in-out">
    {children}
  </button>
);

export const Spacer = () => <div className="flex-1 " />;
