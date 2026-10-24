import { createContext, useContext } from "react";
import { CartStore } from "./CartStore";
import { DetectorStore } from "./DetectorStore";
import { DonorStore } from "./DonorStore";
import { TestimonialsStore } from "./TestimonialsStore";

export interface RootStore {
  cart: CartStore;
  detector: DetectorStore;
  donor: DonorStore;
  testimonials: TestimonialsStore;
}

export function createRootStore(): RootStore {
  return {
    cart: new CartStore(),
    detector: new DetectorStore(),
    donor: new DonorStore(),
    testimonials: new TestimonialsStore(),
  };
}

export const RootStoreContext = createContext<RootStore | null>(null);

export function useStore(): RootStore {
  const store = useContext(RootStoreContext);
  if (!store) throw new Error("RootStoreContext не найден. Оберните App в провайдер.");
  return store;
}
