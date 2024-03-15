---
sidebar_position: 2
sidebar_label: "Setup mobile SDK"
---

# Configure Mobile SDK

Continuing with the Grocery List Pro example, our example project slug is `vgl`

## Request an SDK

Missing an SDK for your platform? Let us know what you need!

📣 [I want to request a mobile SDK](https://docs.google.com/forms/d/e/1FAIpQLScEq_ApJFiGBgTsjMJOqg1OA6Gp8Fty0p5hGvp7zz2z7IBNvQ/viewform)

## Flutter SDK

### Setup iOS

Add your deeplinking domain as an associated applinks domain. Example: `vgl.vimen.io`

☀️ [Show me how to associate a domain in XCode](/getting-started/help-do#assign-associated-domain)

```xml title="ios/Runner/Runner.entitlements"
<dict>
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>applinks:vgl.vimen.io</string>
	</array>
</dict>
```

### Setup Android

```xml title="android/app/src/main/AndroidManifest.xml"
<manifest>
    <application>
        <!-- We recommend using singleTask with Flutter apps -->
        <activity android:launchMode="singleTask">

            <!-- Vimen configuration -->
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="http" />
                <data android:scheme="https" />

                <!-- Use your deeplinking domain  -->
                <data android:host="vgl.vimen.io" />
            </intent-filter>
            <!-- Vimen configuration end -->
        </activity>
    </application>
</manifest>
```

:::info
Test the link by pasting it into Keep Notes. Tapping on it will cause it to trigger.

☀️ [Show me how to verify App Links integration with adb](/getting-started/help-do#verify-app-links-integration)
:::

### Setup Flutter

```yaml title="pubspec.yaml"
name: example_app
dependencies:
  flutter:
    sdk: flutter

  vimen_sdk: # latest
```

```dart title="lib/main.dart"
void main() async {
  // Set your project's client key before use!
  Vimen.clientKey = 'abc123';
  runApp(const MyApp());
}
```

### Create your first deeplink

A person tapping on this link will be prompted to install your app. If they already have the app, your custom code will be triggered.

```dart
final vimen = Vimen();

// create a custom deeplink
final deeplink = await vimen.createLink(
  path: '/path',
  data: {"foo": "bar"}
);

```

### React to deeplinks

This code will trigger when a user has your app installed and taps on a deeplink.

:::info
The SDK closely follows the `app_links` API, but returns `VimenLink` instead of `Uri`
:::

```dart
final vimen = Vimen();

// get the launching deeplink, then all subsequent
vimen.getInitialLink().then(print);
vimen.linkStream().listen(print);

// the same as above, but in a single stream
vimen.allLinkStream().listen(handleLinks);
```

### Real invite link example

Luke creates an invite link and sends it to Mario over Messages.

```dart
// create a deeplink that enables the client to show the inviter's name and avatar
final inviteLink = await vimen.createLink(
  path: "/invite",

  // Map<String, String | num | bool>
  data: {
    "inviterDisplayName": member.displayName,
    "inviterUid": member.uid,
    "expiresAt": DateTime.now().add(Duration(days: 1)).toIso8601String(),
  },
);
```

Mario taps on the link. App checks if the link has expired, and shows the accept invite sheet.

```dart
final vimen = Vimen();

// handle incoming invite links
vimen.allLinkStream().listen((link) {
  switch (link.path) {
    case "/invite":
      final expiresAt = DateTime.tryParse(link.data["expiresAt"]);
      if (expiresAt == null || DateTime.now().isAfter(expiresAt)) {
        showInviteExpiredDialog();
      } else {
        showAcceptInviteSheet(
          displayName: link.data["inviterDisplayName"],
          fromUid: link.data["inviterUid"],
        );
      }

    default:
      showUnknownLinkSnackbar();
  }
});


```

![Screenshot that shows a user avatar, title with user display name, tap to accept invite button, and a notice that the invite expires soon](/assets/example-invite-link.png)
