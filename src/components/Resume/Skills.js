import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import { categories, skills } from "../../data/resume/skills";
import SkillsBar from "./SkillsBar";

function Skills() {
	const [selected, setSelected] = useState("All");

	return (
		<div>
			<div className="flex flex-wrap">
				{categories.map((l, index) => (
					<CategoryButton
						key={index}
						category={l}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
			</div>

			<div>
				{skills
					.filter((l) => l.category.includes(selected))
                    .sort((a,b)=> (a.category[0]==='Miscellaneous') ? -1:(a.title<b.title)? 1:-1)
                    .sort((a,b)=>(a.proficiency<b.proficiency)? 1:-1)
					.map((l, index) => (
						<SkillsBar key={index} skill={l}/>
					))}
			</div>
		</div>
	);
}

export default Skills;
