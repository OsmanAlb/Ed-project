import { ProgressBar } from './ui/ProgressBar';

export const RecentCard = () => {
  return (
    <div className="min-w-[180px] h-[188px] border border-[#E0E0E0] rounded-md">
      <img src="/src/assets/images/mathematic.png" alt="" />
      <div className="p-[5px]">
        <h3 className="mb-[5px] text-[10px] leading-5 font-semibold">
          Mathematics
        </h3>
        <p className="mb-[2px]">High School Algebra I: Help and Review</p>
        <div className="flex gap-[14px] justify-between items-center">
          <ProgressBar width="134px" index={5} length={10} />
          <span className="text-[10px] leading-5">5/10</span>
        </div>
      </div>
    </div>
  );
};
