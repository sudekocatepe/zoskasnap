// src/components/UserAuth.tsx

import React from "react";
import { useRouter } from "next/router";

// UserAuth Component
const UserAuth = ({ children, redirectTo }: { children: React.ReactNode, redirectTo: string }) => {
  const isAuthenticated = false;  // Burada oturum kontrolü yapmalısın (örneğin, context veya cookie kontrolü ile)
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectTo); // Eğer kullanıcı giriş yapmamışsa yönlendir
    }
  }, [isAuthenticated, redirectTo, router]);

  // Eğer kullanıcı giriş yaptıysa, children'ı render et
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null; // Kullanıcı giriş yapmadıysa, render edilmez
};

export default UserAuth;
