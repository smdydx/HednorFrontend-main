"use client";

import Prices from "@/components/Prices";
import { PRODUCTS } from "@/data/data";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Listbox } from "@headlessui/react";

type Option = {
  name: string;
  value: string;
};

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  // Add other product properties as needed
}

interface Order {
  id: string;
  date: string;
  status: string;
  products: Product[];
}

const AccountOrder = () => {
  const [sortBy, setSortBy] = useState<Option>({ name: "Newest First", value: "newest" });
  const [filterStatus, setFilterStatus] = useState<Option>({ name: "All Status", value: "all" });

  const sortOptions: Option[] = [
    { name: "Newest First", value: "newest" },
    { name: "Oldest First", value: "oldest" },
    { name: "Price: High to Low", value: "priceDesc" },
    { name: "Price: Low to High", value: "priceAsc" }
  ];

  const statusOptions: Option[] = [
    { name: "All Status", value: "all" },
    { name: "Delivered", value: "delivered" },
    { name: "Processing", value: "processing" },
    { name: "Cancelled", value: "cancelled" }
  ];

  const orders: Order[] = [
    {
      id: "WU3746HGG12",
      date: "Aug 8, 2023",
      status: "Delivered",
      products: [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]]
    },
    {
      id: "WU3746HGG13",
      date: "Aug 7, 2023",
      status: "Processing",
      products: [PRODUCTS[3], PRODUCTS[4]]
    }
  ];

  const filteredOrders = orders
    .filter(order => 
      filterStatus.value === "all" || order.status.toLowerCase() === filterStatus.value
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      switch (sortBy.value) {
        case "newest":
          return dateB - dateA;
        case "oldest":
          return dateA - dateB;
        case "priceAsc":
        case "priceDesc": {
          const totalPriceA = a.products.reduce((sum, product) => sum + product.price, 0);
          const totalPriceB = b.products.reduce((sum, product) => sum + product.price, 0);
          return sortBy.value === "priceAsc" ? totalPriceA - totalPriceB : totalPriceB - totalPriceA;
        }
        default:
          return 0;
      }
    });

  const renderDropdown = (options: Option[], value: Option, onChange: (value: Option) => void) => (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="relative w-full py-2.5 px-4 text-left bg-white dark:bg-neutral-800 rounded-lg shadow-sm cursor-pointer border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <span className="block truncate">{value.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="w-5 h-5 text-neutral-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-800 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option}
              className={({ active }) =>
                `${active ? 'bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-white' : 'text-neutral-900 dark:text-neutral-100'}
                cursor-pointer select-none relative py-2.5 px-4`
              }
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );

  const renderProductItem = (product: Product, index: number) => {
    const { image, name, price } = product;
    return (
      <div key={index} className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            fill
            sizes="100px"
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-base font-medium line-clamp-1">{name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{"Natural"}</span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{"XL"}</span>
                </p>
              </div>
              <Prices price={price} className="mt-0.5 ml-2" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">1</span>
            </p>
            <div className="flex">
              <button type="button" className="font-medium text-primary-600 dark:text-primary-500 hover:text-primary-500">
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOrder = (order: Order) => {
    const statusColor = {
      'Delivered': 'text-green-600',
      'Processing': 'text-blue-600',
      'Cancelled': 'text-red-600'
    }[order.status] || 'text-primary-600';

    return (
      <div key={order.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0 mb-4 transition-shadow hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-800/50">
          <div>
            <p className="text-lg font-semibold">Order #{order.id}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              <span>{order.date}</span>
              <span className="mx-2">·</span>
              <span className={`${statusColor} font-medium`}>{order.status}</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <ButtonSecondary sizeClass="py-2.5 px-4 sm:px-6" fontSize="text-sm font-medium">
              View Order
            </ButtonSecondary>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-slate-200 dark:divide-slate-700">
          {order.products.map(renderProductItem)}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Order History</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="w-full sm:w-48">
            {renderDropdown(statusOptions, filterStatus, setFilterStatus)}
          </div>
          <div className="w-full sm:w-48">
            {renderDropdown(sortOptions, sortBy, setSortBy)}
          </div>
        </div>
      </div>
      {filteredOrders.map(renderOrder)}
    </div>
  );
};

export default AccountOrder;