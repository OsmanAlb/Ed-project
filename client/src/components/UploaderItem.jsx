import { UploaderIcon } from './ui/icons/UploaderIcon';

const UploaderItem = ({number}) => {

	return (
    <form method="post">
  		<h2 className="text-12px leading-[22px] mb-[12px]">Lesson {number}</h2>
  		<label className="bg-[#F2F2F2] border border-[#E0E0E0] rounded-[4px] pb-[8px] pt-[12px] flex justify-center cursor-pointer">
  			<input className='opacity-0 hidden' content="Add Media" type="file" name="Add Media" />
				<div className='flex gap-x-[5px] items-center text-[#4F4F4F]'>
				<span className='text-10px leading-[20px]'>Add Media</span>
				<UploaderIcon />
				</div>
			</label>

		</form>
	)
}

export default UploaderItem