interface SecondaryButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const SecondaryButton = ({ type, children }: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-purple hover:shadow-md hover:shadow-gray-400 font-bold rounded-full px-[24px] py-[12px] w-[22vw] max-w-60 flex items-center justify-around"
    >
      {children}
    </button>
  );
};
