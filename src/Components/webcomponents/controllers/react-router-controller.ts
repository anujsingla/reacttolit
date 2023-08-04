import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { useNavigate } from "react-router-dom";

export class ReactRouterController implements ReactiveController {
  static hosts = new Set<ReactiveControllerHost & Element>();

  /** based on pwa-helper/router.ts copyright polymer project authors (MIT) */
  static {
    window.addEventListener("click", (e) => {
      console.log(this.hosts, e);
      if (
        Array.from(this.hosts).some((host) => e.composedPath().includes(host))
      ) {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey
        )
          return;

        const anchor = e
          .composedPath()
          .filter((n) => (n as HTMLElement).tagName === "A")[0] as
          | HTMLAnchorElement
          | undefined;
        if (
          !anchor ||
          anchor.target ||
          anchor.hasAttribute("download") ||
          anchor.getAttribute("rel") === "external"
        )
          return;

        const href = anchor.href;
        if (!href || href.indexOf("mailto:") !== -1) return;

        const location = window.location;
        const origin =
          location.origin || location.protocol + "//" + location.host;
        if (href.indexOf(origin) !== 0) return;

        e.preventDefault();
        if (href !== location.href) {
          window.history.pushState({}, "", href);
          this.locationUpdatedCallback(location, e);
        }
      }
    });

    window.addEventListener("popstate", (e) =>
      this.locationUpdatedCallback(window.location, e)
    );
    this.locationUpdatedCallback(window.location, null /* event */);
  }

  declare static navigate?: ReturnType<typeof useNavigate>;

  static register(navigate: ReturnType<typeof useNavigate>) {
    this.navigate = navigate;
  }

  static locationUpdatedCallback(location: Location, event: Event) {
    this.hosts.forEach((host) => host.requestUpdate());
    this.navigate?.(location.pathname);
  }

  constructor(private host: ReactiveControllerHost & Element) {
    this.hostConnected();
  }

  hostConnected(): void {
    ReactRouterController.hosts.add(this.host);
  }

  hostDisconnected(): void {
    ReactRouterController.hosts.delete(this.host);
  }
}
