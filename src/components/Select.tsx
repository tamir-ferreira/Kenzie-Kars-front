import { ReactNode } from "react";

interface iSelectProps {
  id: string;
  label: string;
  name: string;
  children: ReactNode;
  error?: string;
}

export const Select = ({ id, label, name, children, error }: iSelectProps) => {
  return (
    <div className="flex flex-col gap-2 input-width">
      <label
        className="font-inter font-medium text-sm text-grey-1"
        htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        name={name}
        className="w-full h-12 text-grey-3 px-4 border-grey-8 border-1.5 rounded bg-white-fixed hover:bg-grey-8 mb-6">
        <option value="" hidden={true}>
          Escolha uma opção
        </option>
        {children}
      </select>
      {error && (
        <p
          className="flex self-end text-alert-1 text-input-error absolute bottom-[-20px] "
          aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </div>
  );
};
