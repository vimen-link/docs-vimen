---
sidebar_position: 102
sidebar_label: Help! I can't figure out Y
---

# Help! I can't figure out Y

Having trouble finding something? Here are some common places to look.

## XCode

### Assign associated domain

Add an `Associated Domains` capability in XCode, then add an applinks domain using the format `applinks:projectSlug.vimen.io`
![Foo](/assets/do-apple-associated-domain-1.png)
![Foo](/assets/do-apple-associated-domain-2.png)
![Foo](/assets/do-apple-associated-domain-3.png)

## Android

### Verify App Links integration

:::info
Test the link by pasting it into Keep Notes. Tapping on it will cause it to trigger.
:::

:::warning
Many people mistakenly believe that you can test a link by pasting it into your Android browser address bar and tapping go. This is false and would be unexpected behavior.
:::

🔗 [Android Developer - Verify Android App Links](https://developer.android.com/training/app-links/verify-android-applinks#review-results)

`adb` has commands for auditing, verifying, and triggering deeplinks

```bash
# OPTIONAL: delete & re-verify associations
adb shell pm set-app-links --package com.lukepighetti.vgl 0 all
adb shell pm verify-app-links --re-verify com.lukepighetti.vgl

# view associations
adb shell pm get-app-links com.lukepighetti.vgl
```

Your deeplinking domain will show as `verified` if it's working.

```
% adb shell pm set-app-links --package com.lukepighetti.vgl 0 all
  com.lukepighetti.vgl:
    ...
    Domain verification state:
      vgl.vimen.io: verified
```

#### Test an Android deeplink

```
adb shell am start -d https://vgl.vimen.io/never-gonna-give-you-up
```
