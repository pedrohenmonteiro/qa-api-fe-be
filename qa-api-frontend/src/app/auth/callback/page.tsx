"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthService from "@/auth/auth-services";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  let code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      AuthService.retrieveToken(code).then(() => {
        router.push("/");
      });
    } else {
      console.error("Authorization code not found in URL parameters");
    }
  }, [code, router]);

  return <div></div>;
}
