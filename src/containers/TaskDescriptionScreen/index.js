import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const TaskDescriptionScreen = () => {
  const images = [
    {
      original: '/images/team.jpeg',
      thumbnail: '/team.jpeg',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '/images/team.jpeg',
      thumbnail: '/team.jpeg',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]
  const Docs = [
    {
      original: '/walid.pdf',
      thumbnail: '/walid.pdf',
    },
  ]
  let text =
    'Import trace for requested module:Import trace for requestedmodule: Import trace for requested module:Import trace forrequested module:Import trace for requested module:Import tracefor requested module:Import trace for requested module:Importtrace for requested module:Import trace for requestedmodule:Import trace for requested module:Import trace forrequested module:Import trace for requested module:'
  const [showMore, setShowMore] = useState(false)
  let showMoreButton = text.length >= 250 ? true : false
  const [showTitle, setShowTitle] = useState(true)
  const [showDescription, setShowDescription] = useState(true)
  const [showComments, setShowComments] = useState(true)

  const [comments, setComments] = useState([
    {
      author: 'John Doe',
      date: '2023-05-01 10:30',
      text: 'Premier commentaire',
    },
    {
      author: 'Jane Smith',
      date: '2023-05-02 14:45',
      text: 'Deuxième commentaire',
    },
    {
      author: 'John Doe',
      date: '2023-05-01 10:30',
      text: 'Premier commentaire',
    },
    {
      author: 'Jane Smith',
      date: '2023-05-02 14:45',
      text: 'Deuxième commentaire',
    },
  ])

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Le commentaire est requis'),
  })

  const handleAddComment = (values, { resetForm }) => {
    const newComment = {
      author: 'Vous', // Vous pouvez remplacer 'Vous' par le nom de l'utilisateur authentifié
      date: new Date().toLocaleString(),
      text: values.comment,
    }
    setComments([...comments, newComment])
    resetForm()
  }
  return (
    <View style={{ height: '100%', width: '98%' }}>
      <ScrollView style={{ backgroundColor: 'white', padding: 16 }}>
        <TouchableOpacity
          onPress={() => setShowTitle(!showTitle)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Ionicons name={showTitle ? 'caret-down' : 'caret-forward'} size={24} color="black" />
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 8 }}>
            Title :
          </Text>
        </TouchableOpacity>
        {showTitle && (
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 8 }}>
            Import trace for requested module: Import trace for requested module:
          </Text>
        )}

        <TouchableOpacity
          onPress={() => setShowDescription(!showDescription)}
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}
        >
          <Ionicons
            name={showDescription ? 'caret-down' : 'caret-forward'}
            size={24}
            color="black"
          />
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 8 }}>
            Description :
          </Text>
        </TouchableOpacity>
        {showDescription && (
          <View>
            <Text style={{ color: 'black' }}>
              {showMore ? text : `${text.substring(0, 250)}`} {showMore ? '' : '...'}
            </Text>
            {showMore ? (
              <View style={{ marginVertical: 20 }}>
                {images.length > 0 ? (
                  images.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#F0F0F0',
                          borderRadius: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 8,
                          marginBottom: 8,
                        }}
                      >
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
                        >
                          <Image
                            style={{
                              height: 40,
                              width: 40,
                              // marginTop: 10,
                              marginRight: 20,
                            }}
                            source={require(`../../../assetes/photo.png`)}
                            resizeMode="contain"
                          />
                          <View style={{ maxWidth: '70%' }}>
                            <Text
                              numberOfLines={1}
                              ellipsizeMode="tail"
                              style={{
                                width: '100%',
                                color: 'gray',
                                fontWeight: 'bold',
                                marginBottom: 4,
                              }}
                            >
                              {item.original.split('/').pop()
                                ? item.original.split('/').pop()
                                : `photo dfgdfgdf photo dfgdfgdfphoto dfgdfgdf ${index}`}
                            </Text>
                            <Text style={{ color: '#666' }}>Image file</Text>
                          </View>
                        </View>
                        <Feather name="download" size={30} color="black" />
                      </View>
                    )
                  })
                ) : (
                  <Text style={{ color: '#666' }}>Aucun commentaire pour le moment.</Text>
                )}
              </View>
            ) : null}
            {showMore ? (
              <View style={{ marginVertical: 20 }}>
                {Docs.length > 0 ? (
                  Docs.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: '#F0F0F0',
                          borderRadius: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 8,
                          marginBottom: 8,
                        }}
                      >
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
                        >
                          <Image
                            style={{
                              height: 40,
                              width: 40,
                              // marginTop: 10,
                              marginRight: 20,
                            }}
                            source={require(`../../../assetes/pdf.png`)}
                            resizeMode="contain"
                          />
                          <View style={{ maxWidth: '70%' }}>
                            <Text
                              numberOfLines={1}
                              ellipsizeMode="tail"
                              style={{
                                width: '100%',
                                color: 'gray',
                                fontWeight: 'bold',
                                marginBottom: 4,
                              }}
                            >
                              {item.original.split('/').pop()
                                ? item.original.split('/').pop()
                                : `photo dfgdfgdfphoto dfgdfgdf  ${index}`}
                            </Text>
                            <Text style={{ color: '#666' }}>PDF file</Text>
                          </View>
                        </View>
                        <Feather name="download" size={30} color="black" />
                      </View>
                    )
                  })
                ) : (
                  <Text style={{ color: '#666' }}>Aucun commentaire pour le moment.</Text>
                )}
              </View>
            ) : null}

            {showMoreButton ? (
              <TouchableOpacity style={{}} onPress={() => setShowMore(!showMore)}>
                {/* <Text style={{ color: 'black' }}> */}
                <Text style={{ color: '#007BFF' }}> {showMore ? 'Show less' : 'Show more'}</Text>
                {/* </Text> */}
              </TouchableOpacity>
            ) : null}
          </View>
        )}

        <TouchableOpacity
          onPress={() => setShowComments(!showComments)}
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}
        >
          <Ionicons name={showComments ? 'caret-down' : 'caret-forward'} size={24} color="black" />
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 8 }}>
            Commentaires :
          </Text>
        </TouchableOpacity>
        {showComments ? (
          <View>
            <Formik
              initialValues={{ comment: '' }}
              validationSchema={validationSchema}
              onSubmit={handleAddComment}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      multiline
                      numberOfLines={4}
                      onChangeText={handleChange('comment')}
                      onBlur={handleBlur('comment')}
                      value={values.comment}
                      style={{
                        height: 100,
                        borderColor: errors.comment && touched.comment ? 'red' : 'gray',
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 8,
                        textAlignVertical: 'top',
                      }}
                      placeholder="Ajouter un commentaire"
                    />
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        backgroundColor: '#007BFF',
                        borderRadius: 5,
                        padding: 8,
                      }}
                      onPress={handleSubmit}
                    >
                      <Text style={{ color: 'white' }}>Send</Text>
                    </TouchableOpacity>
                  </View>
                  {errors.comment && touched.comment && (
                    <Text style={{ color: 'red', marginBottom: 16 }}>{errors.comment}</Text>
                  )}
                </View>
              )}
            </Formik>
            {comments.length > 0 ? (
              comments.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#F0F0F0',
                      borderRadius: 10,
                      padding: 12,
                      marginBottom: 8,
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                      <Ionicons name="person-circle" size={40} color="black" />

                      <View>
                        <Text style={{ color: 'gray', fontWeight: 'bold', marginBottom: 4 }}>
                          {item.author}
                        </Text>
                        <Text style={{ color: '#666' }}>{item.date}</Text>
                      </View>
                    </View>
                    <Text style={{ color: '#333' }}>{item.text}</Text>
                  </View>
                )
              })
            ) : (
              // <FlatList
              //   data={comments}
              //   keyExtractor={(item, index) => index.toString()}
              //   renderItem={({ item }) => (

              //   )}
              // />
              <Text style={{ color: '#666' }}>Aucun commentaire pour le moment.</Text>
            )}
          </View>
        ) : null}
      </ScrollView>
    </View>
  )
}

export default TaskDescriptionScreen
