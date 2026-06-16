import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/react';
import { HeroSim } from '@/components/home/HeroSim';
import { CONSENT_EVENT } from '@/lib/analytics';

// The query bar shows this placeholder only while the intro is held (typed is
// still empty). Once the build sequence starts typing "Singapore", it is gone.
const PLACEHOLDER = 'Where are you taking the family?';

function mockMatchMedia(matches: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('HeroSim cookie-consent gating', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockMatchMedia(false); // motion allowed, so the intro actually animates
    window.localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('holds the intro on the query frame until consent is resolved', () => {
    render(<HeroSim />); // consent unknown -> banner is up
    act(() => {
      vi.advanceTimersByTime(6000); // less than the 10s safety fallback
    });
    // Still parked: typing has not begun, so the placeholder is showing.
    expect(screen.getByText(PLACEHOLDER)).toBeInTheDocument();
  });

  it('starts the intro the moment the visitor accepts/declines', () => {
    render(<HeroSim />);
    act(() => {
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: 'granted' }));
    });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    // Typing started, so the placeholder is replaced by the typed query.
    expect(screen.queryByText(PLACEHOLDER)).not.toBeInTheDocument();
  });

  it('starts immediately for a returning visitor who already chose', () => {
    window.localStorage.setItem('yaycay-consent', 'denied');
    render(<HeroSim />);
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.queryByText(PLACEHOLDER)).not.toBeInTheDocument();
  });

  it('falls back to starting after the safety timeout if consent is ignored', () => {
    render(<HeroSim />); // consent stays unknown, no event
    act(() => {
      vi.advanceTimersByTime(10000); // fire the safety fallback -> intro un-gated
    });
    act(() => {
      vi.advanceTimersByTime(2000); // ...then the typing runs
    });
    expect(screen.queryByText(PLACEHOLDER)).not.toBeInTheDocument();
  });
});
