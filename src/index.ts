// Reexport the native module. On web, it will be resolved to ExpoIsTestflightModule.web.ts
// and on native platforms to ExpoIsTestflightModule.ts
export { default } from './ExpoIsTestflightModule';
export { default as ExpoIsTestflightView } from './ExpoIsTestflightView';
export * from  './ExpoIsTestflight.types';
