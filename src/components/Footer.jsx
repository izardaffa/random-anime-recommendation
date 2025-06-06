import ExternalLink from "./ExternalLink";

function Footer() {
  return (
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute bottom-0">
      <aside>
        <p>
          Made by <ExternalLink href="https://www.github.com/izardaffa" text="izardaffa" /> using <ExternalLink href="https://react.dev/" text="React" />, <ExternalLink href="https://vite.dev/" text="Vite" />, <ExternalLink href="https://tailwindcss.com/" text="Tailwind CSS" />, & <ExternalLink href="https://daisyui.com/" text="daisyUI" />. API by <ExternalLink href="https://jikan.moe/" text="Jikan API" />.
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
