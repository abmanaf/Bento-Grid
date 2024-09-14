import React from 'react';

function App() {
  return (
    <div>
    <div className='grid md:grid-cols-1 lg:grid-cols-8 grid-flow-row gap-4 p-4'>
      <div style={{flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}} className='bg-orange-200  rounded-lg col-span-1 lg:col-span-2 p-4'>
        <p className='text-5xl md:text-md lg:text-3xl'>Create and schedule content <span className='text-purple-400'>quicker</span></p>
        <img className="mt-7 w-5/6 text-start" src="/assets/images/illustration-create-post.webp" alt="Create and schedule content" />
      </div>
      <div className='bg-purple-500 flex flex-col justify-center items-center text-white rounded-lg col-span-1 lg:col-span-4  p-4'>
        <p className='text-6xl text-center'>Social Media <span className='text-yellow-500'>10x</span> Faster with AI</p>
        <img className="mt-2  w-40" src="/assets/images/illustration-five-stars.webp" alt="Five-star reviews" />
        <span>Over 4,400 5-star reviews</span>
      </div>      
      <div className='bg-white flex flex-col justify-center items-center rounded-lg col-span-1  lg:col-span-2 p-4'>
        <p> <span  className='text-5xl font-semi-bold'>&gt; 56%</span> <br /> <p className='my-3'>faster audience growth</p></p>
        <img className="w-3/6 mt-2" src="/assets/images/illustration-audience-growth.webp" alt="Audience growth" />
      </div>
      <div className='bg-white flex flex-col justify-center items-center rounded-lg col-span-1 lg:col-span-2  p-4'>
        <img className="w-full" src="/assets/images/illustration-multiple-platforms.webp" alt="Manage multiple platforms" />
        <p className='text-4xl font-semibold'>Manage multiple accounts and platforms.</p>
      </div>
      <div className='bg-yellow-500 rounded-lg col-span-1 lg:col-span-2  p-4'>
        <p className='text-3xl'>Maintain a consistent posting schedule</p>
        <img className="w-full mt-2" src="/assets/images/illustration-consistent-schedule.webp" alt="Consistent posting schedule" />
      </div>
      <div className='bg-yellow-500 rounded-lg col-span-1 lg:col-span-2  p-4'>
        <p className='text-2xl'>Write your content using AI</p>
        <img className="w-full mt-2" src="/assets/images/illustration-ai-content.webp" alt="Write content using AI" />
      </div>      
      <div className='bg-purple-200 flex flex-col justify-center rounded-lg items-center col-span-1 lg:col-span-2 row-span-2 p-4'>
        <p className='text-4xl mb-6'>Schedule to social media</p>
        <img className="w-full mt-2" src="/assets/images/illustration-schedule-posts.webp" alt="Schedule to social media" />
        <p className='mt-6'>Optimize post timings to publish content at the perfect time for your audience</p>
      </div>
      <div className='bg-purple-500 flex justify-center items-center gap-4 text-white rounded-lg col-span-1 lg:col-span-6 p-4'>
        <img className="w-44" src="/assets/images/illustration-grow-followers.webp" alt="Grow followers" />
        <span className='text-4xl font-bold'>Grow followers <br /> with non-stop content</span>
      </div>
    </div>
    
    </div>
  );
}

export default App;
