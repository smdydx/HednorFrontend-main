
import { Dialog, Transition } from "@/app/headlessui";
import React, { FC, Fragment, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose/ButtonClose";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const ModalSubmitReview: FC<Props> = ({ show, onCloseModal }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Here you would typically send the review to your backend
    console.log({ rating, comment });
    onCloseModal();
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={onCloseModal}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-neutral-900 shadow-xl rounded-2xl">
              <div className="relative">
                <ButtonClose onClick={onCloseModal} className="absolute -right-2 -top-2" />
                <h3 className="text-xl font-semibold leading-6 text-neutral-900 dark:text-neutral-200">
                  Write a Review
                </h3>
              </div>

              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <label className="mr-4">Rating:</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`w-6 h-6 cursor-pointer ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Your Review:</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your review here..."
                  />
                </div>

                <div className="flex justify-end gap-3 mt-8">
                  <ButtonSecondary onClick={onCloseModal}>Cancel</ButtonSecondary>
                  <ButtonPrimary onClick={handleSubmit}>Submit Review</ButtonPrimary>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalSubmitReview;
