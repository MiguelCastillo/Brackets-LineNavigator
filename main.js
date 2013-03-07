/*
 * Copyright (c) 2013 Miguel Castillo.
 *
 * Licensed under MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */


/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
	"use strict";

	var DocumentManager     = brackets.getModule("document/DocumentManager"),
		EditorManager       = brackets.getModule("editor/EditorManager"),
		AppInit             = brackets.getModule("utils/AppInit"),
		FileUtils           = brackets.getModule("file/FileUtils");

    // Load up the line navigator
    jQuery.getScript( require.toUrl("./") + "line-navigator.js");

    CodeMirror.defaults.styleActiveLine = true;

      // Make sure to enable line navigator for all documents
    $(DocumentManager).on("currentDocumentChange", function() {
      // Change the current editor in view
      var editor = EditorManager.getCurrentFullEditor();

      // Make sure we have a valid editor
      if (editor && editor._codeMirror) {
        editor._codeMirror.setOption("lineNavigator", true);
      }
    });

});

