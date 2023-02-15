import { StyleSheet, View, Pressable } from 'reat-native';

function MainButton({pressHandler, children}) {
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={({pressed}) => pressed 
            ? [styles.buttonInnerContainer, styles.pressed] 
            : styles.buttonInnerContainer}
            onPress={pressHandler} 
            android_ripple={{color: '#640233'}}>
            
                <Text style={styles.buttonText}>
                    {children}    
                </Text>
            
        </Pressable>
        </View>
    );
}

export default MainButton;

const styles = StyleSheet.create({
    container: {
        color: "#fff"
    },
    pressed:{
        opacity: 0.75
    }
})