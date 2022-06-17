import React from 'react'
import { categories } from '../../data/resume/skills'

function SkillsBar({skill}) {

    let bgcolor;

    (window.localStorage.getItem('color-theme') === 'dark')
    ? bgcolor = categories.filter((l)=>l.title===skill.category[0])[0].darkcolor
    : bgcolor = categories.filter((l)=>l.title===skill.category[0])[0].color;

    const wd = (skill.proficiency*20)+'%'
    return (
        <div>
            <div style={{width:wd, background:bgcolor}} className='my-2 text-selectcolor dark:text-darkselectcolor py-1 pl-3 rounded-lg text-xsm '>
                {skill.title}
            </div>
        </div>
    )
}

export default SkillsBar
