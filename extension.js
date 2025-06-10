const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('KQL Custom Theme extension is now active');

    // Apply appropriate theme on activation
    applyThemeBasedOnVSCodeTheme();

    // Register for theme change events
    context.subscriptions.push(
        vscode.window.onDidChangeActiveColorTheme(() => {
            applyThemeBasedOnVSCodeTheme();
        })
    );
}

/**
 * Apply the right KQL theme based on VS Code's current theme
 */
function applyThemeBasedOnVSCodeTheme() {
    const currentTheme = vscode.window.activeColorTheme;
    
    // Check if we're in a dark theme
    const isDarkTheme = 
        currentTheme.kind === vscode.ColorThemeKind.Dark || 
        currentTheme.kind === vscode.ColorThemeKind.HighContrast;
    
    // Choose the appropriate theme
    const themeToApply = isDarkTheme ? 'KQL Theme (Dark)' : 'KQL Theme (Light)';
    
    // Apply theme only for KQL files
    // Note: This doesn't change the user's global theme, only the syntax highlighting for KQL
    vscode.workspace.getConfiguration('editor').update('tokenColorCustomizations', {
        "[kql]": {
            // Automatically use the correct theme for KQL files
            "textMateRules": getThemeRules(isDarkTheme)
        }
    }, vscode.ConfigurationTarget.Global);
}

/**
 * Get the appropriate theme rules based on whether we're in a dark theme
 */
function getThemeRules(isDarkTheme) {
    if (isDarkTheme) {
        return [
            {
                "scope": ["query.operators.kusto"],
                "settings": {
                    "foreground": "#FF4500" // Bright orange
                }
            },
            {
                "scope": [
                    "query.functions.kusto",
                    "query.functions.datetime.kusto",
                    "query.table.kusto",
                    "query.types.kusto"
                ],
                "settings": {
                    "foreground": "#4EC9B0" // Medium Torquoise
                }
            },
            {
                "scope": "keyword.other.kusto",
                "settings": {
                  "foreground": "#569CD6" // skyblue
                }
            },
            {
                "scope": ["operator.math.kusto", "punctuation.kusto"],
                "settings": {
                  "foreground": "#DCDCDC" // black
                }
              },
            {
                "scope": "comment.kusto",
                "settings": {
                    "foreground": "#608B4E" // Olivedrab
                }
            },
            {
                "scope": "query.parameters.kusto",
                "settings": {
                  "foreground": "#2B91AF" // tealBlue
                }
              },
            {
                "scope": [
                    "string.quoted.double.kusto",
                    "string.quoted.single.kusto"
                ],
                "settings": {
                    "foreground": "#D69D85" // palechestnut
                }
            }
        ];
    } else {
        return [
            {
                "scope": ["query.operators.kusto"],
                "settings": {
                    "foreground": "#FF4500" // Bright orange for dark themes
                }
            },
            {
                "scope": [
                    "keyword.functions.kusto",
                    "keyword.functions.datetime.kusto",
                    "operator.table.kusto",
                    "keyword.types.kusto"
                ],
                "settings": {
                    "foreground": "#0000FF" // Light blue for dark themes
                }
            },
            {
                "scope": "keyword.other.kusto",
                "settings": {
                  "foreground": "#0000FF" // blue
                }
            },
            {
                "scope": ["operator.math.kusto", "punctuation.kusto"],
                "settings": {
                  "foreground": "#000000" // black
                }
              },
            {
                "scope": "comment.kusto",
                "settings": {
                    "foreground": "#6A9955" // Green for dark themes
                }
            },
            {
                "scope": "query.parameters.kusto",
                "settings": {
                  "foreground": "#2B91AF" // tealBlue
                }
              },
            {
                "scope": [
                    "string.quoted.double.kusto",
                    "string.quoted.single.kusto"
                ],
                "settings": {
                    "foreground": "#B22222" // firebrick
                }
            }
        ];
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};