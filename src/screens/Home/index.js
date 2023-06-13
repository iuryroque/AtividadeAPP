import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [todo, setTodo] = useState([])

    const deleteTodo = (id) => {
        deleteDoc(doc(db, "todo", id))
    }

    useEffect(() => {
        const q = query(collection(db, "todo"), orderBy("register_date", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const todo = [];
            querySnapshot.forEach((doc) => {
                todo.push({...doc.data(), id: doc.id});
                // console.log(doc.data())
            });
            setTodo(todo)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={todo}
                renderItem={({item}) =>
                    <View style={styles.activityForm}>
                        <View>
                            <Text style={styles.activity}>{item.activity}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <View
                        style={styles.functionsBtn}
                        >
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Edit",{
                                id: item.id,
                                description: item.description,
                                activity: item.activity,
                            })}
                        >
                            <MaterialIcons name="edit" size={26} color="#F60" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.id)}
                        >
                            <MaterialIcons name="delete" size={26} color="#F60" />
                        </TouchableOpacity>
                        </View>
                    </View>
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateTodo')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}