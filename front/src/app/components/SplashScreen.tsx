import React from "react";
import { Box, Typography } from "@mui/material";

const SplashScreen: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2000,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#e0f7fa",
      }}
    >
      {/* 水面アニメーション背景 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 360 640"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0f7fa" />
              <stop offset="100%" stopColor="#b2ebf2" />
            </linearGradient>
            <filter id="wave">
              <feTurbulence
                id="turb"
                baseFrequency="0.01 0.02"
                numOctaves="2"
                seed="2"
                type="fractalNoise"
                result="turb"
              />
              <feDisplacementMap
                in2="turb"
                in="SourceGraphic"
                scale="20"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <animate
                xlinkHref="#turb"
                attributeName="seed"
                from="2"
                to="12"
                dur="6s"
                repeatCount="indefinite"
              />
            </filter>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#waterGradient)"
            filter="url(#wave)"
          />
        </svg>
      </Box>
      {/* メインテキスト */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100vw",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          sx={{
            color: "#01579b",
            letterSpacing: 4,
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: "2.2rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: 1.1,
            textShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          未来を広げる
        </Typography>
        {/* 余白を追加 */}
        <Box sx={{ height: 20 }} />
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#0277bd",
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            fontWeight: 500,
            maxWidth: 420,
            textShadow: "0 2px 12px rgba(0,0,0,0.06)",
            whiteSpace: "pre-line",
          }}
        >
          {`われわれは皆、自分の殻に閉じこもり、
          自分の鼻先くらいの短い視野しかもっておりません`}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#4fc3f7",
            fontWeight: 400,
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
            textShadow: "0 1px 6px rgba(0,0,0,0.04)",
          }}
        >
          モンテーニュ(1533-1592)
          <br />
          フランスの哲学者
        </Typography>
      </Box>
    </Box>
  );
};

export default SplashScreen;
