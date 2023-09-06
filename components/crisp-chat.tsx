"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c6b1f8ab-c59e-4bcf-94b8-b594f3d3b901");
  }, []);

  return null;
};
