import * as React from 'react';

import { ExpoIsTestflightViewProps } from './ExpoIsTestflight.types';

export default function ExpoIsTestflightView(props: ExpoIsTestflightViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
