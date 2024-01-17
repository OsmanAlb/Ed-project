import { useState } from "react";
import UploaderItem from "./UploaderItem";


const Uploader = () => {
	const [items, setItems] = useState([1, 2, 3, 4]);

	return (
		<div className="flex flex-col gap-2.5">
			{items.map((item) => (
        <UploaderItem number={item} />
      ))}
		</div>
	)
}

export default Uploader