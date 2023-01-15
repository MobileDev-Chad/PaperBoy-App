import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as Notifications from 'expo-notifications';
import * as yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import { images, COLORS, icons } from "../constants";

const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).label("Full Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(1).label("Message"),
});

const ContactScreen = ({ navigation }) => {

  const handleSubmit = ({values}) => {
    values(initialValues);

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent!.",
    });
  };

  return (
    <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.contact}
          resizeMode="contain"
          style={{ width: "70%", height: "70%" }}
        />
      </View>
     
      <Form
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage error="Invalid email." visible={emailFailed} /> */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <FormField
            autoCapitalize
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Masahiro Sakurai"
            width="90%"
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="smash@example.com"
            textContentType="emailAddress"
            width="90%"
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="message"
            name="message"
            width="90%"
           
            style={{ paddingHorizontal: 30,paddingRight:20, }}
          />
        </View>

        {/* Button */}
        <View
          style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
        >
          <SubmitButton title="Submit" />
        </View>
      </Form>

      {/* Header Buttons */}
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 25,
          right: 25,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
