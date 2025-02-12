import {
    Button,
    ButtonText,
    FormControl,
    FormControlLabelText,
    HStack,
    Icon,
    Input,
    InputField,
    InputIcon,
    SearchIcon,
    VStack
  } from '@gluestack-ui/themed'
  import { StyleSheet } from 'react-native'
  
  const Form = ({ onSearch, onInputChange }) => {
    return (
      <VStack space={2} width='100%' p={5} my={10}>
        <FormControl isRequired>
          <FormControl.Label fontSize='sm'>
            <FormControlLabelText>Movie Search</FormControlLabelText>
          </FormControl.Label>
          <HStack width='100%' space={2}>
            <Input mr={10} px={5} style={styles.inputStyles}>
              <InputIcon>
                <Icon as={SearchIcon} size='sm' />
              </InputIcon>
              <InputField
                placeholder='Enter a Movie name...'
                onChangeText={onInputChange}
              />
            </Input>
            <Button onPress={onSearch}>
              <Icon as={SearchIcon} mr='$2'/>
              <ButtonText>Search</ButtonText>
            </Button>
          </HStack>
        </FormControl>
      </VStack>
    )
  }
  
  export default Form
  
  const styles = StyleSheet.create({
    inputStyles: {
      flex: 1,
      alignItems: 'center'
    }
  })