const Title = ({ level, className, children }) => {
  const Tag = `h${level || 1}`; 
  return <Tag className={className}>{children}</Tag>;
};

export default Title;
