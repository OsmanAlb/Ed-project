import { CourseCard } from '../components/CourseCard';
import { CourseCategory } from '../components/CourseCategory';
import { NewsCard } from '../components/NewsCard';
import { RecentCard } from '../components/RecentCard';
import { NotificationIcon } from '../components/ui/icons/NotificationIcon';
import { SearchIcon } from '../components/ui/icons/SearchIcon';

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl leading-6">Hi, Christina</h1>
        <NotificationIcon />
      </div>
      <p className="text-[#888888] text-sm leading-6 pb-[18px]">
        What do you want to learn today?
      </p>
      <div className="flex gap-3 bg-[#F2F2F2] border border-[#E0E0E0] p-[15px] mb-6 rounded-md">
        <SearchIcon />
        <input
          placeholder="Search"
          className="text-12px leading-[22px] bg-inherit outline-none"
        />
      </div>
      <div className="mb-6">
        <h2 className="text-sm leading-6 mb-4">Recent learning</h2>
        <div className="flex gap-[10px] overflow-x-auto scrollbar-hide -mx-4 px-4">
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex mb-5">
          <CourseCategory name="Recommended" active />
          <CourseCategory name="Algebra" />
          <CourseCategory name="Geometry" />
        </div>
        <div className="flex gap-[15px] overflow-x-auto scrollbar-hide -mx-4 px-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="text-sm leading-6">Last News</h2>
        <p className="text-secondary">See all</p>
      </div>
      <div className="flex flex-col gap-5">
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default HomePage;
