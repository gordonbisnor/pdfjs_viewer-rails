var verbosity;

try { 
  verbosity = document.querySelector('meta  [name="pdfjs_viewer_verbosity"]').content;
} catch (error) {
  verbosity = 'errors';
}

PDFJS.verbosity = PDFJS.VERBOSITY_LEVELS[verbosity];
PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK;
