import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignupForm } from '@/components/SignupForm';

describe('SignupForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('rejects an invalid email without calling the API', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch');
    render(<SignupForm />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'not-an-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /build your free day/i }));

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(/valid email/i),
    );
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('posts the lead and shows success on a valid submit', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true, redirectUrl: 'https://app.yaycay.ai/demo' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    render(<SignupForm />);
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'parent@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /build your free day/i }));

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/signup',
        expect.objectContaining({ method: 'POST' }),
      ),
    );
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(/free day/i),
    );
  });

  it('waitlist mode captures and confirms (no demo handoff)', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    render(<SignupForm mode="waitlist" />);
    expect(
      screen.getByRole('button', { name: /join the waitlist/i }),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'parent@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /join the waitlist/i }));

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(/on the list/i),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/signup',
      expect.objectContaining({ method: 'POST' }),
    );
  });
});
