
Separation of Ui and Data with MobX
=====================
Example of how i use **MobX** and its reactivity as my state manager allowing me to share 1 data store
between 4 different framework/ui libraries.

The app is basically have 1 store that contains list of "templates", each "template" has a name.

You can edit each template in framework/ui library textarea and see the outcome in uppercase(green), and lowercase(blue).

Frameworks/Ui libraries Used:
- React
- Vue
- AngularJS
- Preact

You can play with the store, by opening the console and accessing `window.store`,
adding a new template is simple as `window.store.addTemplate('New Template')`.

Demo:
===
- http://mobx-cross-data.georgy-glezer.com/
- Article in Medium in depth soon to come

Screenshot
====

![alt text](https://i.ibb.co/zH9w2YX/Screen-Shot-2019-09-17-at-9-25-00.png)
