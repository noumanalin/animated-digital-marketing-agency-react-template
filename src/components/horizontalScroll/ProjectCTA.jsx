import React from 'react'

const ProjectCTA = () => {
  return (
    <section className='w-screen h-screen center-center bg-accent'>
        <article className='text-center'>
            <h3 className='text-3xl text-gray'>Have you project in mind?</h3>

            <h1 className='text-6xl md:text-[100px] tracking-tighter text-light mt-10 mb-20'> 
                <span>Let's make something</span> <br />
                <span>great together!</span> 
            </h1>

            <button className='w-48 h-48 rounded-full border border-gray-300 text-light'>
                contact us
            </button>
        </article>
    </section>
  )
}

export default ProjectCTA