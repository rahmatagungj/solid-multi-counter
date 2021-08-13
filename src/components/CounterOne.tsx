import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const CounterOne: Component = () => {
  const [countOne, setCountOne] = createSignal(0);

  return (
    <div class="mx-3 bg-white p-3 rounded-lg my-3 md:my-0 shadow-xl">
      <h2
        class={`${countOne() < 0 ? "text-red-400" : "text-gray-800"} 
        text-3xl font-bold my-2`}
      >
        {countOne()}
      </h2>
      <div className="flex flex-row">
        <button
          onClick={() => setCountOne(countOne() + 1)}
          class="mx-1 w-1/2 text-gray-100 text-lg font-bold bg-green-600 p-3 rounded-lg shadow hover:bg-green-700"
        >
          Tambah
        </button>
        <button
          onClick={() => setCountOne(countOne() - 1)}
          class="mx-1 w-1/2 text-gray-100 text-lg font-bold bg-red-600 p-3 rounded-lg shadow hover:bg-red-700"
        >
          Kurang
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
