# Material Design 3 - Estados Oficiales por Elemento

## 📋 **Definición Completa de Estados según Material Design 3**

Este documento define **todos los estados** que Material Design 3 establece para cada tipo de elemento interactivo.

---

## 🎯 **Estados Universales (Todos los Componentes Interactivos)**

Estos estados aplican a **todos** los elementos interactivos en Material Design 3:

### **1. Enabled (Habilitado)**
- **Definición**: Estado predeterminado e interactivo del componente
- **Comportamiento**: El elemento responde a todas las interacciones del usuario
- **Visual**: Estilo predeterminado del componente
- **Aplicable a**: Todos los componentes interactivos

### **2. Disabled (Deshabilitado)**
- **Definición**: El componente no es interactivo
- **Comportamiento**: 
  - No responde a hover, focus, drag o press
  - No puede ser tabulado con teclado
  - No muestra cursor pointer
- **Visual**: 
  - Opacidad reducida a **38%** del estado enabled
  - Color desaturado
  - Sin elevación
- **Contraste**: No necesita cumplir requisitos de contraste de M3
- **Aplicable a**: Botones, campos de texto, checkboxes, radio buttons, switches, chips, list items, cards

### **3. Hover (Sobrevuelo)**
- **Definición**: El cursor está posicionado sobre el elemento
- **Comportamiento**: Se activa cuando el usuario pausa sobre el elemento
- **Visual**: 
  - State layer con **+8% de opacidad**
  - Animación fade de baja intensidad
- **Duración**: 100ms (--md3-duration-short2)
- **Easing**: cubic-bezier(0.2, 0.0, 0, 1.0)
- **Combinable con**: Focus, Activated, Selected, Pressed
- **Aplicable a**: Todos los elementos interactivos en desktop

### **4. Focus (Enfocado)**
- **Definición**: El elemento está resaltado (navegación por teclado/voz)
- **Comportamiento**: 
  - Se activa con Tab, Shift+Tab, o navegación por voz
  - Solo un elemento puede tener focus a la vez
- **Visual**: 
  - State layer con **+10% de opacidad**
  - **Focus ring** (anillo de enfoque) visible
  - Focus ring: 2px sólido, offset 2px
- **Énfasis**: Alto (para accesibilidad)
- **Duración**: 100ms
- **Combinable con**: Hover, Activated, Selected
- **Aplicable a**: Todos los elementos interactivos

### **5. Pressed (Presionado)**
- **Definición**: El usuario ha iniciado un tap/click
- **Comportamiento**: 
  - Se activa con click de mouse, tap táctil, Enter/Space en teclado
  - Feedback inmediato
- **Visual**: 
  - State layer con **+10% de opacidad**
  - **Ripple effect** emanando del punto de contacto
  - Ripple duration: 600ms
  - Ripple easing: cubic-bezier(0.4, 0, 0.2, 1)
- **Énfasis**: Alto
- **Duración**: 50ms (--md3-duration-short1)
- **Combinable con**: Hover, Focus, Activated, Selected
- **Aplicable a**: Todos los elementos interactivos

### **6. Drag (Arrastrando)**
- **Definición**: El elemento está siendo arrastrado
- **Comportamiento**: Usuario mantiene presionado y mueve el elemento
- **Visual**: 
  - State layer con **+16% de opacidad**
  - Elevación aumentada
- **Aplicable a**: List items, cards, chips (cuando son draggable)

---

## 🔘 **Estados Específicos de Botones**

Material Design 3 define **5 tipos de botones**, cada uno con estados específicos:

### **Tipos de Botones M3:**
1. **Filled Button** (Alto énfasis)
2. **Filled Tonal Button** (Medio énfasis)
3. **Outlined Button** (Medio énfasis)
4. **Text Button** (Bajo énfasis)
5. **Icon Button** (Bajo énfasis)

---

### **1. Filled Button (Botón Relleno)**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
elevation: 0;
```

**Hover**
```css
background: var(--md-sys-color-primary);
state-layer: +8% opacity;
elevation: 1;
```

**Focus**
```css
background: var(--md-sys-color-primary);
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
background: var(--md-sys-color-primary);
state-layer: +10% opacity;
elevation: 0;
transform: scale(0.98); /* Opcional */
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.12);
color: rgba(0, 0, 0, 0.38);
elevation: 0;
```

---

### **2. Filled Tonal Button (Botón Tonal)**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-secondary-container);
color: var(--md-sys-color-on-secondary-container);
elevation: 0;
```

**Hover**
```css
state-layer: +8% opacity;
elevation: 1;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-secondary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
elevation: 0;
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.12);
color: rgba(0, 0, 0, 0.38);
```

---

### **3. Outlined Button (Botón con Borde)**

#### **Estados:**

**Enabled (Default)**
```css
background: transparent;
color: var(--md-sys-color-primary);
border: 1px solid var(--md-sys-color-outline);
elevation: 0;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
border: 1px solid rgba(0, 0, 0, 0.12);
color: rgba(0, 0, 0, 0.38);
```

---

### **4. Text Button (Botón de Texto)**

