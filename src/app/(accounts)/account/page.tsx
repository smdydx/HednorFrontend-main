
"use client";

import Label from "@/components/Label/Label";
import React, { useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import { avatarImgs } from "@/contains/fakeData";
import Image from "next/image";
import Select from "@/shared/Select/Select";
import toast from "react-hot-toast";

const AccountPage = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main St, New York, NY 10001",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      address: "456 Business Ave, New York, NY 10002",
      isDefault: false
    }
  ]);

  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: "Home",
    address: "",
    isDefault: false
  });

  const handleAddAddress = () => {
    if (!newAddress.address) {
      toast.error("Please enter an address");
      return;
    }
    
    setAddresses([...addresses, {
      id: Date.now(),
      ...newAddress
    }]);
    setIsAddingAddress(false);
    setNewAddress({ type: "Home", address: "", isDefault: false });
    toast.success("Address added successfully");
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.success("Address deleted successfully");
  };

  const handleSetDefaultAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success("Default address updated");
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Account Information</h2>
      
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 flex items-start">
          <div className="relative rounded-full overflow-hidden flex">
            <Image
              src={avatarImgs[0]}
              alt="avatar"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mt-1 text-xs">Change Image</span>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
          <div>
            <Label>Full name</Label>
            <Input className="mt-1.5" defaultValue="John Doe" />
          </div>

          <div>
            <Label>Date of Birth</Label>
            <Input className="mt-1.5" type="date" />
          </div>

          <div>
            <Label>Gender</Label>
            <Select className="mt-1.5">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div>
            <Label>About</Label>
            <textarea 
              className="mt-1.5 block w-full rounded-2xl border-2 border-neutral-100 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-32 resize-none"
              placeholder="Tell us about yourself"
            />
          </div>

          <div>
            <Label>Email</Label>
            <div className="mt-1.5 flex">
              <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                <i className="text-2xl las la-envelope"></i>
              </span>
              <Input
                className="!rounded-l-none"
                defaultValue="john@example.com"
              />
            </div>
          </div>

          <div>
            <Label>Phone number</Label>
            <div className="mt-1.5 flex">
              <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                <i className="text-2xl las la-phone-volume"></i>
              </span>
              <Input className="!rounded-l-none" defaultValue="+1 234 567 8900" />
            </div>
          </div>

          <div className="pt-2">
            <ButtonPrimary>Update Profile</ButtonPrimary>
          </div>
        </div>
      </div>

      {/* Address Book Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Address Book</h3>
          <ButtonPrimary
            onClick={() => setIsAddingAddress(true)}
            className="!py-2.5">
            Add New Address
          </ButtonPrimary>
        </div>

        {isAddingAddress && (
          <div className="mb-6 p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl">
            <div className="space-y-4">
              <div>
                <Label>Address Type</Label>
                <Select
                  className="mt-1.5"
                  value={newAddress.type}
                  onChange={e => setNewAddress({...newAddress, type: e.target.value})}>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </Select>
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  className="mt-1.5"
                  value={newAddress.address}
                  onChange={e => setNewAddress({...newAddress, address: e.target.value})}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="makeDefault"
                  checked={newAddress.isDefault}
                  onChange={e => setNewAddress({...newAddress, isDefault: e.target.checked})}
                  className="mr-2"
                />
                <Label htmlFor="makeDefault">Make this my default address</Label>
              </div>
              <div className="flex gap-3">
                <ButtonPrimary onClick={handleAddAddress}>Save Address</ButtonPrimary>
                <ButtonSecondary onClick={() => setIsAddingAddress(false)}>Cancel</ButtonSecondary>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium flex items-center">
                    {address.type}
                    {address.isDefault && (
                      <span className="ml-2 px-2 py-1 text-xs bg-primary-500 text-white rounded-full">
                        Default
                      </span>
                    )}
                  </h4>
                  <p className="mt-1 text-neutral-500 dark:text-neutral-400">
                    {address.address}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefaultAddress(address.id)}
                      className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-full hover:bg-green-100">
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => handleEditAddress(address.id)}
                    className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded-full hover:bg-red-100">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
