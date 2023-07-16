import React from "react";
import '../../assets/scss/components/form/button.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string,
  size?: string,
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ 
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  ...rest
}) => { 
    return (
      <button 
        className={` btn btn-${variant}-${size}` + (disabled ? ' disabled' : '')}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
}

export default Button;