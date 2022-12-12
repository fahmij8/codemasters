import type { Dispatch } from 'react';
import type { AppToastProps, AppModalProps, ActionContext } from 'types';

export default function validateAnswer(
  code: string,
  openToast: (toast: AppToastProps) => void,
  openModal: (modal: AppModalProps) => void,
  taskFinished: number,
  dispatch: Dispatch<ActionContext>
) {
  const parser = new DOMParser();
  const html = parser.parseFromString(code, 'text/html');

  const rules = [
    {
      stage: 1,
      selector: 'h1',
      element: 'Heading 1',
      challange: 'check-content',
      expect: 'Heading 1',
    },
    {
      stage: 2,
      selector: 'h2',
      element: 'Heading 2',
      challange: 'check-content',
      expect: 'Heading 2',
    },
    {
      stage: 3,
      selector: 'h3',
      element: 'Heading 3',
      challange: 'check-content',
      expect: 'Heading 3',
    },
    {
      stage: 4,
      selector: 'h1',
      element: 'Heading 1',
      challange: 'check-color',
      expect: 'rgb(255, 0, 0)',
    },
    {
      stage: 5,
      selector: 'h2',
      element: 'Heading 2',
      challange: 'check-attributes',
      expect: {
        id: 'heading-2',
      },
    },
    {
      stage: 6,
      selector: 'h2',
      element: 'Heading 2',
      challange: 'check-js',
      expect: ['#heading-2', 'Bye World!', 'document'],
    },
  ];

  const handleStageCompleted = (stage: number) => {
    if (taskFinished < stage) {
      dispatch({
        type: 'SET_TASK',
        payload: stage,
      });
    }
  };

  for (const rule of rules) {
    const element = html.querySelector<HTMLElement>(rule.selector);
    if (!element) {
      openToast({
        message: `${rule.element} is not found`,
        variant: 'error',
        id: `error-toast-${new Date().getTime()}`,
      });
      return;
    }

    if (rule.challange === 'check-content' && typeof rule.expect === 'string') {
      if (element.textContent !== rule.expect) {
        openToast({
          message: `Text in ${rule.element} is not "${rule.expect}"`,
          variant: 'error',
          id: `error-toast-${new Date().getTime()}`,
        });
        return;
      } else {
        handleStageCompleted(rule.stage);
      }
    } else if (
      rule.challange === 'check-color' &&
      typeof rule.expect === 'string'
    ) {
      const styleElement = html.querySelector<HTMLElement>('style');
      const designatedStyle = 'color: rgb(255, 0, 0);';
      if (
        !styleElement ||
        !styleElement.textContent?.includes(designatedStyle)
      ) {
        openToast({
          message: `Color in ${rule.element} is not ${rule.expect}`,
          variant: 'error',
          id: `error-toast-${new Date().getTime()}`,
        });
        return;
      } else {
        handleStageCompleted(rule.stage);
      }
    } else if (
      rule.challange === 'check-attributes' &&
      typeof rule.expect === 'object'
    ) {
      const mapExpect = rule.expect as Record<string, string>;
      const attributes = Object.keys(mapExpect);
      for (const attribute of attributes) {
        if (element.getAttribute(attribute) !== mapExpect[attribute]) {
          openToast({
            message: `${rule.element} does not have attribute ${attribute} with value ${mapExpect[attribute]}`,
            variant: 'error',
            id: `error-toast-${new Date().getTime()}`,
          });
          return;
        }
      }
      handleStageCompleted(rule.stage);
    } else if (
      rule.challange === 'check-js' &&
      typeof rule.expect === 'object'
    ) {
      const designatedScript = rule.expect as string[];
      const scriptElement = html.querySelector<HTMLScriptElement>('script');
      const isPassed = designatedScript.every((script) => {
        return scriptElement?.textContent?.includes(script);
      });
      if (!scriptElement || !isPassed) {
        openToast({
          message: `JavaScript to manipulate ${rule.element} is not correct`,
          variant: 'error',
          id: `error-toast-${new Date().getTime()}`,
        });
        return;
      } else {
        handleStageCompleted(rule.stage);
      }
    }
  }

  openModal({
    title: 'Congratulations!',
    children:
      'You have completed the challenge!. Now, please be patient while we are building another awesome challenge for you.',
    agreeWord: 'Understood!',
    withCancel: false,
  });
}
