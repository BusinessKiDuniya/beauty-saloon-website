"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  Suspense
} from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  ClientProfile,
  getClient,
  getAllClients,
  DEFAULT_CLIENT_ID
} from "@/data/clients";

interface ClientContextType {
  client: ClientProfile;
  clientId: string;
  setClient: (id: string) => void;
  allClients: ReturnType<typeof getAllClients>;
  getShareUrl: (id?: string) => string;
  isCustomClient: boolean;
}

const ClientContext = createContext<ClientContextType>({
  client: getClient(DEFAULT_CLIENT_ID),
  clientId: DEFAULT_CLIENT_ID,
  setClient: () => {},
  allClients: getAllClients(),
  getShareUrl: () => "",
  isCustomClient: false
});

function ClientProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // 1. Priority order for active client ID:
  // URL param (?client=... or ?id=... or ?salon=...) -> localStorage -> DEFAULT_CLIENT_ID
  const urlParamClient =
    searchParams.get("client") ||
    searchParams.get("id") ||
    searchParams.get("salon");

  const [activeId, setActiveId] = useState<string>(() => {
    if (urlParamClient) return urlParamClient.toLowerCase();
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("active_salon_client_id");
      if (stored) return stored;
    }
    return DEFAULT_CLIENT_ID;
  });

  // Sync state whenever the URL search param changes
  useEffect(() => {
    if (urlParamClient && urlParamClient.toLowerCase() !== activeId) {
      const normalized = urlParamClient.toLowerCase();
      setActiveId(normalized);
      if (typeof window !== "undefined") {
        localStorage.setItem("active_salon_client_id", normalized);
      }
    }
  }, [urlParamClient, activeId]);

  // Method to programmatically switch client
  const setClient = useCallback(
    (newId: string) => {
      const normalized = newId.toLowerCase().trim();
      setActiveId(normalized);
      if (typeof window !== "undefined") {
        localStorage.setItem("active_salon_client_id", normalized);

        // Update URL query parameter smoothly without full reload
        const params = new URLSearchParams(window.location.search);
        params.set("client", normalized);
        const newUrl = `${pathname}?${params.toString()}`;
        router.replace(newUrl, { scroll: false });
      }
    },
    [pathname, router]
  );

  const client = getClient(activeId);
  const allClients = getAllClients();

  // Helper to generate a direct shareable client URL
  const getShareUrl = useCallback(
    (id?: string) => {
      const targetId = id || activeId;
      if (typeof window !== "undefined") {
        const origin = window.location.origin;
        return `${origin}/?client=${targetId}`;
      }
      return `/?client=${targetId}`;
    },
    [activeId]
  );

  return (
    <ClientContext.Provider
      value={{
        client,
        clientId: activeId,
        setClient,
        allClients,
        getShareUrl,
        isCustomClient: activeId !== DEFAULT_CLIENT_ID
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <ClientContext.Provider
          value={{
            client: getClient(DEFAULT_CLIENT_ID),
            clientId: DEFAULT_CLIENT_ID,
            setClient: () => {},
            allClients: getAllClients(),
            getShareUrl: () => "",
            isCustomClient: false
          }}
        >
          {children}
        </ClientContext.Provider>
      }
    >
      <ClientProviderInner>{children}</ClientProviderInner>
    </Suspense>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  return context;
}
