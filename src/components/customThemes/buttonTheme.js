export const customButtonTheme = {
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,text-decoration-color,fill,stroke,box-shadow] ",
  fullSized: "w-full",
  color: {
    button:
      "bg-primaryNeutral text-white shadow shadow-slate-600  hover:scale-102 hover:bg-secondaryAccent active:scale-100",
  },
  outline: {
    off: "",
    on: "flex w-full justify-center bg-base text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit shadow shadow-slate-600",
    pill: {
      off: "rounded-md",
      on: "rounded-full",
    },
  },
};
