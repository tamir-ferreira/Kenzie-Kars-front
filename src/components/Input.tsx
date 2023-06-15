import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  label: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const Input = ({
  label,
  type,
  placeholder,
  disabled,
  value,
  register,
  error,
  onBlur,
}: iInputProps) => {
  return (
    <div className="flex flex-col gap-2 input-width w-full relative">
      <label className="font-inter font-medium text-sm text-grey-1" htmlFor={label}>
        {label}
      </label>

      <input
        id={label}
        {...register}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        className="w-full h-12 px-4 border-grey-8 border-1.5 rounded bg-white-fixed mb-6 placeholder:text-grey-3 placeholder:text-base placeholder:font-normal hover:bg-grey-8 focus:outline-none focus:border-brand-2"
      />
      {error && (
        <p
          className="flex self-end text-alert-1 text-input-error relative bottom-[20px] "
          aria-label="erro na validação do campo"
        >
          {error}
        </p>
      )}
    </div>
  );
};
