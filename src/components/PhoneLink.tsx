import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  layout?: "flex" | "inline-flex";
  children: React.ReactNode;
};

export function PhoneLink({ className, layout = "inline-flex", children }: PhoneLinkProps) {
  const desktopLayout = layout === "flex" ? "md:flex" : "md:inline-flex";

  return (
    <>
      <a href={site.contact.phoneHref} className={cn(className, "md:hidden")}>
        {children}
      </a>
      <a
        href={site.contact.contactPageHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className, "hidden", desktopLayout)}
      >
        {children}
      </a>
    </>
  );
}
