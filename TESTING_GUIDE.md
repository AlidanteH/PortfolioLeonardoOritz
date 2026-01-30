# 🌐 Guía: Probar tu Portafolio en Otros Dispositivos

## ✅ **Servidor Local YA ESTÁ CORRIENDO**

Tu portafolio está disponible en:

### **📱 Acceso desde Dispositivos en tu Red WiFi:**

**URL para acceder:**
```
http://192.168.100.68:8000
```

### **Cómo Acceder:**

1. **En tu iPhone/iPad/Android:**
   - Conéctate a la **misma red WiFi** que tu Mac
   - Abre Safari/Chrome
   - Escribe: `http://192.168.100.68:8000`
   - ¡Listo! Verás tu portafolio

2. **En otro computador:**
   - Conéctate a la misma red WiFi
   - Abre cualquier navegador
   - Escribe: `http://192.168.100.68:8000`

### **Para Detener el Servidor:**
Cuando termines de probar, ejecuta:
```bash
# Presiona Ctrl+C en la terminal donde está corriendo
```

---

## 🚀 **Otras Opciones para Probar en Dispositivos Remotos**

### **Opción 2: GitHub Pages (Gratis, Permanente)** 🌟

**Ventajas:**
- ✅ Gratis
- ✅ URL pública permanente
- ✅ HTTPS automático
- ✅ Accesible desde cualquier lugar del mundo

**Pasos:**

1. **Crear repositorio en GitHub:**
```bash
cd /Users/leonardoortiz/Downloads/Portfolio
git init
git add .
git commit -m "Initial commit - Portfolio con Material Design 3"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio.git
git push -u origin main
```

2. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

3. **Tu sitio estará en:**
```
https://TU_USUARIO.github.io/portfolio/
```

---

### **Opción 3: Netlify (Gratis, Muy Fácil)** ⚡

**Ventajas:**
- ✅ Gratis
- ✅ Deploy en segundos
- ✅ URL personalizada
- ✅ HTTPS automático
- ✅ Deploy automático con Git

**Pasos:**

1. **Ir a:** https://www.netlify.com
2. **Sign up** (gratis)
3. **Drag & drop** la carpeta Portfolio
4. **¡Listo!** Te da una URL como: `https://tu-portfolio-abc123.netlify.app`

**O con CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
cd /Users/leonardoortiz/Downloads/Portfolio
netlify deploy --prod
```

---

### **Opción 4: Vercel (Gratis, Muy Rápido)** 🚀

**Ventajas:**
- ✅ Gratis
- ✅ Extremadamente rápido
- ✅ URL personalizada
- ✅ HTTPS automático
- ✅ Analytics incluido

**Pasos:**

1. **Ir a:** https://vercel.com
2. **Sign up** (gratis)
3. **Import Git Repository** o **Deploy**
4. **URL:** `https://tu-portfolio.vercel.app`

**O con CLI:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd /Users/leonardoortiz/Downloads/Portfolio
vercel --prod
```

---

### **Opción 5: ngrok (Túnel Temporal)** 🔒

**Ventajas:**
- ✅ URL pública temporal
- ✅ No requiere hosting
- ✅ Perfecto para pruebas rápidas
- ✅ HTTPS incluido

**Pasos:**

1. **Instalar ngrok:**
```bash
brew install ngrok
```

2. **Crear túnel:**
```bash
ngrok http 8000
```

3. **Te dará una URL como:**
```
https://abc123.ngrok.io
```

**Nota:** La URL cambia cada vez que reinicias ngrok (versión gratis)

---

### **Opción 6: Cloudflare Pages (Gratis)** ☁️

**Ventajas:**
- ✅ Gratis
- ✅ CDN global ultra rápido
- ✅ HTTPS automático
- ✅ Deploy automático con Git

**Pasos:**

1. **Ir a:** https://pages.cloudflare.com
2. **Sign up** (gratis)
3. **Connect Git** o **Upload**
4. **URL:** `https://tu-portfolio.pages.dev`

---

## 📊 **Comparación de Opciones**

