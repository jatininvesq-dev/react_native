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
    marginBottom: 20,
    alignSelf: 'flex-end',
    // marginRight: '10%',
    marginLeft: '65%',
  },

  touchForgotText: {
    alignItems: 'flex-end',
    marginRight: '10%',
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
});
