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
      cost: 25,
      quantity: 0,
    },
    {
      item: "green tea",
      cost: 20,
      quantity: 0,
    },
    {
      item: "lemon tea",
      cost: 15,
      quantity: 0,
    },
    {
      item: "black tea",
      cost: 25,
      quantity: 0,
    },
  ]);
  function increment(idx) {
    const newItems = [...items];
    newItems[idx].quantity += 1;
    setItems(newItems);
    increaseCount(items);
    incrementTotal(items);
  }
  function decrement(idx) {
    const newItems = [...items];
    newItems[idx].quantity >= 1 ? (newItems[idx].quantity -= 1) : "";
    setItems(newItems);
    decreseCount(items);
    decrementTotal(items);
  }
  function increaseCount(items) {
    let totalCount = 0;
    for (const item of items) {
      totalCount += item.quantity;
    }
    return totalCount;
  }
  function decreseCount(items) {
    let totalCount = 0;
    for (const item of items) {
      totalCount -= item.quantity;
    }
    return totalCount;
  }
  function incrementTotal(items) {
    let totalItemCost = 0;
    for (const item of items) {
      totalItemCost += item.cost * item.quantity;
    }
    console.log(totalItemCost);
    return totalItemCost;
  }
  function decrementTotal(items) {
    let totalItemCost = 0;
    items.map((item) => {
      totalItemCost -= item.cost * item.quantity;
    });
    return totalItemCost;
  }
  return (
    <>
      <div class="p-5 bg-gray-100 min-h-full">
        <div class="overflow-auto rounded-lg shadow hidden md:block">
          <table>
            <thead class="bg-gray-450 border-2 border-gray-200">
              <tr>
                <th class="w-20 p-3 text-sm font-bold tracking-wide text-left">
                  No
                </th>
                <th class="w-32 p-3 text-sm font-bold tracking-wide text-left">
                  Item
                </th>
                <th class="w-20 p-3 text-sm font-bold tracking-wide text-left">
                  Quantity
                </th>
                <th class="w-32 p-3 text-sm font-bold tracking-wide text-left">
                  Cost
                </th>
                <th class="w-32 p-3 text-sm font-bold tracking wide text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {items.map((item, idx) => (
                <tr class="bg-gray-300 " key={item.item}>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {idx + 1}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.item}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.quantity}
                  </td>
                  <td class="p-3 text-sm text-gray-750 whitespace-nowrap">
                    RS. {item.cost}
                  </td>
                  <td class="p-3 text-sm text-gray-750 whitespace-nowrap ">
                    {item.quantity * item.cost}
                  </td>
                  <td>
                    <button onClick={() => decrement(idx)}>-</button>
                  </td>
                  <td>
                    <button onClick={() => increment(idx)}>+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="grid grid-cols-1 gap-4 md:hidden min-w-full border border-black p-3">
          <div class="bg-amber-50 space-y-2 p-2 capitalize rounded-xl shadow-2xl border-2 border-green-300 sticky top-3 text-teal-900 font-bold">
            <div>Total Quantity: {increaseCount(items)}</div>
            <div>Total Amount: {incrementTotal(items)}</div>
          </div>
          {items.map((item, idx) => (
            <div class="bg-white space-y-4 p-4 rounded-xl shadow-xl border border-sky-800">
              console.log(idx)
              <div class="flex justify-between items-center space-x-2">
                {/* <div class=>
                  {1 + idx}
                </div> */}
                <div class="font-medium font-serif text-black uppercase w-36 border-2 hover:italic  ">
                  {item.item}
                </div>
                <div class="flex text-xl w-28 rounded-2xl bg-red-300	">
                  <button class="w-32" onClick={() => decrement(idx)}>
                    -
                  </button>
                  <div class="text-black-700 w-22">{item.quantity}</div>
                  <button class="w-32" onClick={() => increment(idx)}>
                    +
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-black-700 w-12 border ">
                  {item.cost}
                </div>

                <div class="text-bold-gray-700 w-24 border text-right">
                  {item.quantity * item.cost}
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
