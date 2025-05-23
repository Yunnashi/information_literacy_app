"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppBarComponent = () => {
  const pathname = usePathname();

  // ページタイトルを動的に設定
  const getPageTitle = () => {
    if (pathname === "/create-question") return "質問する";
    if (pathname.startsWith("/news/")) return "ニュース詳細";
    if (pathname.startsWith("/questions/")) return "質問詳細";
    // 必要に応じて他のパスを追加
    return "Page";
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          {pathname !== "/" && (
            <Link href="/" passHref>
              <IconButton edge="start" aria-label="back">
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
          )}
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {pathname === "/" ? (
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                適職質問 & AI分析
              </Link>
            ) : (
              getPageTitle()
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
