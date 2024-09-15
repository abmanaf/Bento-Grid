import React from 'react';

function App() {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-4 grid-flow-row md:grid-rows-1 lg:grid-rows-6 gap-3'>
      <div className='bg-yellow-100 rounded-lg flex flex-col justify-center md:row-span-1 lg:row-span-3 p-4'>
        <p className='text-4xl lg:text-5xl font-semibold -tracking-widest leading-2'>Create and schedule content  <span className='text-purple-500'>quiker</span></p>
        <img className='md:w-4/5 lg:w-2/5 mt-5' src="public/assets/images/illustration-create-post.webp" alt="create-post" />
      </div>
      <div className='bg-purple-500 rounded-lg col-span-1 lg:col-span-2 flex flex-col justify-center items-center md:row-span-1 lg:row-span-2 order-first lg:order-none  p-4'>
        <p className='text-5xl lg:text-6xl text-white font-semibold text-center'>Social Media <span className='text-yellow-500'>10x</span> Faster with AI</p>
        <img className='md:w-4/5 lg:w-2/5 mt-5' src="public/assets/images/illustration-five-stars.webp" alt="illustration-five-stars" />
        <p className='text-white'>Over 4,000 5-star reviews</p>
      </div>
      <div className='bg-purple-100 rounded-lg flex flex-col justify-center items-center row-span-1 lg:row-span-4  p-4'>
        <p className='text-5xl leading-2 -tracking-widest'>Schedule to social media</p>
        <img className='mt-5 ' src="public/assets/images/illustration-schedule-posts.webp" alt="illustration-schedule-posts" />
        <p className='mt-5'>Optimize post timmings to publish content at the perfect time for your audience</p>
      </div>
      <div className='bg-white rounded-lg row-span-2 lg:row-span-2 flex flex-col justify-center items-center p-4'>
        <img className='mb-5' src="public/assets/images/illustration-multiple-platforms.webp" alt="illustration-multiple-platforms" />
        <p className='text-4xl font-semibold leading-1 -tracking-wide'>Manage multiple accounts and platforms</p>
      </div>
      <div className='bg-yellow-500 rounded-lg  lg:row-span-2 flex flex-col justify-center items-center p-4'>
        <p className='text-3xl leading-2 -tracking-widest'>Maintain a consistent posting schedule</p>
        <img className=' ' src="public/assets/images/illustration-consistent-schedule.webp" alt="illustration-consistent-schedule" />
      </div>
     <div className='bg-yellow-500 rounded-lg row-span-3 flex flex-col justify-center items-center  p-4 order-last lg:order-none'>
        <p className='text-3xl font-semibold lg:text-5xl mb-5 -tracking-wide'>Write your content using AI</p>
        <img src="public/assets/images/illustration-ai-content.webp" alt="illustration-ai-content" />
      </div>
      <div className='bg-white rounded-lg row-span-1 lg:row-span-2 flex flex-col justify-center items-center  p-4'>
        <p className='text-6xl font-semibold'>&gt; 56%</p>
        <p className='my-5'>fater audience growth</p>
        <img className='w-44' src="public/assets/images/illustration-audience-growth.webp" alt="illustration-audience-growth" />
      </div>
      <div className='bg-purple-500 rounded-lg flex flex-col lg:flex-row justify-center items-center md:col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 min-h-[100px] gap-2 p-4'>
  <img className='w-52 md:mb-4 lg:mr-4' src="public/assets/images/illustration-grow-followers.webp" alt="illustration-grow-followers" />
  <p className='text-white text-5xl leading-2 -tracking-widest font-semibold text-center md:text-left'>
    Grow followers with non-stop content
  </p>
</div>
    </div>
  );
}

export default App;
