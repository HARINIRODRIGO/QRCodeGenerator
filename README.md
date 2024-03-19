# QR Code Generator

This simple Node.js application generates a QR code based on user input URL.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Run the application:

    ```bash
    node index.js
    ```

2. Follow the prompts and type your name when prompted.

3. The application will generate a QR code image (`qr_img.png`) containing the entered name and save it in the project directory.

4. The application also saves the entered name to a `URL.txt` file.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For prompting user input.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js File System module for file operations.
