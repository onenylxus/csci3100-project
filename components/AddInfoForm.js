// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import AuthContext from './AuthContext';
import Source from '../assets/source';
import Style from '../assets/style';

// Export add info form
export default function AddInfoForm() {
  const route = useRoute();
  const { login } = React.useContext(AuthContext);

  const { username } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  let status = 0;

  async function submitData() {
    await fetch(`https://${Source.heroku}/addInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        gender,
        college,
        name,
        major,
      }),
    })
      .then((res) => {
        status = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status === 200) {
          login({ username });
        }
      })
      .catch((err) => console.log(err));
  }

  async function confirmAddInfo() {
    if ([gender, college, name, major].every((data) => data.length > 0)) {
      submitData();
    } else {
      return Alert.alert(
        'Some information are missing',
        'Some fields are missing, do you want to continue without these information? (You can edit these informations in the application later.)',
        [
          {
            text: 'Cancel',
            onPress: () => undefined,
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: submitData,
            style: 'destructive',
          },
        ]
      );
    }
  }

  return (
    <View>
      {/* Name */}
      <Text style={Style.sectionText}>Name:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={Style.textInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Gender */}
      <Text style={Style.sectionText}>Gender:</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <RadioButton.Item label="Male" value="M" />
        <RadioButton.Item label="Female" value="F" />
      </RadioButton.Group>

      {/* Major */}
      <Text style={Style.sectionText}>Major:</Text>
      <View>
        <Picker
          selectedValue={major}
          onValueChange={(itemValue) => setMajor(itemValue)}
        >
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Anthropology" value="ANTHN" />
          <Picker.Item label="Architectural Studies" value="ARCHN" />
          <Picker.Item
            label="Artificial Intelligence: Systems and Technologies"
            value="AISTN"
          />
          <Picker.Item label="Bimodal Bilingual Studies" value="BMBLN" />
          <Picker.Item label="Biochemistry" value="BCHEN" />
          <Picker.Item label="Biology" value="BIOLN" />
          <Picker.Item label="Biomedical Engineering" value="BMEGN" />
          <Picker.Item label="Biomedical Sciences" value="BMSCN" />
          <Picker.Item label="Cell and Molecular Biology" value="CMBIN" />
          <Picker.Item label="Chemistry" value="CHEMN" />
          <Picker.Item label="Chinese Medicine" value="BCMEN" />
          <Picker.Item label="Chinese Language and Literature" value="CHLLN" />
          <Picker.Item label="Chinese Studies" value="CHESB" />
          <Picker.Item label="Community Health Practice" value="CHPRN" />
          <Picker.Item label="Computer Engineering" value="CENGN" />
          <Picker.Item label="Computer Science" value="CSCIN" />
          <Picker.Item label="Cultural Management" value="CUMTN" />
          <Picker.Item label="Cultural Studies" value="Cultural Studies" />
          <Picker.Item label="Data Science and Policy Studies" value="DSPSN" />
          <Picker.Item label="Early Childhood Education" value="CHEDN" />
          <Picker.Item label="Earth System Science" value="ESSCN" />
          <Picker.Item label="Economics" value="ECONN" />
          <Picker.Item label="Electronic Engineering" value="ELEGN" />
          <Picker.Item
            label="Energy and Environmental Engineering"
            value="EEENN"
          />
          <Picker.Item label="English" value="ENGEN" />
          <Picker.Item label="Environmental Science" value="ENSCN" />
          <Picker.Item
            label="Exercise Science and Health Education"
            value="ESHEN"
          />
          <Picker.Item label="Financial Technology" value="FTECN" />
          <Picker.Item label="Fine Arts" value="FAASN" />
          <Picker.Item label="Food and Nutritional Sciences" value="FNSCN" />
          <Picker.Item label="Gender Studies" value="GDRSN" />
          <Picker.Item
            label="Geography and Resource Management"
            value="GRMDN"
          />
          <Picker.Item label="Gerontology" value="BSCGN" />
          <Picker.Item label="Global Business Studies" value="IBBAB" />
          <Picker.Item label="Global Communication" value="GCOMN" />
          <Picker.Item label="Global Studies" value="GLBSN" />
          <Picker.Item
            label="Government and Public Administration"
            value="GPADN"
          />
          <Picker.Item label="History" value="History" />
          <Picker.Item label="Hospitality and Real Estate" value="HTMGB" />
          <Picker.Item label="Information Engineering" value="IERGN" />
          <Picker.Item
            label="Insurance, Financial and Actuarial Analysis"
            value="IFAAB"
          />
          <Picker.Item label="Integrated BBA" value="IBBAB" />
          <Picker.Item label="Japanese Studies" value="JASPN" />
          <Picker.Item label="Journalism and Communication" value="COMMN" />
          <Picker.Item label="Law" value="LAWSN" />
          <Picker.Item label="Liberal Studies" value="LSEDN" />
          <Picker.Item label="Linguistics" value="LINGN" />
          <Picker.Item label="Mathematics" value="MATHN" />
          <Picker.Item
            label="Mathematics and Information Engineering"
            value="MIEGN"
          />
          <Picker.Item
            label="Mathematics and Mathematics Education"
            value="BMEDN"
          />
          <Picker.Item
            label="Mechanical and Automation Engineering"
            value="MAEGN"
          />
          <Picker.Item label="Medicine Programme (M.B., Ch.B.)" value="MEDUN" />
          <Picker.Item label="Molecular Biotechnology" value="MBTEN" />
          <Picker.Item label="Music" value="MUSCN" />
          <Picker.Item label="Natural Sciences" value="NSCIN" />
          <Picker.Item label="Nursing" value="NURSN" />
          <Picker.Item label="Pharmacy" value="PHARN" />
          <Picker.Item label="Philosophy" value="PHILN" />
          <Picker.Item
            label="Physical Education, Exercise Science and Health"
            value="PESHN"
          />
          <Picker.Item label="Physics" value="PHYSN" />
          <Picker.Item label="Professional Accountancy" value="PACCN" />
          <Picker.Item label="Psychology" value="PSYCN" />
          <Picker.Item label="Public Health" value="PHPCN" />
          <Picker.Item label="Quantitative Finance" value="QFINN" />
          <Picker.Item label="Religious Studies" value="RELSN" />
          <Picker.Item label="Risk Management Science" value="RMSCN" />
          <Picker.Item label="Social Work" value="SOWKN" />
          <Picker.Item label="Sociology" value="SOCIN" />
          <Picker.Item label="Statistics" value="STATN" />
          <Picker.Item
            label="Systems Engineering and Engineering Management"
            value="SEEMN"
          />
          <Picker.Item label="Theology" value="THEON" />
          <Picker.Item label="Translation" value="TRANN" />
          <Picker.Item label="Urban Studies" value="URSPN" />
        </Picker>
      </View>

      {/* College */}
      <Text style={Style.sectionText}>College:</Text>
      <Picker
        selectedValue={college}
        onValueChange={(itemValue) => setCollege(itemValue)}
      >
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Chung Chi College" value="CC" />
        <Picker.Item label="New Asia College" value="NA" />
        <Picker.Item label="United College" value="UC" />
        <Picker.Item label="Shaw College" value="SC" />
        <Picker.Item label="Morningside College" value="MC" />
        <Picker.Item label="S.H. Ho College" value="SH" />
        <Picker.Item label="CW Chu College" value="WC" />
        <Picker.Item label="Wu Yee Sun College" value="YS" />
        <Picker.Item label="Lee Wo Sing College" value="WS" />
      </Picker>

      <Button title="Submit!" onPress={confirmAddInfo} />
    </View>
  );
}
