import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import PropTypes from 'prop-types';
import { COLORS } from '../constants';

export default TabIcon = ({ name, color, style, type }) => {
  
  return (
    <>
      {(() => {
        switch (type) {
          case 'fontAwesome':
            return (
              <FontAwesomeIcon
                style={style ? style : {}}
                name={name}
                size={30}
                color={color}
              />
            );
          case 'entypo':
            return (
              <EntypoIcon
                style={style ? style : {}}
                name={name}
                size={30}
                color={color}
              />
            );
          case 'antDesign':
            return (
              <AntDesignIcon
                style={style ? style : {}}
                name={name}
                size={30}
                color={color}
              />
            );
          case 'rounded':
            return (
              <View style={styles.rounded}>
                <EntypoIcon
                  style={style ? style : {}}
                  name={name}
                  size={24}
                  color={
                    color === COLORS.lightGray
                      ? COLORS.white
                      : color
                  }
                />
              </View>
            );
        }
      })()}
    </>
  );
};
const styles = StyleSheet.create({
   rounded: {
     width: 40,
     height: 40,
     borderRadius: 20,
     backgroundColor: COLORS.lightGray,
     justifyContent: 'center',
     alignItems: 'center',
   },
});

TabIcon.propTypes = {
  name: PropTypes.string,
  tintColor: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
};
TabIcon.defaultProps = {
  type: 'fontAwesome',
};
