import { cn } from '../../utils/utils';

const Button = ({ className, text, ...rest }) => {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-md bg-emerald-300 px-3 py-0.5 text-white hover:bg-emerald-200',
        className
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
