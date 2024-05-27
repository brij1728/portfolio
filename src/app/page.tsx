import { Grid, Hero, ThemeToggle } from '@/components';

import { FaHome } from 'react-icons/fa';
import { FloatingNav } from '@/components/ui';

export default function Home() {
  return (
    <main className=' relative flex  flex-col overflow-hidden mx-auto sm:px-10 px-5 items-center justify-center bg-black-100'>
      <div className='z-10'>
        <ThemeToggle />
      </div>
      <div className='max-w-7xl w-full'>
        <FloatingNav
          navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
