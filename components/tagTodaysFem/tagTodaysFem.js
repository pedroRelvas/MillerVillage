import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
function TagTodaysFem(props) {
    return (
        <View style={styles.icon}>
            <Text>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default TagTodaysFem;