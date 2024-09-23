![Aksaya Studio Logo](https://firebasestorage.googleapis.com/v0/b/pf-ecommercecoderhouse.appspot.com/o/logotipo.png?alt=media&token=07866664-9f11-4fa7-8308-39a1d9fcbe7f)

# Aksaya Studio - Ecommerce de Yoga

**Versión**: 1.0.0  
**Autor**: Aksaya Studio Team

## Descripción

Bienvenidos a **Aksaya Studio**, tu tienda online dedicada a ofrecer una experiencia única de yoga a través de planes de video personalizados. Nuestro objetivo es ayudarte a explorar la eternidad a través del **Vinyasa Yoga**, un estilo dinámico que sincroniza la respiración con movimientos suaves y continuos, fomentando una profunda conexión mente-cuerpo.

¡Descubre nuestros planes y elige el que mejor se adapte a tus necesidades!

## Características

- **Planes de Yoga en Video**: Accede a una variedad de planes según tu nivel y objetivos.
- **Sincronización con Firebase**: Registro de usuarios y autenticación mediante Firebase.
- **Navegación fluida**: Usamos React Navigation para una experiencia de usuario intuitiva.
- **Soporte Multiplataforma**: Compatible con dispositivos Android, iOS y web gracias a Expo.

## Tecnologías utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías y herramientas:

- **React Native**: Framework principal para el desarrollo de la aplicación móvil.
- **Expo**: Facilitador para compilar y correr la aplicación en múltiples plataformas.
- **Redux Toolkit**: Manejo del estado global de la aplicación.
- **Firebase**: Autenticación y base de datos en tiempo real.
- **SQLite**: Base de datos local para almacenar sesiones.
- **Yup**: Validación de formularios.
- **React Navigation**: Sistema de navegación dentro de la aplicación.

## Instalación y uso

Sigue estos pasos para instalar y correr el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/aksaya-studio-ecommerce.git
cd aksaya-studio-ecommerce
```

### 2. Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) y [Expo CLI](https://docs.expo.dev/get-started/installation/) instalados.

```bash
npm install
```

### 3. Ejecutar la aplicación

Puedes ejecutar la aplicación en las plataformas soportadas:

```bash
npm run start    # Iniciar la aplicación en Expo
npm run android  # Correr en un emulador o dispositivo Android
npm run ios      # Correr en un emulador o dispositivo iOS
npm run web      # Correr en un navegador web
```

## Estructura del proyecto

```plaintext
├── expo/
├── src/
│   ├── components/       # Componentes reutilizables de la app
│   ├── features/         # Funcionalidades y slices de Redux
│   ├── services/         # Servicios externos como Firebase
│   ├── global/           # Variables y estilos globales
│   ├── validations/      # Esquemas de validación (Yup)
│   └── db/               # Operaciones con la base de datos local (SQLite)
├── App.js                # Componente principal de la app
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto
```

## Dependencias clave

- **expo**: ^51.0.32
- **react-native**: ^0.74.5
- **redux-toolkit**: ^2.2.7
- **firebase**: ^10.13.2
- **expo-sqlite**: ^14.0.6
- **yup**: ^1.4.0

## Contribución

Si deseas contribuir a este proyecto:

1. Haz un fork del proyecto.
2. Crea una nueva rama con tus cambios: `git checkout -b mi-nueva-funcionalidad`.
3. Haz commit de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`.
4. Haz push de tus cambios: `git push origin mi-nueva-funcionalidad`.
5. Abre un pull request.

## Licencia

Este proyecto es privado y no se encuentra bajo ninguna licencia pública. Si estás interesado en su uso, por favor, contacta con el equipo de Aksaya Studio.
