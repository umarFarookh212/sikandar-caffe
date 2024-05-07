import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      item: "tea",
      cost: 10,
      quantity: 0,
    },
    {
      item: "coffee",
      cost: 20,
      quantity: 0,
    },
    {
      item: "horlicks",
      cost: 20,
      quantity: 0,
    },
    {
      item: "Boost",
      cost: 15,
      quantity: 0,
    },
    {
      item: "green tea",
      cost: 10,
      quantity: 0,
    },
    {
      item: "lemon tea",
      cost: 18,
      quantity: 0,
    },
    {
      item: "black tea",
      cost: 15,
      quantity: 0,
    },
    {
      item: "milk",
      cost: 12,
      quantity: 0,
    },
    {
      item: "samosa",
      cost: 10,
      quantity: 0,
    },
    {
      item: "plain cake",
      cost: 10,
      quantity: 0,
    },
  ]);
  function increment(idx) {
    const newItems = [...items];
    newItems[idx].quantity += 1;
    setItems(newItems);
  }
  function decrement(idx) {
    const newItems = [...items];
    newItems[idx].quantity >= 1 ? (newItems[idx].quantity -= 1) : " ";
    setItems(newItems);
  }

  const total = items.reduce(
    (previous, item) => previous + item.cost * item.quantity,
    0
  );
  const quantity = items
    .filter((item) => item.quantity > 0)
    .reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <div class="p-5 min-h-full mx-3">
        <div>
          <div class="overflow-auto hidden md:block shadow-lg shadow-indigo-400/90 max-w-2xl mx-44">
            <table class="border- border-blue max-w-2xl">
              <thead class="bg-blue-950 text-white font-mono tracking-wide text-md">
                <tr>
                  <th class="w-20 p-3 text-left">No</th>
                  <th class="w-36 p-3 text-left">Cost</th>
                  <th class="w-56 p-3 text-left ">Item</th>
                  <th class="w-36 p-3 text-left">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-300 font-bold bg-white text-blue-950 tracking-wide text-sm">
                {items.map((item, idx) => (
                  <tr key={item.item}>
                    <td class="p-3 oldstyle-nums">{idx + 1}</td>
                    <td class="p-3 whitespace-nowrap uppercase">{item.item}</td>
                    <td class="p-3 whitespace-nowrap">₹{item.cost}</td>
                    <td class="p-3 whitespace-nowrap ">
                      {item.quantity * item.cost}
                    </td>
                    <div class="p-3">
                      <td>
                        <button
                          onClick={() => decrement(idx)}
                          class="rounded-full bg-blue-950 min-w-7 min-h-7 text-center text-white font-bold text-xl "
                        >
                          -
                        </button>
                      </td>
                      <td class="p-3 text-md">{item.quantity}</td>
                      <td>
                        <button
                          onClick={() => increment(idx)}
                          class="rounded-full bg-blue-950 min-w-7 min-h-7 text-center text-white font-bold text-xl"
                        >
                          +
                        </button>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="rounded-3xl shadow-2xl border-2 border-blue-600 sticky bottom-5 font-bold max-w-lg hidden md:block backdrop-blur-sm bg-white/10">
          <div class="flex flex-col content-end space-y-2 p-2 justify-items-end">
            <div class="bg-slate-300 w-44 px-3 rounded-3xl">
              Total Quantity : {quantity}
            </div>
            <div class="bg-slate-300 w-44 px-3 rounded-3xl">
              Total Amount : ₹{total}
            </div>
          </div>
        </div>
        {/*  */}
        {/* mobile app */}
        {/*  */}
        <div class="grid grid-cols-1 gap-2 md:hidden min-w-full border-2 border-indigo-900 rounded-2xl p-2 shadow-indigo-950/45">
          <div class="backdrop-blur-sm bg-white/50 space-y-2 p-2 rounded-xl shadow-indigo-400/90 border-2 border-indigo-900 sticky top-3 text-green-800 font-bold">
            <div>Total Quantity : {quantity}</div>
            <div>Total Amount : ₹{total}</div>
          </div>
          {items.map((item, idx) => (
            <div class="bg-white space-y-4 p-4 rounded-2xl  border-2 border-indigo-300">
              <div class="flex justify-between items-center space-x-2">
                <div class="font-bold font-mono tracking-wider text-black uppercase w-36">
                  {item.item}
                </div>
                <div class="flex text-xl w-28 ">
                  <button
                    class="w-10 bg-red-500 rounded-full text-cyan-100"
                    onClick={() => decrement(idx)}
                  >
                    -
                  </button>
                  <div class="text-black-700 w-10 flex justify-center">
                    {item.quantity}
                  </div>
                  <button
                    class="w-10 bg-red-500 rounded-full text-cyan-100"
                    onClick={() => increment(idx)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-black-700 w-12 ">
                  ₹{item.cost}
                </div>

                <div class="text-gray-900 font-bold w-24 text-center font-mono h-6 ">
                  ₹{item.quantity * item.cost}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
