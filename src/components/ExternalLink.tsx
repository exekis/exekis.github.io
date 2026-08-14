type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showMark?: boolean;
};

export default function ExternalLink({
  href,
  children,
  className,
  showMark = true,
}: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      {showMark && (
        <span className="external-mark" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}
