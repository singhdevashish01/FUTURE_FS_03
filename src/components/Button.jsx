import "./Button.css";

function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const buttonClass = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;