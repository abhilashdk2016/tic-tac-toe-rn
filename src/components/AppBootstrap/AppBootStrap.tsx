import React, { ReactNode, ReactElement } from 'react';
import { useFonts, DeliusUnicase_400Regular, DeliusUnicase_700Bold } from '@expo-google-fonts/delius-unicase';
import  AppLoading from 'expo-app-loading';

type AppBootStrapprops = {
    children: ReactNode
}

export default function AppBooStrap({ children }: AppBootStrapprops): ReactElement {
    const [fontLoaded] = useFonts({
        DeliusUnicase_400Regular,
        DeliusUnicase_700Bold
      });
      return fontLoaded ? <>{children}</> : <AppLoading />;
}