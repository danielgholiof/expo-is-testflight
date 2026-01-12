import { NativeModule, requireNativeModule } from 'expo';
import { Platform } from 'react-native';

declare class ExpoIsTestflightModule extends NativeModule {
  isTestFlight: () => boolean;
}

export default Platform.OS === 'ios'
  ? requireNativeModule<ExpoIsTestflightModule>(
      'ExpoIsTestflight'
    ).isTestFlight()
  : {
      isTestFlight: () => false,
    };
