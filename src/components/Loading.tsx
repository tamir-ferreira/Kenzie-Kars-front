export const Loading = () => {
  return (
    <div className="fixed top-0 bg-black/50 w-screen h-screen flex justify-center items-center left-0">
      <div className="flex gap-[10px]">
        <div className="h-5 w-5 bg-brand-1 rounded-full animation-loading"></div>
        <div className="animation-delay-1"></div>
        <div className="animation-delay-2"></div>
      </div>
    </div>
  );
};
