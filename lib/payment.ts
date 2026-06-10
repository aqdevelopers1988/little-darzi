export type PaymentProvider = "COD" | "CARD" | "WALLET";

export type PaymentIntentInput = {
  orderId: string;
  amount: number;
  provider: PaymentProvider;
};

export async function createPaymentIntent(input: PaymentIntentInput) {
  if (input.provider === "COD") {
    return { provider: "COD" as const, status: "PENDING_ON_DELIVERY", reference: `COD-${input.orderId}` };
  }

  throw new Error("Payment provider is not configured yet.");
}
