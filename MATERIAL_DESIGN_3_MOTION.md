# Material Design 3 - Motion System

Este portafolio ahora utiliza el **sistema de movimiento oficial de Material Design 3** de Google para crear animaciones profesionales, expresivas y naturales.

---

## 📐 **Curvas de Easing**

### **Emphasized Easing** (Movimiento Expresivo)
Recomendado para la mayoría de las transiciones en M3. Crea movimiento estilizado con "despegues rápidos y aterrizajes suaves".

```css
/* Curva completa - Para elementos que empiezan y terminan en pantalla */
--md3-emphasized: cubic-bezier(0.2, 0.0, 0, 1.0);

/* Desaceleración - Para elementos que ENTRAN a la pantalla */
--md3-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);

/* Aceleración - Para elementos que SALEN de la pantalla */
--md3-emphasized-accelerate: cubic-bezier(0.3, 0.0, 0.8, 0.15);
```

### **Standard Easing** (Movimiento Funcional)
Para transiciones rápidas y utilitarias.

```css
/* Curva completa - Para elementos que empiezan y terminan en pantalla */
--md3-standard: cubic-bezier(0.2, 0.0, 0, 1.0);

/* Desaceleración - Para elementos que ENTRAN a la pantalla */
--md3-standard-decelerate: cubic-bezier(0, 0, 0, 1);

/* Aceleración - Para elementos que SALEN de la pantalla */
--md3-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
```

---

## ⏱️ **Duraciones**

Material Design 3 define duraciones específicas para diferentes tipos de animaciones:

### **Duraciones Cortas** (50ms - 200ms)
```css
--md3-duration-short1: 50ms;   /* Micro-interacciones */
--md3-duration-short2: 100ms;  /* Hover effects */
--md3-duration-short3: 150ms;  /* Cambios de estado */
--md3-duration-short4: 200ms;  /* Salidas de pantalla */
```

### **Duraciones Medias** (250ms - 400ms)
```css
--md3-duration-medium1: 250ms; /* Entradas estándar */
--md3-duration-medium2: 300ms; /* Transiciones estándar */
--md3-duration-medium3: 350ms; /* Transiciones complejas */
--md3-duration-medium4: 400ms; /* Entradas enfatizadas */
```

### **Duraciones Largas** (450ms - 600ms)
```css
--md3-duration-long1: 450ms;
--md3-duration-long2: 500ms;   /* Transiciones enfatizadas */
--md3-duration-long3: 550ms;
--md3-duration-long4: 600ms;
```

### **Duraciones Extra Largas** (700ms - 1000ms)
```css
--md3-duration-extra-long1: 700ms;
--md3-duration-extra-long2: 800ms;
--md3-duration-extra-long3: 900ms;
--md3-duration-extra-long4: 1000ms;
```

---

## 🎯 **Pares Recomendados (Easing + Duration)**

Material Design 3 recomienda combinaciones específicas de easing y duración:

### **Para elementos que empiezan y terminan en pantalla**
```css
/* Enfatizado (Recomendado para la mayoría de casos) */
transition: all var(--md3-motion-emphasized);
/* = 500ms cubic-bezier(0.2, 0.0, 0, 1.0) */

/* Estándar (Para transiciones rápidas) */
transition: all var(--md3-motion-standard);
/* = 300ms cubic-bezier(0.2, 0.0, 0, 1.0) */
```

### **Para elementos que ENTRAN a la pantalla**
```css
/* Enfatizado */
transition: all var(--md3-motion-enter-emphasized);
/* = 400ms cubic-bezier(0.05, 0.7, 0.1, 1.0) */

/* Estándar */
transition: all var(--md3-motion-enter-standard);
/* = 250ms cubic-bezier(0, 0, 0, 1) */
```

### **Para elementos que SALEN de la pantalla**
```css
/* Enfatizado */
transition: all var(--md3-motion-exit-emphasized);
/* = 200ms cubic-bezier(0.3, 0.0, 0.8, 0.15) */

/* Estándar */
transition: all var(--md3-motion-exit-standard);
/* = 200ms cubic-bezier(0.3, 0, 1, 1) */
```

---

## 💡 **Ejemplos de Uso**

### **Ejemplo 1: Botón con Hover**
```css
.button {
    background: #000;
    transition: background var(--md3-duration-short2) var(--md3-standard);
}

.button:hover {
    background: #333;
}
```

### **Ejemplo 2: Modal que Entra**
```css
.modal {
    opacity: 0;
    transform: translateY(20px);
    transition: all var(--md3-motion-enter-emphasized);
}

.modal.active {
    opacity: 1;
    transform: translateY(0);
}
```

### **Ejemplo 3: Elemento que Sale**
```css
.notification {
    opacity: 1;
    transition: all var(--md3-motion-exit-emphasized);
}

.notification.hiding {
    opacity: 0;
    transform: translateX(100%);
}
```

### **Ejemplo 4: Menú Hamburguesa**
```css
.mobile-menu {
    right: -100%;
    transition: right var(--md3-duration-medium2) var(--md3-emphasized);
}

.mobile-menu.active {
    right: 0;
}
```

---

## 📱 **Consideraciones por Plataforma**

### **Mobile**
- Transiciones típicas: ~300ms
- Transiciones complejas de pantalla completa: ~375ms
- Elementos entrando: 225ms
- Elementos saliendo: 195ms
- **Evitar duraciones > 400ms** (se sienten lentas)

### **Desktop**
- Animaciones más rápidas: 150ms - 200ms
- Ayuda a enmascarar frames perdidos en transiciones web complejas

---

## 🎨 **Filosofía de Material Design 3**

### **Características del Movimiento M3:**
1. **Expresivo**: Despegues rápidos y aterrizajes suaves
2. **Natural**: Imita la física del mundo real
3. **Asimétrico**: Aceleración y desaceleración diferentes
4. **Responsivo**: Se adapta a la distancia y velocidad
5. **Intuitivo**: Ayuda a entender cómo funciona la aplicación

### **Principios:**
- Los objetos no se mueven instantáneamente
- El movimiento debe ser rápido pero comprensible
- Las transiciones deben sentirse "vivas"
- Evitar movimiento que distraiga o confunda

---

## 🔄 **Migración desde el Sistema Anterior**

Si tienes código usando `--transition-smooth`, puedes:

1. **Mantenerlo** (funciona, pero no es M3):
```css
transition: var(--transition-smooth);
```

2. **Migrar a M3** (recomendado):
```css
/* Antes */
transition: var(--transition-smooth);

/* Después */
transition: all var(--md3-motion-emphasized);
```

---

## 📚 **Referencias**

- [Material Design 3 - Motion](https://m3.material.io/styles/motion)
- [Easing and Duration](https://m3.material.io/styles/motion/easing-and-duration)
- [Transitions](https://m3.material.io/styles/motion/transitions)

---

## ✨ **Resultado**

Tu portafolio ahora utiliza el mismo sistema de animaciones que:
- Google Material Design
- Android 12+
- Gmail, Google Drive, Google Photos
- Aplicaciones modernas de Google

¡Movimiento profesional y expresivo! 🚀
