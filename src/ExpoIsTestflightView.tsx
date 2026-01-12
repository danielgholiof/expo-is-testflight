import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIsTestflightViewProps } from './ExpoIsTestflight.types';

const NativeView: React.ComponentType<ExpoIsTestflightViewProps> =
  requireNativeView('ExpoIsTestflight');

export default function ExpoIsTestflightView(props: ExpoIsTestflightViewProps) {
  return <NativeView {...props} />;
}
