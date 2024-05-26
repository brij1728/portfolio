import { Hero } from '@/components';

export default function Home() {
  return (
    <main className=' relative flex  flex-col overflow-hidden mx-auto sm:px-10 px-5 items-center justify-center bg-black-100'>
      <div className='max-w-7xl w-full'>
        <p className='max-w-lg mx-auto font-semibold text-xl text-white'>
          Home Page
        </p>
        <Hero />
      </div>
    </main>
  );
}
