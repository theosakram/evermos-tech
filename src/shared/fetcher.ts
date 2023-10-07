import { getEnv } from './getEnv';

export type FetcherProps = {
  url: string;
  query?: Record<string, unknown>;
  params: RequestInit;
};

const {
  publicRuntimeConfig: { defaultSource },
} = getEnv();

/**
 * url should start with "/"
 * e.g "/doctors"
 */
export const fetcher = async <T>(props: FetcherProps): Promise<T> => {
  let url = defaultSource + props.url;

  if (props.query) {
    const queryCopy = { ...props.query };

    Object.keys(queryCopy).forEach((key) => {
      queryCopy[key] = String(queryCopy[key]);
    });

    url += `?${new URLSearchParams(queryCopy as Record<string, string>)}`;
  }

  try {
    const res = await fetch(url, {
      ...props.params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return res.json();
  } catch (err) {
    return err;
  }
};
