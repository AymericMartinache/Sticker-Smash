# 📸 Sticker Smash - Ajoutez des stickers sur vos photos !

Sticker Smash est une application développée avec **React Native** et **Expo**, permettant aux utilisateurs de sélectionner une image, d'ajouter des stickers et de sauvegarder leur création. Inspirée du tutoriel officiel **Expo**, cette application propose une expérience intuitive et amusante sur mobile et web.

---

## 🚀 **Fonctionnalités principales**

1. **Sélection d'image depuis la galerie** 📷
    - Permet de choisir une image depuis l'appareil.

2. **Ajout d'emojis en stickers** 🎭
    - Sélectionnez et positionnez un sticker emoji sur votre image.

3. **Réinitialisation de l'édition** 🔄
    - Effacez tous les stickers et recommencez depuis l'image de départ.

4. **Sauvegarde dans la galerie** 💾
    - Capture l'image avec les stickers et l'enregistre dans la bibliothèque de l'appareil.

5. **Interface fluide et intuitive** 🎨
    - Navigation entre les pages (Accueil, À propos, Contact) avec **expo-router**.

---

## 🛠️ **Technologies utilisées**

### 📱 **React Native & Expo**
- Développement mobile rapide et efficace.
- Support multi-plateforme : **iOS, Android**.

### 📸 **Modules utilisés**
- **expo-image-picker** : Sélection d'image depuis la galerie.
- **expo-media-library** : Sauvegarde des images modifiées.
- **react-native-view-shot** : Capture de l'écran contenant l'image et les stickers.
- **react-native-gesture-handler** : Gestion des interactions utilisateur.
- **expo-router** : Gestion de la navigation dans l'application.
- **expo-status-bar** : Personnalisation de la barre d'état.

---

## 🏗️ **Structure du projet**

| **Dossier/Fichier**       | **Description**                                         |
|--------------------------|---------------------------------------------------------|
| `/components/`           | Contient les composants réutilisables (boutons, images, stickers) |
| `/assets/images/`        | Stocke les images utilisées dans l'application         |
| `/app/index.tsx`         | Page principale de l'application                        |
| `/app/about.tsx`         | Page "À propos"                                         |
| `/app/contact.tsx`       | Page "Contact"                                         |
| `/app/_layout.tsx`       | Gestion des écrans et navigation avec expo-router     |
| `metro.config.js`        | Configuration de Metro Bundler pour Expo               |
| `tsconfig.json`          | Configuration TypeScript                               |
| `package.json`           | Définition des dépendances et scripts                 |

---

## 🚀 **Comment exécuter le projet**

### Prérequis
- **Node.js** et **pnpm** installés sur votre machine.
- **Expo CLI** installé globalement :

```sh
npm install -g expo-cli
```

### Étapes d'installation

1. Clonez le projet :

```sh
git clone https://github.com/votre-repo/sticker-smash.git
cd sticker-smash
```

2. Installez les dépendances :

```sh
pnpm install
```

3. Démarrez le projet :

```sh
expo start
```

4. Exécutez sur un émulateur ou un appareil :
    - Appuyez sur **`a`** pour Android.
    - Appuyez sur **`i`** pour iOS.
    - Scannez le QR code avec **Expo Go**.



---

## 📌 **Contributeurs**

Développé par **Aymeric** 👨‍💻. Basé sur le [tutoriel officiel Expo](https://docs.expo.dev/tutorial/introduction/).

---

## 📜 **Licence**

Ce projet est sous licence **MIT**. Libre à vous de l'utiliser et de le modifier ! 🚀

