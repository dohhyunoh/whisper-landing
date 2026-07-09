import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Whisper — 10 quotes a day, tuned to you";

export default async function OpengraphImage() {
  const screen = await readFile(
    path.join(process.cwd(), "public/app-screen.png")
  );
  const screenSrc = `data:image/png;base64,${screen.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #B8D9E8 0%, #D4E8F0 50%, #EEF4F7 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingLeft: 88,
            paddingRight: 40,
          }}
        >
          <div style={{ fontSize: 34, color: "#5A8BA8", letterSpacing: 2 }}>
            WHISPER
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              fontSize: 74,
              fontWeight: 700,
              color: "#3A6B80",
              lineHeight: 1.15,
            }}
          >
            <span>10 quotes a day,</span>
            <span style={{ color: "#E85D75" }}>tuned to you.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#7B9AAA" }}>
            Daily quotes that learn from every swipe.
          </div>
        </div>
        <img
          src={screenSrc}
          width={330}
          height={660}
          style={{
            marginTop: 70,
            marginRight: 88,
            borderRadius: 36,
            boxShadow: "0 24px 60px rgba(58, 107, 128, 0.35)",
          }}
        />
      </div>
    ),
    size
  );
}
