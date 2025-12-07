declare module "@vercel/analytics/react" {
    import { FC } from "react";

    interface AnalyticsProps {
        beforeSend?: (event: { type: string; url: string }) => { type: string; url: string } | null;
        debug?: boolean;
        mode?: "auto" | "development" | "production";
        scriptSrc?: string;
        endpoint?: string;
        dsn?: string;
    }

    export const Analytics: FC<AnalyticsProps>;
    export function track(
        name: string,
        properties?: Record<string, string | number | boolean | null | undefined>
    ): void;
}
