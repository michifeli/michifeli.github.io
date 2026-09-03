---
title: "Análisis de Tráfico con Wireshark"
date: 2026-09-03
description: "Escrito para la ayudantía de cátedra del curso Redes de Computadores I (ELO322). Guía práctica de filtrado, seguimiento de flujos y exportación de datos."
image: "/wireshark_cover.webp"
tags: ["redes", "wireshark", "elo322", "ayudantia"]
---

Wireshark es el analizador de protocolos de red más destacado del mundo. Un analizador de paquetes de red presenta los datos de los paquetes capturados con el mayor detalle posible. Podrías pensar en esta herramienta como un dispositivo de medición para examinar qué está sucediendo dentro de un cable de red.

Existen disectores para una gran cantidad de protocolos. Esta guía documenta características esenciales para el análisis de red basadas en la documentación oficial, desde el filtrado de paquetes hasta la exportación de objetos.

Nota sobre el Comportamiento de Caché HTTP y Recursos:
> Al realizar análisis web, es fundamental recordar que los navegadores modernos almacenan elementos estáticos en la caché local. Si recargas una página de laboratorio y no observas nuevas solicitudes de imágenes en Wireshark, el navegador está omitiendo el tráfico o recibiendo códigos de estado de validación (`304 Not Modified`), por lo que se requiere una recarga forzosa (`Ctrl + Shift + R`) o el uso de modos de navegación privada

## 1. Filtros de Visualización (Display Filters)

Los filtros de visualización te permiten concentrarte en los paquetes que te interesan mientras ocultan los que actualmente no son de interés. Te permiten mostrar paquetes basados en el protocolo, la presencia de un campo, los valores de los campos o una comparación entre ellos.

La barra de herramientas te permite editar y aplicar estos filtros rápidamente. El fondo de la barra se volverá **rojo** si introduces una cadena incompleta o inválida, y se volverá **verde** cuando introduzcas una sintaxis correcta.

### Operadores Básicos

| Operador / Expresión | Descripción | Ejemplo de Filtro |
| :--- | :--- | :--- |
| **Por Protocolo** | Escribe el nombre del protocolo para mostrar solo los paquetes que lo contienen. | `tcp` o `http` |
| **Comparación (==)** | Compara valores exactos dentro de un campo específico. | `ip.addr == 200.1.17.3` |
| **Membresía (in)** | Prueba si un campo pertenece a un conjunto específico de valores. | `http.request.method in {"HEAD", "GET"}` |

### Operadores Lógicos

Puedes combinar múltiples expresiones de filtro en Wireshark usando operadores lógicos para crear búsquedas mucho más precisas:

*   **Lógico AND (`and` o `&&`):** Exige que ambas condiciones se cumplan.
*   **Lógico OR (`or` o `||`):** Exige que al menos una de las condiciones se cumpla.
*   **Lógico NOT (`not` o `!`):** Niega la condición, excluyendo esos paquetes.

**Ejemplos prácticos de combinación:**

Si necesitas buscar tráfico HTTP que provenga específicamente de la IP `192.168.0.1`, puedes estructurar el filtro así:

```bash
ip.src == 192.168.0.1 and tcp.port == 80
```

Si deseas capturar tráfico web, pero quieres excluir las consultas al servidor DNS (puerto 53):

```bash
http and not (udp.port == 53)
```

## 2. Seguimiento de Flujos de Protocolos (Following Protocol Streams)

Puede ser muy útil ver un protocolo exactamente de la manera en que lo ve la capa de aplicación. Quizás estés buscando contraseñas en un flujo no cifrado, o estés intentando darle sentido a un intercambio de datos. 

Para aislar una conversación completa:
1. Selecciona un paquete en la lista principal del flujo que te interesa.
2. Ve al menú principal y selecciona **Analyze > Follow > TCP Stream**.

*   El contenido del flujo se muestra en la misma secuencia en que apareció en la red.
*   El tráfico del **cliente al servidor se colorea de rojo**, mientras que el tráfico del **servidor al cliente se colorea de azul**.
*   Puedes optar por ver los datos en varios formatos como ASCII, HEX Dump, UTF-8, o C Arrays.

