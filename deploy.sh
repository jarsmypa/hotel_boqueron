#!/bin/bash

# Configuración
SERVER_IP="134.209.62.198"
SERVER_USER="root"
DOMAIN="hotel.donsanx.me"
WEB_ROOT="/var/www/hotel.donsanx.me"

echo "🚀 Desplegando Hotel Boquerón a Digital Ocean..."

# Crear directorio en el servidor
echo "📁 Creando directorio del sitio..."
ssh ${SERVER_USER}@${SERVER_IP} "mkdir -p ${WEB_ROOT}"

# Subir archivos al servidor
echo "📤 Subiendo archivos..."
scp -r Index.html styles.css script.js Assets ${SERVER_USER}@${SERVER_IP}:${WEB_ROOT}/

# Crear configuración de Nginx
echo "⚙️ Configurando Nginx..."
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
cat > /etc/nginx/sites-available/hotel.donsanx.me << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name hotel.donsanx.me;

    root /var/www/hotel.donsanx.me;
    index Index.html index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Comprimir archivos
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache para assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Habilitar el sitio
ln -sf /etc/nginx/sites-available/hotel.donsanx.me /etc/nginx/sites-enabled/

# Verificar configuración de Nginx
nginx -t

# Recargar Nginx
systemctl reload nginx

# Ajustar permisos
chown -R www-data:www-data /var/www/hotel.donsanx.me
chmod -R 755 /var/www/hotel.donsanx.me

echo "✅ Configuración de Nginx completada"
ENDSSH

echo "✨ ¡Despliegue completado!"
echo "🌐 Tu sitio está disponible en: http://hotel.donsanx.me"
echo ""
echo "📋 Próximos pasos recomendados:"
echo "1. Configurar SSL con Let's Encrypt:"
echo "   ssh root@134.209.62.198"
echo "   certbot --nginx -d hotel.donsanx.me"
