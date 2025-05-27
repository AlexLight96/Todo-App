# TODO App

Una aplicación de lista de tareas desarrollada con React, TypeScript y Vite.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Características

- Agregar y eliminar tareas
- Marcar tareas como completadas
- Contador de tareas pendientes y completadas
- Interfaz responsiva
- Iconos de React Icons

## Tecnologías

- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo
- **React Icons** - Iconografía
- **Bootstrap 5.3.6** - Estilos base

## Estructura del Proyecto

```
TODO-App/
├── public/                 # Archivos públicos
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── hooks/             # Custom hooks de React
│   │   ├── useTodo.ts     # Hook para gestión de tareas
│   │   └── useForm.ts     # Hook para formularios
│   ├── todoApp/           # Componentes principales
│   │   ├── TodoApp.tsx    # Componente principal
│   │   ├── TodoList.tsx   # Lista de tareas
│   │   ├── TodoItem.tsx   # Item individual de tarea
│   │   ├── TodoAdd.tsx    # Formulario para agregar tareas
│   │   └── todoReducer.ts # Reducer para estado de tareas
│   ├── index.css          # Estilos globales
│   └── main.tsx           # Punto de entrada
├── package.json           # Dependencias y scripts
└── README.md             # Este archivo
```

## Arquitectura Técnica

### Hooks Personalizados

**useTodo**: Gestiona el estado completo de las tareas
- `todos` - Array de todas las tareas
- `todosCount` - Número total de tareas
- `pendingTodosCount` - Número de tareas pendientes
- `handleNewTodo` - Función para agregar nueva tarea
- `handleDeleteTodo` - Función para eliminar tarea
- `handleToggleTodo` - Función para cambiar estado de tarea

**useForm**: Maneja formularios de manera reutilizable
- `onInputChange` - Maneja cambios en inputs
- `onResetForm` - Resetea el formulario
- Gestión automática del estado del formulario

### Gestión de Estado

Utiliza `useReducer` para un estado predecible con las siguientes acciones:
- `ADD_TODO` - Agregar nueva tarea
- `DELETE_TODO` - Eliminar tarea existente
- `TOGGLE_TODO` - Cambiar estado completado/pendiente

### Tipado TypeScript

Interfaces bien definidas para todos los componentes:
- `Todo` - Estructura de una tarea
- `TodoItemProps` - Props del componente TodoItem
- `TodoListProps` - Props del componente TodoList
- `TodoAddProps` - Props del componente TodoAdd

## Instalación

1. Clona el repositorio
   ```bash
   git clone <url-del-repositorio>
   cd TODO-App
   ```

2. Instala las dependencias
   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo
   ```bash
   pnpm dev
   ```

4. Abre http://localhost:5173 en tu navegador

## Scripts

- `pnpm dev` - Servidor de desarrollo
- `pnpm build` - Build de producción
- `pnpm lint` - Linter
- `pnpm preview` - Preview de producción
