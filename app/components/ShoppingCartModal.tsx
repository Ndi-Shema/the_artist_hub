"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useCallback } from "react";

export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice } = useShoppingCart();

  console.log("Flutterwave Public Key:", process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY);

  const totalAmount = totalPrice > 0 ? totalPrice : 1;

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
    tx_ref: "ARTSHOP-" + Date.now(),
    amount: totalAmount,
    currency: "RWF",
    payment_options: "card, mobilemoneyrwanda",
    customer: {
      email: "fredshema24@gmail.com",
      phone_number: "+250787591929",
      name: "Shema Fred",
    },
    customizations: {
      title: "The Artist Hub Checkout",
      description: "Payment for items in cart",
      logo: "https://your-logo-url.com/logo.png",
    },
    callback: (response) => {
      console.log("Payment Response:", response);
      closePaymentModal();
      alert("Payment Successful!");
    },
    onclose: () => alert("Payment window closed"),
  };

  console.log("Flutterwave Config:", config);

  // Initialize Flutterwave payment function using the hook
  const handleFlutterwavePayment = useFlutterwave(config);

  const handlePayment = useCallback(() => {
    console.log("Attempting to start Flutterwave payment...");
    console.log("Config:", config);

    if (typeof handleFlutterwavePayment !== "function") {
      console.error("Flutterwave payment function is not initialized properly");
      return;
    }

    handleFlutterwavePayment({
      callback: (response) => {
        console.log("Payment Response:", response);
        closePaymentModal();
        alert("Payment Successful!");
      },
      onClose: () => alert("Payment window closed"),
    });
  }, [handleFlutterwavePayment, config]);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don't have any items.</h1>
              ) : (
                Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                      <Image src={entry.image as string} alt="product image" width={100} height={100} />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{entry.name}</h3>
                          <p className="ml-4">${entry.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">QTY: {entry.quantity}</p>
                        <button type="button" onClick={() => removeItem(entry.id)} className="font-medium text-primary hover:text-primary/80">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Delivery and taxes are calculated at checkout.</p>

            <div className="mt-6">
              <Button
                className="w-full"
                onClick={handlePayment}
                disabled={cartCount === 0 || !totalPrice}
              >
                Checkout with Flutterwave
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button onClick={() => handleCartClick()} className="font-medium text-primary hover:text-primary/80">
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
