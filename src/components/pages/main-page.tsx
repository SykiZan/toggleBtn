import React, { FC, useMemo } from 'react';
import Button from '../atoms/buttons/component';
import Size from '../atoms/sizes/component';

import styled from './main-page-styled.module.scss';

const MainPage: FC = () => {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null);

  const sizes = useMemo(() => [{ id: 1, size: 'XL' }, { id: 2, size: 'XXL' }, { id: 3, size: 'XXXL' }, { id: 4, size: 'MEGAXL', disabled: true }], []);
  const getSelectSizeHanlder = (id: number) => () => {
    setSelectedSize(id);
  };

  return (
    <>
      <h1 className="ml-5-vw">Hello world !</h1>
      <Button className="ml-5-vw">Button</Button>
      {
        sizes.map(({ id, size, disabled }) => (
          <Size
            className="ml-5-vw"
            key={id}
            disabled={disabled}
            onClick={getSelectSizeHanlder(id)}
            selected={id === selectedSize}
          >
            {size}
          </Size>
        ))
      }
    </>
  );
};

export default MainPage;
