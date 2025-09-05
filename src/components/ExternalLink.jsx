function ExternalLink({ href, text }) {
  return (
    <a href={href} target="_blank" className="underline">
      {text}
    </a>
  );
}

export default ExternalLink;
