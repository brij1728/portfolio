import { Grid, Hero } from '@/components';

import { FaHome } from 'react-icons/fa';
import { FloatingNav } from '@/components/ui';

export default function Home() {
  return (
    <main className='relative flex flex-col items-center justify-center w-full px-5 mx-auto overflow-hidden bg-black-100 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <FloatingNav
          navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
