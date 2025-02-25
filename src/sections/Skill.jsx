import SkillGrid from '@/components/SkillGrid'
import SkillSlider from '@/components/SkillSlider'
import React from 'react'
import {motion} from 'motion/react'

const Skill = () => {
  return (
    <div>
      <div className=' mt-10 mb-10 flex flex-col overflow-x-hidden gap-10 items-center justify-center'>
      <motion.h1 
       initial={{ opacity: 0, scale:0.5 }}
       whileInView={{ opacity: 1, scale:1 }}
       transition={{duration:0.5,delay:1}}
        className='text-5xl mb-2 font-bold font-serif text-red-100 italic text-center'>
          Skills
        </motion.h1>
      <SkillGrid/>
      <SkillSlider/>
    </div>
    </div>
    
  )
}

export default Skill
