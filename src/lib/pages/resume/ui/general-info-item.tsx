import React from 'react';

type Props<T> = {
  label: string;
  value?: T;
  renderValue?: (value: T) => React.ReactNode;
};

export const GeneralInfoItem = <T,>({
  label,
  value,
  renderValue,
}: Props<T>) => {
  const displayedvalue = renderValue ? renderValue(value!) : value;

  return (
    <div className='flex gap-1 items-center'>
      <span className="text-gray-600">{label}:</span>
      <span>{displayedvalue as React.ReactNode}</span>
    </div>
  );
};
