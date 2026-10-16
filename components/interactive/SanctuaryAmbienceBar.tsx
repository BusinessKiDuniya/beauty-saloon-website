"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles, Music } from "lucide-react";

export default function SanctuaryAmbienceBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillator1Ref = useRef<OscillatorNode | null>(null);
  const oscillator2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      // Gentle fade in
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432Hz Harmonic Frequency (Ancient Solfeggio / Restorative Frequency)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(216, ctx.currentTime); // 432 / 2 octave
      osc1.connect(masterGain);
      osc1.start();
      oscillator1Ref.current = osc1;

      // Overtone Resonance
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(432, ctx.currentTime);
      const overtoneGain = ctx.createGain();
      overtoneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      osc2.connect(overtoneGain);
      overtoneGain.connect(masterGain);
      osc2.start();
      oscillator2Ref.current = osc2;

      setIsPlaying(true);
    } catch {
      // Audio autoplay policy fallback
      setIsPlaying(false);
    }
  };

  const stopAmbience = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioContextRef.current.currentTime + 1);
      setTimeout(() => {
        try {
          oscillator1Ref.current?.stop();
          oscillator2Ref.current?.stop();
          audioContextRef.current?.close();
        } catch {
          // ignore
        }
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  useEffect(() => {
    return () => {
      try {
        audioContextRef.current?.close();
      } catch {
        // cleanup
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border border-[#EDE7DD] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#2B4035] shrink-0">
            <Music className="w-4 h-4 text-[#B5A18D]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2B4035] not-italic">
                Sanctuary Soundscape Atmosphere
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            </div>
            <p className="text-[11px] text-[#5C5E58] mt-0.5">
              Experience the gentle 432Hz acoustic harmonic resonance played inside our Centennial spa sanctuary.
            </p>
          </div>
        </div>

        {/* Audio Equalizer & Interactive Play Button */}
        <div className="flex items-center gap-4 shrink-0">
          {isPlaying && (
            <div className="flex items-end gap-1 h-5 px-2">
              <span className="w-1 bg-[#2B4035] h-3 animate-pulse rounded-full" />
              <span className="w-1 bg-[#A8B39F] h-5 animate-pulse rounded-full [animation-delay:150ms]" />
              <span className="w-1 bg-[#2B4035] h-4 animate-pulse rounded-full [animation-delay:300ms]" />
              <span className="w-1 bg-[#B5A18D] h-2 animate-pulse rounded-full [animation-delay:75ms]" />
            </div>
          )}

          <button
            onClick={toggleSound}
            className={`px-4 py-2 rounded-full text-xs font-sans font-bold transition-all cursor-pointer flex items-center gap-2 border not-italic ${
              isPlaying
                ? "bg-[#2B4035] text-[#FFFDF8] border-[#2B4035] shadow"
                : "bg-[#EDE7DD] text-[#292A27] border-[#DACFC2] hover:bg-[#DACFC2]"
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#B5A18D]" />
                <span>Pause Ambiance</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#2B4035]" />
                <span>Play Sanctuary Ambiance</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
