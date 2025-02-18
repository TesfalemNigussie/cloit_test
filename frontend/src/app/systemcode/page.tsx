'use client';
import Breadcrumb from '@/src/components/breadCrumb';
import { Header } from '@/src/components/header';
import { RedirectButton } from '@/src/components/redirectButton';
import Link from 'next/link';

export default function SystemCode() {
  return (
    <div className="fixed bg-white z-10 w-full space-y-2 flex flex-col">
      <Breadcrumb />
      <Header title='System Code' icon={
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="26" fill="#253BFF" />
        </svg>} />
      <RedirectButton />
    </div>
  );
}
