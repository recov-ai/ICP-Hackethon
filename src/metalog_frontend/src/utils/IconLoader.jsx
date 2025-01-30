const IconLoader = ({ name, className = "", ...props }) => {
  const iconPath = `/icons/${name}.svg`;

  return <img src={iconPath} className={className} alt={name} {...props} />;
};

export default IconLoader;
