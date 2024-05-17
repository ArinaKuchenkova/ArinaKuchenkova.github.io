// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(String(process.env.NEXT_PUBLIC_POSTHOG_KEY), {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export const PHProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
