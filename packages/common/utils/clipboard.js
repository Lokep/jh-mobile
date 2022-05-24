import Vue from 'vue';
import Clipboard from 'clipboard';
import { Toast } from 'vant';

function clipboardSuccess(text) {
  Toast.success(`图标名称已复制：${text}`);
}

function clipboardError() {
  Toast.fail('Copy failed');
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });

  clipboard.on('success', () => {
    clipboardSuccess(text);
    clipboard.destroy();
  });

  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });

  clipboard.onClick(event);
}
