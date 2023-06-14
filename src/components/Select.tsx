import { ReactNode } from "react";

interface iSelectProps {
  label: string;
  name: string;
  disabled?: boolean;
  children: ReactNode;
  handleSelect?: (name: string) => void | Promise<void>;
  error?: string;
}

export const Select = ({
  label,
  name,
  disabled = false,
  children,
  handleSelect,
  error,
}: iSelectProps) => {
  console.log(disabled);
  return (
    <div className="flex flex-col gap-2 input-width">
      <label className="font-inter font-medium text-sm text-grey-1" htmlFor={label}>
        {label}
      </label>

      <select
        id={label}
        name={name}
        className="w-full h-12 text-grey-3 px-4 border-grey-8 border-1.5 rounded bg-white-fixed hover:bg-grey-8 mb-6"
        onChange={(event) => handleSelect && handleSelect(event.target.value)}
        disabled={disabled}
      >
        {!disabled && (
          <option value="" hidden={true}>
            Escolha uma opção
          </option>
        )}
        {children}
      </select>
      {error && (
        <p
          className="flex self-end text-alert-1 text-input-error absolute bottom-[-20px] "
          aria-label="erro na validação do campo"
        >
          {error}
        </p>
      )}
    </div>
  );
};
