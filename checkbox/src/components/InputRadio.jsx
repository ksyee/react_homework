import PropTypes from 'prop-types';

export default function InputRadio({
  index,
  labelName,
  styleProps,
  obj,
  setObj,
}) {
  const handleChange = () => {
    setObj({ ...obj, activeButton: index });
  };

  return (
    <>
      <label
        className={`${styleProps} ${
          index === obj.activeButton && obj.activeStyle
        } select-none`}
        htmlFor={index}
      >
        {labelName}
      </label>
      <input
        hidden
        type="radio"
        id={index}
        name="radioGroup"
        onChange={handleChange}
        checked={index === obj.activeButton}
      />
    </>
  );
}

InputRadio.propTypes = {
  index: PropTypes.number.isRequired,
  labelName: PropTypes.string.isRequired,
  styleProps: PropTypes.string.isRequired,
  obj: PropTypes.object.isRequired,
  setObj: PropTypes.func.isRequired,
};
