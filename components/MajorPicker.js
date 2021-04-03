// Import
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';

// Export Major Picker

export default function MajorPicker() {
  const [major, setMajor] = React.useState();
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style of Small Screen
      switch (component) {
        case 'width':
          return '100%';

        case 'pickerWidth':
          return '100%';

        default:
          break;
      }
    }

    // Style of Large Screen
    switch (component) {
      case 'width':
        return 550;

      case 'pickerWidth':
        return 250;

      default:
        break;
    }
  }

  return (
    <View>
      {/* Major */}
      <View
        style={{
          marginVertical: 40,
          flexDirection: 'column',
          width: styleByDevice(windowWidth, 'width'),
        }}
      >
        <Text>Major: {major}</Text>
        <View>
          <Picker
            style={{
              width: styleByDevice(windowWidth, 'pickerWidth'),
              alignSelf: 'center',
            }}
            selectedValue={major}
            onValueChange={(itemValue) => setMajor(itemValue)}
          >
            <Picker.Item label="Select an option" value="Select an option" />
            <Picker.Item label="Anthropology" value="Anthropology" />
            <Picker.Item
              label="Architectural Studies"
              value="Architectural Studies"
            />
            <Picker.Item
              label="Artificial Intelligence: Systems and Technologies"
              value="Artificial Intelligence: Systems and Technologies"
            />
            <Picker.Item
              label="Bimodal Bilingual Studies"
              value="Bimodal Bilingual Studies"
            />
            <Picker.Item label="Biochemistry" value="Biochemistry" />
            <Picker.Item label="Biology" value="Biology" />
            <Picker.Item
              label="Biomedical Engineering"
              value="Biomedical Engineering"
            />
            <Picker.Item
              label="Biomedical Sciences"
              value="Biomedical Sciences"
            />
            <Picker.Item
              label="Cell and Molecular Biology"
              value="Cell and Molecular Biology"
            />
            <Picker.Item label="Chemistry" value="Chemistry" />
            <Picker.Item label="Chinese Medicine" value="Chinese Medicine" />
            <Picker.Item
              label="Chinese Language and Literature"
              value="Chinese Language and Literature"
            />
            <Picker.Item label="Chinese Studies" value="Chinese Studies" />
            <Picker.Item
              label="Community Health Practice"
              value="Community Health Practice"
            />
            <Picker.Item
              label="Computer Engineering"
              value="Computer Engineering"
            />
            <Picker.Item label="Computer Science" value="Computer Science" />
            <Picker.Item
              label="Cultural Management"
              value="Cultural Management"
            />
            <Picker.Item label="Cultural Studies" value="Cultural Studies" />
            <Picker.Item
              label="Data Science and Policy Studies"
              value="Data Science and Policy Studies"
            />
            <Picker.Item
              label="Early Childhood Education"
              value="Early Childhood Education"
            />
            <Picker.Item
              label="Earth System Science"
              value="Earth System Science"
            />
            <Picker.Item label="Economics" value="Economics" />
            <Picker.Item
              label="Electronic Engineering"
              value="Electronic Engineering"
            />
            <Picker.Item
              label="Energy and Environmental Engineering"
              value="Energy and Environmental Engineering"
            />
            <Picker.Item label="English" value="English" />
            <Picker.Item
              label="Environmental Science"
              value="Environmental Science"
            />
            <Picker.Item
              label="Exercise Science and Health Education"
              value="Exercise Science and Health Education"
            />
            <Picker.Item
              label="Financial Technology"
              value="Financial Technology"
            />
            <Picker.Item label="Fine Arts" value="Fine Arts" />
            <Picker.Item
              label="Food and Nutritional Sciences"
              value="Food and Nutritional Sciences"
            />
            <Picker.Item label="Gender Studies" value="Gender Studies" />
            <Picker.Item
              label="Geography and Resource Management"
              value="Geography and Resource Management"
            />
            <Picker.Item label="Gerontology" value="Gerontology" />
            <Picker.Item
              label="Global Business Studies"
              value="Global Business Studies"
            />
            <Picker.Item
              label="Global Communication"
              value="Global Communication"
            />
            <Picker.Item label="Global Studies" value="Global Studies" />
            <Picker.Item
              label="Government and Public Administration"
              value="Government and Public Administration"
            />
            <Picker.Item label="History" value="History" />
            <Picker.Item
              label="Hospitality and Real Estate"
              value="Hospitality and Real Estate"
            />
            <Picker.Item
              label="Information Engineering"
              value="Information Engineering"
            />
            <Picker.Item
              label="Insurance, Financial and Actuarial Analysis"
              value="Insurance, Financial and Actuarial Analysis"
            />
            <Picker.Item label="Integrated BBA" value="Integrated BBA" />
            <Picker.Item label="Japanese Studies" value="Japanese Studies" />
            <Picker.Item
              label="Journalism and Communication"
              value="Journalism and Communication"
            />
            <Picker.Item label="Law" value="Law" />
            <Picker.Item label="Liberal Studies" value="Liberal Studies" />
            <Picker.Item label="Linguistics" value="Linguistics" />
            <Picker.Item label="Mathematics" value="Mathematics" />
            <Picker.Item
              label="Mathematics and Information Engineering"
              value="Mathematics and Information Engineering"
            />
            <Picker.Item
              label="Mathematics and Mathematics Education"
              value="Mathematics and Mathematics Education"
            />
            <Picker.Item
              label="M.B., Ch.B. − Global Physician-Leadership Stream"
              value="M.B., Ch.B. − Global Physician-Leadership Stream"
            />
            <Picker.Item
              label="Mechanical and Automation Engineering"
              value="Mechanical and Automation Engineering"
            />
            <Picker.Item
              label="Medicine Programme (M.B., Ch.B.)"
              value="Medicine Programme (M.B., Ch.B.)"
            />
            <Picker.Item
              label="Molecular Biotechnology"
              value="Molecular Biotechnology"
            />
            <Picker.Item label="Music" value="Music" />
            <Picker.Item label="Natural Sciences" value="Natural Sciences" />
            <Picker.Item label="Nursing" value="Nursing" />
            <Picker.Item label="Pharmacy" value="Pharmacy" />
            <Picker.Item label="Philosophy" value="Philosophy" />
            <Picker.Item
              label="Physical Education, Exercise Science and Health"
              value="Physical Education, Exercise Science and Health"
            />
            <Picker.Item label="Physics" value="Physics" />
            <Picker.Item
              label="Professional Accountancy"
              value="Professional Accountancy"
            />
            <Picker.Item label="Psychology" value="Psychology" />
            <Picker.Item label="Public Health" value="Public Health" />
            <Picker.Item
              label="Quantitative Finance"
              value="Quantitative Finance"
            />
            <Picker.Item label="Religious Studies" value="Religious Studies" />
            <Picker.Item
              label="Risk Management Science"
              value="Risk Management Science"
            />
            <Picker.Item label="Social Work" value="Social Work" />
            <Picker.Item label="Sociology" value="Sociology" />
            <Picker.Item label="Statistics" value="Statistics" />
            <Picker.Item
              label="Systems Engineering and Engineering Management"
              value="Systems Engineering and Engineering Management"
            />
            <Picker.Item label="Theology" value="Theology" />
            <Picker.Item label="Translation" value="Translation" />
            <Picker.Item label="Urban Studies" value="Urban Studies" />
          </Picker>
        </View>
      </View>
    </View>
  );
}