### Decodificación de Datos (Show Packet Bytes)
Si inspeccionas las cabeceras HTTP y encuentras datos ilegibles (por ejemplo, en un campo `Authorization: Basic`), a menudo se trata de codificaciones simples. 

Si un campo seleccionado muestra bytes que requieren más formato, puedes hacer clic derecho y usar el cuadro de diálogo **Show Packet Bytes**.
*   Este cuadro de diálogo se puede usar para decodificar directamente los bytes del campo desde **Base64**, formatos comprimidos o *quoted-printable* sin salir de la interfaz.

## 3. Exportación de Objetos (Export Objects)

Esta característica escanea a través de los flujos del protocolo seleccionado y permite exportar objetos reensamblados directamente al disco. Por ejemplo, si seleccionas HTTP, puedes extraer documentos HTML, imágenes, ejecutables y cualquier otro archivo transferido durante la sesión.

Para hacerlo, dirígete a **File > Export Objects > HTTP...**. El cuadro de diálogo de exportación te presentará las siguientes columnas informativas:

| Columna | Descripción |
| :--- | :--- |
| **Packet** | El número de paquete en el que se encontró este objeto. |
| **Hostname** | El nombre de host del servidor que envió este objeto. |
| **Content Type** | El tipo de contenido de este objeto (ej. `image/png`). |
| **Size** | El tamaño de este objeto en bytes. |
| **Filename** | El nombre de archivo original para este objeto. |


## 4. Referencias de Tiempo (Time Display Formats)

Mientras se capturan los paquetes, cada paquete recibe una marca de tiempo generada por el sistema. Para análisis de rendimiento o cálculo de latencias, el formato de presentación de la marca de tiempo se puede modificar usando el menú **View > Time Display Format**.

*   **Seconds Since First Captured Packet:** Muestra el tiempo transcurrido en segundos desde el inicio del archivo de captura (ideal para medir cuánto duró una transacción completa).
*   **Time of Day:** Muestra la hora absoluta del día en que se capturó el paquete.

## 5. Estadísticas de Red (Statistics)

Wireshark proporciona una amplia gama de estadísticas de red para obtener vistas panorámicas del tráfico. A estas se accede a través del menú **Statistics**.

*   **Conversations:** Muestra una lista de todas las conversaciones (tráfico entre dos *endpoints* específicos). Es muy útil para ver cuántos bytes totales se transfirieron entre tu equipo y un servidor web.
*   **Endpoints:** Muestra una lista general de tráfico hacia y desde direcciones IP o direcciones MAC individuales.
*   **Service Response Time:** Muestra el tiempo de respuesta del servicio entre una solicitud y la respuesta correspondiente para evaluar el rendimiento del servidor.

## 6. Consideraciones de Métodos HTTP (GET vs. POST) y Tráfico Moderno

### Diferencias entre Métodos HTTP
* **GET:** Diseñado para la recuperación de recursos de forma idempotente. Los parámetros viajan expuestos directamente en la línea de solicitud dentro de la URL (*Query String*), lo que los hace vulnerables al almacenamiento en historiales y registros de servidores.
* **POST:** Diseñado para enviar datos que modifican el estado del servidor. Los parámetros no van en la URL, sino empaquetados y encapsulados dentro del cuerpo de la petición (*payload*).
* **Mito de seguridad:** A nivel técnico, utilizar `POST` **no cifra por sí mismo** la información. Si la sesión opera sobre HTTP puro (puerto 80), cualquier analizador de tráfico podrá leer el cuerpo del mensaje en texto plano exactamente igual que con un `GET`.

