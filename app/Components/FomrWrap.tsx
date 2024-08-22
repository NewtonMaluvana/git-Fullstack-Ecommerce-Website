const FomrWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full flex items-center justify-center pb-12 pt-24">
      <div className="max-w-[650px] w-full flex flex-col gap-6 items-center rounded-md p-4 lg:p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
};
export default FomrWrap;
