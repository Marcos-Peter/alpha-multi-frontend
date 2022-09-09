interface PropTypes {
  className?: string;
  children?: React.ReactNode;
}

function InputBox(props?: PropTypes) {
  return (
    <div
      className={`w-full sm:flex sm:flex-col sm:justify-center sm:items-center ${
        props?.className ? props.className : ''
      }`}
    >
      {props?.children}
    </div>
  );
}

export { InputBox };