### Análisis de Tráfico Moderno con QUIC e HTTP/3
* **Transporte basado en UDP:** A diferencia de HTTP/1.1 y HTTP/2 que operan sobre TCP, HTTP/3 utiliza QUIC, el cual funciona directamente sobre UDP (generalmente en el puerto 443).
* **Protected Payload y Cifrado Nativo:** Por diseño arquitectónico, QUIC cifra todo su contenido y sus cabeceras de aplicación desde el primer paquete usando TLS 1.3 nativo. Por esta razón, Wireshark mostrará las tramas como `Protected Payload` y no permitirá aislar etiquetas directas de HTTP/3 sin las claves simétricas de la sesión.
* **Connection ID:** Mecanismo clave que identifica la sesión a nivel de transporte independientemente de los cambios de IP o de red del cliente (por ejemplo, al alternar entre Wi-Fi y datos móviles).



## FAQ: Preguntas Frecuentes para Estudiantes de la Ayudantía ELO322

**1. ¿Por qué al aplicar el filtro `http3` en Wireshark la barra se pone de color rojo?**
Porque el disector nativo en la sintaxis de Wireshark para este protocolo se denomina exclusivamente `quic`. HTTP/3 viaja encapsulado y cifrado en el interior de las tramas QUIC.

**2. Si utilizo el método `POST` para enviar una contraseña, ¿mis datos viajan seguros frente a un atacante en la red?**
No. El método POST solo cambia la ubicación de los datos (del *Query String* al cuerpo de la petición). Si la conexión no cuenta con una capa de cifrado como TLS/HTTPS, cualquier sniffer podrá leer el contenido en texto plano.

**3. ¿Cómo puedo evitar que el navegador cargue imágenes desde la caché local durante una captura de laboratorio?**
Debes utilizar una ventana de navegación en modo incógnito estricto o realizar una recarga forzosa de la página presionando `Ctrl + Shift + R` antes de iniciar la captura de tráfico.

**4. ¿Cuál es la diferencia práctica al visualizar los parámetros de un formulario enviado por `GET` versus uno enviado por `POST`?**
En `GET`, los parámetros se aprecian directamente en la URI del paquete HTTP (ej. `?usuario=...`). En `POST`, debes expandir los detalles del paquete en Wireshark hasta la sección inferior denominada *HTML Form URL Encoded* para ver el cuerpo del mensaje.

**5. ¿Qué representa exactamente el puerto destino `80` al analizar las conexiones web de los laboratorios?**
Representa el puerto estándar asignado a nivel internacional para el protocolo de transferencia de hipertexto (HTTP) sin cifrar, utilizado por servidores web como Apache.

**6. ¿Cómo se diferencian las múltiples conexiones abiertas por un navegador en la ventana de estadísticas?**
Wireshark agrupa las sesiones en la sección *Conversations* (pestaña TCP) utilizando los puertos efímeros de origen asignados dinámicamente por el sistema operativo del cliente para cada canal independiente.

**7. ¿Por qué los paquetes QUIC muestran mensajes como `Protected Payload (KP0)` en la columna de información?**
Porque QUIC integra seguridad obligatoria mediante TLS 1.3 desde el establecimiento inicial de la conexión, cifrando por completo los datos de la capa de aplicación para evitar la inspección pasiva.

**8. ¿Qué propósito fundamental cumple el *Connection ID* en una sesión QUIC?**
Permite que la conexión de red permanezca activa y persistente aunque el dispositivo cliente cambie de dirección IP o de interfaz de red (como pasar de red móvil a Wi-Fi), a diferencia de TCP que se desconecta al cambiar de socket.

**9. ¿Cómo puedo calcular el tiempo total transcurrido de una transacción de red específica en la captura?**
Puedes revisar la ventana de *Capture File Properties* para obtener la duración global (*Elapsed*), o bien utilizar la columna de tiempo relativa (*Seconds Since First Captured Packet*) para medir intervalos precisos entre paquetes.

**10. Si un ejercicio de laboratorio solicita identificar una cabecera de autenticación básica (`Authorization`), ¿dónde debo buscarla si el servidor utiliza formularios HTML comunes?**
Las cabeceras `Authorization` en Base64 solo aparecen cuando el servidor implementa autenticación HTTP Basic (código de respuesta `401 Unauthorized`). Si el sitio utiliza un formulario HTML tradicional con casillas de texto, los datos viajarán directamente como variables del formulario (`GET` o `POST`) y no como cabeceras de autenticación de protocolo.
