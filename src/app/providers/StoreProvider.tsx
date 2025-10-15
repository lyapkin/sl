"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Lang } from "@/src/shared/models";
import { AppStore, makeStore } from "@/src/shared/store";

export default function StoreProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Lang;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore(locale);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
