import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  appearance,
  children,
  className,
  href,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonClassNames = cn(styles.button, className, {
    [styles.pink]: appearance === "pink",
    [styles.white]: appearance === "white",
  });

  if (href) {
    return (
      <a href={href} className={buttonClassNames} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={buttonClassNames} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
