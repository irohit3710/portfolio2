import React from 'react'
import Title from '../layout/Title'
import ProjectsCard from './ProjectsCard'
import projects from './ProjectCount'
const Project = () => {
  return (
    <section id='projects' className=' w-full py-6 border-b-[1px] border-b-black'>
        <div className='flex items-center justify-center text-center'>
            <Title 
                title="Visit My Portfolio and keep my projects" 
                desc="My Projects"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {projects.map((item)=>(
          <ProjectsCard
          id={item._id}
          title={item.title}
          des={item.desc}
          src={item.image}
          Gitlink={item.glink}
          DepLink={item.dink}
        />
        ))}

      </div>
    </section>
  )
}

export default Project