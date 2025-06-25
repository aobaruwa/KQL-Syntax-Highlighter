# Custom KQL Syntax Highlighter for Visual Studio Code

This extension provides **syntax highlighting** and **theme support** for **Kusto Query Language (KQL)** in Visual Studio Code. It is designed to enhance the developer experience when working with KQL queries for Azure Data Explorer and other KQL-compatible platforms.

---

## Features

- **Syntax Highlighting**:
  - Supports KQL keywords, operators, functions, and comments.
  - Highlights query parameters, math operators, and punctuation.

- **Custom Theme**:
  - Includes light(`KQL Theme (Light)`) and dark themes (`KQL Theme (Dark)`) optimized for KQL development.
  - Provides clear and visually distinct colors for different KQL elements.

- **File Support**:
  - Automatically applies syntax highlighting to `.kql` and `.csl` files.

---

## Installation

### From the Visual Studio Code Marketplace
1. Open Visual Studio Code.
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for `Custom KQL Syntax Highlighter`.
4. Click **Install**.

### From a `.vsix` File
1. Download the `.vsix` file for this extension.
2. Open Visual Studio Code.
3. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
4. Select `Extensions: Install from VSIX`.
5. Browse to the `.vsix` file and install it.

---

## Usage

### Syntax Highlighting
1. Open a `.kql` or `.csl` file in Visual Studio Code.
2. The extension will automatically apply syntax highlighting.

### Switching to the Custom Theme
1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Select `Preferences: Color Theme`.
3. Choose **KQL Theme (Light)** or **KQL Theme (Dark) from the list.

---

## Supported Scopes

The following KQL elements are supported with syntax highlighting:

| **Scope**                  | **Description**                     | **Color**       |
|----------------------------|-------------------------------------|-----------------|
| `query.operators.kusto`    | Query operators (e.g., `where`)     | Orange Red (#FF4500) |
| `keyword.functions.kusto`  | Functions (e.g., `summarize`)       | Blue (#0000FF)  |
| `operator.math.kusto`      | Math operators (e.g., `+`, `-`)     | Black (#000000) |
| `comment.kusto`            | Comments (e.g., `//`)               | Green (#008000) |
| `query.parameters.kusto`   | Query parameters                    | Teal Blue (#2B91AF) |

---

## Requirements

- Visual Studio Code version `1.70.0` or higher.
- Azure Data Explorer or any KQL-compatible platform for testing queries.

---

## Known Issues

- Some advanced KQL constructs may not be fully supported.
- If you encounter any issues, please report them in the [GitHub repository](https://github.com/aobaruwa/KQL-Syntax-Highlighter/issues).

---

## Contributing

Contributions are welcome! If you’d like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

---

## Release Notes

### 1.0.0
- Initial release with syntax highlighting for KQL.
- Includes a custom dark theme optimized for KQL development.

---

## License

This extension is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Links

- [GitHub Repository](https://github.com/aobaruwa/KQL-Syntax-Highlighter)