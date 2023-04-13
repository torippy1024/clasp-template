const getFileInFolder = (folder: GoogleAppsScript.Drive.Folder) => {
  const files: GoogleAppsScript.Drive.File[] = [];

  const fileIterator = folder.getFiles();
  while (fileIterator.hasNext()) {
    files.push(fileIterator.next());
  }

  const folderIterator = folder.getFolders();
  while (folderIterator.hasNext()) {
    const child_folder = folderIterator.next();
    files.push(...getFileInFolder(child_folder));
  }
  return files;
};

export default getFileInFolder;
