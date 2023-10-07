import { act, render, renderHook, waitFor } from '@testing-library/react';

import mockRouter from 'next-router-mock';

import { useCookieStore } from '@/modules/cookies/cookieStore';

import { LoginGuard } from '.';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Login Guard', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <LoginGuard>
        <h1>Hehe</h1>
      </LoginGuard>,
    );

    expect(baseElement).toBeTruthy();
  });

  it('redirects to login page when user is not logged in', async () => {
    await waitFor(() => {
      expect(mockRouter.pathname).toEqual('/login');
    });
  });

  it('show children component when user is logged in', async () => {
    const { result } = renderHook(() => useCookieStore());

    act(() => {
      result.current.setCookie('token', 'someToken');
    });

    const { queryAllByText } = render(
      <LoginGuard>
        <h1>Hehe</h1>
      </LoginGuard>,
    );

    await waitFor(() => {
      expect(queryAllByText('hehe')).toBeTruthy();
    });
  });
});
