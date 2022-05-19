import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

export const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  React.useEffect(() => {
    toggleModal();
  });
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    }
    else{
      setShowModal(false);
    }
  }
  return (
    <Modal transparent animationType='fade' visible={showModal} item={{}}>
      <View style={styles.modalBackGround}>
        <View
          style={[styles.modalContainer]}>
          {children}
        </View>
        
      </View>
    </Modal>
  );
};

export const LoadingModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  React.useEffect(() => {
    toggleModal();
  });
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    }
    else{
      setShowModal(false);
    }
  }
  return (
    <Modal transparent animationType='fade' visible={showModal} item={{}}>
      <View style={styles.modalBackGround}>
        <View
          style={[styles.modalContainer]}>
          {children}
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  modalContainer: {
    width: '75%',
    paddingBottom:10,
    borderRadius:10,
    backgroundColor:"#fff"
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

