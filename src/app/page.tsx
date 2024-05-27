import { Grid, Hero, ThemeToggle } from '@/components';

import { FaHome } from 'react-icons/fa';
import { FloatingNav } from '@/components/ui';

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <div className='z-10'>
          <ThemeToggle />
        </div>
        <FloatingNav
          navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
