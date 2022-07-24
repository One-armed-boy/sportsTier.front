## npm run android : 리액트 네이티브 실행 (다만, 안스에서 에뮬레이터를 구동시켜놔야 함)


## 리액트 네이티브에서 아이콘을 설정하기 위해 다음 구문을 android/app/bundle.gradle에 추가해야함
- apply from: "../../node_modules/react-native/react.gradle"
- apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"