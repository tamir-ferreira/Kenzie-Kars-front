import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  disabled,
  value,
  register,
}: iInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-inter font-medium text-sm text-grey-1"
        htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register}
        className="w-full h-12 max-w-xs px-4 border-grey-8 border-2 rounded bg-white-fixed placeholder:text-grey-3 placeholder:text-base placeholder:font-normal hover:bg-grey-8 focus:outline-none focus:border-brand-2"
      />
    </div>
  );
};
