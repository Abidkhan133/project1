import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <div className='mt-3'>
      <div className='flex justify-evenly'>
        <div className='mt-16'>
          <h5 className='text-3xl'>Great  <span className='text-pink-800'>Product</span> is</h5>
          <h2 className='text-5xl'>built by great <span className='text-pink-700'>teams</span></h2>
          <p className='mt-4'>we help build  and manage  a team  of world-class developers</p>
          <p>to bring your vision</p>
          <button className='bg-blue-700  mt-8 w-[260px]  py-3  outline-none text-white rounded-md'>let's get started!</button>
        </div>
        <div >
          <Image src="/image1.png" height={420} width={420} />
        </div>
      </div>
      {/* services section */}
      <section>
        <div>
          <h2 className='text-center font-semibold text-2xl py-3 '>Services We Offer</h2>
          <div className='w-[90%] mx-auto mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-4  font-bold'>
            <div>
              <Image src="/app.png" height={300} width={90} />
              <h2>Mobile App Development</h2>
              <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, numquam accusantium saepe alias necessitatibus voluptates perspiciatis corrupti quos vitae!</p>
            </div>
            <div>
              <Image src="/coding.png" height={300} width={90} />
              <h2>Web Design Development</h2>
              <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, numquam accusantium saepe alias necessitatibus voluptates perspiciatis corrupti quos vitae!</p>
            </div>
            <div>
              <Image src="/design.png" height={300} width={90} />
              <h2>Software Testing Services</h2>
              <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, numquam accusantium saepe alias necessitatibus voluptates perspiciatis corrupti quos vitae!</p>
            </div>
          </div>
        </div>
      </section>
      {/* section3 */}
      <section>
        <div className='mt-12'>
          <div className='flex  justify-evenly'>
            <div className='mt-16'>
              <h5 className='text-4xl'>Leading companies trust us</h5>
              <h2 className='text-3xl font-extrabold py-3'>to develop software</h2>
              <p className='mt-4 w-[24rem] '>We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
              </p>
              <p className='mt-12 text-xl text-blue-600'>See more Informations</p>

            </div>

            <div className='mt-10'>
              <Image src="/about.png" height={440} width={440} />
            </div>
          </div>

        </div>
        <div className='mt-28 ml-36'>
          <h2 className='text-2xl '>Meet the People  <br /> <span className='text-2xl font-bold'> We are Working With </span></h2>
        </div>
      </section>

      <section className='mt-14'>
        <div className='flex gap-4 justify-around'>
          <Image src="/logo-9.png" height={180} width={100} />
          <Image src="/logo8.png" height={180} width={100} />
          <Image src="/logo-7.png" height={180} width={100} />
          <Image src="/logo-6.png" height={180} width={100} />
          <Image src="/logo5.png" height={180} width={100} />
          <Image src="/logo9.png" height={180} width={100} />
        </div>
      </section>
      <section>
        <section class="px-4 mt-16">
          <div class="mx-auto max-w-3xl text-center">
            <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
            <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300 md:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>

      <div className='w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-1 font-bold'>
            <div>
               <Image src="/img3.jpg" width={100} height={100} className='rounded' />
               <Image src="/star.jpg" width={100} height={20} className='rounded' />
               <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis."
              </p>
              <p className="italic">- Anna Morian</p>
            </div>
            <div>
               <Image src="/img3.jpg" width={100} height={100} className='rounded' />
               <Image src="/star.jpg" width={100} height={20} className='rounded' />
               <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis."
              </p>
              <p className="italic">- Anna Morian</p>
            </div>
            <div>
               <Image src="/img3.jpg" width={100} height={100} className='rounded' />
               <Image src="/star.jpg" width={100} height={20} className='rounded' />
               <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis."
              </p>
              <p className="italic"> - Teresa May</p>
            </div>
           
          </div>
        </section>
      </section>

      <section>
        <div className='text-center mt-20'>
          <h2 className='text-2xl'>Our Recent </h2>
          <h3 className='text-3xl font-bold'>Case Studies</h3>
        </div>
      </section>

      <section className='flex justify-center mt-5'>
        <div className='gap-5'>
           <Image src="/Group 88.png" width={800} height={400} className='rounded' />
           <Image src="/Group 89.png" width={800} height={400} className='rounded mt-3' />
           <Image src="/Group 14.png" width={800} height={400} className='rounded mt-3' />
           <p className='text-pink-800 text-end mt-3'>Read More case studies</p>
        </div>
       
      </section>
      <section>
        <div className=' text-center mt-20'>
        <h2 className='text-xl'>Way of building </h2>
          <h3 className='text-3xl font-bold'>Great Software</h3>
        </div>
      </section>

      <section className='flex justify-center mt-12'>
      <Image src="/Frame 54.png" width={1000} height={400} className='rounded ' />
      </section>
    </div>
    <section>
    {/* <!-- Footer container --> */}
<footer
  class="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
  <div class="container p-6">
    <div class="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
      {/* <!--First links section--> */}
      <div class="mb-6">
        <h5>Developers</h5>
        <h5>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. A esse labore laborum
        </h5>
      </div>

      {/* <!--Second links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Links
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >About us</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Services</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Case studies</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >How it works</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Blog</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Carrers</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Areas we Serve</a
            >
          </li>
        </ul>
      </div>

      {/* <!--Third links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Contact us
        </h5>

        <ul class="mb-0 list-none">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequatur iure velit doloribus nisi, tenetur facilis fuga laboriosam.
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >+9234652632</a
            >
          </li>
         
        </ul>
      </div>

      {/* <!--Fourth links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Links
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <Image src="/logos.png" width={200} height={200}/>
          </li>
         
          
        </ul>
      </div>
    </div>
  </div>

  {/* <!--Copyright section--> */}
  <div
    class="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Tailwind Elements</a
    >
  </div>
</footer>
    </section>
    </>
  )
}

export default page