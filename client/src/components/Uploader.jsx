import { useState } from "react"
import UploaderItem from "./UploaderItem"


const Uploader = () => {
	const [items, setItems] = useState(1)

	function numberChange() {
		setNumber(items => items + 1)
	}

	return (
		<div onChange={numberChange} className="flex flex-col gap-2.5">
			{items.map((item, index) => {
				<UploaderItem key={index} item={item}/>
			})}
		</div>
	)
}

export default Uploader