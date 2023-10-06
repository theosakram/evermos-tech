import { getEnv } from "./getEnv";

export type FetcherProps = {
  url: string;
  query?: Record<string, string>;
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
  return new Promise(async (resolve, reject) => {
    const url = defaultSource + props.url + new URLSearchParams(props.query);

    try {
      const res = await fetch(url, {
        ...props.params,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return resolve(res.json());
    } catch (err) {
      return reject(err);
    }
  });
};
