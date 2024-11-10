// StyleCard.jsx
const InputeStyles = {
    backgroundColor: '#f7f6f6',
    fontSize: '15px',
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? '0 0 0 3px rgba(251, 191, 36, 0.5)' : 'none',
      backgroundColor: state.selectProps.value ? '#f7f6f6' : '',
      padding: '5px 5px',
      fontSize: '15px',
      borderColor: 'transparent',
      outline: 'none',
      '&:hover': {
        outline: 'none !important',
      },
      '&:focus': {
        outline: 'none !important',
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? '#fbbf24'
          : isFocused
          ? '#f2e3be'
          : undefined,
        color: isDisabled ? '#ccc' : isSelected ? '#fff' : '#000000',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled ? (isSelected ? '' : '') : undefined,
        },
      };
    },
  };
  
  export default InputeStyles;
  