| Opción | Velocidad Setup | Costo | Permanente | URL Pública | Mejor Para |
|--------|----------------|-------|------------|-------------|------------|
| **Servidor Local** | ⚡ Instantáneo | Gratis | ❌ Temporal | ❌ Solo red local | Pruebas rápidas |
| **GitHub Pages** | 🟡 5 min | Gratis | ✅ Sí | ✅ Sí | Portfolio permanente |
| **Netlify** | ⚡ 1 min | Gratis | ✅ Sí | ✅ Sí | Deploy rápido |
| **Vercel** | ⚡ 1 min | Gratis | ✅ Sí | ✅ Sí | Performance máximo |
| **ngrok** | ⚡ 30 seg | Gratis | ❌ Temporal | ✅ Sí | Demos rápidos |
| **Cloudflare** | 🟡 3 min | Gratis | ✅ Sí | ✅ Sí | CDN global |

---

## 🎯 **Recomendación por Caso de Uso**

### **Para Probar AHORA (Ya está listo):**
```
✅ Servidor Local
URL: http://192.168.100.68:8000
```

### **Para Compartir con Clientes:**
```
✅ Netlify o Vercel
- Deploy en 1 minuto
- URL profesional
- HTTPS automático
```

### **Para Portfolio Permanente:**
```
✅ GitHub Pages
- Gratis para siempre
- Integrado con Git
- URL: username.github.io/portfolio
```

### **Para Demo Rápida Externa:**
```
✅ ngrok
- URL pública en 30 segundos
- No requiere hosting
- Perfecto para mostrar a alguien
```

---

## 🔧 **Comandos Útiles**

### **Ver qué está corriendo en el puerto 8000:**
```bash
lsof -i :8000
```

### **Detener el servidor:**
```bash
# Ctrl+C en la terminal
# O encontrar el proceso:
kill $(lsof -t -i:8000)
```

### **Cambiar de puerto:**
```bash
python3 -m http.server 3000
# Acceder en: http://192.168.100.68:3000
```

---

## 📱 **Cómo Probar en Dispositivos Móviles**

### **Usando el Servidor Local (Ya corriendo):**

1. **iPhone/iPad:**
   - Abre Safari
   - Escribe: `http://192.168.100.68:8000`
   - Agrega a Home Screen para probar como PWA

2. **Android:**
   - Abre Chrome
   - Escribe: `http://192.168.100.68:8000`
   - Menu → Add to Home Screen

3. **Probar diferentes tamaños:**
   - iPhone SE: 375px
   - iPhone 12/13/14: 390px
   - iPhone Pro Max: 428px
   - iPad: 768px

---

## 🎨 **Herramientas de Testing Adicionales**

### **BrowserStack (Pruebas en dispositivos reales):**
- https://www.browserstack.com
- Prueba gratis por 30 días
- Dispositivos reales iOS/Android

### **LambdaTest:**
- https://www.lambdatest.com
- Prueba gratis
- Múltiples navegadores y dispositivos

### **Chrome DevTools (Simulación):**
- F12 → Toggle Device Toolbar
- Simula diferentes dispositivos
- Throttling de red

---

## ✅ **Tu Servidor Actual**

**Estado:** ✅ CORRIENDO
**URL Local:** http://localhost:8000
**URL Red:** http://192.168.100.68:8000
**Puerto:** 8000
**Directorio:** /Users/leonardoortiz/Downloads/Portfolio

**Para acceder desde otro dispositivo:**
1. Conéctate a la misma WiFi
2. Abre: `http://192.168.100.68:8000`
3. ¡Listo!

---

## 🚨 **Troubleshooting**

### **No puedo acceder desde otro dispositivo:**
- ✅ Verifica que ambos estén en la misma red WiFi
- ✅ Desactiva el firewall temporalmente
- ✅ Verifica que el servidor esté corriendo

### **El servidor se detuvo:**
```bash
cd /Users/leonardoortiz/Downloads/Portfolio
python3 -m http.server 8000
```

### **Cambiar IP:**
Si tu IP cambia, ejecuta:
```bash
ipconfig getifaddr en0
```

---

¡Tu portafolio está listo para ser probado en cualquier dispositivo! 🎊
