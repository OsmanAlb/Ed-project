import heroImg1 from '../assets/images/onBoarding/heroImg1.svg';
import heroImg2 from '../assets/images/onBoarding/heroImg2.svg';
import heroImg3 from '../assets/images/onBoarding/heroImg3.svg';

export const FirstStage = () => {
  return (
    <>
      <div className="-mx-4 -mt-[88px] mb-[35px]">
        <img src={heroImg1} alt="heroImg" />
      </div>
      <div className="text-[14px] leading-6 text-center mb-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus
        mauris pulvinar suspendisse. Et sit ac lacus in rhoncus.
      </div>
    </>
  );
};
export const SecondStage = () => {
  return (
    <>
      <div className="-mx-4 -mt-[88px] mb-[35px]">
        <img src={heroImg2} alt="heroImg" />
      </div>
      <div className="text-[14px] leading-6 text-center mb-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus
        mauris pulvinar suspendisse. Et sit ac lacus in rhoncus.
      </div>
    </>
  );
};
export const ThirdStage = () => {
  return (
    <>
      <div className="-mx-4 -mt-[88px] mb-[35px]">
        <img src={heroImg3} alt="" />
      </div>
      <div className="text-[14px] leading-6 text-center mb-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus
        mauris pulvinar suspendisse. Et sit ac lacus in rhoncus.
      </div>
    </>
  );
};
