import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import {  type PlausibleOptions, createPlausibleTracker } from '@barbapapazes/plausible-tracker'
import type { ModuleOptions } from '../module'

export default defineNuxtPlugin({
  name: 'plausible',
  setup: () => {
  const options = useRuntimeConfig().public.plausible as Required<ModuleOptions>

  const plausible = createPlausibleTracker({
    ...options,
    domain: options.domain || window.location.hostname,
  })

  return {
    provide: {
      plausible,
    },
  }
}})
