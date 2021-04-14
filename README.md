# CSCI3100 Project
In this project, we will create an online discussion forum called **CU There** for members of the Chinese University of Hong Kong (CUHK) to express their ideas. In this forum, registered members can have a more intimate environment with more precise categories and topics than other similar forums to communicate with each other.

## Technologies
We have used the following technologies in this project:

1. MongoDB with Mongoose
2. Express
3. React Native with Expo
4. Node.js
5. JavaScript

For more information, please check out [`package.json`](https://github.com/onenylxus/csci3100-project/blob/master/package.json) to check all dependencies used in this project.

## Installation
#### Step 1: Clone this repository

```shell
git clone https://github.com/onenylxus/csci3100-project.git
```

#### Step 2: Check if your computer has already installed `npm`, `yarn` and `expo-cli`
You can check these by

```shell
node --version
yarn --version
expo --version
```

If you have not installed Node.js, visit [https://nodejs.org/en/](https://nodejs.org/en/) to download and install the latest LTS version. If you have installed Node.js, install `yarn` and `expo-cli` by

```shell
npm install -g yarn expo-cli
```

#### Step 3: For Android users, install **Expo Go** on Google Play store.

#### Step 4: Run the `start` script in `npm`

```shell
yarn run start
```

This will open the metro bundler in `localhost:19002`.

It is recommended to scan the QR code using **Expo Go** app and run the application on your Android device. If you are using iOS device, you can use camera apps to scan the QR code. If the QR code does not work for LAN option, you can change it to Tunnel option and try again.

## Progress
*(until April 14, 2021)*

Until now we have basically finishd the structure of the whole application and most functions work properly on iOS and Android devices. Minor bugfixes are yet to be delivered but the general user interface and database has been well setup and good to go. 

We are currently working on moving some mobile-compatible features to the web version of the application because some features fails to function properly. Moreover, testing are yet to be designed and implemented to validate our app.

## License
This project is under **Apache-2.0 License**. For more details, visit [`LICENSE.md`](https://github.com/onenylxus/csci3100-project/blob/master/LICENSE.md).