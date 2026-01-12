import { registerWebModule, NativeModule } from 'expo';

import { ExpoIsTestflightModuleEvents } from './ExpoIsTestflight.types';

class ExpoIsTestflightModule extends NativeModule<ExpoIsTestflightModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIsTestflightModule, 'ExpoIsTestflightModule');
