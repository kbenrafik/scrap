Super-Mkdir
====================

[![NPM](https://nodei.co/npm/super-mkdir.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/super-mkdir/)


## Installation

```
npm install super-mkdir
```

## Usage example

#### Minimum to use

```
var mkdir = require('super-mkdir');
```
#### To get file name from a folder

```
var list = explorer('/my/folder/');
//return list of all the file inside
```
#### Create a new Folder

```
createFolder(nameFolder);
```

#### Delete function

* Delete some files
```
mkdir.deleteFiles('/my/folder/',['file.png', 'file2.png', 'file3.png'] );
```
* Delete all files in the folder
```
mkdir.deleteFiles('/my/folder/');
```
#### Rename some files
You can rename all files with this new name but not the extensions of the file.

##### Exemple:
* filesTest.txt -> newName1.txt
* otherFiles.txt -> newName1.txt


* rename all of the files
```
mkdir.renameFiles('/my/folder/', 'newName');
```

* rename some files
```
mkdir.renameFiles('/my/folder/',['file.png', 'file2.json', 'file3.png'], ['newNamefile.png', 'newNamefile2.json', 'newNamefile3.png']);
```

or this

```
var word = 'word';
mkdir.renameFiles('/my/folder/',['file.png', 'file2.json', 'file3.png'], [word+'newNamefile.png', word+'newNamefile2.json', word+'newNamefile3.png']);
//rename the files as wordnewNamefile.png
```
