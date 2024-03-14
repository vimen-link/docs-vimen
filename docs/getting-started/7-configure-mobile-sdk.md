---
sidebar_position: 7
sidebar_label: 7. Configure mobile SDK
---

# Configure mobile SDK

Implementation steps:

- Configure iOS app (optional)
- Configure Android app (optional)
- Use the plugin in your Flutter code

---

### Configure iOS app (optional)

Your Vimen links all share the same structure:

```
{your-project-slug}.vimen.io
{your-project-slug}.vimen.io/products/games/zelda
{your-project-slug}.vimen.io/76tyfvgbkh
...
```

**`{your-project-slug}.vimen.io` constitutes your base domain**

Next steps will result in informing Apple that you are okay with your app to
handle links with such a base domain.

:::warning

Continue with the iOS implementation guide ONLY after setting up in your Vimen
project the:

- Apple Team id
- iOS App bundle id

This is because when you will complete the following steps, apple will verify
your Vimen links, and such verification will fail if you have not s et up Apple
Team id and iOS App bundle id on Vimen Console.

Apple will retry verification (after a failed attempt) with gaps of up to 6
hours, slowing down your implementation of Vimen links.

:::

---

Our plugin is open source and is based on another great open source flutter
plugin: [app_links](https://pub.dev/packages/app_links). This documentation
contains link and inspiration from Apple Documentation, Android Documentation
and app_links readme file.
