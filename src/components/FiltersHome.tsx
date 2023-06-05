interface FilterProps {
  title: string;
}

export const FilterHome = ({ title }: FilterProps) => {
  return (
    <div className="mb-10">
      <h2 className="text-heading-4-600 mb-4 ml-8">{title}</h2>
      <ul className="ml-10">
        {/* Fazer map dos modelos */}
        <li className="cursor-pointer text-heading-6-500 text-grey-3">
          General Motors
        </li>
        <li className="cursor-pointer text-heading-6-500 text-grey-3">Fiat</li>
        <li className="cursor-pointer text-heading-6-500 text-grey-3">Ford</li>
        <li className="cursor-pointer text-heading-6-500 text-grey-3">Honda</li>
      </ul>
    </div>
  );
};
