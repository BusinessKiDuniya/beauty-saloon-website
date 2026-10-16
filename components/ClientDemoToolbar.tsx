"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Share2,
  Check,
  ChevronDown,
  Layers,
  X,
  Code2,
  ExternalLink
} from "lucide-react";
import { useClient } from "@/context/ClientContext";

export default function ClientDemoToolbar() {
  const { client, clientId, setClient, allClients, getShareUrl } = useClient();
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hideDemo, setHideDemo] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search);
      if (p.get("demo") === "false") {
        setHideDemo(true);
      }
    }
  }, []);

  // If user passes ?demo=false in URL, hide toolbar completely
  if (hideDemo || isDismissed) {
    return null;
  }

  const handleCopyLink = () => {
    const url = getShareUrl(clientId);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 font-sans print:hidden">
      {/* Minimized Pill */}
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1E2D25]/95 text-[#FFFDF8] backdrop-blur-md shadow-2xl border border-[#3D5648] hover:border-[#A8B39F] transition-all text-xs font-semibold hover:scale-105 active:scale-95 group"
          title="Multi-Client Demo Switcher: Preview site under different client profiles"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#A8B39F] animate-pulse" />
          <span className="text-[#A8B39F] text-[11px] font-normal">Client:</span>
          <span className="font-semibold text-white group-hover:text-[#B5A18D] transition-colors">
            {client.shortName}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#A8B39F] ml-0.5" />
        </button>
      ) : (
        /* Expanded Control Panel */
        <div className="w-80 sm:w-96 bg-[#1E2D25]/98 text-[#FFFDF8] backdrop-blur-xl border border-[#3D5648] rounded-2xl shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#3D5648] pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B5A18D]" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">
                  Multi-Client Template Switcher
                </div>
                <div className="text-[10px] text-[#A8B39F]">
                  URL Key: <code className="text-[#FFFDF8] font-mono bg-[#141F1A] px-1 py-0.5 rounded">?client={clientId}</code>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg text-[#A8B39F] hover:text-white hover:bg-[#2B4035] transition-colors"
              aria-label="Minimize"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Client Selector List */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#A8B39F] font-semibold block">
              Select Client Profile to Preview:
            </label>
            {allClients.map((c) => {
              const isActive = c.id === clientId;
              return (
                <button
                  key={c.id}
                  onClick={() => setClient(c.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${
                    isActive
                      ? "bg-[#2B4035] text-white border-[#A8B39F] shadow-sm font-semibold"
                      : "bg-[#141F1A]/60 text-[#DDE3D9] border-transparent hover:bg-[#2B4035]/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                      style={{ backgroundColor: c.accentColor }}
                    >
                      {c.shortName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-medium">{c.name}</div>
                      <div className="text-[10px] text-[#A8B39F] truncate">
                        {c.badge}
                      </div>
                    </div>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-[#B5A18D] shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Share Action */}
          <div className="pt-2 border-t border-[#3D5648] space-y-2">
            <button
              onClick={handleCopyLink}
              className="w-full py-2 px-3 rounded-xl bg-[#2B4035] hover:bg-[#3D5648] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-[#A8B39F]/40 active:scale-98"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Share Link Copied! (?client={clientId})</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#B5A18D]" />
                  <span>Copy Client Share Link</span>
                </>
              )}
            </button>

            {/* Quick Developer Tip */}
            <div className="bg-[#141F1A] rounded-xl p-2.5 text-[11px] text-[#A8B39F] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-semibold text-[10px]">
                <Code2 className="w-3 h-3 text-[#B5A18D]" />
                <span>Single Source of Truth:</span>
              </div>
              <p className="leading-snug">
                Change text, phone, address, and images anytime in{" "}
                <code className="text-[#FFFDF8] font-mono">data/clients.ts</code>. Add new clients by adding a new object key!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
