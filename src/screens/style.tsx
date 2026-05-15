import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  rowConatiner: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 8
  },

  titleQ: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#219AD6',
    marginBottom: 20,
    marginTop: 8
  },

  loginTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    fontSize: 12,
    color: '#677687',
    marginBottom: 20,
    marginRight: '10%',
  },

  forgotPass: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#219AD6',
    // marginBottom: 20,
    // alignSelf: 'flex-end',
    // marginRight: '10%',
    textDecorationLine: 'underline',
    // marginLeft: '65%',
  },

  touchForgotText: {
    alignItems: 'flex-end',
    // marginRight: '10%',
  },

  input: {
    margin: 10,
    width: '80%',
    borderRadius: 16,
    padding: 10,
    height: 46,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderWidth: 1,
  },

  passwordWrapper: {
    // margin: 10,
    width: '80%',
    position: 'relative',
    // justifyContent: 'center',
  },

  passwordInput: {
    width: '100%',
    borderRadius: 16,
    padding: 10,
    height: 46,
    borderColor: 'gray',
    // paddingHorizontal: 44,
    borderWidth: 1,
  },

  eyeButton: {
    position: 'absolute',
    right: 12,
    height: 46,
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  button: {
    margin: 10,
    width: '80%',
    borderRadius: 16,
    padding: 10,
    height: 50,
    backgroundColor: '#1A3A5C',//0xFF
    color: 'white',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  errorText: {
    color: 'red',
    textDecorationColor: 'red',
    alignSelf: 'flex-start',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 40,
  },

  rowContainer:{
    margin:10,
// padding:10,    
// alignSelf: 'flex-start',
    width: 290,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  asOwner: {
    fontSize: 12
  },

  subRowCon:{
    flexDirection: 'row',
    flexWrap: 'wrap',  
  },
  
  checkBox: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 3,
    borderRadius: 4
  },
  
  titleStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
