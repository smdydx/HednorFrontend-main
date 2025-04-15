
"use client";

import Prices from "@/components/Prices";
import { PRODUCTS } from "@/data/data";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Image from "next/image";
import { useState } from "react";
import Select from "@/shared/Select/Select";

const AccountOrder = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [filterStatus, setFilterStatus] = useState("all");

  const orders = [
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

  const filteredOrders = orders.filter(order => 
    filterStatus === "all" || order.status.toLowerCase() === filterStatus.toLowerCase()
  ).sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const renderProductItem = (product: any, index: number) => {
    const { image, name } = product;
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
              <Prices className="mt-0.5 ml-2" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">1</span>
            </p>
            <div className="flex">
              <button type="button" className="font-medium text-indigo-600 dark:text-primary-500">
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOrder = (order: any) => {
    return (
      <div key={order.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0 mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
          <div>
            <p className="text-lg font-semibold">#{order.id}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              <span>{order.date}</span>
              <span className="mx-2">·</span>
              <span className="text-primary-500">{order.status}</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <ButtonSecondary sizeClass="py-2.5 px-4 sm:px-6" fontSize="text-sm font-medium">
              View Order
            </ButtonSecondary>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
          {order.products.map(renderProductItem)}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>
        <div className="flex gap-4">
          <Select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-40">
            <option value="all">All Status</option>
            <option value="delivered">Delivered</option>
            <option value="processing">Processing</option>
            <option value="cancelled">Cancelled</option>
          </Select>
          <Select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-40">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Select>
        </div>
      </div>
      {filteredOrders.map(renderOrder)}
    </div>
  );
};

export default AccountOrder;
