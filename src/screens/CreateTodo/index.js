import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)

export default function CreateTodo({navigation}){
    const [activity, setTodo] = useState("")
    const [description, setDescription] = useState("")
    const [errorCreateToDo, setErrorCreateTodo] = useState(null)

    const validacao = () => {
        if(activity == "" || description == ""){
            setErrorCreateTodo("Informe a atividade e a descrição")
        }else{
            setErrorCreateTodo(null)
            createTodo()
        }
    }

    const createTodo = () => {
        const newTodo = addDoc(collection(db, 'todo'), {
            activity,
            description,
            register_date: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateToDo != null &&
                <Text style={styles.alert}>{errorCreateToDo}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Atividade'
                value={activity}
                onChangeText={setTodo}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Descrição'
                value={description}
                onChangeText={setDescription}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validacao}
            >
                <Text style={styles.textBtn}>Criar Atividade</Text>
            </TouchableOpacity>
        </View>
    );
}