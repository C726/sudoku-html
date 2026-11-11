import { requireElement } from './dom.js';

export interface UiElements {
  boardEl: HTMLDivElement;
  boardPausedOverlayEl: HTMLDivElement;
  padEl: HTMLDivElement;
  statusEl: HTMLDivElement;
  statsEl: HTMLDivElement;
  timerEl: HTMLDivElement;
  timerPauseEl: HTMLButtonElement;
  undoEl: HTMLButtonElement;
  redoEl: HTMLButtonElement;
  helpButtonEl: HTMLButtonElement;
  helpOverlayEl: HTMLDivElement;
  helpTitleEl: HTMLHeadingElement;
  helpContentEl: HTMLDivElement;
  helpCloseEl: HTMLButtonElement;
  solvedOverlayEl: HTMLDivElement;
  solvedTitleEl: HTMLHeadingElement;
  solvedTimeEl: HTMLParagraphElement;
  solvedRecordEl: HTMLParagraphElement;
  solvedNewGameEl: HTMLButtonElement;
  clueCountEl: HTMLSelectElement;
  seedInputEl: HTMLInputElement;
  seedFieldEl: HTMLDivElement;
  langSelectEl: HTMLSelectElement;
  themeSelectEl: HTMLSelectElement;
  persistPreferencesEl: HTMLInputElement;
  preferenceSaveToggleEl: HTMLLabelElement;
  preferenceSaveLabelEl: HTMLSpanElement;
  sameNumberHighlightEl: HTMLInputElement;
  sameNumberHighlightToggleEl: HTMLLabelElement;
  sameNumberHighlightLabelEl: HTMLSpanElement;
  selectedCellHighlightEl: HTMLInputElement;
  selectedCellHighlightToggleEl: HTMLLabelElement;
  selectedCellHighlightLabelEl: HTMLSpanElement;
  saveButtonEl: HTMLButtonElement;
  loadButtonEl: HTMLButtonElement;
  loadFileEl: HTMLInputElement;
  titleEl: HTMLHeadingElement;
  clueCountLabelEl: HTMLLabelElement;
  seedLabelEl: HTMLLabelElement;
  langLabelEl: HTMLLabelElement;
  newGameEl: HTMLButtonElement;
  resetEl: HTMLButtonElement;
  hintEl: HTMLButtonElement;
  solveEl: HTMLButtonElement;
  padTitleEl: HTMLHeadingElement;
  hintTextEl: HTMLParagraphElement;
}

export function requireUiElements(): UiElements {
  return {
    boardEl: requireElement('board', HTMLDivElement),
    boardPausedOverlayEl: requireElement('boardPausedOverlay', HTMLDivElement),
    padEl: requireElement('pad', HTMLDivElement),
    statusEl: requireElement('status', HTMLDivElement),
    statsEl: requireElement('stats', HTMLDivElement),
    timerEl: requireElement('timer', HTMLDivElement),
  timerPauseEl: requireElement('timerPause', HTMLButtonElement),
    undoEl: requireElement('undo', HTMLButtonElement),
    redoEl: requireElement('redo', HTMLButtonElement),
    helpButtonEl: requireElement('help', HTMLButtonElement),
    helpOverlayEl: requireElement('helpOverlay', HTMLDivElement),
    helpTitleEl: requireElement('helpTitle', HTMLHeadingElement),
    helpContentEl: requireElement('helpContent', HTMLDivElement),
    helpCloseEl: requireElement('helpClose', HTMLButtonElement),
    solvedOverlayEl: requireElement('solvedOverlay', HTMLDivElement),
    solvedTitleEl: requireElement('solvedTitle', HTMLHeadingElement),
    solvedTimeEl: requireElement('solvedTime', HTMLParagraphElement),
    solvedRecordEl: requireElement('solvedRecord', HTMLParagraphElement),
    solvedNewGameEl: requireElement('solvedNewGame', HTMLButtonElement),
    clueCountEl: requireElement('clueCount', HTMLSelectElement),
    seedInputEl: requireElement('seed', HTMLInputElement),
    seedFieldEl: requireElement('seedField', HTMLDivElement),
    langSelectEl: requireElement('lang', HTMLSelectElement),
    themeSelectEl: requireElement('theme', HTMLSelectElement),
    persistPreferencesEl: requireElement('persistPreferences', HTMLInputElement),
    preferenceSaveToggleEl: requireElement('preferenceSaveToggle', HTMLLabelElement),
    preferenceSaveLabelEl: requireElement('preferenceSaveLabel', HTMLSpanElement),
    sameNumberHighlightEl: requireElement('sameNumberHighlight', HTMLInputElement),
    sameNumberHighlightToggleEl: requireElement('sameNumberHighlightToggle', HTMLLabelElement),
    sameNumberHighlightLabelEl: requireElement('sameNumberHighlightLabel', HTMLSpanElement),
    selectedCellHighlightEl: requireElement('selectedCellHighlight', HTMLInputElement),
    selectedCellHighlightToggleEl: requireElement('selectedCellHighlightToggle', HTMLLabelElement),
    selectedCellHighlightLabelEl: requireElement('selectedCellHighlightLabel', HTMLSpanElement),
    saveButtonEl: requireElement('saveGame', HTMLButtonElement),
    loadButtonEl: requireElement('loadGame', HTMLButtonElement),
    loadFileEl: requireElement('loadFile', HTMLInputElement),
    titleEl: requireElement('title', HTMLHeadingElement),
    clueCountLabelEl: requireElement('clueCountLabel', HTMLLabelElement),
    seedLabelEl: requireElement('seedLabel', HTMLLabelElement),
    langLabelEl: requireElement('langLabel', HTMLLabelElement),
    newGameEl: requireElement('newGame', HTMLButtonElement),
    resetEl: requireElement('reset', HTMLButtonElement),
    hintEl: requireElement('hint', HTMLButtonElement),
    solveEl: requireElement('solve', HTMLButtonElement),
    padTitleEl: requireElement('padTitle', HTMLHeadingElement),
    hintTextEl: requireElement('hintText', HTMLParagraphElement)
  };
}
