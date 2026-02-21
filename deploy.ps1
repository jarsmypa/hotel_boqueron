# Script de deploy para Windows PowerShell

$SERVER_IP = "134.209.62.198"
$SERVER_USER = "root"
$DOMAIN = "hotel.donsanx.me"
$WEB_ROOT = "/var/www/hotel.donsanx.me"
$PASSWORD = "201CBAFBC265B2FFABD0233C31DAC0CA"

Write-Host "🚀 Desplegando Hotel Boquerón a Digital Ocean..." -ForegroundColor Cyan

# Verificar que pscp existe (PuTTY)
$pscpExists = Get-Command pscp -ErrorAction SilentlyContinue
$scpExists = Get-Command scp -ErrorAction SilentlyContinue

if (-not $pscpExists -and -not $scpExists) {
    Write-Host "❌ Error: Se necesita SCP o PSCP instalado" -ForegroundColor Red
    Write-Host "💡 Instala Git para Windows que incluye SCP: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Crear script temporal para configurar el servidor
$setupScript = @"
# Crear directorio
mkdir -p $WEB_ROOT

# Crear configuración de Nginx
cat > /etc/nginx/sites-available/hotel.donsanx.me << 'NGINX_EOF'
server {
    listen 80;
    listen [::]:80;
    server_name hotel.donsanx.me;

    root /var/www/hotel.donsanx.me;
    index Index.html index.html;

    location / {
        try_files `$uri `$uri/ =404;
    }

    # Comprimir archivos
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache para assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)`$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
NGINX_EOF

# Habilitar el sitio
ln -sf /etc/nginx/sites-available/hotel.donsanx.me /etc/nginx/sites-enabled/

# Verificar configuración de Nginx
nginx -t

# Recargar Nginx
systemctl reload nginx

# Ajustar permisos
chown -R www-data:www-data /var/www/hotel.donsanx.me
chmod -R 755 /var/www/hotel.donsanx.me

echo "✅ Configuración completada"
"@

# Guardar script temporal
$setupScript | Out-File -FilePath "temp_setup.sh" -Encoding UTF8

Write-Host "📁 Creando directorio en el servidor..." -ForegroundColor Yellow

# Subir script de configuración
Write-Host "📤 Subiendo archivos de configuración..." -ForegroundColor Yellow
if ($scpExists) {
    scp temp_setup.sh ${SERVER_USER}@${SERVER_IP}:/tmp/setup.sh
} else {
    echo y | pscp -pw $PASSWORD temp_setup.sh ${SERVER_USER}@${SERVER_IP}:/tmp/setup.sh
}

# Ejecutar configuración inicial
Write-Host "⚙️ Configurando servidor..." -ForegroundColor Yellow
if ($scpExists) {
    ssh ${SERVER_USER}@${SERVER_IP} "bash /tmp/setup.sh"
} else {
    echo y | plink -pw $PASSWORD ${SERVER_USER}@${SERVER_IP} "bash /tmp/setup.sh"
}

# Subir archivos del sitio
Write-Host "📤 Subiendo archivos del sitio web..." -ForegroundColor Yellow
if ($scpExists) {
    scp -r Index.html styles.css script.js Assets ${SERVER_USER}@${SERVER_IP}:${WEB_ROOT}/
} else {
    echo y | pscp -pw $PASSWORD -r Index.html styles.css script.js Assets ${SERVER_USER}@${SERVER_IP}:${WEB_ROOT}/
}

# Limpiar archivo temporal
Remove-Item temp_setup.sh -Force

Write-Host ""
Write-Host "✨ ¡Despliegue completado!" -ForegroundColor Green
Write-Host "🌐 Tu sitio está disponible en: http://hotel.donsanx.me" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Próximos pasos recomendados:" -ForegroundColor Yellow
Write-Host "1. Configurar SSL con Let's Encrypt:" -ForegroundColor White
Write-Host "   ssh root@134.209.62.198" -ForegroundColor Gray
Write-Host "   sudo certbot --nginx -d hotel.donsanx.me" -ForegroundColor Gray
