import React, { useContext } from 'react';
import Hover from 'containers/Misc/Contexts/Hover';
import ActiveIndicator from 'components/Shared/ActiveIndicator';

type IndicatorProps = {
  children: React.ReactNode;
};

const Indicator: React.SFC<IndicatorProps> = ({
  children
}) => {
  const { hovered } = useContext(Hover);

  return (
    <ActiveIndicator active={hovered}>
      {children}
    </ActiveIndicator>
  )
};

export default Indicator;
