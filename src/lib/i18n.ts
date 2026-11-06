export const I18N = {
  ja: {
    title: '数独 (Sudoku)',
    clueLabel: 'ヒント数',
    seedLabel: 'シード（空白でランダム）',
    langLabel: '言語',
    themeLabel: '表示',
    themeSystem: 'システム設定',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    preferenceSaveLabel: '設定保存',
    preferenceSaveTitle: 'ヒント数、シード、言語、表示をこのブラウザに保存',
    seedPlaceholder: 'オプション（空白でランダム）',
    newGame: '新しい盤面を作成',
    reset: '最初の状態に戻す',
    hint: 'ヒントを埋める',
    solve: '答えを表示',
    saveGame: '保存',
    loadGame: '読込',
    helpButton: '遊び方',
    helpClose: '閉じる',
    padTitle: '数字パッド',
    undo: '↩️ １つ戻す',
    redo: '↪️ １つ進める',
    noteButton: '✏️ メモ',
    redNoteButton: '🔴 赤メモ',
    clearButton: '消去',
    boardAriaLabel: '数独盤面',
    hintText: 'キーボードの 1-9 で入力、0 / Delete / Backspace で削除、矢印で移動、Enter でメモモード切替ができます。赤色メモは 🔴 赤メモ ボタン、右クリック、または Shift+1〜9 で入力できます。',
    statusLoading: '読み込み中...',
    statusGenerating: '生成中...',
    statusInputPrompt: '数字を入力してください。',
    statusNoHint: 'ヒントを出せるマスがありません。',
    statusSolved: 'おめでとうございます！すべて正解です。（タイム: {time}）',
    statusSolutionShown: '解答を表示しました。',
    solvedTitle: '🎉 おめでとうございます！パズルを解き終えました！',
    solvedTime: 'かかった時間：{time}',
    solvedNewGameButton: 'OKして新しい盤面を開始',
    solvedBestTime: 'この難易度の最速タイム：{time}',
    solvedNewRecord: '🏆 新記録！この難易度の最速タイム：{time}',
    boardPausedLabel: '⏸ タイマーを停止中。クリックして再開',
    statusSaveSuccess: '現在の状態を保存しました。',
    statusSaveError: '状態を保存できませんでした。',
    statusSaveUnavailable: '保存できる盤面がありません。',
    statusLoadSuccess: '保存した状態を読み込みました。',
    statusLoadError: '保存ファイルを読み込めませんでした。',
    timerPauseButton: '⏸ タイマーを停止',
    timerResumeButton: '▶ タイマーを再開',
    statusTimerPaused: 'タイマーを停止しました。',
    statusTimerResumed: 'タイマーを再開しました。',
    statsHintUsed: 'ヒント使用: {count}回',
    statsSolutionShown: '解答表示: {state}',
    statsClues: '実ヒント数: {count}',
    statsSeed: 'シード: {seed}',
    yes: 'あり',
    no: 'なし',
    randomSeed: 'ランダム({seed})',
    helpTitle: '遊び方',
    helpSections: [
      {
        items: [
          { label: 'はじめに', text: '盤面のマスを選んで、1から9までの数字を入力してください。' },
          { label: 'ゴール', text: 'タテ、ヨコ、太線で囲まれた3x3のブロックのどれにも、1から9までの数字が1つずつ入れば完成です。' },
          { label: '正解は1つ', text: '生成される盤面はすべて、正解は1つのみです。' },
          { label: 'ハイライト', text: '重複する数字はハイライト表示されます。ある数字が9個すべて正しく埋まると、下部の数字パッドの対応するボタンに✔マークが表示されます。数字の入ったマスを選ぶと、同じ数字の全マスのほか、そのマスと同じ行・列・3x3 の枠もハイライト表示されます。' },
          { label: 'オフライン', text: 'オフラインで遊べます。ゲームプレイ中の操作はインターネット通信を生じさせません。' }
        ]
      },
      {
        title: '盤面上部にあるコントロールとボタン',
        items: [
          { label: 'タイマー', text: '経過時間を表示します。停止・再開できます。盤面を操作すると自動的に再開します。' },
          { label: 'ヒント数', text: '新しい盤面を作るときの初期ヒント数を選びます。' },
          { label: 'シード', text: '同じ値を入れると、同じ盤面を再生成できます。空欄ならランダムです。' },
          { label: '言語', text: '画面表示の言語を切り替えます。' },
          { label: '表示', text: 'システム設定、ライト、ダークから画面の配色を選びます。システム設定ではOSやブラウザの配色設定に追従します。' },
          { label: '設定保存', text: 'ONにすると、ヒント数、シード、言語、表示をこのブラウザに保存し、次回起動時に復元します。初期状態はOFFです。OFFにすると保存済みの設定を削除します。' },
          { label: '新しい盤面を作成', text: '現在の設定で新しい数独を生成します。' },
          { label: '最初の状態に戻す', text: '開始時点の盤面に戻します。タイマーも最初からやり直します。' },
          { label: 'ヒントを埋める', text: '空いているマスを 1 つだけ正解で埋めます。' },
          { label: '答えを表示', text: '完成した解答を表示します。' },
          { label: '遊び方', text: 'ヘルプを開きます。オフラインで読めます。' },
          { label: '保存', text: '現在の盤面、メモ、タイマー、Undo/Redo の履歴を JSON ファイルとして保存します。' },
          { label: '読込', text: '保存した JSON ファイルを読み込み、同じ状態から再開します。' }
        ]
      },
      {
        title: '操作方法（マウス/タップ）',
        items: [
          { label: 'マスを選ぶ', text: '盤面のマスを選びます。' },
          { label: '数字入力', text: '数字パッドで数字を入力します。' },
          { label: '消去', text: '選択中のマスを消去します。' },
          { label: '✏️ メモ', text: 'メモ入力モードに切り替えます。メモ入力モード中に数字を入力するとメモを入れられます。' },
          { label: '🔴 赤メモ', text: 'メモ入力を赤色メモに切り替えます。メモ入力モード中に数字をマウスで右クリックしても赤色メモを入れられます。' },
          { label: '↩️ １つ戻す', text: '直前の入力やメモを取り消します。' },
          { label: '↪️ １つ進める', text: '取り消した入力やメモをやり直します。' }
        ]
      },
      {
        title: '操作方法（キーボード）',
        items: [
          { label: '矢印キー', text: '盤面のマスを移動します。' },
          { label: '1〜9', text: '数字を入力します。' },
          { label: '0 / Backspace / Delete', text: '選択中のマスを消去します。' },
          { label: 'Enter', text: 'メモ入力モードに切り替えます。' },
          { label: 'Shift+1〜9', text: '赤色メモを入力します。' },
          { label: 'Ctrl+Z', text: '1つ戻します。' },
          { label: 'Ctrl+Y または Ctrl+Shift+Z', text: '1つ進めます。' }
        ]
      },
      {
        title: '詳細情報',
        items: [
          {
            label: 'GitHub レポジトリ',
            href: 'https://github.com/piccoripico/sudoku-html',
            linkText: 'https://github.com/piccoripico/sudoku-html',
            note: '※インターネット接続が必要です。'
          }
        ]
      }
    ],
    clueOptionLabels: {
      17: '17 (最難関)',
      24: '24 (かなり難しい)',
      28: '28 (難しめ)',
      32: '32 (標準)',
      38: '38 (易しめ)',
      44: '44 (かなり易しい)'
    }
  },
  en: {
    title: 'Sudoku',
    clueLabel: 'Clues',
    seedLabel: 'Seed (blank for random)',
    langLabel: 'Language',
    themeLabel: 'Theme',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    preferenceSaveLabel: 'Save settings',
    preferenceSaveTitle: 'Save clues, seed, language, and theme in this browser',
    seedPlaceholder: 'Optional (blank for random)',
    newGame: 'New Puzzle',
    reset: 'Reset to Start',
    hint: 'Fill a Hint',
    solve: 'Show Solution',
    saveGame: 'Save',
    loadGame: 'Load',
    helpButton: 'How to Play',
    helpClose: 'Close',
    padTitle: 'Number Pad',
    undo: '↩️ Undo',
    redo: '↪️ Redo',
    noteButton: '✏️ Note',
    redNoteButton: '🔴 Red Note',
    clearButton: 'Clear',
    boardAriaLabel: 'Sudoku board',
    hintText: 'Use 1-9 to input, 0 / Delete / Backspace to clear, arrow keys to move, and Enter to toggle note mode. Red notes can be entered with the 🔴 Red Note button, right-click, or Shift+1-9.',
    statusLoading: 'Loading...',
    statusGenerating: 'Generating...',
    statusInputPrompt: 'Enter numbers to solve the puzzle.',
    statusNoHint: 'No empty cell is available for a hint.',
    statusSolved: 'Congratulations! Puzzle solved. (Time: {time})',
    statusSolutionShown: 'Solution displayed.',
    solvedTitle: '🎉 Congratulations! Puzzle solved!',
    solvedTime: 'Time taken: {time}',
    solvedNewGameButton: 'OK and start a new puzzle',
    solvedBestTime: 'Fastest time for this difficulty: {time}',
    solvedNewRecord: '🏆 New record! Fastest for this difficulty: {time}',
    boardPausedLabel: '⏸ Timer paused — click to resume',
    statusSaveSuccess: 'The current state has been saved.',
    statusSaveError: 'The current state could not be saved.',
    statusSaveUnavailable: 'There is no puzzle state to save.',
    statusLoadSuccess: 'The saved state has been loaded.',
    statusLoadError: 'The save file could not be loaded.',
    timerPauseButton: '⏸ Pause timer',
    timerResumeButton: '▶ Resume timer',
    statusTimerPaused: 'Timer paused.',
    statusTimerResumed: 'Timer resumed.',
    statsHintUsed: 'Hints used: {count}',
    statsSolutionShown: 'Solution shown: {state}',
    statsClues: 'Actual clues: {count}',
    statsSeed: 'Seed: {seed}',
    yes: 'yes',
    no: 'no',
    randomSeed: 'random({seed})',
    helpTitle: 'How to Play',
    helpSections: [
      {
        items: [
          { label: 'Getting started', text: 'Select a cell and enter a number from 1 to 9.' },
          { label: 'Goal', text: 'The puzzle is complete when every row, column, and 3x3 block outlined by the thick lines contains each number from 1 to 9 exactly once.' },
          { label: 'Unique solution', text: 'Every generated puzzle has exactly one solution.' },
          { label: 'Highlighting', text: 'Duplicate numbers are highlighted. Once a number is correctly placed in all nine positions, a ✔ mark appears on its number pad button. Selecting a cell with a number also highlights that number in every cell, along with its row, column, and 3x3 box.' },
          { label: 'Offline', text: 'You can play offline. Gameplay itself does not require any internet connection.' }
        ]
      },
      {
        title: 'Controls and Buttons Above the Board',
        items: [
          { label: 'Timer', text: 'Shows the elapsed time. It can be paused and resumed. It resumes automatically when you operate the board.' },
          { label: 'Clues', text: 'Sets the number of starting clues for the next puzzle.' },
          { label: 'Seed', text: 'Enter the same seed to recreate the same puzzle. Leave it blank for a random puzzle.' },
          { label: 'Language', text: 'Switches the interface language.' },
          { label: 'Theme', text: 'Choose System, Light, or Dark. System follows the color preference of your operating system or browser.' },
          { label: 'Save settings', text: 'When enabled, the clue count, seed, language, and theme are saved in this browser and restored the next time you open the app. It is off by default. Turning it off removes the saved preferences.' },
          { label: 'New Puzzle', text: 'Generates a fresh puzzle with the current settings.' },
          { label: 'Reset to Start', text: 'Returns the board to its initial state. The timer also starts over.' },
          { label: 'Fill a Hint', text: 'Reveals one correct value in an empty cell.' },
          { label: 'Show Solution', text: 'Displays the completed solution.' },
          { label: 'How to Play', text: 'Opens the help dialog. It is available offline.' },
          { label: 'Save', text: 'Saves the current board, notes, timer, and Undo/Redo history as a JSON file.' },
          { label: 'Load', text: 'Loads a saved JSON file and resumes from the same state.' }
        ]
      },
      {
        title: 'Controls (Mouse / Tap)',
        items: [
          { label: 'Select a cell', text: 'Select a cell on the board.' },
          { label: 'Enter a number', text: 'Use the number pad to enter a number.' },
          { label: 'Clear', text: 'Clears the selected cell.' },
          { label: '✏️ Note', text: 'Switches to note input mode. When note input mode is on, entering a number adds a note.' },
          { label: '🔴 Red Note', text: 'Switches note input to red notes. While note input mode is on, you can also right-click a number with the mouse to enter a red note.' },
          { label: '↩️ Undo', text: 'Undoes the most recent input or note.' },
          { label: '↪️ Redo', text: 'Reapplies an undone input or note.' }
        ]
      },
      {
        title: 'Controls (Keyboard)',
        items: [
          { label: 'Arrow keys', text: 'Move between cells.' },
          { label: '1-9', text: 'Enter a number.' },
          { label: '0 / Backspace / Delete', text: 'Clear the selected cell.' },
          { label: 'Enter', text: 'Switch to note input mode.' },
          { label: 'Shift+1-9', text: 'Enter a red note.' },
          { label: 'Ctrl+Z', text: 'Undo.' },
          { label: 'Ctrl+Y or Ctrl+Shift+Z', text: 'Redo.' }
        ]
      },
      {
        title: 'More Information',
        items: [
          {
            label: 'GitHub Repository',
            href: 'https://github.com/piccoripico/sudoku-html',
            linkText: 'https://github.com/piccoripico/sudoku-html',
            note: '*Internet connection required.'
          }
        ]
      }
    ],
    clueOptionLabels: {
      17: '17 (hardest)',
      24: '24 (very hard)',
      28: '28 (hard)',
      32: '32 (normal)',
      38: '38 (easy)',
      44: '44 (very easy)'
    }
  },
  cn: { title: "数独", clueLabel: "提示线索数", seedLabel: "种子值（留空随机生成）", langLabel: "语言", themeLabel: "主题", themeSystem: "跟随系统", themeLight: "浅色模式", themeDark: "深色模式", preferenceSaveLabel: "保存设置", preferenceSaveTitle: "在当前浏览器中保存线索数、种子值、语言和主题偏好", seedPlaceholder: "选填（留空则随机生成谜题）", newGame: "新谜题", reset: "重置开局", hint: "获取提示", solve: "显示完整答案", saveGame: "存档", loadGame: "读档", helpButton: "游戏说明", helpClose: "关闭", padTitle: "数字键盘", undo: "↩️ 撤销", redo: "↪️ 重做", noteButton: "✏️ 笔记", redNoteButton: "🔴 红色笔记", clearButton: "清除", boardAriaLabel: "数独棋盘", hintText: "使用1-9输入数字，按0/删除键/退格键清空内容，方向键移动选中格子，按回车键切换笔记模式。可以通过🔴红色笔记按钮、鼠标右键或Shift+数字1-9来输入红色笔记。", statusLoading: "加载中...", statusGenerating: "生成谜题中...", statusInputPrompt: "输入数字来解开数独谜题。", statusNoHint: "没有可用于生成提示的空白格子了。", statusSolved: "恭喜！谜题已解开。（用时：{time}）", statusSolutionShown: "完整答案已显示。", solvedTitle: "🎉 恭喜，谜题已解开！", solvedTime: "用时：{time}", solvedNewGameButton: "确定并开始新谜题", solvedBestTime: "该难度最快用时：{time}", solvedNewRecord: "🏆 新纪录！该难度最快用时：{time}", boardPausedLabel: "⏸ 计时已暂停，点击恢复", statusSaveSuccess: "当前游戏状态已成功保存。", statusSaveError: "当前游戏状态无法完成保存。", statusSaveUnavailable: "没有可保存的数独游戏状态。", statusLoadSuccess: "已成功读取存档状态。", statusLoadError: "存档文件无法完成读取。", timerPauseButton: "⏸ 暂停计时", timerResumeButton: "▶ 恢复计时", statusTimerPaused: "计时已暂停。", statusTimerResumed: "计时已恢复。", statsHintUsed: "已使用提示次数：{count}", statsSolutionShown: "是否显示过答案：{state}", statsClues: "当前实际线索数：{count}", statsSeed: "种子值：{seed}", yes: "是", no: "否", randomSeed: "随机生成({seed})", helpTitle: "游戏说明", helpSections: [ { items: [ { label: "开始游戏", text: "选中任意空白格子，输入1到9之间的数字即可开始解谜。" }, { label: "游戏目标", text: "数独谜题完成的标准是：每一行、每一列，以及粗线划分出的3×3小九宫格内，都恰好包含1到9的全部数字，且每个数字仅出现一次。" }, { label: "唯一解规则", text: "本工具生成的每一道数独谜题，都有且仅有一个正确答案。" }, { label: "高亮提示", text: "重复输入的数字会被自动高亮标记。某个数字在棋盘上全部正确填满后，数字键盘上对应的数字按钮会显示✔标记。选中某个有数字的格子时，该数字的所有格子以及所在行、列、3×3 宫也会高亮显示。" }, { label: "离线可用", text: "你可以完全离线游玩，游戏运行全程不需要连接互联网。" } ] }, { title: "棋盘上方的功能控件与按钮", items: [ { label: "计时器", text: "显示用时。可以暂停和恢复计时；操作棋盘后计时会自动恢复。" }, { label: "提示线索数", text: "设置下一道新谜题的初始已知线索数量。" }, { label: "种子值", text: "输入相同的种子值，就可以复现完全相同的数独谜题，留空则随机生成新谜题。" }, { label: "语言", text: "切换界面的显示语言。" }, { label: "主题", text: "可以选择跟随系统、浅色模式或深色模式，选择跟随系统会自动适配你的操作系统或浏览器的色彩偏好。" }, { label: "保存设置", text: "开启后，你设置的线索数、种子值、语言和主题偏好都会保存在当前浏览器中，下次打开应用时会自动恢复。该功能默认关闭，关闭后会清除所有已保存的偏好设置。" }, { label: "新谜题", text: "按照当前的参数设置，生成一道全新的数独谜题。" }, { label: "重置开局", text: "将数独棋盘恢复到初始的未填写状态，计时器也会重新开始计时。" }, { label: "获取提示", text: "自动在空白格子中填入一个正确的数字。" }, { label: "显示完整答案", text: "直接展示整道数独的全部正确解答。" }, { label: "游戏说明", text: "打开帮助弹窗，该帮助内容支持离线查看。" }, { label: "存档", text: "将当前的棋盘状态、所有笔记、计时数据和撤销/重做历史，导出为JSON文件保存到本地。" }, { label: "读档", text: "读取之前导出的JSON存档文件，从存档的状态继续游戏。" } ] }, { title: "鼠标/触屏操作说明", items: [ { label: "选中格子", text: "点击棋盘上的任意格子完成选中。" }, { label: "输入数字", text: "通过底部的数字键盘输入想要填写的数字。" }, { label: "清除内容", text: "清空当前选中格子里的所有内容。" }, { label: "✏️ 普通笔记", text: "切换到普通笔记输入模式，开启该模式后输入的数字会以笔记形式标记在格子中。" }, { label: "🔴 红色笔记", text: "将笔记输入模式切换为红色笔记，在笔记模式开启的状态下，也可以用鼠标右键点击数字来输入红色笔记。" }, { label: "↩️ 撤销", text: "撤销上一步的输入或者笔记操作。" }, { label: "↪️ 重做", text: "恢复上一步被撤销的输入或者笔记操作。" } ] }, { title: "键盘快捷键说明", items: [ { label: "方向键", text: "在不同格子之间移动选中位置。" }, { label: "数字键1-9", text: "直接在选中格子输入对应数字。" }, { label: "数字0 / 退格键 / 删除键", text: "清空当前选中格子的内容。" }, { label: "回车键", text: "快速切换笔记输入模式的开启和关闭。" }, { label: "Shift+数字1-9", text: "直接在笔记模式下输入红色笔记。" }, { label: "Ctrl+Z", text: "执行撤销操作。" }, { label: "Ctrl+Y 或 Ctrl+Shift+Z", text: "执行重做操作。" } ] }, { title: "更多信息", items: [ { label: "GitHub项目仓库", href: "https://github.com/piccoripico/sudoku-html", linkText: "https://github.com/piccoripico/sudoku-html", note: "*访问该链接需要连接互联网。" } ] } ], clueOptionLabels: { 17: "17条线索（极难）", 24: "24条线索（非常困难）", 28: "28条线索（困难）", 32: "32条线索（普通难度）", 38: "38条线索（简单）", 44: "44条线索（非常简单）" } }
} as const;

export type Language = keyof typeof I18N;

type JapaneseDictionary = typeof I18N.ja;

export type TranslationKey = {
  [Key in keyof JapaneseDictionary]: JapaneseDictionary[Key] extends string ? Key : never;
}[keyof JapaneseDictionary];

export type TranslationVariables = Readonly<Record<string, string | number>>;

export function isLanguage(value: string): value is Language {
  return value === 'ja' || value === 'en' || value === 'cn';
}

export function translate(
  lang: string,
  key: TranslationKey,
  vars: TranslationVariables = {}
): string {
  const dict = isLanguage(lang) ? I18N[lang] : I18N.cn;
  const template = dict[key] ?? I18N.cn[key] ?? '';
  return String(template).replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? ''));
}
