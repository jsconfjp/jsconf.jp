"use client";

import { useEffect, useState } from "react";
import "../app/i18n/i18next";

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 初回レンダリング時はサーバーサイドと同じ状態を保つ
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
