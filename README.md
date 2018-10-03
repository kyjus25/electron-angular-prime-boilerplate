# Electron Pokédex

A pokémon research tool written in Node.js, Angular, & Electron using PrimeNG and the PokéAPI.

## System requirements

- Global installs of Node.js (prfererably lastest v6.10.1), npm (preferably latest v3.10.10), @angular/cli (preferably latest v1.0.0), Electron (preferably latest v1.6.2) and Electron-Packager.

## Getting Started

Install dependencies:

``` bash
npm install
```

Build angular2 code and run current app locally:

``` bash
npm start
```

## Build

Install global dependencies:

``` bash
npm install electron-packager -g
```

Build for Mac

``` bash
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds
```

Build for Windows

``` bash
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Pokédex"
```

Build for Linux

``` bash
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/linux/icon.png --prune=true --out=release-builds
```

## Special Thanks

PokéAPI available at https://pokeapi.co/<br>
Icon made by Roundicons Freebies from www.flaticon.com<br>
Original Boilerplate Electron App by [stokingerl](https://github.com/stokingerl/)
