class MyLanguageDetector {
  constructor(services, options = {}) {
    this.async = true;
    this.init(services, options);
  }

  init(services, options = {}, i18nOptions = {}) {}

  detect(callback) {
    const storageDefKey = 'defaultLng';
    const storageDefLng = localStorage.getItem(storageDefKey);
    const storageUserKey = 'userLng';
    const storageUserLng = localStorage.getItem(storageUserKey);
    if (!storageDefLng && !storageUserLng) {
      console.log('detect');

      //simulate BE call to set default locale
      setTimeout(() => {
        const lng = 'en';
        localStorage.setItem(storageDefKey, lng);
        callback(lng);
      }, 800);
    } else {
      callback(storageUserLng ? storageUserLng : storageDefLng);
    }
  }

  cacheUserLanguage(lng, caches) {}
}

MyLanguageDetector.type = 'languageDetector';

export default MyLanguageDetector;
