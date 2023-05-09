import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/ScreenUtils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: SCREEN_HEIGHT * 0.7,
        paddingVertical: 16
    },
    logo: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.3,
    },
    contentScroll: { alignSelf: 'stretch', height: SCREEN_HEIGHT*0.9, }
});
