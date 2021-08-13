import type { Component } from "solid-js";
import CounterOne from "./components/CounterOne";
import MainLayout from "./layouts/MainLayouts";

const App: Component = () => {
  return (
    <MainLayout>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col h-screen">
        <div class="m-auto">
          <header class="p-10 flex flex-row">
            <div class="mx-auto flex flex-col justify-center text-center">
              <h1 class="text-gray-100 text-4xl font-bold">Solid JavaScript</h1>
              <h3 class="text-gray-100 text-xl">Multi Counter</h3>
            </div>
          </header>
          <div class="mx-auto flex flex-col md:flex-row">
            <CounterOne />
            <CounterOne />
          </div>
          <div class="mx-auto flex flex-col md:flex-row md:mt-5">
            <CounterOne />
            <CounterOne />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
