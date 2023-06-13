import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
const db = getFirestore(firebase)

export default function EditTodo({navigation, route}){
    console.log(route.params)
    const [activity, setActivity] = useState(route.params.activity)
    const [description, setDescription] = useState(route.params.description)
    const [errorEdit, setErrorEdit] = useState(null)

    const validacao = () => {
        if(activity == "" || description == ""){
            setErrorEdit("Informe a atividade e a descrição")
        }else{
            setErrorEdit(null)
            editTodo()
        }
    }

    const editTodo = () => {
        const todo = doc(db, 'todo', route.params.id)

        updateDoc(todo, {
            activity,
            description
        })

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorEdit != null &&
                <Text style={styles.alert}>{errorEdit}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Atividade'
                value={activity}
                onChangeText={setActivity}
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
                <Text style={styles.textBtn}>Editar</Text>
            </TouchableOpacity>
        </View>
    );
}