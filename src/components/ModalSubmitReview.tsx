
import { Dialog, Transition } from "@/app/headlessui";
import React, { FC, Fragment, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose/ButtonClose";
import { StarIcon } from "@heroicons/react/24/solid";
import Select from "@/shared/Select/Select";

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const REVIEW_ASPECTS = [
  "Product Quality",
  "Value for Money", 
  "Size & Fit",
  "Design",
  "Color Accuracy"
];

const ModalSubmitReview: FC<Props> = ({ show, onCloseModal }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [selectedAspect, setSelectedAspect] = useState(REVIEW_ASPECTS[0]);

  const handleSubmit = () => {
    // Here you would typically send the review to your backend
    console.log({ rating, comment, selectedAspect });
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
                <div className="text-center">
                  <h3 className="text-2xl font-semibold leading-6 text-neutral-900 dark:text-neutral-200">
                    Write a Review
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Your review will help other shoppers make better decisions
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Aspect to Review</label>
                  <Select
                    className="w-full rounded-lg border-neutral-200 dark:border-neutral-700"
                    value={selectedAspect}
                    onChange={(e) => setSelectedAspect(e.target.value)}>
                    {REVIEW_ASPECTS.map((aspect) => (
                      <option key={aspect} value={aspect}>
                        {aspect}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-colors ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with this product..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
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
