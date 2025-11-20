# 🚀 Configuración de la Landing Page - Aprende a Programar

## Pasos para Hacer la Página Totalmente Funcional

### 1️⃣ CONFIGURAR EMAILJS (Para Enviar Emails)

**Paso 1: Crear cuenta en EmailJS**
- Ve a: https://www.emailjs.com/
- Regístrate con tu email (gratis)
- Verifica tu email

**Paso 2: Agregar tu Proveedor de Email**
- En el dashboard, ve a **Email Services**
- Haz clic en **Add Service**
- Elige tu proveedor (Gmail, Outlook, etc.)
- Conecta tu email

**Paso 3: Crear una Plantilla**
- Ve a **Email Templates**
- Crea una nueva plantilla con este contenido:

```
Subject: Tu libro "Aprende a Programar" está listo para descargar

Hola {{to_name}},

Gracias por tu interés en "Aprende a Programar" de Toni Ferrà.

Adjunto encontrarás tu libro en PDF completamente gratis.

¡A programar se aprende programando!

Saludos,
El equipo de Aprende a Programar
```

**Paso 4: Obtener tus claves**
- Ve a **Account** (esquina superior derecha)
- Copia tu **Public Key**
- En **Email Services**, copia el **Service ID**
- En **Email Templates**, copia el **Template ID**

### 2️⃣ ACTUALIZAR EL CÓDIGO

Abre el archivo `index.html` y busca esta línea:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Reemplaza `YOUR_PUBLIC_KEY` con tu Public Key de EmailJS.

Luego, abre el archivo `js/main.js` y busca esta línea:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

Reemplaza:
- `YOUR_SERVICE_ID` con tu Service ID
- `YOUR_TEMPLATE_ID` con tu Template ID

### 3️⃣ AGREGAR TU ARCHIVO PDF

1. Crea una carpeta llamada `downloads` en el directorio raíz
2. Coloca tu PDF del libro ahí: `downloads/Aprende-a-Programar.pdf`

**Para descargar automáticamente el PDF después de enviar el email**, actualiza el archivo `js/main.js` y agrega en la función `showSuccess()`:

```javascript
// Descargar el PDF automáticamente
const link = document.createElement('a');
link.href = './downloads/Aprende-a-Programar.pdf';
link.download = 'Aprende-a-Programar-ToniFerra.pdf';
link.click();
```

### 4️⃣ PRUEBA LA PÁGINA

1. Abre `index.html` en tu navegador
2. Ingresa un email de prueba
3. Haz clic en **Descargar Gratis**
4. ¡Deberías recibir un email!

### 5️⃣ RECURSOS

**Necesitarás:**
- ✅ Un email para tu cuenta de EmailJS
- ✅ Tu archivo PDF del libro
- ✅ Un navegador moderno (Chrome, Firefox, Safari, Edge)

**Esto está incluido:**
- ✅ Landing page moderna con tema oscuro
- ✅ Formulario de captura de emails
- ✅ Validación de emails
- ✅ Animaciones profesionales
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Secciones de beneficios
- ✅ Información del autor

---

## 📝 CHECKLIST ANTES DE PUBLICAR

- [ ] Configuré EmailJS correctamente
- [ ] Reemplacé las claves en `index.html` y `js/main.js`
- [ ] Agregué mi PDF en la carpeta `downloads`
- [ ] Probé el formulario
- [ ] Recibí el primer email de prueba
- [ ] El diseño se ve bien en móvil
- [ ] Probé todos los enlaces de navegación

---

## 🆘 SOLUCIÓN DE PROBLEMAS

**"No recibo emails"**
- Verifica que el Service ID y Template ID sean correctos
- Comprueba que tu email esté verificado en EmailJS
- Revisa la carpeta de spam

**"El formulario no funciona"**
- Abre la consola (F12) y busca errores
- Verifica que tus claves de EmailJS sean correctas
- Comprueba que EmailJS SDK esté cargando correctamente

**"Quiero cambiar el diseño"**
- Modifica `css/style.css` para cambiar colores y estilos
- Las variables principales están en el `:root`

---

## 📞 SOPORTE

Si necesitas ayuda, verifica:
1. La consola del navegador (F12 → Console)
2. Los logs en EmailJS dashboard
3. Que todos los archivos estén en la carpeta correcta

¡Listo para publicar tu landing page! 🎉
