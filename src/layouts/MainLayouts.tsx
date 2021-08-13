import type { Component } from "solid-js";

const MainLayout: Component = ({ children }) => {
  return (
    <div className="md:px-4 mx-auto sm:px-6 xl:px-0 flex flex-col h-screen">
      <div className="flex-grow">{children}</div>
      <footer className="p-5 border-t-2 border-opacity-20 mt-36 md:mt-0">
        <p className="text-center text-gray-200 dark:text-white">
          © 2021 - Rahmat Agung Julians
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
