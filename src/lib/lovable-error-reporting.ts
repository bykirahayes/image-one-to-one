// Generic client-side error reporting. This application runs independently
// of any visual editor or hosting platform.
type RuntimeErrorPayload = {
  message: string;
  stack?: string;
  filename?: string;
};

export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "An unexpected application error occurred";

  const stack = error instanceof Error ? error.stack : undefined;

  // Keep diagnostics in the browser console by default. A production error
  // monitoring provider can be connected here without coupling the app to one.
  console.error("[Application error]", {
    message,
    ...(stack ? { stack } : {}),
    route: window.location.pathname,
    ...context,
  } satisfies RuntimeErrorPayload & Record<string, unknown>);
}
