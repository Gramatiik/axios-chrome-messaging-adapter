import { chrome } from 'jest-chrome';
import { registerMessageHandler } from '../registerMessageHandler';

describe('registerMessageHandler.ts', () => {
  it('registers a chrome onMessage event listener', () => {
    const addListenerSpy = jest.fn();
    chrome.runtime.onMessage.addListener = addListenerSpy;

    registerMessageHandler();

    expect(addListenerSpy).toHaveBeenCalledWith(expect.anything());
  });
});
