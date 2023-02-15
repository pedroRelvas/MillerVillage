import { Modal, Text } from 'react-native';

export default function MainModal(visible) {
    return (
        <Modal visible={visible} animationType="fade">
            <Text>yo.</Text>
        </Modal>
    );
}
