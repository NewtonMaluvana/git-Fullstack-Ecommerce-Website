export const Catergory = ({
  cat,
  handle,
}: {
  cat: any;
  handle: (e: any) => Promise<void>;
}) => {
  return (
    <div className="w-full h-16 px-5 rounded-md my-1 bg-slate-400 flex justify-between">
      {cat.map((e: any) => (
        <div
          onClick={() => {
            handle(e.name);
          }}
          className="text-blue-600 hover:scale-110 duration-1000 cursor-pointer p-1 flex gap-2 justify-center text-3xl items-center"
        >
          {e.logo}
        </div>
      ))}
    </div>
  );
};
