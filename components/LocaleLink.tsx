"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { ComponentProps } from "react";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function LocaleLink({ href, children, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  const localizedHref = href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
