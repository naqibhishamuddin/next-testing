async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./servers");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    worker.start();
  }
}

initMocks();

export {};
