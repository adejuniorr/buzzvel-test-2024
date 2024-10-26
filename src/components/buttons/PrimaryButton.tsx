interface PrimaryButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const PrimaryButton = ({ type, children }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className="border-2 border-purple text-purple hover:bg-purple hover:text-yellow hover:shadow-md hover:shadow-gray-400 font-bold rounded-full px-[24px] py-[12px] w-[22vw] max-w-60 flex items-center justify-around"
    >
      {children}
    </button>
  );
};
