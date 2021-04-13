// Export
export default function BackableHeader(title = 'CU There') {
  return {
    headerTitle: title,
    headerTitleStyle: { alignSelf: 'center' },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#69c6f0',
    },
    headerTintColor: '#ffffff',
  };
}
