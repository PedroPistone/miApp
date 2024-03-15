import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { request, PERMISSIONS } from 'react-native-permissions';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const cameraPermission = await requestCameraPermission();
    setHasPermission(cameraPermission === 'granted');
  };

  const requestCameraPermission = async () => {
    return Platform.select({
      ios: await request(PERMISSIONS.IOS.CAMERA),
      android: await request(PERMISSIONS.ANDROID.CAMERA),
    });
  };

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <RNCamera
          style={styles.camera}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        />
      ) : (
        <Text>No tienes permiso para acceder a la cámara.</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CameraScreen;
