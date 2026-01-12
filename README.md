# expo-is-testflight

An Expo module to detect if your iOS app was distributed through TestFlight.

## Installation

```bash
npm install expo-is-testflight
```

For bare React Native projects, run `npx pod-install` after installing.

## Usage

```typescript
import isTestFlight from 'expo-is-testflight';

if (isTestFlight) {
  console.log('App is running from TestFlight');
} else {
  console.log('App is NOT running from TestFlight');
}
```

## Platform Support

| Platform | Supported |
|----------|-----------|
| iOS      | Yes       |
| Android  | No (always returns `false`) |

## How It Works

On iOS, the module determines if the app is running from TestFlight by checking:

1. Whether the app store receipt is a sandbox receipt (`sandboxReceipt`)
2. Whether the app has an embedded provisioning profile

Apps distributed through TestFlight have a sandbox receipt but no embedded provisioning profile, which distinguishes them from apps installed via Xcode (which have both) and App Store releases (which have neither sandbox receipt nor provisioning profile).

## Use Cases

- Show beta features to TestFlight testers
- Display different UI for beta vs production builds
- Enable debug logging for TestFlight builds
- Show feedback prompts to beta testers

## Requirements

- iOS 15.1+
- Expo SDK 54+

## License

MIT
