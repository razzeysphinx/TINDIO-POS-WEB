import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #052e2b 0%, #047857 52%, #10b981 100%)",
          color: "white",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "62px",
              height: "62px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.14)",
              fontSize: "30px",
              fontWeight: 900,
            }}
          >
            T
          </div>

          <div
            style={{
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            TINDIO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "74px",
              lineHeight: 0.98,
              fontWeight: 900,
              letterSpacing: "-0.055em",
            }}
          >
            Sell simple.
            <br />
            Grow smarter.
          </div>

          <div
            style={{
              marginTop: "26px",
              fontSize: "27px",
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Sales, inventory, employees, stores, and
            everyday business workflows in one connected
            product experience.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          TINDIO
        </div>
      </div>
    ),
    socialImageSize,
  );
}
