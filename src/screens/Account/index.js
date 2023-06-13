import { Text, TouchableOpacity, View } from 'react-native'
import firebase from '../../config/firebase'
import { getAuth, signOut } from "firebase/auth";
import styles from '../Account/style';

export default function Account({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View>
            <TouchableOpacity
            style={styles.formButton}
                onPress={signOutFirebase}
            >
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}