import React, { useState } from "react";

function CategoryButton({ category , selected, setSelected}) {

	let classic,hovered,selected_style;

	if (window.localStorage.getItem('color-theme') === 'dark'){

		classic = {borderColor:'transparent', borderRadius:'10px',borderWidth:'3px'};
		hovered = { borderColor: category.darkcolor, borderRadius:'10px',borderWidth:'3px'};
		selected_style = {background: category.darkcolor, borderColor: category.darkcolor,color:'white',borderRadius:'10px',borderWidth:'3px'}
	}
	else{
		classic = {borderColor:'transparent', borderRadius:'10px',borderWidth:'3px'};
		hovered = { borderColor: category.color, borderRadius:'10px',borderWidth:'3px'};
		selected_style = {background: category.color, borderColor: category.color,color:'white',borderRadius:'10px',borderWidth:'3px'}
	}

	const [hover, setHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
            style={selected===category.title ? selected_style : (hover ? hovered : classic)}
			className="mx-2 my-2 rounded-2 px-2 py-1 text-sm"
            onClick={()=>setSelected(category.title)}
		>
			{category.title}
		</div>
	);
}

export default CategoryButton;
