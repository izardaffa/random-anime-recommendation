function ExternalLink({ href, text }) {
  return (
    <a href={href} target="_blank">{text}</a>
  );
}

export default ExternalLink;
