'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import ProductCatalogue from '@/features/products/components/ProductCatalogue';

export default function ProductsPage() {
  return (
    <>
      <SoundController />
      <Header />
      <main className="pt-20">
        <ProductCatalogue />
      </main>
    </>
  );
}
