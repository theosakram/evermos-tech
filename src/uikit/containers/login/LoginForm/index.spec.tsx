import { render } from "@testing-library/react";
import { LoginForm } from ".";
import { QueryProvider } from "@/providers/QueryProvider";

jest.mock("next/config", () => ({
  publicRuntimeConfig: {
    BASE_URL: "https://fakestoreapi.com",
    BASE_SOURCE: "/api-evermos",
  },
}));

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

const comp = (
  <QueryProvider>
    <LoginForm />
  </QueryProvider>
);

describe("Login Form", () => {
  it("renders successfully", () => {
    const { baseElement } = render(comp);
    expect(baseElement).toBeTruthy();
  });
});
