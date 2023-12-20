# Documentação do Aplicativo SOS Primeiros Socorros

## Visão Geral

O SOS Primeiros Socorros é um aplicativo dedicado a fornecer orientações passo a passo para situações de emergência, permitindo que usuários ajam de maneira eficaz em momentos críticos. Este aplicativo abrange uma variedade de cenários, incluindo cortes, afogamentos, naúseas e vômitos, ataque cardíaco, choque elétrico e queimaduras.

## Funcionalidades Principais

- Orientações Passo a Passo
  - Instruções Detalhadas:
  
  O aplicativo fornece orientações claras e detalhadas para cada situação de emergência, guiando o usuário por meio de procedimentos essenciais.

- Chamada de Emergência Rápida
  - Botão de Chamada de Emergência:
  
  

- Doação
  - Botão de Doação:
    
    

## Navegação e Interface

- Página Inicial Intuitiva:

Uma interface amigável que permite aos usuários acessar rapidamente as instruções de primeiros socorros desejadas.

# Guia de Instalação e Execução do Projeto SOS Primeiros Socorros

## Instalação de Dependências

Certifique-se de seguir estas etapas para instalar as dependências necessárias antes de executar o projeto.

- Instale o pacote npx globalmente:

```bash
npm install -g npx
```
Este pacote é fundamental para executar comandos de pacotes npm temporariamente.

- Instale o Expo CLI globalmente:

```bash
npm install --global expo-cli
```
O Expo CLI fornece comandos para criar, desenvolver e publicar projetos Expo.

- Verifique a versão do Expo CLI instalada:

```bash
expo --version

```
Certifique-se de estar usando a versão desejada do Expo CLI.

## Execução do Projeto

Siga estes passos para rodar o projeto na sua máquina:

- Clone o repositório SOS Primeiros Socorros:

```bash
git clone https://github.com/samsepiol1/SOS-Primeiros-Socorros
```
- Mude para o branch async-app-0.1.2:
```bash
git checkout async-app-0.1.2
```
- Inicie o servidor de desenvolvimento Expo:
```bash
npx expo start --tunnel
```
- Este comando iniciará o servidor Expo, permitindo que você desenvolva e teste o aplicativo em tempo real. A opção --tunnel é usada para facilitar o acesso em dispositivos físicos, mesmo em redes diferentes.
- O Expo iniciará o servidor e abrirá uma página no seu navegador. Nesta página, você encontrará opções para executar o aplicativo em um emulador, dispositivo físico ou navegador.
- Para acessar o aplicativo em um dispositivo físico em uma rede diferente, use o código QR fornecido pela página do Expo ou escaneie-o com o aplicativo Expo Go no seu dispositivo.
- Agora, o aplicativo SOS Primeiros Socorros deve estar em execução no seu dispositivo ou emulador.

