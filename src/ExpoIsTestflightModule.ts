import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIsTestflightModuleEvents } from './ExpoIsTestflight.types';

declare class ExpoIsTestflightModule extends NativeModule<ExpoIsTestflightModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIsTestflightModule>('ExpoIsTestflight');
