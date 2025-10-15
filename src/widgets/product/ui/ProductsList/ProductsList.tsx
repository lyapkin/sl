"use client";
import { HTMLAttributes } from "react";
import { PreviewCard } from "../PreviewCard";
import { useGetProductsListQuery } from "../../api/productsApi";
import ProductsListSkeleton from "./ProductsListSkeleton";

const ProductsList = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { data, isError, isLoading, isUninitialized } = useGetProductsListQuery(
    new URLSearchParams().toString()
  );

  if (isLoading || isUninitialized) {
    return <ProductsListSkeleton className={className} />;
  }

  if (isError) {
    return null;
  }

  const content = data.results.map((p) => {
    return <PreviewCard key={p.id} product={p} />;
  });
  return <ul className={className}>{content}</ul>;
};

export default ProductsList;
