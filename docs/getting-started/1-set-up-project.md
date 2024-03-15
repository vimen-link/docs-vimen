---
id: setup-project
sidebar_position: 1
sidebar_label: Setup project and apps
---

# Setup Project and Apps

## Create Vimen project

Each project contains:

- An iOS App
- An Android App
- Default app creative
- A collection of deeplinks

:::info
This project is shared with your entire Organization
:::

![Create app in the admin panel](/assets/create-app-1.png)

## Setup project defaults

![Create app in the admin panel](/assets/create-app-2a.png)

### Project name

Will be visible to your customers on mobile link previews and in social cards.

### Slug

Determines your default deeplinking URL. Example: `https://vgl.vimen.io/my-link`

:::warning
Slug cannot be changed. Be sure you're happy with it before continuing!
:::

### Fallback URL

The link your customers will be redirected to if your link is deactivated or does not exist.

## Setup iOS App

![Create app in the admin panel](/assets/create-app-2b.png)

### App Store ID

Usually the last fragment of your AppStore URL.

🧭 [Help me find my App Store ID](/getting-started/cant-find#app-store-id)

:::warning
Must start with the `id` prefix, such as `id123`
:::

### iOS Bundle Identifier

Reverse domain indentifier available in XCode or AppStore Connect

🧭 [Help me find my iOS Bundle Identifier](/getting-started/cant-find#ios-bundle-identifier)

### Apple Team ID

🧭 [Help me find my Apple Team ID](/getting-started/cant-find#apple-team-id)

## Setup Android App

![Create app in the admin panel](/assets/create-app-2c.png)

### Andrid Application ID

Reverse domain indentifier available in Android Studio or Google Play Console

🧭 [Help me find my Android Application ID](/getting-started/cant-find#android-application-id)

### Andrid SHA-256 Fingerprints

These are used to verify your deeplink domain with Google. Without these, your app cannot handle your deeplinks!

🧭 [Help me find my Android SHA-256 Fingerprints](/getting-started/cant-find#android-sha-256-fingerprints)

:::info
Have multiple fingerprints? Comma separate them, but make sure there are no spaces!
:::
