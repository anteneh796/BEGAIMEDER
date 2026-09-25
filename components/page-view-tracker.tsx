"use client";
import { useEffect } from "react";
export function PageViewTracker(){useEffect(()=>{if(process.env.NODE_ENV!=="production")return;const payload=JSON.stringify({path:window.location.pathname,referrer:document.referrer||null});navigator.sendBeacon?.("/api/analytics/page-view",new Blob([payload],{type:"application/json"}));},[]);return null;}