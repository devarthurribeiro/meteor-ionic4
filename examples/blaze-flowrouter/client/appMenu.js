import { Template } from 'meteor/templating';

import { getAppOtherMode } from './utils';

import './appMenu.html';


Template.menu.onCreated(function () {
  this.isSplitPaneVisible = new ReactiveVar(false);
  this.otherMode = new ReactiveVar('ios');
});

Template.menu.onRendered(function () {
  // Menu item action.
  this.$('ion-list').on('click', 'ion-item[data-role="menuLink"]', function () {
    const href = $(this).data('href');
    FlowRouter.go(href, null, {
      isMobilePreview: FlowRouter.getQueryParam('isMobilePreview'),
    });
    const appMenu = document.querySelector('ion-menu[menu-id="appMenu"]');
    if (appMenu) {
      appMenu.close();
    }
  });

  // Detect split pane visibility.
  const splitPaneEl = document.querySelector('ion-split-pane');
  if (splitPaneEl) {
    // No need to wait for componentOnReady to attach the event listener.
    // The element will emit this custom event only once it is ready anyway.
    splitPaneEl.addEventListener('ionChange', () => {
      this.isSplitPaneVisible.set(splitPaneEl.isVisible());
    });
  }

  // Detect mode ("ios" or "md").
  getAppOtherMode().then((otherMode) => {
    this.otherMode.set(otherMode);
  });
  const self = this;
  this.$('ion-item[data-role="changeMode"]').click(function () {
    // Communicate with parent frame, if any.
    if (window.parent !== window.self) {
      window.parent.postMessage({
        type: 'changeMode',
        targetMode: self.otherMode.get(),
      }, '*');
    } else {
      // Reload with forced mode.
      window.location.href = Meteor.absoluteUrl('/?ionic:mode=' + self.otherMode.get());
    }
  });
});

Template.menu.helpers({
  pages() {
    const pages = [{
      name: 'Home',
      href: '/home',
    }, {
      name: 'To-do List',
      href: '/todo',
    }];

    if (Template.instance().isSplitPaneVisible.get()) {
      pages.push({
        name: 'Mobile preview',
        href: '/mobile',
      });
    }

    return pages;
  },
  otherMode() {
    return Template.instance().otherMode.get() === 'md' ? 'MD' : 'iOS';
  },
});