#### **Estados:**

**Enabled (Default)**
```css
background: transparent;
color: var(--md-sys-color-primary);
elevation: 0;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
color: rgba(0, 0, 0, 0.38);
```

---

### **5. Icon Button (Botón de Icono)**

#### **Variantes:**
- Standard (sin fondo)
- Filled (con fondo)
- Filled Tonal (fondo tonal)
- Outlined (con borde)

#### **Estados (Standard Icon Button):**

**Enabled (Default)**
```css
background: transparent;
color: var(--md-sys-color-on-surface-variant);
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
color: rgba(0, 0, 0, 0.38);
```

**Selected (Toggle Icon Button)**
```css
background: var(--md-sys-color-primary-container);
color: var(--md-sys-color-on-primary-container);
```

---

## ☑️ **Estados de Selection Controls**

### **Checkbox**

#### **Estados:**

**Unchecked (No seleccionado)**
```css
border: 2px solid var(--md-sys-color-on-surface-variant);
background: transparent;
```

**Checked (Seleccionado)**
```css
background: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
icon: checkmark;
```

**Indeterminate (Indeterminado)**
```css
background: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
icon: minus/dash;
```

**Hover (Unchecked)**
```css
state-layer: +8% opacity;
```

**Hover (Checked)**
```css
state-layer: +8% opacity on primary color;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
ripple effect;
```

**Disabled (Unchecked)**
```css
border: 2px solid rgba(0, 0, 0, 0.38);
```

**Disabled (Checked)**
```css
background: rgba(0, 0, 0, 0.38);
color: rgba(255, 255, 255, 0.38);
```

---

### **Radio Button**

#### **Estados:**

**Unselected**
```css
border: 2px solid var(--md-sys-color-on-surface-variant);
background: transparent;
```

**Selected**
```css
border: 2px solid var(--md-sys-color-primary);
inner-circle: var(--md-sys-color-primary);
```

**Hover (Unselected)**
```css
state-layer: +8% opacity;
```

**Hover (Selected)**
```css
state-layer: +8% opacity on primary color;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid;
```

**Pressed**
```css
state-layer: +10% opacity;
ripple effect;
```

**Disabled (Unselected)**
```css
border: 2px solid rgba(0, 0, 0, 0.38);
```

**Disabled (Selected)**
```css
border: 2px solid rgba(0, 0, 0, 0.38);
inner-circle: rgba(0, 0, 0, 0.38);
```

---

### **Switch**

#### **Estados:**

**Off (Apagado)**
```css
track: var(--md-sys-color-surface-variant);
thumb: var(--md-sys-color-outline);
```

**On (Encendido)**
```css
track: var(--md-sys-color-primary);
thumb: var(--md-sys-color-on-primary);
icon: checkmark (opcional);
```

**Hover (Off)**
```css
thumb-state-layer: +8% opacity;
```

**Hover (On)**
```css
thumb-state-layer: +8% opacity on primary;
```

**Focus**
```css
thumb-state-layer: +10% opacity;
outline: 2px solid;
```

**Pressed**
```css
thumb-state-layer: +10% opacity;
thumb-scale: 1.2;
```

**Disabled (Off)**
```css
track: rgba(0, 0, 0, 0.12);
thumb: rgba(0, 0, 0, 0.38);
```

**Disabled (On)**
```css
track: rgba(0, 0, 0, 0.12);
thumb: rgba(0, 0, 0, 0.38);
```

---

## 📝 **Estados de Text Fields (Campos de Texto)**

### **Filled Text Field**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-surface-variant);
label: var(--md-sys-color-on-surface-variant);
border-bottom: 1px solid var(--md-sys-color-on-surface-variant);
```

**Hover**
```css
border-bottom: 1px solid var(--md-sys-color-on-surface);
state-layer: +8% opacity;
```

**Focus**
```css
border-bottom: 2px solid var(--md-sys-color-primary);
label: var(--md-sys-color-primary);
```

**Error**
```css
border-bottom: 2px solid var(--md-sys-color-error);
label: var(--md-sys-color-error);
supporting-text: var(--md-sys-color-error);
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.04);
label: rgba(0, 0, 0, 0.38);
text: rgba(0, 0, 0, 0.38);
border-bottom: 1px dashed rgba(0, 0, 0, 0.38);
```

**Populated (Con texto)**
```css
label: floating position;
label-size: 12sp;
```

---

### **Outlined Text Field**

#### **Estados:**

**Enabled (Default)**
```css
background: transparent;
border: 1px solid var(--md-sys-color-outline);
label: var(--md-sys-color-on-surface-variant);
```

**Hover**
```css
border: 1px solid var(--md-sys-color-on-surface);
```

**Focus**
```css
border: 2px solid var(--md-sys-color-primary);
label: var(--md-sys-color-primary);
```

**Error**
```css
border: 2px solid var(--md-sys-color-error);
label: var(--md-sys-color-error);
```

**Disabled**
```css
border: 1px solid rgba(0, 0, 0, 0.12);
label: rgba(0, 0, 0, 0.38);
text: rgba(0, 0, 0, 0.38);
```

---

## 🎴 **Estados de Cards**

### **Elevated Card**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-surface);
elevation: 1;
```

