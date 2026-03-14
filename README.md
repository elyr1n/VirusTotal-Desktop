# VirusTotal-Desktop

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Русский / Russian

VirusTotal-Desktop - это простое настольное приложение на **Electron**, которое позволяет проверять файлы по их SHA256-хэшу через API VirusTotal. Интерфейс минималистичный и современный, с визуальными эффектами и удобной панелью информации о файле.

> На данный момент это заготовка проекта. В будущем планируется добавление нового функционала.

### Основные возможности

* Ввод SHA256-хэша файла или ID файла для анализа
* Получение информации: имя файла, размер, статистика сканирования
* Асинхронные запросы к VirusTotal API через безопасный мост `contextBridge`
* Современный дизайн с плавными эффектами и подсветкой

### Используемые модули

* [electron](https://www.npmjs.com/package/electron) - фреймворк для настольных приложений
* [dotenv](https://www.npmjs.com/package/dotenv) - для работы с переменными окружения
* `path` - встроенный модуль Node.js для работы с путями
* `ipcMain` / `ipcRenderer` - модули Electron для взаимодействия главного и рендер-процессов
* `contextBridge` - безопасный мост между Node.js и рендером

### Установка и запуск

```bash
git clone <репозиторий>
cd VirusTotal-Desktop
npm install
npm start
```

> Не забудьте добавить свой ключ VirusTotal в `.env` файл:

```
VIRUSTOTAL_API_KEY=ваш_ключ
```

### Лицензия

MIT License

---

## English

VirusTotal-Desktop is a lightweight **Electron** desktop app for checking files by their SHA256 hash via the VirusTotal API. The interface is minimalistic and modern, with visual effects and an easy-to-read information panel.

> Currently this is a project stub. New features will be added in future updates.

### Features

* Input a file's SHA256 hash or ID for analysis
* Display file information: name, size, scan results
* Asynchronous requests to VirusTotal API via a secure `contextBridge`
* Modern design with smooth effects and highlighting

### Modules Used

* [electron](https://www.npmjs.com/package/electron) - desktop application framework
* [dotenv](https://www.npmjs.com/package/dotenv) - environment variables management
* `path` - built-in Node.js module for file paths
* `ipcMain` / `ipcRenderer` - Electron modules for main-renderer communication
* `contextBridge` - secure bridge between Node.js and renderer

### Installation and Running

```bash
git clone <repository>
cd VirusTotal-Desktop
npm install
npm start
```

> Remember to add your VirusTotal API key in a `.env` file:

```
VIRUSTOTAL_API_KEY=your_key
```

### License

MIT License
