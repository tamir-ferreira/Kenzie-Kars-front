interface iTextAreaProps {
  label: string;

  cols: number;
  rows: number;
  placeholder: string;
}

export const TextArea = ({
  label,

  cols,
  rows,
  placeholder,
}: iTextAreaProps) => {
  return (
    <div className="flex flex-col gap-2 input-width">
      <label
        className="font-inter font-medium text-sm text-grey-1"
        htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        name={label}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className="w-full py-6 px-4 border-grey-8 border-1.5 rounded bg-white-fixed mb-6 placeholder:text-grey-3 placeholder:text-base placeholder:font-normal hover:bg-grey-8 focus:outline-none focus:border-brand-2"
        focus:outline-none
        focus:border-brand-2
      />
    </div>
  );
};
