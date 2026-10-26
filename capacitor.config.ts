import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bhoomika.jyothirestaurant",
  appName: "Jyothi Restaurant",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
