import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import List from '@ckeditor/ckeditor5-list/src/list';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

function Editor({ ...props }) {
  const editorConfiguration = {
    plugins: [
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Heading,
      Indent,
      IndentBlock,
      Underline,
      Strikethrough,
      BlockQuote,
      Font,
      Alignment,
      List,
      Link,
      PasteFromOffice,
      Image,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      ImageResize,
      Base64UploadAdapter,
      Table,
      TableToolbar,
      TextTransformation,
    ],
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'alignment',
      'outdent',
      'indent',
      'bulletedList',
      'numberedList',
      'blockQuote',
      '|',
      'link',
      'insertTable',
      'imageUpload',
      '|',
      'undo',
      'redo',
    ],
    heading: {
      options: [
        {
          model: 'paragraph',
          view: 'p',
          title: '본문',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading1',
          view: 'h1',
          title: '헤더1',
          class: 'ck-heading_heading1',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: '헤더2',
          class: 'ck-heading_heading2',
        },
        {
          model: 'heading3',
          view: 'h3',
          title: '헤더3',
          class: 'ck-heading_heading3',
        },
      ],
    },
    fontSize: {
      options: [
        14,
        15,
        16,
        17,
        18,
        19,
        'default',
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ],
    },
    alignment: {
      options: ['justify', 'left', 'center', 'right'],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    image: {
      resizeUnit: 'px',
      toolbar: [
        'imageStyle:alignLeft',
        'imageStyle:full',
        'imageStyle:alignRight',
        '|',
        'imageTextAlternative',
      ],
      styles: ['full', 'alignLeft', 'alignRight'],
      type: ['JPEG', 'JPG', 'GIF', 'PNG'],
    },
    typing: {
      transformations: {
        remove: [
          'enDash',
          'emDash',
          'oneHalf',
          'oneThird',
          'twoThirds',
          'oneForth',
          'threeQuarters',
        ],
      },
    },
    placeholder: '글을 입력해보세요!',
  };
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={editorConfiguration}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}

export default Editor;
