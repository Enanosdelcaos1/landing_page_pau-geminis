# 🎯 INSTRUCCIONES RÁPIDAS - Haz tu Landing Page Funcional en 5 Minutos

## PASO 1: Ir a EmailJS (2 minutos)
1. Abre: https://www.emailjs.com/
2. Regístrate GRATIS
3. Verifica tu email

## PASO 2: Conectar tu Email (1 minuto)
1. En Dashboard → Email Services → Add Service
2. Selecciona tu proveedor (Gmail, Outlook, etc.)
3. Conecta tu email

## PASO 3: Copiar tus 3 Claves (1 minuto)
Ve a tu Dashboard de EmailJS y copia:
- **Public Key** (en Account)
- **Service ID** (en Email Services)
- **Template ID** (en Email Templates)

## PASO 4: Actualizar el Código (1 minuto)

### En index.html (línea 195):
```html
emailjs.init('AQUI_TU_PUBLIC_KEY');
```

### En js/main.js (línea 36):
```javascript
emailjs.send('AQUI_TU_SERVICE_ID', 'AQUI_TU_TEMPLATE_ID', {
```

## ✅ ¡LISTO!

La página ahora está completamente funcional:
- ✓ Formulario de captura de emails
- ✓ Envío automático de emails
- ✓ Diseño profesional
- ✓ Animaciones incluidas
- ✓ Responsive en móvil

## 🚀 PRÓXIMOS PASOS

1. Agrega tu PDF en: `downloads/Aprende-a-Programar.pdf`
2. Prueba el formulario
3. ¡Publica y comparte!

---

**¿Preguntas?** Verifica el archivo SETUP.md para guía completa
