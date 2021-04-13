// Export
export default function Header(title = 'CU There') {
  return {
    headerTitle: title,
    headerTitleStyle: { alignSelf: 'center' },
    headerStyle: {
      backgroundColor: '#69c6f0',
    },
    headerTintColor: '#ffffff',
    headerLeft: null,
    headerRight: null,
  };
}