**Hover**
```css
elevation: 2;
state-layer: +8% opacity;
```

**Focus**
```css
elevation: 1;
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
```

**Pressed**
```css
elevation: 1;
state-layer: +10% opacity;
```

**Dragged**
```css
elevation: 4;
state-layer: +16% opacity;
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.12);
elevation: 0;
opacity: 0.38;
```

---

### **Filled Card**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-surface-variant);
elevation: 0;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.12);
opacity: 0.38;
```

---

### **Outlined Card**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-surface);
border: 1px solid var(--md-sys-color-outline);
elevation: 0;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
outline-offset: 2px;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
border: 1px solid rgba(0, 0, 0, 0.12);
opacity: 0.38;
```

---

## 📋 **Estados de List Items**

### **List Item**

#### **Estados:**

**Enabled (Default)**
```css
background: transparent;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
```

**Pressed**
```css
state-layer: +10% opacity;
ripple effect;
```

**Selected**
```css
background: var(--md-sys-color-secondary-container);
color: var(--md-sys-color-on-secondary-container);
```

**Activated**
```css
background: var(--md-sys-color-secondary-container);
color: var(--md-sys-color-on-secondary-container);
indicator: vertical bar on left;
```

**Dragged**
```css
state-layer: +16% opacity;
elevation: 4;
```

**Disabled**
```css
opacity: 0.38;
```

---

## 🏷️ **Estados de Chips**

### **Assist Chip**

#### **Estados:**

**Enabled (Default)**
```css
background: transparent;
border: 1px solid var(--md-sys-color-outline);
```

**Hover**
```css
state-layer: +8% opacity;
elevation: 1;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
border: 1px solid rgba(0, 0, 0, 0.12);
label: rgba(0, 0, 0, 0.38);
```

---

### **Filter Chip**

#### **Estados:**

**Unselected**
```css
background: transparent;
border: 1px solid var(--md-sys-color-outline);
```

**Selected**
```css
background: var(--md-sys-color-secondary-container);
color: var(--md-sys-color-on-secondary-container);
icon: checkmark;
```

**Hover (Unselected)**
```css
state-layer: +8% opacity;
```

**Hover (Selected)**
```css
state-layer: +8% opacity on secondary container;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid;
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled (Unselected)**
```css
border: 1px solid rgba(0, 0, 0, 0.12);
label: rgba(0, 0, 0, 0.38);
```

**Disabled (Selected)**
```css
background: rgba(0, 0, 0, 0.12);
label: rgba(0, 0, 0, 0.38);
```

---

### **Input Chip**

#### **Estados:**

**Enabled (Default)**
```css
background: var(--md-sys-color-surface-variant);
trailing-icon: close/remove;
```

**Hover**
```css
state-layer: +8% opacity;
```

**Focus**
```css
state-layer: +10% opacity;
outline: 2px solid var(--md-sys-color-primary);
```

**Pressed**
```css
state-layer: +10% opacity;
```

**Disabled**
```css
background: rgba(0, 0, 0, 0.12);
label: rgba(0, 0, 0, 0.38);
```

---

## 📊 **Resumen de Opacidades de State Layers**

| Estado | Opacidad | Variable CSS |
|--------|----------|--------------|
| **Hover** | +8% | `--md3-state-hover-opacity: 0.08` |
| **Focus** | +10% | `--md3-state-focus-opacity: 0.10` |
| **Pressed** | +10% | `--md3-state-pressed-opacity: 0.10` |
| **Drag** | +16% | `--md3-state-drag-opacity: 0.16` |
| **Disabled** | 38% | `--md3-state-disabled-opacity: 0.38` |

---

## 🎯 **Reglas Universales de Estados M3**

1. ✅ **Solo un state layer a la vez**: No se pueden combinar múltiples state layers
2. ✅ **State layers usan el color del contenido**: Con opacidad fija
3. ✅ **Focus ring siempre visible**: Para accesibilidad (WCAG 2.1 AA)
4. ✅ **Disabled no es interactivo**: No responde a ninguna interacción
5. ✅ **Ripple solo en pressed**: Efecto de onda desde el punto de contacto
6. ✅ **Hover solo en desktop**: No aplica en dispositivos táctiles
7. ✅ **Focus para teclado**: Esencial para navegación accesible
8. ✅ **Transiciones suaves**: Usar duraciones M3 (50ms-600ms)

---

## 📚 **Referencias Oficiales**

- **Interaction States**: https://m3.material.io/foundations/interaction-states
- **State Layers**: https://m3.material.io/foundations/interaction/states/state-layers
- **Buttons**: https://m3.material.io/components/buttons
- **Selection Controls**: https://m3.material.io/components/checkbox
- **Text Fields**: https://m3.material.io/components/text-fields
- **Cards**: https://m3.material.io/components/cards
- **Chips**: https://m3.material.io/components/chips

---

¡Todos los estados están definidos según las especificaciones oficiales de Material Design 3! 🎊
