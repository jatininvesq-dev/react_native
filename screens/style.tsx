import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    margin: 10,
    width: '80%',
    borderRadius: 10,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderWidth: 1,
  },

  button: {
    margin: 10,
    width: '80%',
    borderRadius: 10,
    padding: 10,
    height: 50,
    backgroundColor: 'blue',
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
