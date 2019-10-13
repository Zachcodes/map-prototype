export const setFlex = ({
  flexed,
  justify = 'initial',
  align = 'initial',
  wrap = 'nowrap',
  direction = 'row',
}) => {
  return flexed
    ? `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    flex-direction: ${direction};
  `
    : '';
};

export const setHeight = ({ height, maxHeight }) => {
  let concat = '';
  height && (concat += `height: ${height};`);
  maxHeight && (concat += `max-height: ${maxHeight};`);
  return concat;
};

export const setWidth = ({ width, maxWidth, minWidth }) => {
  let concat = '';
  width && (concat += `width: ${width};`);
  maxWidth && (concat += `max-width: ${maxWidth};`);
  minWidth && (concat += `min-width: ${minWidth};`);
  return concat;
};
