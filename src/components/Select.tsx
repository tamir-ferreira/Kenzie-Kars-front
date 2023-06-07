import { ReactNode } from "react";

interface iSelectProps {
  id: string;
  label: string;
  name: string;
  children: ReactNode;
}

export const Select = ({ id, label, name, children }: iSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-inter font-medium text-sm text-grey-1"
        htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        name={name}
        className="w-full h-12 max-w-xs text-grey-3 px-4 border-grey-8 border-2 rounded bg-white-fixed">
        <option value="" hidden={true}>
          Escolha uma opção
        </option>
        {children}
      </select>
    </div>
  );
};
